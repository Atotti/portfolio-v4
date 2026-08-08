'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import {
  HiOutlineX,
  HiOutlineZoomIn,
  HiOutlineZoomOut,
  HiOutlineDownload,
  HiOutlineExternalLink,
  HiOutlineArrowsExpand,
  HiChevronLeft,
  HiChevronRight,
} from 'react-icons/hi'

export interface PosterItem {
  src: string
  title: string
  venue: string
}

interface PosterViewerProps {
  posters: PosterItem[]
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

const MIN_SCALE = 1
const MAX_SCALE = 12
const ZOOM_STEP = 1.5

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function PosterViewer({ posters, index, onIndexChange, onClose }: PosterViewerProps) {
  const poster = posters[index]

  const containerRef = useRef<HTMLDivElement>(null)
  const pointers = useRef(new Map<number, { x: number; y: number }>())
  const pinchDist = useRef<number | null>(null)

  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null)
  const [container, setContainer] = useState({ w: 0, h: 0 })
  const [scale, setScale] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [loaded, setLoaded] = useState(false)

  // 表示領域のサイズを追跡
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => {
      setContainer({ w: entry.contentRect.width, h: entry.contentRect.height })
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // 背面のスクロールを止める
  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  // 表示領域にちょうど収まる幅（scale === 1 の状態）
  const fitWidth =
    natural && container.w > 0 && container.h > 0
      ? Math.min(container.w / natural.w, container.h / natural.h) * natural.w
      : 0
  const displayWidth = fitWidth * scale
  const displayHeight = natural ? displayWidth * (natural.h / natural.w) : 0

  const clampOffset = useCallback(
    (x: number, y: number, width: number, height: number) => {
      const maxX = Math.max(0, (width - container.w) / 2)
      const maxY = Math.max(0, (height - container.h) / 2)
      return { x: clamp(x, -maxX, maxX), y: clamp(y, -maxY, maxY) }
    },
    [container.w, container.h]
  )

  // 指定した座標を基準に拡大縮小する（座標省略時は中央基準）
  const zoomTo = useCallback(
    (nextScale: number, originX?: number, originY?: number) => {
      const el = containerRef.current
      if (!el || !natural) return
      const next = clamp(nextScale, MIN_SCALE, MAX_SCALE)

      setScale((current) => {
        if (next === current) return current
        const rect = el.getBoundingClientRect()
        const ox = originX === undefined ? 0 : originX - rect.left - rect.width / 2
        const oy = originY === undefined ? 0 : originY - rect.top - rect.height / 2
        const ratio = next / current
        const width = fitWidth * next
        const height = width * (natural.h / natural.w)

        setOffset((prev) =>
          clampOffset(
            ox - (ox - prev.x) * ratio,
            oy - (oy - prev.y) * ratio,
            width,
            height
          )
        )
        return next
      })
    },
    [clampOffset, fitWidth, natural]
  )

  const resetView = useCallback(() => {
    setScale(1)
    setOffset({ x: 0, y: 0 })
  }, [])

  const step = useCallback(
    (delta: number) => {
      if (posters.length < 2) return
      onIndexChange((index + delta + posters.length) % posters.length)
    },
    [index, onIndexChange, posters.length]
  )

  // ホイール／トラックパッドでのズーム（passive: false が必要なので手動で登録）
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onWheel = (event: WheelEvent) => {
      event.preventDefault()
      const factor = Math.exp(-event.deltaY / 300)
      setScale((current) => {
        const next = clamp(current * factor, MIN_SCALE, MAX_SCALE)
        if (next === current || !natural) return current
        const rect = el.getBoundingClientRect()
        const ox = event.clientX - rect.left - rect.width / 2
        const oy = event.clientY - rect.top - rect.height / 2
        const ratio = next / current
        const width = fitWidth * next
        const height = width * (natural.h / natural.w)
        setOffset((prev) =>
          clampOffset(ox - (ox - prev.x) * ratio, oy - (oy - prev.y) * ratio, width, height)
        )
        return next
      })
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [clampOffset, fitWidth, natural])

  // キーボード操作
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowRight':
          step(1)
          break
        case 'ArrowLeft':
          step(-1)
          break
        case '+':
        case '=':
          zoomTo(scale * ZOOM_STEP)
          break
        case '-':
          zoomTo(scale / ZOOM_STEP)
          break
        case '0':
          resetView()
          break
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, resetView, scale, step, zoomTo])

  const handlePointerDown = (event: React.PointerEvent) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })
    pinchDist.current = null
  }

  const handlePointerMove = (event: React.PointerEvent) => {
    const previous = pointers.current.get(event.pointerId)
    if (!previous) return
    pointers.current.set(event.pointerId, { x: event.clientX, y: event.clientY })

    const points = [...pointers.current.values()]

    if (points.length >= 2) {
      // ピンチズーム
      const [a, b] = points
      const dist = Math.hypot(a.x - b.x, a.y - b.y)
      if (pinchDist.current !== null && pinchDist.current > 0) {
        zoomTo(scale * (dist / pinchDist.current), (a.x + b.x) / 2, (a.y + b.y) / 2)
      }
      pinchDist.current = dist
      return
    }

    // ドラッグでパン
    if (scale === MIN_SCALE) return
    const dx = event.clientX - previous.x
    const dy = event.clientY - previous.y
    setOffset((prev) => clampOffset(prev.x + dx, prev.y + dy, displayWidth, displayHeight))
  }

  const handlePointerUp = (event: React.PointerEvent) => {
    pointers.current.delete(event.pointerId)
    if (pointers.current.size < 2) pinchDist.current = null
  }

  const zoomed = scale > MIN_SCALE

  const viewer = (
    <div
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${poster.title} のポスター`}
    >
      {/* ヘッダー。ポスターに表示領域を明け渡すため重ねて配置する */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start gap-3 bg-gradient-to-b from-black/80 via-black/45 to-transparent px-4 pb-12 pt-3 sm:px-6 text-white">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium sm:text-base">{poster.title}</p>
          <p className="truncate text-xs text-white/60">{poster.venue}</p>
        </div>
        <div className="pointer-events-auto flex shrink-0 items-center gap-1">
          <a
            href={poster.src}
            download
            className="rounded-full p-2 transition-colors hover:bg-white/15"
            aria-label="ポスターをダウンロード"
            title="ダウンロード"
          >
            <HiOutlineDownload size={20} />
          </a>
          <a
            href={poster.src}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition-colors hover:bg-white/15"
            aria-label="ポスターを新しいタブで開く"
            title="新しいタブで開く"
          >
            <HiOutlineExternalLink size={20} />
          </a>
          <button
            onClick={onClose}
            className="rounded-full p-2 transition-colors hover:bg-white/15"
            aria-label="閉じる"
            title="閉じる (Esc)"
          >
            <HiOutlineX size={22} />
          </button>
        </div>
      </div>

      {/* ポスター表示領域 */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onDoubleClick={(event) =>
          zoomed ? resetView() : zoomTo(3, event.clientX, event.clientY)
        }
        className="absolute inset-0 touch-none select-none overflow-hidden"
        style={{ cursor: zoomed ? 'grab' : 'zoom-in' }}
      >
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/70">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/25 border-t-white" />
            <span className="text-xs">読み込み中…</span>
          </div>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={poster.src}
          src={poster.src}
          alt={`${poster.title} のポスター`}
          draggable={false}
          onLoad={(event) => {
            const el = event.currentTarget
            setNatural({ w: el.naturalWidth, h: el.naturalHeight })
            setLoaded(true)
          }}
          className="absolute left-1/2 top-1/2 max-w-none shadow-2xl transition-opacity"
          style={{
            width: displayWidth ? `${displayWidth}px` : undefined,
            opacity: loaded && displayWidth ? 1 : 0,
            transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px)`,
          }}
        />

        {/* 前後のポスターへ */}
        {posters.length > 1 && (
          <>
            <button
              onClick={() => step(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/70 sm:left-4"
              aria-label="前のポスター"
            >
              <HiChevronLeft size={24} />
            </button>
            <button
              onClick={() => step(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/70 sm:right-4"
              aria-label="次のポスター"
            >
              <HiChevronRight size={24} />
            </button>
          </>
        )}
      </div>

      {/* ズームコントロール。こちらもポスターに重ねて配置する */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-center justify-center gap-2 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-5 pt-12">
        <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-white/10 px-2 py-1 text-white backdrop-blur">
          <button
            onClick={() => zoomTo(scale / ZOOM_STEP)}
            disabled={scale <= MIN_SCALE}
            className="rounded-full p-2 transition-colors hover:bg-white/15 disabled:opacity-30"
            aria-label="縮小"
          >
            <HiOutlineZoomOut size={18} />
          </button>
          <span className="w-14 text-center text-xs tabular-nums">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => zoomTo(scale * ZOOM_STEP)}
            disabled={scale >= MAX_SCALE}
            className="rounded-full p-2 transition-colors hover:bg-white/15 disabled:opacity-30"
            aria-label="拡大"
          >
            <HiOutlineZoomIn size={18} />
          </button>
          <span className="mx-1 h-5 w-px bg-white/20" />
          <button
            onClick={resetView}
            disabled={!zoomed}
            className="rounded-full p-2 transition-colors hover:bg-white/15 disabled:opacity-30"
            aria-label="全体表示に戻す"
            title="全体表示 (0)"
          >
            <HiOutlineArrowsExpand size={18} />
          </button>
        </div>
        {posters.length > 1 && (
          <span className="text-xs tabular-nums text-white/50">
            {index + 1} / {posters.length}
          </span>
        )}
      </div>
    </div>
  )

  // SectionContainer の backdrop-filter が position: fixed の基準になってしまい、
  // そのままだとオーバーレイがセクション内に収まってしまうので body 直下へ描画する
  return typeof document === 'undefined' ? null : createPortal(viewer, document.body)
}

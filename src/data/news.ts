import { News } from '@/types'

// 日付の降順。受賞は Awards セクションにも正式名称で一覧がある
export const news: News[] = [
  {
    date: '2026/07',
    title: '産総研 覚醒プロジェクト 令和8年度 採択',
    description: 'Speech LLMを応用した話者属性付き音声理解の研究',
    url: 'https://kakusei.aist.go.jp/r8/',
  },
  {
    date: '2026/06',
    title: 'IPA 未踏アドバンスト事業 2026年度上期 採択',
    description: 'キーボードを代替可能なエージェンティック音声入力の開発',
    url: 'https://www.ipa.go.jp/jinzai/mitou/advanced/2026first/gaiyou-fj-2.html',
  },
  {
    date: '2026/03',
    title: 'FT-LLM 2026 コンペティション 自由形タスク部門 1位 優勝',
    description: '第2回「大規模言語モデルのファインチューニング技術と評価」ワークショップ',
    url: 'https://llm-jp.github.io/tuning-competition/2026/workshop.html',
  },
  {
    date: '2026/01',
    title: 'ICASSP 2026 SP Grand Challenge (XACLE) 3rd Place',
    description: 'The first x-to-audio alignment challenge',
    url: 'https://xacle.org/2026/results.html',
  },
  {
    date: '2024/10',
    title: 'CyberAgent ACE 2024 個人賞',
    url: 'https://note.com/ca_tech/n/n903ca9824043',
  },
  {
    date: '2023/12',
    title: 'Google Developer Solution Challenge Japan 2023 最優秀賞・チームラボ賞',
    url: 'https://www.sd.tmu.ac.jp/news/prize/11517.html',
  },
  {
    date: '2023/10',
    title: 'PG Battle 2023 アシスト賞',
    description: '企業・大学対抗プログラミングバトル',
    url: 'https://products.sint.co.jp/pg_battle_2023',
  },
  {
    date: '2022/12',
    title: 'ICPC 2023 Yokohama Regional 53rd',
  },
]

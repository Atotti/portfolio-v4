import { Work } from '@/types'

export const works: Work[] = [
  {
    title: '石池 | Ishiike',
    url: 'https://ishiike.herokuapp.com',
    description: '都立大の情報共有サイト。MAU 5,000人超。個人で開発・運用。',
  },
  {
    title: 'Qualtet',
    url: 'https://qualtet.com',
    description:
      'citruz.dev の4人チームで開発した Web アプリ。Google Developer Solution Challenge Japan 最優秀賞。',
  },
  {
    title: 'THE DICE',
    url: 'https://xi-server.ayutaso.com/',
    description: '某ゲームをブラウザ上で再現した個人開発のゲーム。',
    additionalLink: {
      url: 'https://xi-server.ayutaso.com/about/',
      text: '紹介ページ',
    },
  },
  {
    title: 'kibaco-advance',
    url: 'https://chromewebstore.google.com/detail/kibaco-advance/gcallmgoceccjabpmdljlkfblgolbakg/related?hl=ja&authuser=0',
    description: '都立大の LMS 向けブラウザ拡張機能。学内の利用者の要望をもとに開発。',
  },
  {
    title: '日本語音声復元モデル',
    url: 'https://huggingface.co/Atotti/miipher-2-HuBERT-HiFi-GAN-v0.1',
    description:
      'Google の Miipher 2 をオープンソースモデルで再現した音声復元モデル。学習済みモデルとデモを Hugging Face で公開。',
    additionalLink: {
      url: 'https://github.com/Atotti/miipher-2',
      text: '学習コード',
    },
  },
  {
    title: 'MADTOWN GTA タイムテーブル',
    url: 'https://madtown.ayutaso.com/',
    description:
      'MADTOWN 企画参加者の配信を全自動で時系列順にまとめ、再生できる Web アプリ。',
  },
]

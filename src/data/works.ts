import { Work } from '@/types'

export const works: Work[] = [
  {
    title: '石池 | Ishiike',
    url: 'https://ishiike.herokuapp.com',
    description: 'MAU5000人越えの都立大情報共有サイトです。個人で開発・運用を手がけています。',
  },
  {
    title: 'Qualtet',
    url: 'https://qualtet.com',
    description: 'citruz.devの4人チームで開発したWebアプリです。Google Developer Solution Challenge Japan というハッカソンで最優秀賞をいただきました。',
  },
  {
    title: 'THE DICE',
    url: 'https://xi-server.ayutaso.com/',
    description: 'ゲーム開発にも興味があります。なつかしの某ゲームを実装したりしました。',
    additionalLink: {
      url: 'https://xi-server.ayutaso.com/about/',
      text: '紹介ページ',
    },
  },
  {
    title: 'kibaco-advance',
    url: 'https://chromewebstore.google.com/detail/kibaco-advance/gcallmgoceccjabpmdljlkfblgolbakg/related?hl=ja&authuser=0',
    description: '都立大のLMS向け拡張機能です。ユーザーニーズを的確に捉えたツールになっています。',
  },
  {
    title: '日本語音声復元モデル',
    url: 'https://huggingface.co/Atotti/miipher-2-HuBERT-HiFi-GAN-v0.1',
    description: 'Google の Miiper2 をオープンソースモデルで再現を試みたモデルです。学習済みモデルとデモをHugging Faceで公開しています。',
    additionalLink: {
      url: 'https://github.com/Atotti/miipher-2',
      text: '学習コード',
    },
  },
  {
    title: 'MADTOWN GTA タイムテーブル',
    url: 'https://madtown.ayutaso.com/',
    description: '全自動でMADTOWN企画参加者の配信をリアルタイムで時系列順にまとめ、再生できるWebアプリです。',
  }
]

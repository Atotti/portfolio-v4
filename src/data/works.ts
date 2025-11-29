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
]

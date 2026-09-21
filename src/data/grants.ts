import { Grant } from '@/types'

// 競争的研究資金。開始時期の降順
export const grants: Grant[] = [
  {
    date: '2026/07',
    endDate: '2027/03',
    title: 'Speech LLMを応用した話者属性付き音声理解の研究',
    program: '産業技術総合研究所 覚醒プロジェクト 令和8年度 採択',
    url: 'https://kakusei.aist.go.jp/r8/',
    // 応募件数は非公開
    selected: 23,
    amount: 3_000_000,
  },
  {
    date: '2026/06',
    title: 'キーボードを代替可能なエージェンティック音声入力の開発',
    program: 'IPA 未踏アドバンスト事業 2026年度上期 採択',
    url: 'https://www.ipa.go.jp/jinzai/mitou/advanced/2026first/gaiyou-fj-2.html',
    proposals: 206,
    selected: 17,
    amount: 16_000_000,
  },
]

import { Publication } from '@/types'

export const publications: Publication[] = [
  {
    type: 'international',
    authors: 'Ayuto Tsutsumi, Yuu Jinnai',
    title: 'Do Large Language Models Know Folktales? A Case Study of Yokai in Japanese Folktales',
    venue: 'ACL2025 Findings',
    year: '2025/7',
    links: {
      paper: 'https://www.arxiv.org/abs/2506.03619',
    },
  },
  {
    type: 'domestic',
    authors: '堤歩斗, 陣内佑',
    title: 'LLM は日本の民話を知っているか？ 妖怪知識評価データセットの構築へ向けて',
    venue: '言語処理学会第31回年次大会(NLP2025)',
    year: '2025/3',
    links: {
      paper: 'https://www.anlp.jp/proceedings/annual_meeting/2025/pdf_dir/Q2-23.pdf',
      poster: '/NLP2025.svg',
    },
  },
  {
    type: 'domestic',
    authors: '堤歩斗, 陣内佑',
    title: '多様性と一貫性の両立を目指したキャラクター対話生成',
    venue: '第20回言語処理若手シンポジウム(YANS2025)',
    year: '2025/9',
    links: {
      poster: '/YANS2025.svg',
    },
  },
  {
    type: 'book',
    authors: '堤歩斗',
    title: 'モダンフロントエンドフレームワークAstroで作る個人サイト開発',
    venue: 'コミックマーケット105',
    year: '2024/12',
  },
]

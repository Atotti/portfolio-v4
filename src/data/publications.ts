import { Publication } from '@/types'

export const publications: Publication[] = [
  {
    type: 'international',
    authors: 'Ayuto Tsutsumi, Ryosuke Kohita',
    title: 'Same Image, Different Meaning: A Proposal of Context-Dependent Image Retrieval Task',
    venue: 'SIGIR 2026',
    year: '2026/7',
  },
  {
    type: 'international',
    authors: 'Ayuto Tsutsumi, Kohei Tanaka, Sayaka Shiota',
    title: 'The TMU System for the XACLE Challenge: Training Large Audio Language Models with CLAP Pseudo-Labels',
    venue: 'ICASSP 2026 Workshop',
    year: '2026/5',
    links: {
      paper: 'https://www.arxiv.org/abs/2602.00604',
    }
  },
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
    authors: '堤歩斗, 後藤晃, 斉藤裕子, 松浦廣樹, 塩田さやか',
    title: '劣環境下におけるDeepfake音声検出のためのドメイン適応',
    venue: '第11回 音声・音響・信号処理ワークショップ（SPEASIP）',
    year: '2026/3',
    links: {
      paper: 'https://www-isys.sd.tmu.ac.jp/local/2026/SPEASIP2026_tsutsumi.pdf',
      poster: '/posters/SPEASIP2026.svg',
    }
  },
  {
    type: 'domestic',
    authors: '堤歩斗, 小比田涼介',
    title: '同じ画像，異なる意味：文脈依存画像検索タスクの提案',
    venue: '言語処理学会第32回年次大会(NLP2026)',
    year: '2026/3',
    links: {
      paper: 'https://www.anlp.jp/proceedings/annual_meeting/2026/pdf_dir/C4-19.pdf',
      poster: '/posters/NLP2026.svg',
    }
  },
    {
    type: 'domestic',
    authors: '堤歩斗, 大城治城',
    title: '合成データを使用した日本語音声LLMの開発',
    venue: '第2回「大規模言語モデルのファインチューニング技術と評価」ワークショップ(FT-LLM2026)',
    year: '2026/3',
    links: {
      poster: '/posters/FT-LLM2026.svg',
    }
  },
  {
    type: 'domestic',
    authors: '堤歩斗, 陣内佑',
    title: '多様性と一貫性の両立を目指したキャラクター対話生成',
    venue: '第20回言語処理若手シンポジウム(YANS2025)',
    year: '2025/9',
    links: {
      poster: '/posters/YANS2025.svg',
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
      poster: '/posters/NLP2025.svg',
    },
  },
  {
    type: 'others',
    authors: '堤歩斗',
    title: 'モダンフロントエンドフレームワークAstroで作る個人サイト開発',
    venue: 'コミックマーケット105',
    year: '2024/12',
  },
]

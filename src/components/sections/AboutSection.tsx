import Image from 'next/image'
import { SectionContainer } from '@/components/common/SectionContainer'
import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'

const links = [
  { href: 'mailto:ayu@ayutaso.com', label: 'ayu@ayutaso.com', icon: FaEnvelope },
  { href: 'https://x.com/aya172957', label: '@aya172957', icon: FaTwitter },
  { href: 'https://github.com/Atotti', label: 'Atotti', icon: FaGithub },
  {
    href: 'https://scholar.google.com/citations?user=W6IIaAwAAAAJ&hl=ja',
    label: 'Google Scholar',
    icon: SiGooglescholar,
  },
  {
    href: 'https://www.linkedin.com/in/ayuto-tsutsumi-ba9547419/',
    label: 'LinkedIn',
    icon: FaLinkedin,
  },
]

export function AboutSection() {
  return (
    <SectionContainer id="about" blur='2px' bgOpacity={0}>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <Image
          src="/images/icon.webp"
          alt="Profile"
          width={120}
          height={120}
          className="shrink-0 rounded-full grayscale-[50%]"
        />
        <div className="flex-1 space-y-2">
          <h1
            className="text-2xl sm:text-3xl font-semibold"
            style={{ fontFamily: 'var(--font-varela-round)' }}
          >
            Ayuto Tsutsumi <span className="text-lg text-muted-foreground">堤 歩斗</span>
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            Master student in{' '}
            <a
              href="http://www-isys.sd.tmu.ac.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Shiota Lab
            </a>
            , Tokyo Metropolitan University (TMU) / Research assistant in{' '}
            <a
              href="https://ybando.jp/ja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Bando Lab
            </a>
            , AIST.
            <br />
            Web開発(Backend, Frontend)、NLP、音声処理(音声合成, 話者照合, DeepFake検知 etc...)、マルチモーダル言語モデルに興味があります。
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {links.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary hover:underline"
                >
                  <Icon className="shrink-0" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground">
            ご連絡はメールまたはTwitterへ（Twitterの方が反応が早いです）。
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

import Image from 'next/image'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'
import { FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa'

export function AboutSection() {
  return (
    <SectionContainer id="about" blur='2px' bgOpacity={0}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/icon.webp"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full grayscale-[50%]"
          />
        </div>
        <div className="flex-1">
          <SectionTitle className="md:text-left">About me</SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Hello I am Ayuto Tsutsumi, a student at Tokyo Metropolitan University(TMU).
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Web開発(Backend, Frontend)、NLP、音声処理(音声合成, 話者照合, DeepFake検知 etc...)、マルチモーダル言語モデルに興味があります。
          </p>
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <p className="text-muted-foreground">
          メールまたはTwitterにてご連絡ください。Twitterの方が反応が早いです。
        </p>
        <div className="flex items-center gap-2">
          <FaTwitter className="text-primary" />
          <a
            href="https://x.com/aya172957"
            className="text-primary hover:underline"
          >
            @aya172957
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-primary" />
          <a
            href="mailto:aya172957@ayutaso.com"
            className="text-primary hover:underline"
          >
            aya172957@ayutaso.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <FaGithub className="text-primary" />
          <a
            href="https://github.com/Atotti"
            className="text-primary hover:underline"
          >
            Atotti
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}

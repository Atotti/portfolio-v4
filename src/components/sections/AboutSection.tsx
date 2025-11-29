import Image from 'next/image'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function AboutSection() {
  return (
    <SectionContainer id="about" blur='2px' bgOpacity={0}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/images/icon.png"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full grayscale-[50%]"
          />
        </div>
        <div className="flex-1">
          <SectionTitle className="md:text-left">About me</SectionTitle>
          <p className="text-lg text-muted-foreground leading-relaxed">
            プログラミングが趣味の学生です。フロントエンド開発やバックエンドにも興味があります。
            最近はNLPに関心があります。
          </p>
        </div>
      </div>
    </SectionContainer>
  )
}

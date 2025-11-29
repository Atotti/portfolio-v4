import { FaEnvelope, FaTwitter, FaGithub } from 'react-icons/fa'
import { SectionContainer } from '@/components/common/SectionContainer'
import { SectionTitle } from '@/components/common/SectionTitle'

export function ContactSection() {
  return (
    <SectionContainer id="contact" blur='0px' bgOpacity={0}>
      <SectionTitle>Contact</SectionTitle>

      <div className="text-center space-y-6">
        <p className="text-muted-foreground">
          メールまたはTwitterにてご連絡ください。
        </p>

        <div className="flex items-center justify-center gap-2">
          <FaEnvelope className="text-primary" />
          <a
            href="mailto:aya172957@ayutaso.com"
            className="text-primary hover:underline"
          >
            aya172957@ayutaso.com
          </a>
        </div>

        <div className="flex justify-center gap-6 pt-4">
          <a
            href="https://twitter.com/aya172957"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/atotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}

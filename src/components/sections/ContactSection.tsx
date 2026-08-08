import { FaEnvelope, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'
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
            href="mailto:ayu@ayutaso.com"
            className="text-primary hover:underline"
          >
            ayu@ayutaso.com
          </a>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 pt-4">
          <a
            href="https://twitter.com/aya172957"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Atotti"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://scholar.google.com/citations?user=W6IIaAwAAAAJ&hl=ja"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-primary transition-colors"
            aria-label="Google Scholar"
          >
            <SiGooglescholar />
          </a>
          <a
            href="https://www.linkedin.com/in/ayuto-tsutsumi-ba9547419/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </SectionContainer>
  )
}

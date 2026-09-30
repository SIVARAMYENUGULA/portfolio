/**
 * Central personalization config.
 * Update these values to customize the portfolio. Empty values are
 * hidden gracefully in the UI rather than displayed as blanks.
 */
export const config = {
  email: "sivaramyenugula.2003@gmail.com",
  github: "https://github.com/SIVARAMYENUGULA",
  linkedin: "https://www.linkedin.com/in/sivaramyenugula",
  resume: "/resume.pdf",
  /** GitHub username used for the optional public GitHub API section. */
  githubUsername: "SIVARAMYENUGULA",
  /** Optional profile image served from /public. Leave empty to hide. */
  profileImage: "/images/profile-2.jpeg",
  /** Canonical site URL. Replace after deployment. */
  siteUrl: "https://your-portfolio-url.vercel.app",
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

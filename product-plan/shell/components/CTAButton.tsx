interface CTAButtonProps {
  label: string
  href: string
  onClick?: (href: string) => void
}

export function CTAButton({ label, href, onClick }: CTAButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (onClick) {
      onClick(href)
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="rounded-full bg-amber-500 px-5 py-2 text-sm font-medium text-white shadow-lg shadow-amber-500/25 transition-all hover:bg-amber-400 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98]"
    >
      {label}
    </a>
  )
}

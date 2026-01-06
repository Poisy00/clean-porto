interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

interface MainNavProps {
  items: NavItem[]
  onNavigate?: (href: string) => void
}

export function MainNav({ items, onNavigate }: MainNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    if (onNavigate) {
      onNavigate(href)
    } else {
      // Default scroll behavior
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="flex items-center gap-8">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className={`relative text-sm font-medium transition-colors ${
            item.isActive
              ? 'text-sky-600 dark:text-sky-400'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          {item.label}
          <span
            className={`absolute -bottom-1 left-0 right-0 h-px bg-sky-500 transition-transform origin-left ${
              item.isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
            }`}
          />
        </a>
      ))}
    </nav>
  )
}

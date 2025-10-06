import { useEffect, useRef, useState } from "react"

type NavItem = { label: string; href: string }
const NAV: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Características", href: "#features" },
  { label: "Contacto", href: "#contacto" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState<string>(typeof window !== "undefined" ? window.location.hash || "#inicio" : "#inicio")
  const [scrolled, setScrolled] = useState(false)
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null)

  // Resaltar item activo según hash
  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || "#inicio")
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  // Enfocar primer link al abrir y bloquear scroll del body
  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus()
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [open])

  // Sombra al hacer scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)

  const linkBase =
    "px-2 py-1 rounded-md transition-colors hover:text-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
  const linkActive = "text-brand-500 font-medium"

  return (
    <header
      className={`sticky top-0 z-20 bg-white/80 backdrop-blur border-b ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo + Marca */}
        <a href="#inicio" className="inline-flex items-center gap-2">
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-brand-500">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.9 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"/>
          </svg>
          <span className="font-semibold">Responsive App</span>
        </a>

        {/* Navegación en tablet/escritorio */}
        <nav className="hidden sm:flex items-center gap-6" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${linkBase} ${activeHash === item.href ? linkActive : "text-gray-700"}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa solo en móvil */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-500/40"
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={toggle}
        >
          {/* Ícono cambia entre hamburguesa y X */}
          {open ? (
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Overlay clicable para cerrar (solo móvil) */}
      {open && (
        <div
          className="sm:hidden fixed inset-0 z-10 bg-black/20"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Panel móvil */}
      <div
        id="mobile-menu"
        className={`sm:hidden z-20 bg-white border-t origin-top transition-all duration-200 ease-out
          ${open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
        // aria-hidden cuando está cerrado
        aria-hidden={!open}
      >
        <nav className="px-4 py-3 flex flex-col gap-2" aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              ref={i === 0 ? firstLinkRef : undefined}
              href={item.href}
              className={`${linkBase} ${activeHash === item.href ? linkActive : "text-gray-800"}`}
              onClick={() => {
                setActiveHash(item.href)
                close()
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

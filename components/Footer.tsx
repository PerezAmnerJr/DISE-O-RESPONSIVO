export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white mt-16">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Responsive App. Todos los derechos reservados.
        </p>
        <nav className="flex gap-4 text-sm">
          <a href="https://github.com" className="hover:text-yellow-200">GitHub</a>
          <a href="https://linkedin.com" className="hover:text-yellow-200">LinkedIn</a>
          <a href="https://twitter.com" className="hover:text-yellow-200">Twitter/X</a>
        </nav>
      </div>
    </footer>
  )
}
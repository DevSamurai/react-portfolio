export default function Navbar() {
  const links = [
    { name: "Home", href: "#hero" },
    { name: "Sobre mim", href: "#about" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ]

  return (
    <div className="fixed flex h-16 w-full items-center bg-white/5 p-4 backdrop-blur">
      <div className="flex w-full items-center gap-4">
        <ul className="hidden items-center gap-4 sm:flex">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-grow" />
        <a href="#" className="button">
          Contrate
        </a>
      </div>
    </div>
  )
}

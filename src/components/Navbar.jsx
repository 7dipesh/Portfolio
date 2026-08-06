function Navbar({ navItems, activeSection }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-lg font-semibold text-white transition hover:text-violet-300"
        >
          Dipesh Paudel
        </a>
        <nav>
          <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/80 p-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block rounded-full px-3 py-2 text-sm transition ${
                      isActive
                        ? "bg-violet-500/20 text-violet-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
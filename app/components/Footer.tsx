const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-16">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} Post a Post
        </p>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a
                  className="text-zinc-600 underline-offset-4 transition-colors hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}

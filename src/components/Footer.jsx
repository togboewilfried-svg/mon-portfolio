export default function Footer() {
  return (
    <footer className="border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-400">
          © {new Date().getFullYear()} TOGBE Gamèlé Wilfried. Tous droits réservés.
        </p>
        <p className="text-xs text-zinc-500">
          Construit avec{' '}
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            React
          </a>{' '}
          &amp;{' '}
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Tailwind CSS
          </a>
        </p>
      </div>
    </footer>
  );
}
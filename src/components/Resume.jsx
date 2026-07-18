const ITEMS = [
  {
    period: 'Formation',
    title: 'Baccalauréat, série B',
    place: 'Enseignement secondaire',
    description: null,
  },
  {
    period: 'Non achevée',
    title: 'Gestion des Troncs Communs',
    place: 'FADESP',
    description: "Un début de parcours qui m'a mené à me réorienter vers le développement web.",
  },
  {
    period: 'En cours',
    title: "Développeur web — Autodidacte",
    place: 'Auto-formation',
    description: 'Front-end (HTML, CSS, JavaScript, React, Bootstrap, Tailwind) et back-end (PHP, Laravel, WordPress), via des projets personnels.',
  },
];

export default function Resume() {
  return (
    <section id="resume" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Mon chemin</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white">Parcours</h2>
        </div>

        <div className="space-y-6">
          {ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`reveal d${i + 1} flex flex-col sm:flex-row gap-2 sm:gap-8 border-l-2 border-accent/30 pl-6 py-1`}
            >
              <p className="text-xs font-medium text-accent uppercase tracking-widest sm:w-32 shrink-0 pt-1">{item.period}</p>
              <div>
                <h3 className="font-display font-bold text-lg text-white">{item.title}</h3>
                <p className="text-sm text-zinc-400 italic mb-1">{item.place}</p>
                {item.description && (
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
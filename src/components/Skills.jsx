const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'WordPress', 'Laravel', 'PHP',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 text-center">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Stack &amp; outils</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white">Compétences</h2>
        </div>

        <div className="reveal d2 flex flex-wrap justify-center gap-3" role="list" aria-label="Compétences">
          {SKILLS.map((skill) => (
            <span
              key={skill}
              role="listitem"
              className="stag text-sm bg-zinc-800 border border-zinc-700 text-zinc-300 px-4 py-2 rounded-full hover:border-accent transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
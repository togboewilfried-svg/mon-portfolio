import projectImg1 from '../assets/img/portfolio/portfolio-1.webp';
import projectImg2 from '../assets/img/portfolio/portfolio-2.webp';
import projectImg3 from '../assets/img/portfolio/portfolio-3.webp';
import projectImg4 from '../assets/img/portfolio/portfolio-4.webp';

const PROJECTS = [
   {
    image: projectImg1,
    tags: ['HTML', 'CSS', 'Bootstrap'],
    title: 'Introchill',
    description: "Description courte du projet : à quoi il sert, ce que tu as construit.",
    link: 'https://togboewilfried-svg.github.io/Introchill/',
  },
  {
    image: projectImg2,
    tags: ['Laravel', 'PHP'],
    title: 'Nom du projet 2',
    description: "Description courte du projet : à quoi il sert, ce que tu as construit.",
    link: '#',
  },
  {
    image: projectImg3,
    tags: ['WordPress', 'Bootstrap'],
    title: 'Nom du projet 3',
    description: "Description courte du projet : à quoi il sert, ce que tu as construit.",
    link: '#',
  },
  {
    image: projectImg4,
    tags: ['React.js', 'Tailwind CSS'],
    title: 'Nom du projet 4',
    description: "Description courte du projet : à quoi il sert, ce que tu as construit.",
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-24 bg-zinc-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="reveal d1 font-display font-bold text-4xl md:text-5xl text-white">
            Projets <em className="not-italic text-zinc-400 text-2xl"></em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <article
              key={project.title}
              className={`card-h reveal d${i + 1} group rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-accent`}
            >
              <div className="pf w-full h-48">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-zinc-800 text-accent border border-zinc-700 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-1.5">{project.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">{project.description}</p>
                <a href={project.link} className="inline-flex items-center gap-1.5 text-sm font-medium text-white nl">
                  Voir le projet →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
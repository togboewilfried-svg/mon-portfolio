import projectImg1 from '../assets/img/portfolio/portfolio-introchill.webp';
import projectImg2 from '../assets/img/portfolio/portfolio-benin-actu.webp';
import projectImg3 from '../assets/img/portfolio/portfolio-meteo.webp';
import projectImg4 from '../assets/img/portfolio/portfolio-cotisations-foot.webp';
import projectImg5 from '../assets/img/portfolio/portfolio-crochet-by-maurie.webp';

const PROJECTS = [
  {
    image: projectImg1,
    tags: ['HTML', 'CSS', 'Bootstrap'],
    title: 'IntroChill',
    description: "Landing page pour un événement chill à Cotonou : compte à rebours, programme sur deux jours et billetterie (pass).",
    link: 'https://togboewilfried-svg.github.io/Introchill/',
  },
  {
    image: projectImg2,
    tags: ['HTML', 'CSS', 'JavaScript'],
    title: 'Bénin Actu',
    description: "Portail d'actualité fictif avec filtrage par catégorie, recherche en direct, article à la une et animations d'interface.",
    link: 'https://benin-actu.netlify.app/',
  },
  {
    image: projectImg3,
    tags: ['JavaScript', 'API', 'CSS'],
    title: 'Météo',
    description: "Application de consultation météo en temps réel par ville (OpenWeatherMap) : température, ressenti, humidité, vent, pression.",
    link: 'https://meteo-app-w.netlify.app/',
  },
  {
    image: projectImg4,
    tags: ['PHP', 'Laravel'],
    title: 'Cotisations Foot',
    description: "Outil de suivi des cotisations d'une équipe amateur : total collecté, historique des paiements, espace connexion trésorier.",
    link: 'https://cotisations-foot-production.up.railway.app/',
  },
  {
    image: projectImg5,
    tags: ['PHP', 'Laravel'], 
    title: 'Crochet by Maurie',
    description: "Site vitrine pour une créatrice de crochet fait main : catalogue produits, coups de cœur et demandes sur-mesure.",
    link: 'https://crochet-by-maurie-production.up.railway.app/',
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

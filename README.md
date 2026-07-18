# Portfolio de TOGBOE Gamèlé Wilfried — Version simple

Portfolio one-page en React, style épuré (Tailwind CSS via CDN, sans build CSS complexe).

## Lancer le projet

```bash
npm install
npm run dev
```

Ouvre ensuite l'URL affichée dans le terminal (en général http://localhost:5173).

## Construire pour la mise en ligne

```bash
npm run build
```

Le résultat est généré dans `dist/`, prêt à déposer sur Netlify, Vercel, GitHub Pages...

## Sections

Accueil → À propos → Compétences → Projets → Parcours → Contact.
Mode sombre/clair inclus (bouton en haut à droite).

## Où modifier quoi (dans `src/components/`)

- `Hero.jsx` — nom, accroche
- `About.jsx` — bio, photo
- `Skills.jsx` — liste de compétences (tags)
- `Projects.jsx` — **à remplacer par tes vrais projets** (image, titre, description, tags, lien)
- `Resume.jsx` — parcours / formation
- `Contact.jsx` — email, LinkedIn, GitHub — **cherche les commentaires `TODO`**

## Remplacer ta photo

Dépose ton image dans `src/assets/img/profile/` et mets à jour l'import en haut de
`Hero.jsx` et `About.jsx`.

## Formulaire de contact

Branché sur une simple alerte de test pour l'instant. Pour qu'il envoie vraiment des
emails, connecte-le à un service comme Formspree ou EmailJS dans `Contact.jsx`.

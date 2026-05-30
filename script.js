
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

document.querySelectorAll('a, button, .projet-card').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('grand'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('grand'));
});


const projets = [
  {
    titre: "Ébullition",
    desc: "Dans l’intention de profiter d’un marché en pleine ébullition, une entreprise met en production 3 nouveaux breuvages prêts-à-boire sans alcool à saveurs différentes. Nous devions faire un choix entre les 3 suggestions de brief et créer le concept visuel d’emballage à dominance typographique, dans le but d’habiller 3 petites canettes de 355 mL. Ces produits doivent répondre à un public cible de 21 à 30 ans. Le concept ici est de mettre une dominance typographique avec un aspect jeune et avec un fond qui vient faire ressortir celui-ci et qui met en valeur les saveurs proposées en incluant simplement leurs couleurs.",
    date: "2026",
    tags: ["Emballage", "Typographie"],
    numero: "01",
    image: "images/mockup-can.jpg",
    position: "center 79%"   // ← ajuste ce % selon ton image
  },
  {
    titre: "Atelier Malo & Olivier",
    desc: "Conception d’une affiche faisant la promotion de l’Atelier Malo & Olivier. Nous devions faire une réflexion sur la raison d’être de cet atelier de sérigraphie, ce qui le caractérise et le distingue. Nous devions développer un visuel qui suggérera, possiblement de manière métaphorique,le travail en atelier de sérigraphie. Le concept est une illustration d’un personnage avec un ajout de texture afin de pouvoir représenter la sérigraphie. Le personnage « rigolo » vient mettre un dynamisme et un visuel intéressant en plus du fond qui vient casser l’aspect rond du personnage avec ses pointes.",
    date: "2025",
    tags: ["Affiche", "Sérigraphie"],
    numero: "02",
    image: "images/affiche-malo-oli.jpg",
    position: "center 79%"
  },
  {
    titre: "Exposition des finissant.e.s",
    desc: "Dans le cadre du programme, nous avions à concevoir un concept d’affiche annonçant notre exposition des finissant·e·s. Ce concept représente le soulagement d’avoir terminé cette étape de notre vie, en plus d’être soutenu/supporté par les logiciels qui nous ont accompagnés tout au long de cette étape. Un style épuré, mais compréhensible.",
    date: "2026",
    tags: ["Affiche", "Sérigraphie"],
    numero: "03",
    image: "images/affiche-finissant.e.s.jpg",
    position: "center 79%%"
  },
  {
    titre: "Contenant alcoolisé",
    desc: "Conception d’un nouveau visuel pour un contenant de boisson alcoolisée de notre choix, ici, dans ce cas : Vodka, Smirnoff. Le concept d’image doit bien représenter le type d’alcool et les consommateurs visés. Le concept doit revoir la marque de la boisson avec un visuel nouveau, tout en respectant les informations déjà fournies sur l’emballage. Le concept ici était de ramener un côté moins basique et plus jeune. L’effet de glace a été ajouté pour rappeler le pays d’origine et apporter un côté plus festif, associant glace et boisson. Il vient aussi donner un côté plus dynamique et attirant.",
    date: "2025",
    tags: ["Emballage", "Graphisme et emballage"],
    numero: "04",
    image: "images/Contenant-alcoolise.jpg",
    position: "center 100%"
  },
  {
    titre: "Affiche typographique",
    desc: "Concevoir l’affiche promotionnelle de l’exposition rétrospective d’un designer présenté au cours de la session. L’atmosphère, ainsi que le message à communiquer se feront par la composition, les choix de caractères, ainsi que l’inspiration graphique des designers présentés, ici, ce sera de : Paula Scher. Le concept d’affiche doit représenter l’exposition et promouvoir l’événement. L’affiche a été créée à la manière de Paula Scher, à partir principalement d’éléments typographiques. Nous avions à établir une hiérarchie et un rythme qui permettront au lecteur de décoder facilement le message en respectant les codes visuels de votre choix de designer.",
    date: "2024",
    tags: ["Affiche", "Design typographique"],
    numero: "05",
    image: "images/affiche-typo.jpg",
    position: "center 79%"
  },
  {
    titre: "Festival de Lanaudière",
    desc: "Dans l’intention de présenter leur festival, nous devions concevoir un dépliant pour le Festival de Lanaudière afin de promouvoir celui-ci. Nous devions présenter le festival en format dépliant, en fonction de nos affiches. Nous avions à rendre visibles leurs volets en gardant l’atmosphère de notre affiche afin de présenter chaque aspect de leur festival. Le but est de conserver un aspect simple afin de refléter le style de l’affiche, tout en laissant de la place pour les textes et en intégrant les couleurs, l’atmosphère, ainsi qu’un aspect photographique épuré.",
    date: "2024",
    tags: ["Direction artistique"],
    numero: "06",
    image: "images/devant-depliant.jpg",
    imageLightbox: "images/interieur-depliant.jpg",
    position: "center center"
  },
  {
    titre: "Photographie solo",
    desc: "Réaliser un «shooting» individuellement, avec l’aide d’un assistant, une série de photographies formant le portfolio d’un ensemble de réalisations pour un corpus de design graphique (reproductions 2D & objet(s) 3D), à partir d’une maquette de préproduction (moodboard).",
    date: "2025",
    tags: ["Photographie", "Photographie en studio"],
    numero: "07",
    image: "images/photo-solo.jpg",
    imageLightbox: "images/photo-solo.jpg",
    
    position: "center center"
  },
  {
    titre: "MAJ Nutrition",
    desc: "Dans l’intention de représenter un véritable projet, nous avions à choisir une entreprise de notre choix et à développer un environnement graphique relié à l’identité visuelle créée qui a servi à la réalisation d’applications différentes. Le concept a été de représenter la marque par un logo centré autour de la boisson, tout en gardant un aspect épuré, mais compréhensible. L’identité visuelle a ensuite été créée par rapport à celui-ci et avec ce que l’entreprise choisie proposait.",
    date: "2025",
    tags: ["Image de marque", "Marque image"],
    numero: "08",
    image: "images/pub.jpg",
    imageLightbox: "images/pub-1.jpg",
    position: "center center"
  },
  {
    titre: "T-shirt",
    desc: "Nous devions concevoir un design et faire un lien par rapport à ce que nous voulions représenter et que nous imprimerons sur un t-shirt en sérigraphie. Le concept ici est une illustration qui démontre une émotions. Le but était de faire réagir et faire apprécier. On voulait présenter une émotion forte sans jugement.",
    date: "2025",
    tags: ["T-shirt", "Sérigraphie"],
    numero: "09",
    image: "images/chandail.jpg",
    position: "center center"
  },
  {
    titre: "L'avant-garde",
    desc: "Un organisme sans but lucratif œuvrant auprès des personnes avec des enjeux de santé mentale vous demande de concevoir les pages clés d’un mémoire et une bannière Linked In pour en faire la promotion. Nous avions a enrichir notre mise en page, nous avions a choisir ou a créerez des designs typographiques, des photos ou des illustrations. Nous avions également a concevoir des graphiques et mettre en page un tableau. Le but ici était donc de jouer principalement avec les formes fournis par l'entreprise et de créer un coucept avec ceux-ci.",
    date: "2025",
    tags: ["Ménoire", "Édition"],
    numero: "10",
    image: "images/brochure-1.jpg",
    imageLightbox: "images/brochure-2.jpg",
    position: "center center"
  }
];


const grille = document.getElementById('projets-grille');

projets.forEach((projet, i) => {
  const card = document.createElement('article');
  card.className = 'projet-card';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', `Voir le projet : ${projet.titre}`);

  const tagsHTML = projet.tags
    .map(t => `<span class="projet-tag">${t}</span>`)
    .join('');

  card.innerHTML = `
    <div class="projet-visuel">
      ${projet.image
        ? `<img class="projet-visuel-img" src="${projet.image}" alt="${projet.titre}" style="object-position:${projet.position || 'center center'}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
           <div class="projet-visuel-placeholder" style="display:none;">0${i + 1}</div>`
        : `<div class="projet-visuel-placeholder">0${i + 1}</div>`
      }
    </div>
    <div class="projet-info">
      <div class="projet-tags">${tagsHTML}</div>
      <h3 class="projet-titre">${projet.titre.toUpperCase()}</h3>
      <p class="projet-desc">${projet.desc}</p>
      <p class="projet-date">${projet.date}</p>
    </div>
  `;

  
  card.addEventListener('click', () => ouvrirLightbox(projet));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') ouvrirLightbox(projet);
  });

  grille.appendChild(card);
});


const lightbox        = document.getElementById('lightbox');
const lightboxContenu = document.getElementById('lightbox-contenu');
const lightboxFermer  = document.getElementById('lightbox-fermer');

function ouvrirLightbox(projet) {
  const tagsHTML = projet.tags
    .map(t => `<span>${t}</span>`)
    .join('');

  lightboxContenu.innerHTML = `
    <div class="lightbox-projet-visuel">
      ${projet.image
        ? `<img src="${projet.imageLightbox || projet.image}" alt="${projet.titre}" style="width:100%;height:100%;object-fit:cover;object-position:${projet.positionLightbox || projet.position || 'center center'};transform:scale(${projet.zoomLightbox || 1});transform-origin:center center;">`
        : `${projet.numero} — VISUEL`
      }
    </div>
    <h2 class="lightbox-projet-titre">${projet.titre.toUpperCase()}</h2>
    <div class="lightbox-projet-meta">
      ${tagsHTML}
      <span>${projet.date}</span>
    </div>
    <p class="lightbox-projet-desc">${projet.desc}<br><br>
    
  `;

  lightbox.classList.add('actif');
  document.body.style.overflow = 'hidden';
}

function fermerLightbox() {
  lightbox.classList.remove('actif');
  document.body.style.overflow = '';
}

lightboxFermer.addEventListener('click', fermerLightbox);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) fermerLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') fermerLightbox();
});


const sections = document.querySelectorAll('section[id]');
const navLiens = document.querySelectorAll('.nav-liens a');

const observateurNav = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLiens.forEach(lien => {
        lien.style.opacity = lien.getAttribute('href') === `#${entry.target.id}` ? '1' : '0.45';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => observateurNav.observe(s));


const elementsReveal = document.querySelectorAll(
  '.projet-card, .info-bloc, .stat, .section-label, .texture-separator, .contact-titre, .contact-email'
);


elementsReveal.forEach((el, i) => {
  el.classList.add('reveal');
  
  el.style.transitionDelay = `${(i % 4) * 0.08}s`;
});

const observateurReveal = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-visible');
      
      observateurReveal.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

elementsReveal.forEach(el => observateurReveal.observe(el));

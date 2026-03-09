/* ========================================
   SAVYLLA ADRYAN - Portfolio Audiovisual
   ======================================== */

// ----------------------------------------
// Dados dos projetos (reais)
// ----------------------------------------
const projetos = [
  {
    id: 1,
    nome: "Warner Music UK",
    categoria: "design",
    categoriaLabel: "Design",
    ano: "2024",
    videoId: "",
    descricao: "Produção do material para a campanha de divulgação e lançamento no Brasil do álbum Radical Optimism da Dua Lipa.",
    ficha: {
      "Função": "Designer",
      "Cliente": "Warner Music UK",
      "Projeto": "Álbum Radical Optimism - Dua Lipa",
      "Tipo": "Campanha de Divulgação",
      "Ano": "2024"
    },
    galeria: [
      "assets/projetos/warner-uk-1.jpg",
      "assets/projetos/warner-uk-2.jpg",
      "assets/projetos/warner-uk-3.jpg"
    ]
  },
  {
    id: 2,
    nome: "Alma Festival",
    categoria: "fotografia",
    categoriaLabel: "Fotografia",
    ano: "2024",
    videoId: "",
    descricao: "Junto à 4Fly, realizei fotos da área VIP do Alma Festival.",
    ficha: {
      "Função": "Fotógrafo",
      "Parceria": "4Fly",
      "Tipo": "Cobertura Fotográfica",
      "Área": "VIP",
      "Ano": "2024"
    },
    galeria: [
      "assets/projetos/alma-festival-1.jpg",
      "assets/projetos/alma-festival-2.jpg",
      "assets/projetos/alma-festival-3.jpg"
    ]
  },
  {
    id: 3,
    nome: "Irmãos Scribel",
    categoria: "fotografia",
    categoriaLabel: "Fotografia + Edição",
    ano: "2024",
    videoId: "",
    descricao: "Realização da captação e edição fotográfica do Making Of e do material para divulgação da série Acampamento do Medo 1 e do filme Acampamento do Medo 2 para o canal do YouTube dos Irmãos Scribel.",
    ficha: {
      "Função": "Fotógrafo + Editor",
      "Cliente": "Irmãos Scribel",
      "Projeto": "Acampamento do Medo 1 e 2",
      "Tipo": "Making Of + Divulgação",
      "Plataforma": "YouTube",
      "Ano": "2024"
    },
    galeria: [
      "assets/projetos/irmaos-scribel-1.jpg",
      "assets/projetos/irmaos-scribel-2.jpg",
      "assets/projetos/irmaos-scribel-3.jpg"
    ]
  },
  {
    id: 4,
    nome: "Warner Music Brasil",
    categoria: "fotografia",
    categoriaLabel: "Fotografia + Edição",
    ano: "2023",
    videoId: "",
    descricao: "Responsável pela captação e edição das fotografias na confraternização de final de ano dos colaboradores da sede Brasileira da Warner Music.",
    ficha: {
      "Função": "Fotógrafo + Editor",
      "Cliente": "Warner Music Brasil",
      "Tipo": "Evento Corporativo",
      "Locação": "Sede Warner Music Brasil",
      "Ano": "2023"
    },
    galeria: [
      "assets/projetos/warner-br-1.jpg",
      "assets/projetos/warner-br-2.jpg",
      "assets/projetos/warner-br-3.jpg"
    ]
  },
  {
    id: 5,
    nome: "ONG Casinha Acolhida",
    categoria: "design",
    categoriaLabel: "Coordenação de Arte",
    ano: "2019 - 2024",
    videoId: "",
    descricao: "Realização da criação e produção dos materiais gráficos e físicos das diversas vertentes dos projetos da ONG, junto aos demais voluntários.",
    ficha: {
      "Função": "Coordenador de Arte",
      "Cliente": "ONG Casinha Acolhida",
      "Tipo": "Materiais Gráficos e Físicos",
      "Período": "2019 - 2024",
      "Formato": "Voluntariado"
    },
    galeria: [
      "assets/projetos/casinha-acolhida-1.jpg",
      "assets/projetos/casinha-acolhida-2.jpg",
      "assets/projetos/casinha-acolhida-3.jpg"
    ]
  },
  {
    id: 6,
    nome: "Dalla Cervejaria",
    categoria: "video",
    categoriaLabel: "Som + Produção",
    ano: "2023",
    videoId: "",
    descricao: "Comercial para a chegada da cerveja Dalla no RJ. Com a Direção, Captação e Edição de Mariana Godois.",
    ficha: {
      "Função": "Captação de Som + Assistência de Produção",
      "Cliente": "Dalla Cervejaria",
      "Direção": "Mariana Godois",
      "Tipo": "Comercial",
      "Locação": "Rio de Janeiro, RJ",
      "Ano": "2023"
    },
    galeria: [
      "assets/projetos/dalla-1.jpg",
      "assets/projetos/dalla-2.jpg"
    ]
  },
  {
    id: 7,
    nome: "BRAX Sports Assets",
    categoria: "video",
    categoriaLabel: "Captação de Som",
    ano: "2023",
    videoId: "",
    descricao: "Conteúdo de divulgação para promover o camarote Maracã Prime no jogo do Brasileirão (Flamengo x Fortaleza), atendendo à BRAX. Com Direção, Captação e Edição de Mariana Godois. Fotografia de Thaty Aguiar.",
    ficha: {
      "Função": "Captação de Som",
      "Cliente": "BRAX Sports Assets",
      "Projeto": "Camarote Maracã Prime",
      "Direção": "Mariana Godois",
      "Fotografia": "Thaty Aguiar",
      "Tipo": "Conteúdo de Divulgação",
      "Ano": "2023"
    },
    galeria: [
      "assets/projetos/brax-1.jpg",
      "assets/projetos/brax-2.jpg"
    ]
  },
  {
    id: 8,
    nome: "Sereia da Lapa",
    categoria: "fotografia",
    categoriaLabel: "Making Of + Produção",
    ano: "2023",
    videoId: "",
    descricao: "Produção externa com equipe de audiovisual para divulgação da nova linha de biquínis da influencer Letícia Aimé. Produção Executiva de Camille Aboud. Fotografia de Paulinho Felicíssimo / Mil Cruzados.",
    ficha: {
      "Função": "Making Of + Assistência de Produção",
      "Cliente": "Sereia da Lapa",
      "Produção Executiva": "Camille Aboud",
      "Fotografia": "Paulinho Felicíssimo / Mil Cruzados",
      "Tipo": "Campanha de Moda",
      "Ano": "2023"
    },
    galeria: [
      "assets/projetos/sereia-lapa-1.jpg",
      "assets/projetos/sereia-lapa-2.jpg",
      "assets/projetos/sereia-lapa-3.jpg"
    ]
  },
  {
    id: 9,
    nome: "Teçá Arte e Cultura",
    categoria: "motion",
    categoriaLabel: "Edição de Vídeo",
    ano: "2023",
    videoId: "",
    descricao: "Produção de Reels no Instagram para uso como vitrine virtual, sendo vídeos comerciais de agradecimento aos apoiadores do espetáculo teatral.",
    ficha: {
      "Função": "Editor de Vídeo",
      "Cliente": "Teçá - Arte e Cultura",
      "Tipo": "Reels / Conteúdo Social",
      "Plataforma": "Instagram",
      "Ano": "2023"
    },
    galeria: [
      "assets/projetos/teca-1.jpg",
      "assets/projetos/teca-2.jpg"
    ]
  },
  {
    id: 10,
    nome: "Espetáculo Entretenimento",
    categoria: "video",
    categoriaLabel: "Produção de Campo",
    ano: "2023",
    videoId: "",
    descricao: "Cobrindo o desfile da rainha de bateria Kelly Jorge (locutora da rádio Tupí), na nova Intendente Magalhães pela G.R.E.S. Sereno de Campo Grande. Executando pela equipe do empresário Raphael Almeida. Com a produção executiva da Camille Aboud. Criação de Mídia Kit da Kelly Jorge e arte para divulgação.",
    ficha: {
      "Função": "Produção de Campo + Design",
      "Cliente": "Espetáculo Entretenimento",
      "Artista": "Kelly Jorge",
      "Produção Executiva": "Camille Aboud",
      "Empresário": "Raphael Almeida",
      "Tipo": "Cobertura + Mídia Kit",
      "Ano": "2023"
    },
    galeria: [
      "assets/projetos/espetaculo-1.jpg",
      "assets/projetos/espetaculo-2.jpg"
    ]
  },
  {
    id: 11,
    nome: "Imaginatto",
    categoria: "video",
    categoriaLabel: "Videomaker + Design",
    ano: "2020 - 2023",
    videoId: "",
    descricao: "Produção remota de projetos audiovisuais junto à equipe da agência, elaborando identidade visual para os projetos dos clientes e tendo participação na execução estratégica dos conteúdos focados em resultados de engajamento.",
    ficha: {
      "Função": "Videomaker e Designer",
      "Cliente": "Agência Imaginatto",
      "Tipo": "Produção Audiovisual + Identidade Visual",
      "Formato": "Remoto",
      "Período": "2020 - 2023"
    },
    galeria: [
      "assets/projetos/imaginatto-1.jpg",
      "assets/projetos/imaginatto-2.jpg",
      "assets/projetos/imaginatto-3.jpg"
    ]
  },
  {
    id: 12,
    nome: "Doutora Drag",
    categoria: "motion",
    categoriaLabel: "Edição + Motion",
    ano: "2021 - 2022",
    videoId: "",
    descricao: "Edição para o canal do YouTube \"Doutora Drag\", realizado pela Dimitra Vulcana. Com roteiros de Danilo Carreiro, sincronizando a edição aos vídeos de intérprete de libras. Criação de vinhetas e nova identidade visual do canal.",
    ficha: {
      "Função": "Editor de Vídeo + Motion Designer",
      "Cliente": "Doutora Drag / Dimitra Vulcana",
      "Roteiro": "Danilo Carreiro",
      "Plataforma": "YouTube",
      "Tipo": "Edição + Vinhetas + ID Visual",
      "Período": "2021 - 2022"
    },
    galeria: [
      "assets/projetos/doutora-drag-1.jpg",
      "assets/projetos/doutora-drag-2.jpg",
      "assets/projetos/doutora-drag-3.jpg"
    ]
  },
  {
    id: 13,
    nome: "Imagem Integrada",
    categoria: "motion",
    categoriaLabel: "Videomaker + Motion + Design",
    ano: "2021",
    videoId: "",
    descricao: "Produção de material para divulgação da clínica na Barra da Tijuca (RJ), para as redes sociais do cliente. Captação, edição e motion do comercial. Criação da identidade visual para a clínica Imagem Integrada, com o objetivo de comunicar e realizar de uma melhor maneira o contato com seus clientes através dos meios digitais e físicos.",
    ficha: {
      "Função": "Videomaker + Motion Designer + Designer",
      "Cliente": "Clínica Imagem Integrada",
      "Tipo": "Comercial + Identidade Visual",
      "Locação": "Barra da Tijuca, RJ",
      "Ano": "2021"
    },
    galeria: [
      "assets/projetos/imagem-integrada-1.jpg",
      "assets/projetos/imagem-integrada-2.jpg",
      "assets/projetos/imagem-integrada-3.jpg"
    ]
  },
  {
    id: 14,
    nome: "Linha Produções",
    categoria: "video",
    categoriaLabel: "Câmera + Motion",
    ano: "2020",
    videoId: "",
    descricao: "Websérie Encontro da Linha Produções com 8 episódios em exibição no YouTube.",
    ficha: {
      "Função": "Câmera + Motion + Masterização",
      "Cliente": "Linha Produções",
      "Tipo": "Websérie",
      "Episódios": "8",
      "Plataforma": "YouTube",
      "Ano": "2020"
    },
    galeria: [
      "assets/projetos/linha-producoes-1.jpg",
      "assets/projetos/linha-producoes-2.jpg"
    ]
  },
  {
    id: 15,
    nome: "Força da Terra",
    categoria: "video",
    categoriaLabel: "Videomaker",
    ano: "2020",
    videoId: "",
    descricao: "Produção do comercial de comemoração aos 20 anos da empresa.",
    ficha: {
      "Função": "Videomaker",
      "Cliente": "Força da Terra",
      "Tipo": "Comercial Institucional",
      "Motivo": "Comemoração 20 anos",
      "Ano": "2020"
    },
    galeria: [
      "assets/projetos/forca-terra-1.jpg",
      "assets/projetos/forca-terra-2.jpg"
    ]
  },
  {
    id: 16,
    nome: "Devassas",
    categoria: "video",
    categoriaLabel: "Produção + Edição",
    ano: "2020",
    videoId: "",
    descricao: "Campanha de divulgação da nova linha de roupas e estampas da Devassas. Fotografia de Victor Vieira.",
    ficha: {
      "Função": "Assistência de Produção + Edição de Vídeo",
      "Cliente": "Devassas",
      "Fotografia": "Victor Vieira",
      "Tipo": "Campanha de Moda",
      "Ano": "2020"
    },
    galeria: [
      "assets/projetos/devassas-1.jpg",
      "assets/projetos/devassas-2.jpg"
    ]
  },
  {
    id: 17,
    nome: "Coletiva Garagem",
    categoria: "video",
    categoriaLabel: "Direção + Videomaker + Design",
    ano: "2018 - 2020",
    videoId: "",
    descricao: "Produção de vídeo e arte (captação e edição) para os projetos e redes sociais da Coletiva Garagem. Idealizado como um coletivo de produção audiovisual feito por e para mulheres que amam mulheres.",
    ficha: {
      "Função": "Direção + Videomaker + Motion + Design",
      "Cliente": "Coletiva Garagem",
      "Tipo": "Produção Audiovisual + Arte",
      "Formato": "Vídeo + Design",
      "Período": "2018 - 2020"
    },
    galeria: [
      "assets/projetos/coletiva-garagem-1.jpg",
      "assets/projetos/coletiva-garagem-2.jpg",
      "assets/projetos/coletiva-garagem-3.jpg"
    ]
  }
];

// ----------------------------------------
// Header scroll
// ----------------------------------------
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});

// ----------------------------------------
// Fullscreen nav overlay
// ----------------------------------------
const sideMenu = document.getElementById('sideMenu');
const navOverlay = document.getElementById('navOverlay');
const burgerBtn = document.getElementById('burgerBtn');

function toggleNav() {
  navOverlay.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
}

function closeNav() {
  navOverlay.classList.remove('active');
  burgerBtn.classList.remove('active');
  document.body.style.overflow = '';
}

sideMenu.addEventListener('click', toggleNav);
burgerBtn.addEventListener('click', toggleNav);

navOverlay.querySelectorAll('.nav-overlay__link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    closeNav();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  });
});

// ----------------------------------------
// Smooth scroll
// ----------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    if (this.closest('.nav-overlay')) return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ----------------------------------------
// Filtros
// ----------------------------------------
const filtros = document.querySelectorAll('.trabalhos__filtro');
const items = document.querySelectorAll('.trabalhos__item');

filtros.forEach(btn => {
  btn.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    items.forEach(item => {
      item.classList.toggle('hidden', filter !== 'todos' && item.dataset.category !== filter);
    });
  });
});

// ----------------------------------------
// Modal
// ----------------------------------------
const modal = document.getElementById('projetoModal');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const p = projetos.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modalCategoria').textContent = p.categoriaLabel;
  document.getElementById('modalTitulo').textContent = p.nome;
  document.getElementById('modalDescricao').textContent = p.descricao;

  const videoEl = document.getElementById('modalVideo');
  if (p.videoId && !p.videoId.startsWith('VIDEO_ID') && p.videoId !== '') {
    videoEl.innerHTML = `<iframe src="https://www.youtube.com/embed/${p.videoId}?rel=0" allow="encrypted-media" allowfullscreen></iframe>`;
  } else {
    videoEl.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:var(--text-muted)"><p>Video em breve</p></div>`;
  }

  const fichaEl = document.getElementById('modalFicha');
  fichaEl.innerHTML = Object.entries(p.ficha).map(([k, v]) => `<div><dt>${k}</dt><dd>${v}</dd></div>`).join('');

  const galeriaEl = document.getElementById('galeriaGrid');
  galeriaEl.innerHTML = '';
  p.galeria.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = p.nome;
    img.loading = 'lazy';
    img.onerror = function() { this.style.display = 'none'; };
    galeriaEl.appendChild(img);
  });

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  document.getElementById('modalVideo').innerHTML = '';
}

items.forEach(item => {
  item.addEventListener('click', () => openModal(parseInt(item.dataset.id)));
});

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal__backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ----------------------------------------
// Showreel lazy embed
// ----------------------------------------
const showreelEl = document.getElementById('showreelVideo');
if (showreelEl) {
  showreelEl.addEventListener('click', () => {
    const vid = showreelEl.dataset.videoId;
    if (vid && vid !== 'VIDEO_ID') {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${vid}?autoplay=1&rel=0`;
      iframe.allow = 'autoplay; encrypted-media';
      iframe.allowFullscreen = true;
      iframe.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:none;';
      showreelEl.parentNode.appendChild(iframe);
      showreelEl.remove();
    }
  });
}

// ----------------------------------------
// Scroll reveal
// ----------------------------------------
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.sobre__image, .sobre__content, .trabalhos__header, .trabalhos__item, .showreel__container, .cta__content, .cta__quote, .contato__left, .contato__form, .quote__inner').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

// ----------------------------------------
// Form
// ----------------------------------------
document.getElementById('contatoForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada! (Configure Formspree ou EmailJS para envio real)');
  e.target.reset();
});

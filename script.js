const properties = [
  {
    id: "RH001",
    name: "Casa Contemporânea",
    purpose: "Venda",
    type: "Casa",
    location: "Setor Central, Caldas Novas – GO",
    price: "R$ 580.000",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "145 m²",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Casa de arquitetura contemporânea com clima sofisticado, ampla circulação e excelente aproveitamento de luz natural. A residência foi pensada para quem busca conforto, privacidade e uma integração harmoniosa entre áreas internas e externas.",
    features: [
      "Living integrado com área gourmet",
      "Pátio com churrasqueira e espaço para lazer",
      "Varanda ampla com vista agradável",
      "Fachada moderna com acabamento refinado",
      "3 quartos com boa iluminação",
      "2 vagas cobertas"
    ]
  },
  {
    id: "RH002",
    name: "Apartamento Moderno",
    purpose: "Venda",
    type: "Apartamento",
    location: "Centro, Caldas Novas – GO",
    price: "R$ 320.000",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: "78 m²",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Apartamento com layout funcional, bem distribuído e com um acabamento contemporâneo que valoriza cada ambiente. Ideal para moradores que desejam praticidade, conforto e acesso central em Caldas Novas.",
    features: [
      "Apartamento em localização privilegiada",
      "Sala ampla com janelas iluminadas",
      "Cozinha planejada e integrada",
      "2 suítes ou quartos confortáveis",
      "Varanda para momentos de descanso",
      "1 vaga coberta"
    ]
  },
  {
    id: "RH003",
    name: "Casa Familiar",
    purpose: "Venda",
    type: "Casa",
    location: "Bairro Itanhangá, Caldas Novas – GO",
    price: "R$ 420.000",
    bedrooms: 3,
    bathrooms: 2,
    parking: 2,
    area: "120 m²",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Casa acolhedora e bem distribuída, com excelente aproveitamento de área e ambiente confortável para família. A composição equilibrada entre quartos, áreas comuns e área externa proporciona praticidade no dia a dia.",
    features: [
      "Espaço para família e lazer",
      "Área externa com gramado",
      "Cozinha funcional e arejada",
      "Living com pé-direito confortável",
      "Quartos com circulação simples",
      "2 vagas na garagem"
    ]
  },
  {
    id: "RH004",
    name: "Apartamento para Locação",
    purpose: "Aluguel",
    type: "Apartamento",
    location: "Centro, Caldas Novas – GO",
    price: "R$ 2.200/mês",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "65 m²",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Apartamento compacto, funcional e bem localizado para quem busca praticidade e mobilidade. A distribuição inteligente dos ambientes oferece conforto para moradia urbana com boa relação entre qualidade e localização.",
    features: [
      "Apartamento em área central",
      "Confortável para moradia urbana",
      "Ambientes funcionais e bem iluminados",
      "Cozinha com boa organização",
      "Vaga de garagem coberta",
      "Ótima infraestrutura ao redor"
    ]
  },
  {
    id: "RH005",
    name: "Casa com Área de Lazer",
    purpose: "Venda",
    type: "Casa",
    location: "Bairro Lagoa Quente, Caldas Novas – GO",
    price: "R$ 690.000",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: "180 m²",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Casa ampla e versátil, desenvolvida para quem valoriza conforto, espaço e momentos de lazer em família. A disposição interna e o entorno proporcionam uma experiência residencial refinada e acolhedora.",
    features: [
      "Área de lazer integrada",
      "3 suítes ou quartos com conforto",
      "Salão amplo e agradável",
      "Cozinha com bancada e circulação",
      "Garagem para duas vagas",
      "Jardim e espaços para convívio"
    ]
  },
  {
    id: "RH006",
    name: "Apartamento Funcional",
    purpose: "Aluguel",
    type: "Apartamento",
    location: "Jardim Belvedere, Caldas Novas – GO",
    price: "R$ 1.650/mês",
    bedrooms: 2,
    bathrooms: 1,
    parking: 1,
    area: "60 m²",
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
    ],
    description:
      "Apartamento funcional com distribuição inteligente e boa otimização de espaços. Ideal para quem busca um endereço prático, confortável e com excelente custo-benefício para uso residencial.",
    features: [
      "Layout leve e bem aproveitado",
      "Quartos com boa proporção",
      "Sala integrada à cozinha",
      "Vaga coberta e segura",
      "Boa conexão com a cidade",
      "Ótimo equilíbrio entre conforto e praticidade"
    ]
  }
];

const getWhastAppLink = (message) =>
  `https://wa.me/5564999674797?text=${encodeURIComponent(message)}`;

const formatSearchable = (value) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const initializeReveal = () => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = document.querySelectorAll(
    ".step-card, .property-card, .announce-box, .final-cta-box, .about-copy, .section-intro, .section-header, .info-card, .contact-card, .related-card, .detail-panel, .main-nav a"
  );

  if (reducedMotion) {
    targets.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
  );

  targets.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
  });
};

const initializeHeader = () => {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!header || !menuToggle || !mainNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
};

const renderPropertyCards = (items) => {
  const propertyGrid = document.getElementById("propertyGrid");
  if (!propertyGrid) return;

  if (!items.length) {
    propertyGrid.innerHTML = `
      <div class="not-found" style="grid-column: 1 / -1; max-width: 100%;">
        <h2>Nenhum imóvel encontrado.</h2>
        <p>Tente outra busca, localidade ou filtro para encontrar a oportunidade ideal.</p>
      </div>
    `;
    return;
  }

  propertyGrid.innerHTML = items
    .map(
      (property) => `
        <article class="property-card">
          <div class="card-media">
            <img src="${property.image}" alt="${property.name}" loading="lazy" />
            <span class="card-badge">${property.purpose}</span>
          </div>
          <div class="card-body">
            <div class="card-type-row">
              <span>${property.type}</span>
              <span>${property.id}</span>
            </div>
            <h3>${property.name}</h3>
            <p class="card-location">${property.location}</p>
            <div class="card-price">${property.price}</div>
            <div class="stats-grid">
              <span class="stat-pill">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a2 2 0 0 1 2 2v14H5V5a2 2 0 0 1 2-2Zm8 6h-4v2h4V9Zm-6 4h8v2H9v-2Zm0-6h2v2H9V7Z"/></svg>
                ${property.bedrooms} quartos
              </span>
              <span class="stat-pill">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h1v8h-2v-2H7v2H5v-8h1Zm2-4v4h8V7H8Z"/></svg>
                ${property.bathrooms} banheiros
              </span>
              <span class="stat-pill">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16h14v2H5v-2Zm1-8h2v3h8V8h2v8H6V8Zm2-2h8V5H8v1Z"/></svg>
                ${property.parking} vagas
              </span>
              <span class="stat-pill">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h6v2H8v-2Z"/></svg>
                ${property.area}
              </span>
            </div>
            <div class="card-actions">
              <a class="btn btn-primary" href="imovel.html?id=${property.id}">Ver detalhes</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  initializeReveal();
};

const initializeCatalog = () => {
  const grid = document.getElementById("propertyGrid");
  const searchInput = document.getElementById("propertySearch");
  const filterButtons = document.querySelectorAll(".filter-btn");

  if (!grid) return;

  let activeFilter = "todos";

  const applyFilters = () => {
    const query = searchInput ? formatSearchable(searchInput.value.trim()) : "";

    const filtered = properties.filter((property) => {
      const matchesFilter =
        activeFilter === "todos" ||
        (activeFilter === "comprar" && property.purpose === "Venda") ||
        (activeFilter === "alugar" && property.purpose === "Aluguel") ||
        (activeFilter === "casas" && property.type === "Casa") ||
        (activeFilter === "apartamentos" && property.type === "Apartamento");

      const matchesSearch =
        !query ||
        formatSearchable(property.name).includes(query) ||
        formatSearchable(property.location).includes(query);

      return matchesFilter && matchesSearch;
    });

    renderPropertyCards(filtered);
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle("active", item === button));
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
};

const renderDetailPage = () => {
  const detailRoot = document.getElementById("propertyDetail");
  if (!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id");

  if (!propertyId) {
    detailRoot.innerHTML = `
      <div class="not-found">
        <h1>Selecione um imóvel</h1>
        <p>Você ainda não escolheu uma oportunidade. Volte ao catálogo e explore os imóveis disponíveis.</p>
        <a class="btn btn-primary" href="index.html#imoveis">Voltar aos imóveis</a>
      </div>
    `;
    return;
  }

  const property = properties.find((item) => item.id === propertyId);

  if (!property) {
    detailRoot.innerHTML = `
      <div class="not-found">
        <h1>Imóvel não encontrado</h1>
        <p>Não encontramos a propriedade desejada. Confira o código do imóvel ou volte ao catálogo.</p>
        <a class="btn btn-primary" href="index.html#imoveis">Voltar aos imóveis</a>
      </div>
    `;
    return;
  }

  const isRental = property.purpose === "Aluguel";
  const mainImage = property.images[0];
  const relatedProperties = properties
    .filter(
      (item) => item.id !== property.id && (item.type === property.type || item.purpose === property.purpose)
    )
    .slice(0, 3);

  detailRoot.innerHTML = `
    <div class="breadcrumb">
      <a href="index.html">Início</a>
      <span>/</span>
      <a href="index.html#imoveis">Imóveis</a>
      <span>/</span>
      <span>${property.name}</span>
    </div>

    <div class="detail-layout">
      <div class="gallery-shell">
        <div class="gallery-main">
          <img src="${mainImage}" alt="${property.name}" />
        </div>
        <div class="gallery-thumbs" aria-label="Galeria de imagens do imóvel">
          ${property.images
            .map(
              (image, index) => `
                <button class="thumb-btn ${index === 0 ? "active" : ""}" type="button" data-image="${image}" aria-label="Visualizar imagem ${index + 1}">
                  <img src="${image}" alt="${property.name} imagem ${index + 1}" loading="lazy" />
                </button>
              `
            )
            .join("")}
        </div>
      </div>

      <aside class="detail-panel">
        <p class="eyebrow">${property.id}</p>
        <h1>${property.name}</h1>
        <div class="detail-tags">
          <span class="tag">${property.purpose}</span>
          <span class="tag">${property.type}</span>
        </div>
        <div class="detail-price">${property.price}</div>
        <p class="detail-location">${property.location}</p>
        <p class="detail-description">${property.description}</p>

        <div class="feature-grid">
          <div class="feature-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6h-2V6H6v6H4Zm2 6h12v2H6v-2Zm3-4h6v2H9v-2Z"/></svg>
            <span>${property.bedrooms} quartos</span>
          </div>
          <div class="feature-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 11V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4h1v8h-2v-2H7v2H5v-8h1Zm2-4v4h8V7H8Z"/></svg>
            <span>${property.bathrooms} banheiros</span>
          </div>
          <div class="feature-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 16h14v2H5v-2Zm1-8h2v3h8V8h2v8H6V8Zm2-2h8V5H8v1Z"/></svg>
            <span>${property.parking} vagas</span>
          </div>
          <div class="feature-item">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v16H4V4Zm2 2v12h12V6H6Zm2 2h8v2H8V8Zm0 4h6v2H8v-2Z"/></svg>
            <span>${property.area}</span>
          </div>
        </div>

        <div class="detail-actions">
          <a
            class="btn btn-primary"
            href="${getWhastAppLink(`Olá! Acessei o site da RH Prime e gostaria de mais informações sobre o imóvel ${property.id}.`)}"
            target="_blank"
            rel="noreferrer"
            >Consultar pelo WhatsApp</a
          >
          <a class="btn btn-secondary" href="index.html#imoveis">Voltar aos imóveis</a>
        </div>
      </aside>
    </div>

    <div class="detail-content">
      <section class="info-card">
        <h3>Descrição</h3>
        <p>${property.description}</p>
        <p>Este imóvel é um exemplo demonstrativo e foi selecionado para apresentar o funcionamento do site institucional da RH Prime. O conteúdo deve ser interpretado como material fictício para apresentação comercial.</p>
        <ul class="feature-list">
          ${property.features.map((feature) => `<li>${feature}</li>`).join("")}
        </ul>
      </section>

      <aside class="contact-card">
        <p class="eyebrow">Contato</p>
        <h3>Interessado neste imóvel?</h3>
        <p class="cta-copy">
          Entre em contato com a RH Prime para conversar sobre esta oportunidade demonstrativa.
        </p>
        <a
          class="btn btn-primary"
          href="${getWhastAppLink(`Olá! Acessei o site da RH Prime e gostaria de mais informações sobre o imóvel ${property.id}.`)}"
          target="_blank"
          rel="noreferrer"
          >Consultar pelo WhatsApp</a
        >
      </aside>
    </div>

    <div class="related-header">
      <p class="eyebrow">Imóveis relacionados</p>
      <h2>Continue explorando</h2>
    </div>

    <div class="related-grid">
      ${relatedProperties
        .map(
          (item) => `
            <article class="related-card">
              <img src="${item.image}" alt="${item.name}" loading="lazy" />
              <div class="related-body">
                <h3>${item.name}</h3>
                <p>${item.location}</p>
                <div class="detail-price">${item.price}</div>
                <a class="btn btn-primary" href="imovel.html?id=${item.id}">Ver detalhes</a>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  const galleryMain = document.querySelector(".gallery-main img");
  const thumbButtons = document.querySelectorAll(".thumb-btn");

  thumbButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextImage = button.dataset.image;
      if (!galleryMain || !nextImage) return;

      galleryMain.src = nextImage;
      thumbButtons.forEach((item) => item.classList.toggle("active", item === button));
    });
  });

  const mobileCta = document.querySelector(".mobile-cta a");
  if (mobileCta) {
    mobileCta.href = getWhastAppLink(
      `Olá! Acessei o site da RH Prime e gostaria de mais informações sobre o imóvel ${property.id}.`
    );
  }
};

const initializeApp = () => {
  initializeHeader();
  initializeReveal();
  initializeCatalog();
  renderDetailPage();
};

document.addEventListener("DOMContentLoaded", initializeApp);

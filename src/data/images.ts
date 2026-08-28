/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    nybyggnation?: ImageSlot;
    smahusbyggnation?: ImageSlot;
    renovering?: ImageSlot;
    ombyggnation?: ImageSlot;
    totalentreprenad?: ImageSlot;
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    markarbete: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    dranering: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    betong: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo.png',
    alt: 'Dannes Bygg & Entreprenad AB',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'Dannes Bygg & Entreprenad AB',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'Dannes Bygg & Entreprenad AB hantverk och snickeri Mariestad Skaraborg',
    },
  },

  services: {
    nybyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Nybyggnation, garage och attefallshus i Mariestad och Skaraborg',
    },
    smahusbyggnation: {
      url: '/service-smahusbyggnation.webp',
      alt: 'Småhusbyggnation och attefallshus i Skaraborg',
    },
    renovering: {
      url: '/service-renovering.webp',
      alt: 'Totalrenovering, kök och badrum i Mariestad',
    },
    ombyggnation: {
      url: '/service-ombyggnation.webp',
      alt: 'Ombyggnation, tak och tillbyggnad i Skaraborg',
    },
    totalentreprenad: {
      url: '/service-totalentreprenad.webp',
      alt: 'Totalentreprenad och 3D-ritningar med inredare',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'Dannes Bygg & Entreprenad AB snickeriarbete och renovering',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'Dannes Bygg & Entreprenad AB hantverk och interiör',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'Dannes Bygg & Entreprenad AB kök och renovering',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'Dannes Bygg & Entreprenad AB träaltan och utemiljö',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'Dannes Bygg & Entreprenad AB specialsnickeri och detaljer',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'Dannes Bygg & Entreprenad AB färdigställt byggprojekt',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'Dannes Bygg & Entreprenad AB projekt',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'Dannes Bygg arbetsplats Mariestad',
    },
  },

  about: {
    hero: {
      url: '/about-us.jpg',
      alt: 'Dannes Bygg & Entreprenad AB grundare och verksamhet',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem Dannes Bygg',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé och 3D-ritning till färdigt resultat',
  },

  portfolio: [
    {
      image: {
        url: '/gallery/gallery-1.jpg',
        alt: 'Snickeri och renovering i Mariestad',
      },
      title: 'Skräddarsytt Snickeri & Renovering',
      category: 'Snickeri',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Interiördesign och 3D-visualisering',
      },
      title: 'Interiör & 3D-Visualisering',
      category: '3D-Design',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Kök- och rumsrenovering Skaraborg',
      },
      title: 'Köks- & Interiörrenovering',
      category: 'Renovering',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Trädäck och altanbygge Mariestad',
      },
      title: 'Trädäck, Altan & Uterum',
      category: 'Tillbyggnad',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Finsnickeri och detaljarbete',
      },
      title: 'Finsnickeri & Platsbyggt',
      category: 'Snickeri',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Totalentreprenad Mariestad Skaraborg',
      },
      title: 'Totalentreprenad & Ombyggnad',
      category: 'Totalentreprenad',
    },
  ],

  servicePages: {
    markarbete: {
      hero: {
        url: '/service-markarbete.webp',
        alt: 'Markarbete och schaktning',
      },
      section1: {
        url: '/service-markarbete.webp',
        alt: 'Förberedelse för tomtplanering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Arbetsplats Stockholm',
      },
    },
    dranering: {
      hero: {
        url: '/service-dranering.webp',
        alt: 'Dränering av husgrund',
      },
      section1: {
        url: '/service-dranering.webp',
        alt: 'Fuktskydd och dränering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Dräneringsarbete',
      },
    },
    betong: {
      hero: {
        url: '/service-betong.webp',
        alt: 'Gjutning av betongplatta',
      },
      section1: {
        url: '/service-betong.webp',
        alt: 'Stenläggning och armering',
      },
      section2: {
        url: '/hero-main.webp',
        alt: 'Färdig betonggrund',
      },
    },
  },
};

export default images;


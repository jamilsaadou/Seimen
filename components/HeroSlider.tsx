'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button, Container } from 'react-bootstrap';

type Slide = {
  id: string;
  image: string;
  pretitle: string;
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const EVENT_START = new Date('2026-04-20T08:00:00Z').getTime();
const SLIDE_INTERVAL = 8000;

const slides: Slide[] = [
  {
    id: 'transition-energetique',
    image: '/cam.jpg',
    pretitle: 'Transition énergétique africaine',
    title: "Le futur des mines et de l'énergie commence au SEIMEN 2026",
    description:
      'Rejoignez les décideurs, investisseurs et innovateurs qui bâtissent les nouveaux modèles miniers et énergétiques sur le continent.',
    primaryCta: {
      label: 'Sécuriser son pass',
      href: '/inscription',
    },
    secondaryCta: {
      label: 'Découvrir le programme',
      href: '/presentation',
    },
  },
  {
    id: 'energie-renouvelable',
    image: '/belle-centrale-d-energie-alternative-avec-panneaux-solaires.jpg',
    pretitle: 'Énergies renouvelables',
    title: "L'avenir énergétique durable de l'Afrique se construit ici",
    description:
      'Découvrez les dernières innovations en matière de solaire, éolien et énergies propres pour un développement durable du continent.',
    primaryCta: {
      label: 'Réserver ma place',
      href: '/inscription',
    },
    secondaryCta: {
      label: 'Voir le catalogue',
      href: '/catalogue',
    },
  },
  {
    id: 'investissements-miniers',
    image: '/tech.jpg',
    pretitle: 'Investissements & souveraineté',
    title: 'Niamey accueille les leaders miniers et énergétiques du Sahel',
    description:
      'Exposez vos solutions, rencontrez les autorités et tissez des partenariats stratégiques à forte valeur ajoutée.',
    primaryCta: {
      label: "Je m'inscris",
      href: '/inscription',
    },
    secondaryCta: {
      label: 'Exposer ou sponsoriser',
      href: '/categories',
    },
  },
  {
    id: 'centre-conference',
    image: '/Centre-International-de-Conference-Mahatma-Gandhi-8.jpg',
    pretitle: 'Centre International de Conférence',
    title: 'Un cadre exceptionnel pour des échanges de haut niveau',
    description:
      "Participez à des conférences, ateliers et sessions de networking dans l'un des centres les plus prestigieux de la région.",
    primaryCta: {
      label: "S'inscrire maintenant",
      href: '/inscription',
    },
    secondaryCta: {
      label: 'En savoir plus',
      href: '/presentation',
    },
  },
];

const getTimeRemaining = (): TimeLeft => {
  const now = Date.now();
  const diff = EVENT_START - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const formatTime = (value: number) => value.toString().padStart(2, '0');

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeRemaining());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero-slider">
      <div className="ticket-bar">
        <span className="ticket-text">Augmentation des tarifs dans :</span>
        <div className="countdown">
          <div className="countdown-item">
            <strong>{timeLeft.days}</strong>
            <span>Jours</span>
          </div>
          <div className="countdown-item">
            <strong>{formatTime(timeLeft.hours)}</strong>
            <span>Heures</span>
          </div>
          <div className="countdown-item">
            <strong>{formatTime(timeLeft.minutes)}</strong>
            <span>Minutes</span>
          </div>
          <div className="countdown-item">
            <strong>{formatTime(timeLeft.seconds)}</strong>
            <span>Secondes</span>
          </div>
        </div>
        <Link href="/inscription">
          <Button size="sm" className="ticket-btn">
            Réserver maintenant
          </Button>
        </Link>
      </div>

      <div className="hero-slider__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeIndex}
          >
            <Container className="slide-content">
              <div className="slide-text">
                <span className="slide-pill">{slide.pretitle}</span>
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <div className="cta-group">
                  <Link href={slide.primaryCta.href}>
                    <Button size="lg" className="btn-gold shadow-lg">
                      {slide.primaryCta.label}
                    </Button>
                  </Link>
                  <Link href={slide.secondaryCta.href}>
                    <Button size="lg" variant="outline-light">
                      {slide.secondaryCta.label}
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        ))}

        <div className="hero-slider-controls">
          <button
            type="button"
            className="hero-slider-control"
            onClick={handlePrev}
            aria-label="Slide précédent"
          >
            ‹
          </button>
          <button
            type="button"
            className="hero-slider-control"
            onClick={handleNext}
            aria-label="Slide suivant"
          >
            ›
          </button>
        </div>

        <div className="hero-slider-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`hero-slider-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Aller au visuel ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

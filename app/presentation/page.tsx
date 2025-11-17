import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';

export const metadata = {
  title: 'Présentation - SEIMEN 2026',
  description: 'Découvrez la première édition du SEIMEN - Salon & Exposition Internationale des Mines et de l\'Énergie du Niger',
};

export default function Presentation() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
              <h1 className="mb-4">Présentation du SEIMEN 2026</h1>
              <p className="lead mb-0">
                Le rendez-vous d'exception qui transformera le paysage minier et énergétique africain
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Presentation */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <div className="card mb-5">
                <div className="card-body p-5">
                  <h2 className="text-dark-green mb-4">
                    Salon & Exposition Internationale des Mines et de l'Énergie du Niger (SEIMEN)
                  </h2>
                  <div className="mb-4">
                    <span className="badge badge-gold fs-5 me-3">Première Édition</span>
                    <span className="badge badge-green fs-5">20-23 Avril 2026</span>
                  </div>
                  <p className="lead text-primary-green mb-4">
                    <i className="bi bi-geo-alt me-2"></i>
                    Centre International de Conférences Mahatma Gandhi, Niamey
                  </p>
                  <p className="mb-4">
                    Le Niger s'apprête à accueillir un rendez-vous d'exception qui transformera le paysage minier 
                    et énergétique africain : la toute première édition du SEIMEN, une plateforme internationale 
                    conçue pour catalyser l'innovation, les investissements et la coopération autour des ressources 
                    naturelles et de la transition énergétique.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Why SEIMEN */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <h2 className="section-title">Pourquoi le SEIMEN est-il incontournable ?</h2>
              <div className="card mb-4">
                <div className="card-body p-4">
                  <p className="mb-0">
                    Parce qu'il place le Niger, au cœur du Sahel, au centre d'un carrefour stratégique où se croisent 
                    les enjeux mondiaux de souveraineté énergétique, de développement durable et d'innovation 
                    technologique. C'est l'opportunité unique de connecter décideurs politiques, investisseurs, 
                    entreprises et experts du monde entier dans un cadre propice à la concrétisation d'affaires à fort 
                    impact.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* What SEIMEN Offers */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <h2 className="section-title">Ce que le SEIMEN offre</h2>
              <Row className="g-4">
                <Col md={6}>
                  <div className="card h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div className="feature-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                          <i className="bi bi-lightbulb"></i>
                        </div>
                      </div>
                      <h5 className="mb-3">Innovations Avancées</h5>
                      <p className="mb-0">
                        Un panorama exclusif des innovations les plus avancées en matière d'énergie verte, 
                        d'extraction responsable et de digitalisation des secteurs minier et énergétique.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div className="feature-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                          <i className="bi bi-people"></i>
                        </div>
                      </div>
                      <h5 className="mb-3">Rencontres B2B et B2G</h5>
                      <p className="mb-0">
                        Des rencontres B2B et B2G ciblées pour créer des partenariats solides, négocier des 
                        contrats stratégiques et accéder à de nouveaux marchés.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div className="feature-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                          <i className="bi bi-globe"></i>
                        </div>
                      </div>
                      <h5 className="mb-3">Tribune Internationale</h5>
                      <p className="mb-0">
                        Une tribune internationale réunissant leaders, experts et entrepreneurs engagés dans la 
                        construction d'un avenir énergétique durable et inclusif.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="card h-100">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div className="feature-icon" style={{width: '60px', height: '60px', fontSize: '1.5rem'}}>
                          <i className="bi bi-rocket"></i>
                        </div>
                      </div>
                      <h5 className="mb-3">Espace Jeunesse & Startups</h5>
                      <p className="mb-0">
                        Un espace dédié à la jeunesse et aux startups, véritables moteurs de la révolution 
                        énergétique et minière en Afrique.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Central Theme */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <div className="card bg-primary-green text-white">
                <div className="card-body p-5 text-center">
                  <h3 className="mb-4 text-white">Thème Central</h3>
                  <p className="lead mb-0 fs-4">
                    « Ressources naturelles et transition énergétique : catalyser l'innovation, 
                    les investissements et le développement durable en Afrique »
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Features Website */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <h2 className="section-title">Fonctionnalités du site web SEIMEN</h2>
              <Row className="g-3">
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Présentation complète de l'événement</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Inscription en ligne et gestion des billets</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Catalogue interactif des exposants et sponsors</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Agenda détaillé des conférences et ateliers</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Espace presse avec ressources téléchargeables</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>FAQ et informations pratiques</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Espace dédié aux partenaires et sponsors</strong>
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-start p-3 bg-light-section rounded">
                    <i className="bi bi-check-circle-fill text-primary-green fs-4 me-3"></i>
                    <div>
                      <strong>Application mobile dédiée au networking</strong>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Call to Action */}
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="card bg-light-section border-0">
                <div className="card-body p-5 text-center">
                  <h3 className="text-dark-green mb-4">
                    Rejoignez-nous au SEIMEN 2026
                  </h3>
                  <p className="lead mb-4">
                    Prenez part à l'essor d'une région qui incarne le futur énergétique et minier du continent. 
                    Ensemble, façonnons une nouvelle ère de croissance durable, d'innovation responsable et de 
                    prospérité partagée.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/inscription">
                      <Button size="lg" className="btn-gold">
                        S'inscrire maintenant
                      </Button>
                    </Link>
                    <Link href="/catalogue">
                      <Button size="lg" variant="primary">
                        Découvrir le catalogue
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

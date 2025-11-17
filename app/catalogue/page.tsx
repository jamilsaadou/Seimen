'use client';

import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';
import Link from 'next/link';

export default function Catalogue() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
              <h1 className="mb-4">Catalogue Officiel SEIMEN 2026</h1>
              <p className="lead mb-0">
                Découvrez nos partenaires, parrains, sponsors et exposants - Acteurs d'exception de l'innovation et de l'excellence
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Introduction */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <Card className="border-0 bg-light-section">
                <Card.Body className="p-5">
                  <h2 className="text-dark-green mb-4 text-center">
                    Présentation des Partenaires et Exposants
                  </h2>
                  <p className="lead text-center mb-4">
                    Le SEIMEN n'est pas seulement un salon, c'est le catalyseur incontournable des transformations 
                    majeures dans les secteurs minier et énergétique africains.
                  </p>
                  <p className="mb-4">
                    Au cœur de cette dynamique, nos partenaires, parrains, sponsors et exposants incarnent l'excellence, 
                    l'innovation et la vision d'un futur durable. Ils ne sont pas de simples participants : ce sont des 
                    leaders mondiaux, des innovateurs disruptifs et des investisseurs stratégiques qui investissent leur 
                    savoir-faire, leurs ressources et leur réseau pour façonner ensemble un écosystème robuste et 
                    compétitif à l'échelle internationale.
                  </p>
                  <p className="mb-0">
                    Ce catalogue est la vitrine exclusive de ces acteurs d'exception, une plateforme premium pour 
                    présenter leurs avancées technologiques, leurs solutions durables et leurs opportunités d'affaires.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Quick Access */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <h2 className="section-title">Accès Rapide</h2>
              <Row className="g-4">
                <Col md={4}>
                  <Card className="h-100 text-center">
                    <Card.Body className="p-4">
                      <div className="feature-icon mb-3">
                        <i className="bi bi-trophy"></i>
                      </div>
                      <h4 className="mb-3">Parrains</h4>
                      <p className="mb-4">
                        Partenaires d'influence et de prestige contribuant à la vision stratégique du SEIMEN
                      </p>
                      <Link href="/catalogue/parrains">
                        <Button variant="primary" className="w-100">
                          Découvrir les parrains
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 text-center">
                    <Card.Body className="p-4">
                      <div className="feature-icon mb-3">
                        <i className="bi bi-star"></i>
                      </div>
                      <h4 className="mb-3">Sponsors</h4>
                      <p className="mb-4">
                        Soutiens stratégiques renforçant la qualité et la portée de l'événement
                      </p>
                      <Link href="/catalogue/sponsors">
                        <Button variant="primary" className="w-100">
                          Découvrir les sponsors
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={4}>
                  <Card className="h-100 text-center">
                    <Card.Body className="p-4">
                      <div className="feature-icon mb-3">
                        <i className="bi bi-buildings"></i>
                      </div>
                      <h4 className="mb-3">Exposants</h4>
                      <p className="mb-4">
                        Entreprises et organisations présentant innovations et solutions
                      </p>
                      <Link href="/catalogue/exposants">
                        <Button variant="primary" className="w-100">
                          Découvrir les exposants
                        </Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Why Partner */}
          <Row className="mb-5">
            <Col lg={10} className="mx-auto">
              <h2 className="section-title">Pourquoi parrainer ou exposer au SEIMEN ?</h2>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="h-100 border-0">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start mb-3">
                        <i className="bi bi-globe text-primary-green fs-3 me-3"></i>
                        <div>
                          <h5 className="mb-2">Exposition Unique sur la Scène Internationale</h5>
                          <p className="mb-0">
                            Le SEIMEN se positionne comme la plateforme africaine de référence, rassemblant 
                            décideurs politiques, investisseurs majeurs et experts de renommée mondiale.
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 border-0">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start mb-3">
                        <i className="bi bi-award text-primary-green fs-3 me-3"></i>
                        <div>
                          <h5 className="mb-2">Valorisation de votre Image</h5>
                          <p className="mb-0">
                            S'associer au SEIMEN, c'est afficher un engagement fort en faveur du développement 
                            durable et de l'innovation technologique.
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 border-0">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start mb-3">
                        <i className="bi bi-people text-primary-green fs-3 me-3"></i>
                        <div>
                          <h5 className="mb-2">Accès Privilégié au Réseau d'Affaires</h5>
                          <p className="mb-0">
                            Facilitez la mise en relation avec des partenaires stratégiques, clients potentiels 
                            et institutions publiques.
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 border-0">
                    <Card.Body className="p-4">
                      <div className="d-flex align-items-start mb-3">
                        <i className="bi bi-phone text-primary-green fs-3 me-3"></i>
                        <div>
                          <h5 className="mb-2">Visibilité Multicanal</h5>
                          <p className="mb-0">
                            Stratégie digitale avancée avec catalogue interactif, application mobile et 
                            couverture médiatique internationale.
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Search Section */}
          <Row>
            <Col lg={10} className="mx-auto">
              <Card className="border-0 bg-primary-green text-white">
                <Card.Body className="p-5">
                  <h3 className="text-center mb-4 text-white">Rechercher un Partenaire ou Exposant</h3>
                  <Form>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Control 
                          type="text" 
                          placeholder="Nom de l'entreprise ou organisation" 
                          size="lg"
                        />
                      </Col>
                      <Col md={4}>
                        <Form.Select size="lg">
                          <option>Tous les secteurs</option>
                          <option>Mines & Métaux</option>
                          <option>Énergie</option>
                          <option>Services</option>
                          <option>Technologie</option>
                          <option>Finance</option>
                        </Form.Select>
                      </Col>
                      <Col md={2}>
                        <Button variant="light" size="lg" className="w-100">
                          <i className="bi bi-search"></i> Rechercher
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-light-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center">
              <h2 className="h1 mb-4">Devenez Partenaire du SEIMEN 2026</h2>
              <p className="lead mb-4">
                Rejoignez-nous dès maintenant et devenez un acteur clé de la révolution minière et énergétique africaine.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/exposer">
                  <Button size="lg" className="btn-gold">
                    Devenir Exposant
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="primary">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

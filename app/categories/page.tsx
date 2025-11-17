'use client';

import { Container, Row, Col, Button, Card, ListGroup } from 'react-bootstrap';
import Link from 'next/link';

export default function Categories() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
              <h1 className="mb-4">Catégories de Participants</h1>
              <p className="lead mb-0">
                Pour répondre aux besoins spécifiques de chaque profil, le SEIMEN propose plusieurs types d'inscriptions avec des accès adaptés
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="section-padding">
        <Container>
          {/* Délégués Généraux */}
          <div id="delegues" className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4">
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-green mb-3">Catégorie Professionnelle</span>
                        <h2 className="text-dark-green mb-0">Délégués Généraux</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-primary-green fs-2 fw-bold">1.000.000 FCFA</div>
                        <small className="text-muted">Hors taxes (+ TVA 19%)</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Fournisseurs de services miniers, y compris les services contractuels
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Opérateurs de contrats miniers et de transformation
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Fournisseurs d'équipement, ingénieurs, consultants et logistique
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Cabinets juridiques, financiers, de ressources humaines et de recrutement
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Cabinets de conformité, de conseil et consultants
                      </ListGroup.Item>
                    </ListGroup>

                    <h5 className="text-primary-green mb-3">Qu'est-ce qui est inclus dans votre billet ?</h5>
                    <Row className="g-3 mb-4">
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Kit participant complet et certificat
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Accès à plus de 300 stands d'exposition
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Réunions avec 5 000+ professionnels
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Barbecue d'accueil et soirée d'intégration
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Plus de 10 scènes et espaces de conférences
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Pause-café, rafraîchissements et déjeuner
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Mining Pulse (version imprimée ou app)
                        </div>
                      </Col>
                      <Col md={6}>
                        <div className="p-3 bg-light-section rounded">
                          <i className="bi bi-check2 text-primary-green me-2"></i>
                          Soirée de clôture et remise de trophées
                        </div>
                      </Col>
                    </Row>

                    <Link href="/inscription">
                      <Button size="lg" className="btn-gold">
                        S'inscrire maintenant
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Sociétés Minières */}
          <div id="societes" className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4">
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-green mb-3">Sociétés Minières & Énergétiques</span>
                        <h2 className="text-dark-green mb-0">Sociétés en Phase Avancée</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-primary-green fs-2 fw-bold">600.000 FCFA</div>
                        <small className="text-muted">Hors taxes (+ TVA 19%)</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Sociétés cotées ou privées détenant des licences minières
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Activité principale : exploration, développement ou exploitation
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Possède plusieurs mines de production sur différents continents
                      </ListGroup.Item>
                    </ListGroup>

                    <Link href="/inscription">
                      <Button size="lg" variant="primary">
                        S'inscrire maintenant
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Sociétés Émergentes */}
          <div className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4">
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-green mb-3">Sociétés Émergentes</span>
                        <h2 className="text-dark-green mb-0">Sociétés Émergentes du Secteur</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-primary-green fs-2 fw-bold">600.000 FCFA</div>
                        <small className="text-muted">Hors taxes (+ TVA 19%)</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Sociétés détenant des licences d'exploration ou d'exploitation valides
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Engagement dans la prospection, l'exploration ou le développement
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Recherche active d'investissement ou de partenaires
                      </ListGroup.Item>
                    </ListGroup>

                    <Link href="/inscription">
                      <Button size="lg" variant="primary">
                        S'inscrire maintenant
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Investisseurs */}
          <div id="investisseurs" className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4 border-warning" style={{borderWidth: '3px'}}>
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-gold mb-3">Accès Privilégié</span>
                        <h2 className="text-dark-green mb-0">Investisseurs</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-gold fs-2 fw-bold">GRATUIT</div>
                        <small className="text-muted">Sur réserve d'approbation</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Investisseurs professionnels (capital-investissement, capital-risque)
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Fonds souverains, fonds spéculatifs, bureaux familiaux
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Banques d'entreprise ou institutionnelles
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Investisseurs privés (preuve de 1M$ USD d'actifs liquides)
                      </ListGroup.Item>
                    </ListGroup>

                    <div className="alert alert-warning">
                      <i className="bi bi-info-circle me-2"></i>
                      Inscription obligatoire via : <strong>investisseurs@seimen.com</strong>
                    </div>

                    <a href="mailto:investisseurs@seimen.com">
                      <Button size="lg" className="btn-gold">
                        Demander une accréditation
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Acheteurs en aval */}
          <div className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4 border-warning" style={{borderWidth: '3px'}}>
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-gold mb-3">Accès Privilégié</span>
                        <h2 className="text-dark-green mb-0">Acheteurs en Aval</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-gold fs-2 fw-bold">GRATUIT</div>
                        <small className="text-muted">Sur réserve d'approbation</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Secteurs : Automobile, Batteries, Sidérurgie/acier
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Électronique grand public, Aérospatiale, Défense
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Industrie manufacturière
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section">
                        <i className="bi bi-check-circle-fill text-gold me-2"></i>
                        Recherche de matières premières ou d'accords d'approvisionnement
                      </ListGroup.Item>
                    </ListGroup>

                    <div className="alert alert-warning">
                      <i className="bi bi-info-circle me-2"></i>
                      Inscription obligatoire via : <strong>acheteurs@seimen.com</strong>
                    </div>

                    <a href="mailto:acheteurs@seimen.com">
                      <Button size="lg" className="btn-gold">
                        Demander une accréditation
                      </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Jeunes Professionnels */}
          <div className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4 border-success" style={{borderWidth: '3px'}}>
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-green mb-3">Accès Jeunesse</span>
                        <h2 className="text-dark-green mb-0">Jeunes Professionnels</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-primary-green fs-2 fw-bold">GRATUIT</div>
                        <small className="text-muted">Sur validation</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Étudiants et jeunes diplômés (moins de 30 ans)
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Professionnels en début de carrière (moins de 5 ans d'expérience)
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Inscription avec e-mail professionnel et preuve de statut
                      </ListGroup.Item>
                    </ListGroup>

                    <h5 className="text-primary-green mb-3">Accès inclus</h5>
                    <p className="mb-4">Accès partiel aux dernières journées avec contenus dédiés à la jeunesse.</p>

                    <Link href="/inscription">
                      <Button size="lg" variant="primary">
                        S'inscrire maintenant
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Presse */}
          <div className="mb-5">
            <Row>
              <Col lg={10} className="mx-auto">
                <Card className="border-0 shadow-lg mb-4">
                  <Card.Body className="p-5">
                    <div className="d-flex justify-content-between align-items-start mb-4 flex-wrap">
                      <div>
                        <span className="badge badge-green mb-3">Accréditation Presse</span>
                        <h2 className="text-dark-green mb-0">Presse & Médias</h2>
                      </div>
                      <div className="text-end">
                        <div className="text-primary-green fs-2 fw-bold">GRATUIT</div>
                        <small className="text-muted">Sur accréditation</small>
                      </div>
                    </div>

                    <h5 className="text-primary-green mb-3">Qui est admissible ?</h5>
                    <ListGroup className="mb-4">
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Journalistes accrédités
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Publications spécialisées ou commerciales
                      </ListGroup.Item>
                      <ListGroup.Item className="border-0 bg-light-section mb-2">
                        <i className="bi bi-check-circle-fill text-primary-green me-2"></i>
                        Radiodiffuseurs et correspondants indépendants
                      </ListGroup.Item>
                    </ListGroup>

                    <Link href="/presse">
                      <Button size="lg" variant="primary">
                        Espace Presse
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>

          {/* Note importante */}
          <Row>
            <Col lg={10} className="mx-auto">
              <div className="alert alert-info">
                <h5 className="alert-heading">
                  <i className="bi bi-info-circle me-2"></i>
                  Information importante
                </h5>
                <p className="mb-0">
                  Les tarifs indiqués n'incluent pas la TVA de 19% (République du Niger), qui sera ajoutée lors du paiement. 
                  Veuillez préparer les informations de votre carte bancaire au moment de l'inscription.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0 text-center text-lg-start">
              <h2 className="h1 mb-3">Prêt à participer au SEIMEN 2026 ?</h2>
              <p className="lead mb-0">
                Choisissez votre catégorie et inscrivez-vous dès maintenant pour ne pas manquer cet événement historique.
              </p>
            </Col>
            <Col lg={4} className="text-center text-lg-end">
              <Link href="/inscription">
                <Button size="lg" className="btn-gold">
                  S'inscrire maintenant
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

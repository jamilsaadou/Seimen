'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
              <h1 className="mb-4">Contactez-nous</h1>
              <p className="lead mb-0">
                Notre équipe est à votre disposition pour répondre à toutes vos questions
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            {/* Contact Info Cards */}
            <Col lg={4} className="mb-4">
              <Card className="h-100 text-center border-0">
                <Card.Body className="p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-envelope"></i>
                  </div>
                  <h5 className="mb-3">Email</h5>
                  <p className="mb-2">
                    <a href="mailto:contact@seimen2026.ne" className="text-primary-green fw-bold">
                      contact@seimen2026.ne
                    </a>
                  </p>
                  <p className="text-muted small mb-0">Réponse sous 24-48h</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} className="mb-4">
              <Card className="h-100 text-center border-0">
                <Card.Body className="p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-telephone"></i>
                  </div>
                  <h5 className="mb-3">Téléphone</h5>
                  <p className="mb-2">
                    <a href="tel:+227XXXXXXXX" className="text-primary-green fw-bold">
                      +227 XX XX XX XX
                    </a>
                  </p>
                  <p className="text-muted small mb-0">Lun-Ven: 8h-17h (WAT)</p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={4} className="mb-4">
              <Card className="h-100 text-center border-0">
                <Card.Body className="p-4">
                  <div className="feature-icon mb-3">
                    <i className="bi bi-geo-alt"></i>
                  </div>
                  <h5 className="mb-3">Adresse</h5>
                  <p className="mb-2 text-primary-green fw-bold">
                    Centre Mahatma Gandhi
                  </p>
                  <p className="text-muted small mb-0">Niamey, Niger</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col lg={8} className="mx-auto">
              {/* Contact Form */}
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <h2 className="text-dark-green mb-4 text-center">Envoyez-nous un message</h2>
                  <Form>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Prénom <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Votre prénom" 
                            required 
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Nom <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="text" 
                            placeholder="Votre nom" 
                            required 
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                          <Form.Control 
                            type="email" 
                            placeholder="votre.email@exemple.com" 
                            required 
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Téléphone</Form.Label>
                          <Form.Control 
                            type="tel" 
                            placeholder="+227 XX XX XX XX" 
                            size="lg"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Organisation</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Nom de votre entreprise ou organisation" 
                        size="lg"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Sujet <span className="text-danger">*</span></Form.Label>
                      <Form.Select size="lg" required>
                        <option value="">Sélectionnez un sujet</option>
                        <option value="inscription">Inscription participant</option>
                        <option value="exposant">Devenir exposant</option>
                        <option value="partenariat">Opportunités de partenariat</option>
                        <option value="sponsoring">Sponsoring</option>
                        <option value="presse">Accréditation presse</option>
                        <option value="hebergement">Hébergement et logistique</option>
                        <option value="autre">Autre question</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={5} 
                        placeholder="Décrivez votre demande en détail..." 
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Check 
                        type="checkbox" 
                        id="privacy-check"
                        label="J'accepte que mes données soient utilisées pour traiter ma demande conformément à la politique de confidentialité"
                        required
                      />
                    </Form.Group>

                    <div className="text-center">
                      <Button type="submit" size="lg" className="btn-gold px-5">
                        <i className="bi bi-send me-2"></i>
                        Envoyer le message
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Specific Contacts Section */}
      <section className="section-padding bg-light-section">
        <Container>
          <h2 className="section-title">Contacts Spécialisés</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <Card className="h-100 border-0">
                <Card.Body className="p-4 text-center">
                  <i className="bi bi-briefcase text-primary-green fs-2 mb-3"></i>
                  <h5 className="mb-3">Investisseurs</h5>
                  <p className="small text-muted mb-2">Accès privilégié et partenariats</p>
                  <a href="mailto:investisseurs@seimen.com" className="text-primary-green fw-bold small">
                    investisseurs@seimen.com
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0">
                <Card.Body className="p-4 text-center">
                  <i className="bi bi-cart text-primary-green fs-2 mb-3"></i>
                  <h5 className="mb-3">Acheteurs</h5>
                  <p className="small text-muted mb-2">Approvisionnement en matières premières</p>
                  <a href="mailto:acheteurs@seimen.com" className="text-primary-green fw-bold small">
                    acheteurs@seimen.com
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0">
                <Card.Body className="p-4 text-center">
                  <i className="bi bi-building text-primary-green fs-2 mb-3"></i>
                  <h5 className="mb-3">Gouvernements</h5>
                  <p className="small text-muted mb-2">Délégations officielles</p>
                  <a href="mailto:government@seimen.com" className="text-primary-green fw-bold small">
                    government@seimen.com
                  </a>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={3}>
              <Card className="h-100 border-0">
                <Card.Body className="p-4 text-center">
                  <i className="bi bi-camera text-primary-green fs-2 mb-3"></i>
                  <h5 className="mb-3">Presse</h5>
                  <p className="small text-muted mb-2">Accréditation médias</p>
                  <a href="mailto:presse@seimen.com" className="text-primary-green fw-bold small">
                    presse@seimen.com
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-primary-green text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0 text-center text-lg-start">
              <h2 className="h1 mb-3 text-white">Suivez-nous sur les réseaux sociaux</h2>
              <p className="lead mb-0">
                Restez informés des dernières actualités du SEIMEN 2026
              </p>
            </Col>
            <Col lg={6} className="text-center text-lg-end">
              <div className="d-flex gap-3 justify-content-center justify-content-lg-end">
                <a href="#" className="btn btn-light btn-lg rounded-circle" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="bi bi-facebook fs-4"></i>
                </a>
                <a href="#" className="btn btn-light btn-lg rounded-circle" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="bi bi-twitter fs-4"></i>
                </a>
                <a href="#" className="btn btn-light btn-lg rounded-circle" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
                <a href="#" className="btn btn-light btn-lg rounded-circle" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="bi bi-instagram fs-4"></i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

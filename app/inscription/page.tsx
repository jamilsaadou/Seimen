'use client';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Link from 'next/link';

export default function Inscription() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
              <h1 className="mb-4">Inscription SEIMEN 2026</h1>
              <p className="lead mb-0">
                Rejoignez-nous pour le plus grand événement minier et énergétique d'Afrique de l'Ouest
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Registration Form Section */}
      <section className="section-padding">
        <Container>
          <Row className="mb-5">
            <Col lg={8} className="mx-auto">
              <Card className="border-0 shadow-lg">
                <Card.Body className="p-5">
                  <h2 className="text-dark-green mb-4 text-center">Formulaire d'Inscription</h2>
                  <p className="text-center mb-4">
                    Veuillez remplir tous les champs obligatoires marqués d'un astérisque (*)
                  </p>

                  <Form>
                    {/* Category Selection */}
                    <div className="mb-4 p-4 bg-light-section rounded">
                      <h5 className="text-primary-green mb-3">Catégorie de Participant</h5>
                      <Form.Group>
                        <div className="select-shell">
                          <Form.Select size="lg" required className="select-shell__field">
                            <option value="">Sélectionnez votre catégorie *</option>
                            <option value="delegue">Délégué Général - 1.000.000 FCFA HT</option>
                            <option value="societe-avancee">Société Minière (Phase Avancée) - 600.000 FCFA HT</option>
                            <option value="societe-emergente">Société Émergente - 600.000 FCFA HT</option>
                            <option value="investisseur">Investisseur - Gratuit (sur approbation)</option>
                            <option value="acheteur">Acheteur en Aval - Gratuit (sur approbation)</option>
                            <option value="jeune">Jeune Professionnel - Gratuit (sur validation)</option>
                            <option value="presse">Presse - Gratuit (sur accréditation)</option>
                          </Form.Select>
                        </div>
                        <Form.Text className="text-muted">
                          <Link href="/categories" className="text-primary-green">
                            Voir les détails de chaque catégorie
                          </Link>
                        </Form.Text>
                      </Form.Group>
                    </div>

                    {/* Personal Information */}
                    <h5 className="text-primary-green mb-3">Informations Personnelles</h5>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Prénom <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="Votre prénom" required size="lg" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Nom <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="Votre nom" required size="lg" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Email Professionnel <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="email" placeholder="prenom.nom@entreprise.com" required size="lg" />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Téléphone <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="tel" placeholder="+227 XX XX XX XX" required size="lg" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Fonction/Titre <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Ex: Directeur des Opérations" required size="lg" />
                    </Form.Group>

                    {/* Company Information */}
                    <h5 className="text-primary-green mb-3 mt-4">Informations sur l'Organisation</h5>
                    <Form.Group className="mb-3">
                      <Form.Label>Nom de l'Organisation <span className="text-danger">*</span></Form.Label>
                      <Form.Control type="text" placeholder="Nom de votre entreprise ou organisation" required size="lg" />
                    </Form.Group>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Secteur d'Activité <span className="text-danger">*</span></Form.Label>
                          <div className="select-shell">
                            <Form.Select size="lg" required className="select-shell__field">
                              <option value="">Sélectionnez un secteur</option>
                              <option value="mines">Mines & Métaux</option>
                              <option value="energie">Énergie</option>
                              <option value="petrole">Pétrole & Gaz</option>
                              <option value="services">Services Miniers</option>
                              <option value="equipement">Équipements</option>
                              <option value="finance">Finance & Investissement</option>
                              <option value="conseil">Conseil & Juridique</option>
                              <option value="technologie">Technologie</option>
                              <option value="autre">Autre</option>
                            </Form.Select>
                          </div>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label>Pays <span className="text-danger">*</span></Form.Label>
                          <Form.Control type="text" placeholder="Ex: Niger, France, Sénégal..." required size="lg" />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Site Web</Form.Label>
                      <Form.Control type="url" placeholder="https://www.exemple.com" size="lg" />
                    </Form.Group>

                    {/* Interests */}
                    <h5 className="text-primary-green mb-3 mt-4">Centres d'Intérêt</h5>
                    <Form.Group className="mb-3">
                      <Form.Label>Quels sont vos principaux objectifs pour le SEIMEN 2026 ? *</Form.Label>
                      <div className="mb-2">
                        <Form.Check type="checkbox" id="objectif-1" label="Networking et rencontres B2B/B2G" />
                      </div>
                      <div className="mb-2">
                        <Form.Check type="checkbox" id="objectif-2" label="Découvrir des innovations et technologies" />
                      </div>
                      <div className="mb-2">
                        <Form.Check type="checkbox" id="objectif-3" label="Identifier des opportunités d'investissement" />
                      </div>
                      <div className="mb-2">
                        <Form.Check type="checkbox" id="objectif-4" label="Présenter nos produits/services" />
                      </div>
                      <div className="mb-2">
                        <Form.Check type="checkbox" id="objectif-5" label="Participer aux conférences et ateliers" />
                      </div>
                      <div className="mb-2">
                        <Form.Check type="checkbox" id="objectif-6" label="Explorer le marché africain" />
                      </div>
                    </Form.Group>

                    {/* Special Requests */}
                    <Form.Group className="mb-4">
                      <Form.Label>Besoins Spéciaux / Commentaires</Form.Label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Régime alimentaire, accessibilité, demandes particulières..."
                      />
                    </Form.Group>

                    {/* Terms */}
                    <div className="mb-4 p-4 bg-light-section rounded">
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="checkbox" 
                          id="terms-check"
                          label="J'accepte les conditions générales d'utilisation et la politique de confidentialité *"
                          required
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Check 
                          type="checkbox" 
                          id="newsletter-check"
                          label="Je souhaite recevoir des informations sur le SEIMEN et les événements futurs"
                        />
                      </Form.Group>
                      <div className="alert alert-info mb-0">
                        <small>
                          <i className="bi bi-info-circle me-2"></i>
                          Les tarifs indiqués n'incluent pas la TVA de 19% (République du Niger). 
                          Le paiement sera effectué à l'étape suivante.
                        </small>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button type="submit" size="lg" className="btn-gold px-5">
                        <i className="bi bi-check-circle me-2"></i>
                        Continuer vers le paiement
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Help Section */}
          <Row>
            <Col lg={8} className="mx-auto">
              <Card className="border-0 bg-light-section">
                <Card.Body className="p-4 text-center">
                  <h5 className="text-dark-green mb-3">Besoin d'aide pour l'inscription ?</h5>
                  <p className="mb-3">
                    Notre équipe est disponible pour vous assister dans votre processus d'inscription.
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/contact">
                      <Button variant="primary">
                        <i className="bi bi-envelope me-2"></i>
                        Nous contacter
                      </Button>
                    </Link>
                    <Link href="/faq">
                      <Button variant="outline-primary">
                        <i className="bi bi-question-circle me-2"></i>
                        Consulter la FAQ
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

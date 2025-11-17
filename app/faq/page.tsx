'use client';

import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Link from 'next/link';

export default function FAQ() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={10} className="mx-auto text-center">
              <h1 className="mb-4">Questions Fréquentes (FAQ)</h1>
              <p className="lead mb-0">
                Trouvez rapidement les réponses à vos questions sur le SEIMEN 2026
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <Container>
          <Row>
            <Col lg={10} className="mx-auto">
              {/* General Questions */}
              <div className="mb-5">
                <h2 className="text-dark-green mb-4">
                  <i className="bi bi-question-circle me-3"></i>
                  Questions Générales
                </h2>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Qu'est-ce que le SEIMEN ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Le SEIMEN (Salon & Exposition Internationale des Mines et de l'Énergie du Niger) est un 
                      événement majeur qui se tiendra du 20 au 23 avril 2026 à Niamey. C'est une plateforme 
                      internationale conçue pour catalyser l'innovation, les investissements et la coopération 
                      autour des ressources naturelles et de la transition énergétique en Afrique.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Où se déroulera le SEIMEN 2026 ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Le SEIMEN 2026 se déroulera au Centre International de Conférences Mahatma Gandhi à Niamey, 
                      Niger. Ce lieu prestigieux offre des infrastructures modernes et des espaces adaptés pour 
                      accueillir plus de 5 000 participants et 300 exposants.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Quelles sont les dates du salon ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Le SEIMEN 2026 se tiendra du 20 au 23 avril 2026, soit 4 jours complets d'exposition, 
                      de conférences et de networking.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Quel est le thème principal du SEIMEN 2026 ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Le thème central est : « Ressources naturelles et transition énergétique : catalyser 
                      l'innovation, les investissements et le développement durable en Afrique ».
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Registration Questions */}
              <div className="mb-5">
                <h2 className="text-dark-green mb-4">
                  <i className="bi bi-ticket-perforated me-3"></i>
                  Inscription et Billetterie
                </h2>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Comment s'inscrire au SEIMEN 2026 ?
                    </Accordion.Header>
                    <Accordion.Body>
                      L'inscription se fait en ligne via notre plateforme officielle. Visitez la page{' '}
                      <Link href="/inscription" className="text-primary-green fw-bold">Inscription</Link> et 
                      choisissez votre catégorie de participant. Vous devrez fournir vos informations personnelles 
                      et procéder au paiement en ligne.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Quels sont les différents types de billets disponibles ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Nous proposons plusieurs catégories :
                      <ul className="mt-3">
                        <li><strong>Délégués Généraux :</strong> 1.000.000 FCFA HT</li>
                        <li><strong>Sociétés Minières :</strong> 600.000 FCFA HT</li>
                        <li><strong>Investisseurs :</strong> Gratuit (sur approbation)</li>
                        <li><strong>Acheteurs en aval :</strong> Gratuit (sur approbation)</li>
                        <li><strong>Jeunes Professionnels :</strong> Gratuit (sur validation)</li>
                        <li><strong>Presse :</strong> Gratuit (sur accréditation)</li>
                      </ul>
                      Consultez la page <Link href="/categories" className="text-primary-green fw-bold">Catégories</Link> pour plus de détails.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Les tarifs incluent-ils la TVA ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Non, les tarifs affichés sont hors taxes. La TVA de 19% (République du Niger) sera ajoutée 
                      lors du paiement final.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Quels modes de paiement sont acceptés ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Nous acceptons les paiements par carte bancaire (Visa, MasterCard) et par virement bancaire. 
                      Les instructions détaillées vous seront fournies lors de l'inscription.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Puis-je annuler ou modifier mon inscription ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Les demandes d'annulation ou de modification doivent être envoyées par email à{' '}
                      <a href="mailto:contact@seimen2026.ne" className="text-primary-green">contact@seimen2026.ne</a>.
                      Les conditions d'annulation varient selon la date de la demande. Consultez nos conditions 
                      générales pour plus de détails.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Exhibitors Questions */}
              <div className="mb-5">
                <h2 className="text-dark-green mb-4">
                  <i className="bi bi-shop me-3"></i>
                  Exposants
                </h2>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Comment devenir exposant au SEIMEN ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Pour devenir exposant, visitez la page{' '}
                      <Link href="/exposer" className="text-primary-green fw-bold">Devenir Exposant</Link> et 
                      remplissez le formulaire de demande. Notre équipe vous contactera pour discuter des options 
                      de stands disponibles et finaliser votre participation.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Quels types de stands sont disponibles ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Nous proposons plusieurs formats :
                      <ul className="mt-3">
                        <li>Stands standards</li>
                        <li>Stands premium</li>
                        <li>Espaces lounges networking</li>
                      </ul>
                      La tarification est modulée selon la taille, l'emplacement et le type d'exposant.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Qu'est-ce qui est inclus dans la location d'un stand ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Les services inclus sont :
                      <ul className="mt-3">
                        <li>Accès à l'électricité et connexion internet haut débit</li>
                        <li>Mobilier de base (tables, chaises, éclairage)</li>
                        <li>Accréditations officielles exposants</li>
                        <li>Assistance logistique avant et pendant l'événement</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Practical Info Questions */}
              <div className="mb-5">
                <h2 className="text-dark-green mb-4">
                  <i className="bi bi-info-circle me-3"></i>
                  Informations Pratiques
                </h2>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Comment se rendre au centre de conférences ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Le Centre International de Conférences Mahatma Gandhi est facilement accessible depuis 
                      l'aéroport de Niamey. Des transferts organisés seront disponibles entre l'aéroport, les 
                      hôtels et le centre de conférence. Des parkings sont également disponibles sur place.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Y a-t-il des hôtels recommandés ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Oui, nous avons établi des partenariats avec plusieurs hôtels locaux offrant des tarifs 
                      préférentiels aux participants. La liste complète des hôtels partenaires sera disponible 
                      sur la page <Link href="/hebergement" className="text-primary-green fw-bold">Hébergement</Link>.
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Quelles sont les mesures de sécurité prévues ?
                    </Accordion.Header>
                    <Accordion.Body>
                      La sécurité est notre priorité :
                      <ul className="mt-3">
                        <li>Contrôle d'accès rigoureux avec badge obligatoire</li>
                        <li>Présence permanente d'agents de sécurité (24h/24 et 7j/7)</li>
                        <li>Assistance médicale sur place</li>
                        <li>Procédures d'évacuation clairement affichées</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Un visa est-il nécessaire pour entrer au Niger ?
                    </Accordion.Header>
                    <Accordion.Body>
                      Selon votre nationalité, un visa peut être nécessaire. Nous vous recommandons de contacter 
                      l'ambassade ou le consulat du Niger dans votre pays pour connaître les exigences spécifiques. 
                      Des lettres d'invitation peuvent être fournies aux participants inscrits si nécessaire.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              {/* Contact CTA */}
              <div className="card bg-primary-green text-white">
                <div className="card-body p-5 text-center">
                  <h3 className="text-white mb-3">Vous n'avez pas trouvé votre réponse ?</h3>
                  <p className="lead mb-4">
                    Notre équipe est à votre disposition pour répondre à toutes vos questions.
                  </p>
                  <Link href="/contact">
                    <button className="btn btn-gold btn-lg">
                      Nous contacter
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

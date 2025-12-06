import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HeroSlider from '@/components/HeroSlider';

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Central Theme Highlight */}
      <section className="theme-highlight">
        <Container>
          <div className="theme-card">
            <p className="theme-pill mb-3">Thème central 2026</p>
            <h2 className="mb-4 text-white">
              « Ressources naturelles et transition énergétique : catalyser l'innovation,
              les investissements et le développement durable en Afrique »
            </h2>
            <p className="mb-0 text-white-50">
              Une vision ambitieuse qui place le Niger au cœur des dynamiques mondiales pour
              connecter souveraineté énergétique, inclusion économique et innovation responsable.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-light-section">
        <Container>
          <Row className="g-4">
            <Col md={3} sm={6}>
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-building"></i>
                </div>
                <div className="stats-number">300+</div>
                <p className="mb-0 fw-bold">Exposants</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-people-fill"></i>
                </div>
                <div className="stats-number">5000+</div>
                <p className="mb-0 fw-bold">Participants</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-mic-fill"></i>
                </div>
                <div className="stats-number">10+</div>
                <p className="mb-0 fw-bold">Scènes & Conférences</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="stats-card">
                <div className="stats-icon">
                  <i className="bi bi-lightning-charge-fill"></i>
                </div>
                <div className="stats-number">4</div>
                <p className="mb-0 fw-bold">Jours d'Innovation</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Pourquoi le SEIMEN est-il incontournable ?</h2>
          
          {/* Image du Centre de Conférence */}
          <Row className="mb-5">
            <Col lg={12}>
              <div className="card">
                <Image
                  src="/Centre-International-de-Conference-Mahatma-Gandhi-8.jpg"
                  alt="Centre International de Conférence Mahatma Gandhi - Niamey"
                  width={1200}
                  height={600}
                  className="card-img-top"
                  style={{ objectFit: 'cover', height: '400px' }}
                />
                <div className="card-body text-center p-3">
                  <p className="mb-0 text-muted fw-bold">
                    Centre International de Conférence Mahatma Gandhi - Niamey, Niger
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="align-items-center mb-5">
            <Col lg={6} className="mb-4 mb-lg-0">
              <p className="lead text-primary-green fw-bold">
                Un carrefour stratégique au cœur du Sahel
              </p>
              <p className="mb-4">
                Le SEIMEN place le Niger au centre d'un carrefour stratégique où se croisent les enjeux mondiaux 
                de souveraineté énergétique, de développement durable et d'innovation technologique.
              </p>
              <p className="mb-4">
                C'est l'opportunité unique de connecter décideurs politiques, investisseurs, entreprises et experts 
                du monde entier dans un cadre propice à la concrétisation d'affaires à fort impact.
              </p>
              <Link href="/presentation">
                <Button variant="primary" size="lg">
                  Découvrir l'événement
                </Button>
              </Link>
            </Col>
            <Col lg={6}>
              <div className="about-image-wrap">
                <Image
                  src="/belle-centrale-d-energie-alternative-avec-panneaux-solaires.jpg"
                  alt="Transition énergétique et innovation durable"
                  width={700}
                  height={520}
                  className="about-image"
                  sizes="(max-width: 992px) 100vw, 50vw"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light-section">
        <Container>
          <h2 className="section-title">Ce que le SEIMEN offre</h2>
          <Row className="g-4">
            <Col md={6} lg={3}>
              <div className="card h-100 text-center">
                <div className="card-body p-4">
                  <div className="feature-icon">
                    <i className="bi bi-lightbulb"></i>
                  </div>
                  <h5 className="mb-3">Innovation</h5>
                  <p className="mb-0">
                    Un panorama exclusif des innovations en énergie verte, extraction responsable et digitalisation.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="card h-100 text-center">
                <div className="card-body p-4">
                  <div className="feature-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <h5 className="mb-3">Networking</h5>
                  <p className="mb-0">
                    Des rencontres B2B et B2G ciblées pour créer des partenariats solides et stratégiques.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="card h-100 text-center">
                <div className="card-body p-4">
                  <div className="feature-icon">
                    <i className="bi bi-globe"></i>
                  </div>
                  <h5 className="mb-3">Tribune Internationale</h5>
                  <p className="mb-0">
                    Rencontres avec des leaders, experts et entrepreneurs du monde entier.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="card h-100 text-center">
                <div className="card-body p-4">
                  <div className="feature-icon">
                    <i className="bi bi-rocket"></i>
                  </div>
                  <h5 className="mb-3">Jeunesse & Startups</h5>
                  <p className="mb-0">
                    Un espace dédié aux jeunes talents, véritables moteurs de la révolution énergétique.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Participant Categories */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Catégories de Participants</h2>
          <Row className="g-4">
            <Col md={6} lg={4}>
              <div className="card h-100">
                <div className="category-image-wrapper">
                  <Image
                    src="/delegue.jpeg"
                    alt="Délégués Généraux"
                    width={400}
                    height={280}
                    className="category-image"
                  />
                  <div className="category-gradient-overlay"></div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge badge-green me-2">Délégués</div>
                  </div>
                  <h5 className="mb-3">Délégués Généraux</h5>
                  <p className="mb-3">
                    Fournisseurs de services miniers, consultants, cabinets juridiques et financiers.
                  </p>
                  <Link href="/categories#delegues">
                    <Button className="btn-gold w-100">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="card h-100">
                <div className="category-image-wrapper">
                  <Image
                    src="/societe.jpeg"
                    alt="Sociétés Minières"
                    width={400}
                    height={280}
                    className="category-image"
                  />
                  <div className="category-gradient-overlay"></div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge badge-green me-2">Sociétés</div>
                  </div>
                  <h5 className="mb-3">Sociétés Minières</h5>
                  <p className="mb-3">
                    Sociétés en phase avancée ou émergentes dans les secteurs minier et énergétique.
                  </p>
                  <Link href="/categories#societes">
                    <Button className="btn-gold w-100">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="card h-100">
                <div className="category-image-wrapper">
                  <Image
                    src="/investisseur.jpeg"
                    alt="Investisseurs & Acheteurs"
                    width={400}
                    height={280}
                    className="category-image"
                  />
                  <div className="category-gradient-overlay"></div>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="badge badge-gold me-2">Gratuit</div>
                  </div>
                  <h5 className="mb-3">Investisseurs & Acheteurs</h5>
                  <p className="mb-3">
                    Accès privilégié pour investisseurs qualifiés et acheteurs en aval.
                  </p>
                  <Link href="/categories#investisseurs">
                    <Button className="btn-gold w-100">
                      En savoir plus
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <Link href="/categories">
              <Button variant="primary" size="lg">
                Voir toutes les catégories
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Pavillons Section */}
      <section className="section-padding bg-light-section">
        <Container>
          <h2 className="section-title">Pavillons & Espaces d'Exposition</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="card h-100">
                <div className="card-body p-4">
                  <h5 className="text-primary-green mb-3">
                    <i className="bi bi-flag me-2"></i>
                    Pavillon Niger
                  </h5>
                  <h6 className="mb-3">Terre de Ressources et d'Avenir</h6>
                  <p className="mb-4">
                    Vitrine nationale stratégique valorisant le potentiel minier, énergétique et 
                    les opportunités d'investissement au Niger.
                  </p>
                  <Link href="/pavillons#niger">
                    <Button variant="primary" className="w-100">
                      Découvrir
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card h-100">
                <div className="card-body p-4">
                  <h5 className="text-primary-green mb-3">
                    <i className="bi bi-star me-2"></i>
                    Vitrine Africaine
                  </h5>
                  <h6 className="mb-3">Innovation & Ressources</h6>
                  <p className="mb-4">
                    Espace central présentant les dynamiques innovantes du continent : mines, 
                    énergie verte, transition numérique et entrepreneuriat.
                  </p>
                  <Link href="/pavillons#africaine">
                    <Button variant="primary" className="w-100">
                      Découvrir
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="card h-100">
                <div className="card-body p-4">
                  <h5 className="text-primary-green mb-3">
                    <i className="bi bi-building me-2"></i>
                    Pavillon Ambassades
                  </h5>
                  <h6 className="mb-3">Partenariats Économiques</h6>
                  <p className="mb-4">
                    Espace dédié aux ambassades et représentations diplomatiques pour promouvoir 
                    la coopération bilatérale et multilatérale.
                  </p>
                  <Link href="/pavillons#ambassades">
                    <Button variant="primary" className="w-100">
                      Découvrir
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-green text-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={8} className="mb-4 mb-lg-0">
              <h2 className="h1 mb-3">Rejoignez-nous au SEIMEN 2026</h2>
              <p className="lead mb-0">
                Prenez part à l'essor d'une région qui incarne le futur énergétique et minier du continent. 
                Ensemble, façonnons une nouvelle ère de croissance durable et de prospérité partagée.
              </p>
            </Col>
            <Col lg={4} className="text-lg-end">
              <Link href="/inscription">
                <Button size="lg" className="btn-gold">
                  S'inscrire maintenant
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <Container>
          <h2 className="section-title">Contactez-nous</h2>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Row className="g-4">
                <Col md={4}>
                  <div className="card text-center h-100">
                    <div className="card-body p-4">
                      <div className="feature-icon mb-3">
                        <i className="bi bi-envelope"></i>
                      </div>
                      <h5 className="mb-3">Email</h5>
                      <p className="mb-0">
                        <a href="mailto:contact@seimen2026.ne" className="text-primary-green">
                          contact@seimen2026.ne
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="card text-center h-100">
                    <div className="card-body p-4">
                      <div className="feature-icon mb-3">
                        <i className="bi bi-telephone"></i>
                      </div>
                      <h5 className="mb-3">Téléphone</h5>
                      <p className="mb-0">
                        <a href="tel:+227XXXXXXXX" className="text-primary-green">
                          +227 XX XX XX XX
                        </a>
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="card text-center h-100">
                    <div className="card-body p-4">
                      <div className="feature-icon mb-3">
                        <i className="bi bi-geo-alt"></i>
                      </div>
                      <h5 className="mb-3">Lieu</h5>
                      <p className="mb-0 text-primary-green">
                        Centre Mahatma Gandhi<br />
                        Niamey, Niger
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

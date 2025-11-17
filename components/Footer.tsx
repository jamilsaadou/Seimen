import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="mb-5">
          <Col md={3} className="mb-4">
            <h5 className="text-gold mb-3">SEIMEN 2026</h5>
            <p className="mb-3">
              Salon & Exposition Internationale des Mines et de l'Énergie du Niger
            </p>
            <p className="mb-1">
              <strong>20-23 Avril 2026</strong>
            </p>
            <p>
              Centre International de Conférences Mahatma Gandhi, Niamey
            </p>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-gold mb-3">Navigation</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/presentation">Présentation</Link>
              </li>
              <li className="mb-2">
                <Link href="/inscription">S'inscrire</Link>
              </li>
              <li className="mb-2">
                <Link href="/catalogue">Catalogue</Link>
              </li>
              <li className="mb-2">
                <Link href="/agenda">Agenda</Link>
              </li>
              <li className="mb-2">
                <Link href="/exposer">Devenir Exposant</Link>
              </li>
              <li className="mb-2">
                <Link href="/presse">Espace Presse</Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-gold mb-3">Informations</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="/faq">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="/lieu">Lieu & Accès</Link>
              </li>
              <li className="mb-2">
                <Link href="/hebergement">Hébergement</Link>
              </li>
              <li className="mb-2">
                <Link href="/securite">Sécurité</Link>
              </li>
              <li className="mb-2">
                <Link href="/categories">Catégories</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </Col>

          <Col md={3} className="mb-4">
            <h5 className="text-gold mb-3">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-envelope me-2"></i>
                <a href="mailto:contact@seimen2026.ne">
                  contact@seimen2026.ne
                </a>
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone me-2"></i>
                <a href="tel:+227XXXXXXXX">
                  +227 XX XX XX XX
                </a>
              </li>
              <li className="mb-3">
                <i className="bi bi-geo-alt me-2"></i>
                Niamey, Niger
              </li>
            </ul>
            <div className="mt-3">
              <h6 className="text-gold mb-3">Suivez-nous</h6>
              <div className="d-flex gap-3">
                <a href="#" className="text-white fs-4" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white fs-4" aria-label="Twitter">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white fs-4" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="#" className="text-white fs-4" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="pt-4 border-top border-secondary">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} SEIMEN. Tous droits réservés.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Link href="/mentions-legales" className="me-3">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="me-3">
              Politique de confidentialité
            </Link>
            <Link href="/cgu">
              CGU
            </Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

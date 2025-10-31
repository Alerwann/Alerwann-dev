/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import "./confidentialite.css";

export default function ConfidentialiteSans() {
  return (
    <main className="conf-container">
      <div className="title">
        <h1>Politique de confidentialité</h1>
        <p>Dernière mise à jour : 31/10/2025</p>
      </div>

      <section className="legal-section">
        <h2>Informations générales</h2>
        <p>
          <strong>Développeur :</strong> Alerwann
        </p>
        <p>
          <strong>Email :</strong> alerwann411@gmail.com
        </p>
        <p>
          <strong>Localisation :</strong> France
        </p>
      </section>

      <section className="legal-section">
        <h2>Collecte de données</h2>
        <p>
          L'application ne collecte, ne stocke et ne partage{" "}
          <strong>aucune donnée personnelle</strong>.
        </p>
      </section>

      <section className="legal-section">
        <h2>Fonctionnement</h2>
        <ul>
          <li>Aucune connexion Internet n'est requise</li>
          <li>Aucune donnée n'est transmise à des serveurs tiers</li>
          <li>Aucun cookie ou tracker n'est utilisé</li>
          <li>Aucun compte utilisateur n'est nécessaire</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>Conformité RGPD</h2>
        <p>
          Cette application respecte le Règlement Général sur la Protection des
          Données (RGPD). Aucune donnée personnelle n'étant collectée, il n'y a
          aucun traitement de données à déclarer.
        </p>
      </section>

      <section className="legal-section">
        <h2>Modifications de cette politique</h2>
        <p>
          Cette politique peut être mise à jour occasionnellement. Les
          modifications seront publiées sur cette page avec une nouvelle date de
          mise à jour.
        </p>
      </section>

      <section className="legal-section">
        <h2>Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité :
        </p>
        <a href="mailto:alerwann411@gmail.com" className="contact-link">
          alerwann411@gmail.com
        </a>
      </section>
    </main>
  );
}

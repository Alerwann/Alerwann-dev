/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Contact() {
  return (
    <main className="support-container">
      <h2 className="title">Support</h2>

      <section>
        <h2>Besoin d'aide ?</h2>
        <p>Pour toute question concernant mes applications, contactez-moi :</p>
        <p className="contact-email">
          Email :{" "}
          <Link href="mailto:alerwann411@gmail.com">alerwann411@gmail.com</Link>
        </p>
      </section>

      <section>
        <h2 className="title">Questions fréquentes (FAQ)</h2>

        <div className="faq-item">
          <h3 className="faq-question">
            L'application collecte-t-elle des données ?
          </h3>
          <p className="faq-answer">
            Non, aucune donnée n'est collectée ou stockée.
          </p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">
            L'application nécessite-t-elle Internet ?
          </h3>
          <p className="faq-answer">Non, tout fonctionne hors ligne.</p>
        </div>

        <div className="faq-item">
          <h3 className="faq-question">L'application est-elle gratuite ?</h3>
          <p className="faq-answer">
            Oui, toutes mes applications sont gratuites et sans publicité.
          </p>
        </div>
      </section>
    </main>
  );
}

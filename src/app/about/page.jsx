/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import LoadingBar from "../../components/loading-bar/LoadingBar";
import "./about.css"

export default function About() {

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="main-container">
      <div className="parccours-container">
        <h2>Log de chargement des connaissances d'Alerwann</h2>
        <LoadingBar />
        {showText &&(
        <div className="contenu-parcours">
          <section className="timeline-section depart">
            <h3>Mise en Route du téléchargement</h3>
            <p>
              Mon chargement d'information sur le développement à débuté, en
              première années de DEUG de mathématiques avec l'apprentissage du
              java.
            </p>
          </section>
          <section className="timeline-section pause">
            <h3>Panne de réseaux</h3>
            <p>
              J'ai laissé ces connaissances de côté pendant de longues années.
              Le réseau de l'époque n'était pas en capacité de me délivrer plus
              de connaissances.
            </p>
          </section>
          <section className="timeline-section reprise">
            <h3>Réseau fonctionnel - relancement du téléchargement</h3>
            <div>
              <p>
                En 2024, j'ai décidé de voir si mes connaissances étaient prêtes
                pour un nouveau téléchargement.
              </p>
              <p>
                J'ai commencé par Kotlin pour pouvoir faire des petites
                applications pour mon android
              </p>
            </div>
          </section>
          <section className="timeline-section maj-attente">
            <h3>Défaillance matériel - Merci d'attendre la MAJ</h3>

            <p>
              Malheureusement après la défaillance du réseau, c'est le matériel
              qui n'était pas à jour et l'ordinateur ne suivait pas pour
              développer dans de bonnes condition.
            </p>
            <p>
              Il a fallut attendre la grosse mise à jour de 2025 pour reprendre
              le téléchargement de connaissances
            </p>
          </section>
          <section className="timeline-section maj-faite">
            <h3>Reprise du téléchargement en janvier 2025</h3>
            <p>
              Grâce à openclassroom j'ai pu télécharger avec un bon débit les
              nouveaux paquets de données.
            </p>
            <p>
              J'ai commencé par HTML, CSS, JS, React, j'ai ainsi créer mon
              premier site :
              <a
                href="https://alerwann.github.io/alerwann-fortquest/"
                target="_blank"
                rel="noopener noreferrer"
              >
          
                alerwann-forquest.com
              </a>
            </p>
          </section>
          <section className="timeline-section python">
            <h3>La soif de connaissances augmente</h3>
            <p>
              Ensuite, je n'ai pu arrêter l'arrivée de connaissances. Je me suis
              donc tournée vers Python.
            </p>
            <p>
              L'Ia faisant partie maintenant de nos vie et ce langage étant
              fortement utilisé j'ai absorbé les bases pour mieux le comprendre
            </p>
          </section>
          <section className="timeline-section flutter">
            <h3>Passage à flutter</h3>
            <p>
              Avoir des applications qui m'aident et automatisent mon ordinateur
              c'est bien, mais me faciliter la vie avec mon téléphone c'est
              mieux!
            </p>
            <p>
              Toujours avec ma soif d'apprendre j'ai choisi flutter comme
              langage.
            </p>
          </section>
                <section className="timeline-section immersion">
            <h3>Immersion Holberton School</h3>
            <p>
                Pendant 15 jours j'ai intégré Holberton School de Dijon pour faire les tests d'entrées.
                Être avec des étudiants, venant de différents horizons et à différents niveaux de leur cursur,
                pouvoir discuter stratégie pour leur site était enrigissant. Mon constat à été que le développement et
                l'informatique sont vraiment les domaines dans lesquels je veux travailler. L'IA a aussi beaucoup évolué et rapidement, 
                et pour moi il est indispensable d'être plus qu'une personne qui tape du code et maîtriser son domaine. La cybersécurité 
                est un enjeu très important de nos jours. L'ia peut détecter les failles, de plus en plus facilement. 
            </p>
            <p>
           C'est pour ça que je compte me former dans la cybersécurité et quoi de mieux qu'une alternance pour cela?
            </p>
          </section>
          <p className="conclusion">
            Et nous voilà aujourd'hui, les connaissances sont toujours en cours
            de chargement. J'apprends en concevant des applications qui me sont
            utiles. Je vous partage donc celles-ci.
          </p>
        </div>)}
      </div>
    </main>
  );
}

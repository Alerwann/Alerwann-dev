/* eslint-disable react/no-unescaped-entities */

"use client";
import LoadingBar from "../components/loading-bar/LoadingBar";
import { useEffect, useState } from "react";
import "./home.css";
import AppCard from "../components/appcard/AppCard";
import Link from "next/link";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [showTextF, setShowTextF]= useState(false)

  const handleButton = () => {
    if (showText) {
      setShowText(false);
    } else setShowText(true);
  };

  const handleButtonfuture = () => {
    if (showTextF) {
      setShowTextF(false)
    }else setShowTextF(true)
  }

  return (
    <main className="main-container">
      <div className="main-title">
        <h1>Alerwann - Développeur d'applications</h1>
        <p>Portfolio et documentation légale</p>
      </div>

      <section className="section-amelioration">
        <div className="a-propos-contenaire">
          <h2>
            À propos de l'application Alerwann{" "}
            <span className="version">v2025.10</span>
          </h2>
          <p>
            L'applications Alerwann gère l'apprentissage de différents langages
            de programmation.
          </p>
          <p className="p-border">
            Mise en service dans les années 80, le chargement de données à
            réellement commencé dans les années 2000.
          </p>
          <p>Polyvalente, elle s'adapte rapidement aux nouveaux langages.</p>
        </div>

        <div className="maj-container">
          <button onClick={() => handleButton()}>
            <h2>
              Amélioration de la mise à jour 2025.10 {showText ? "[-]" : "[+]"}
            </h2>
          </button>
          {showText && (
            <div className="text-evolutif">
              <p>Amélioration de la base donnée de REACT, Python, Flutter.</p>
              <p>Mise en ligne du premier site internet.</p>
              <p>Autorisation d'accès à la première application mobile.</p>
            </div>
          )}
        </div>
        <div className="maj-container">
          <button onClick={() => handleButtonfuture()}>
            <h2>Futures évolutions possibles {showTextF ? "[-]" : "[+]"}</h2>
          </button>
          {showTextF && (
            <div className="text-evolutif">
              <p>Consolider ses connaissances en intégrant une formation.</p>
              <p>
                Se concentrer sur un seul langage pour le maîtriser réelement.
              </p>
              <p>Continuer d'apprendre en manipulant et en créant.</p>
            </div>
          )}
        </div>
      </section>
      <section className="paquets-section">
        <h2>Paquets uploadés</h2>
        <p className="paquets-subtitle">
          Applications disponibles au téléchargement
        </p>

        <div className="apps-grid">
          <AppCard
            title="alerwann-fortquest"
            description="Mon premier site web - Site répertoriant des vidéos sur des quêtes fortnite  "
            tech={["React", "JavaScript", "CSS"]}
            link="https://www.alerwann-fortquest.com"
            status="En ligne"
            platform={["Web"]}
          />

          <AppCard
            title="Automatisation à l'ouverture du pc"
            description="Choix d'envoie d'un message résumant la journée et choix d'ouverture d'application."
            tech={["Python", "Tkinter"]}
            link="https://github.com/Alerwann/Assistant_Projet.git"
            status="En développement"
            platform={["Github"]}
          />

          <AppCard
            title="Passord Robust Creator"
            description="Application générant des mots de passe sécurisés, personnalisés ou non. "
            tech={["Flutter", "Dart"]}
            link="https://apps.apple.com/us/app/password-robust-creator/id6753916678"
            status="En ligne"
            platform={["iOS", "En attente de validation pour android"]}
          />

          <AppCard
            title="Ecol'eau"
            description="Création d'un site internet pouvant servir dans un call-center"
            tech={["React", "Node.js"]}
            link="https://apps.apple.com/us/app/password-robust-creator/id6753916678"
            status="En développement"
            platform={["Github"]}
          />

          <AppCard
            title="IA Horror Film"
            description="Générateur d'une liste de film d'horreur en fonction des goûts d'un utilisateur"
            tech={["Python", "PySide6"]}
            link="https://github.com/Alerwann/IA_Horror_Film.git"
            status="En développement"
            platform={["Github"]}
          />
        </div>
      </section>
    </main>
  );
}



"use client";
import LoadingBar from "../components/loading-bar/LoadingBar";
import { useEffect, useState } from "react";
import "./home.css";
import AppCard from "../components/appcard/AppCard";

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
            L'application Alerwann gère l'apprentissage de différents langages
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
                Se concentrer sur un seul langage pour le maîtriser réellement.
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
            title="TDAH'elp"
            description="Application d'aide à la réalistion de tâches quotidienne pour les personnes atteintes de TDAH            "
            tech={["Flutter", "Dart"]}
            link="https://apps.apple.com/app/tdahelp/id6755381061"
            status="En ligne"
            platform={["iOS"]}
          />
          <AppCard
            title="QR create and read"
            description="Site pour créer et scanner des codes QR "
            tech={["Next.js", "React"]}
            link="https://vercel.com/alerwanns-projects?repo=https://github.com/Alerwann/qr_create_read"
            status="En ligne"
            platform={["Web"]}
          />
            <AppCard
            title="Password Robust Creator"
            description="Application générant des mots de passe sécurisés, personnalisés ou non. "
            tech={["Flutter", "Dart"]}
            link="https://apps.apple.com/us/app/password-robust-creator/id6753916678"
            status="En ligne"
            platform={["iOS", "En attente de validation pour android"]}
          />
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

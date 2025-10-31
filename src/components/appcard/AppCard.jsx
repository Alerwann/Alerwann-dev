

import Link from "next/link";
import "./AppCard.css";
import { FaAndroid, FaApple, FaGithub, FaGlobe } from "react-icons/fa";

export default function AppCard({ title, description, tech, link, status, platform }) {
  const isExternal = link?.startsWith("http");

const choiceIm = (platformName) => {
  switch (platformName) {
    case "Android":
      return <FaAndroid className="platform-icon" />;
    case "iOS":
      return <FaApple className="platform-icon" />;
    case "Web":
      return <FaGlobe className="platform-icon" />;
    case "Github":
      return <FaGithub className="platform-icon" />;
    default:
      return null;
  }
};

  return (
    <div className="app-card">
      <div className="app-status">
        <span
          className={`status-badge ${status === "En ligne" ? "online" : "dev"}`}
        >
          {status === "En ligne" ? "🟢" : "🟡"} {status}
        </span>
      </div>

      <h3>{title}</h3>
      <p className="app-description">{description}</p>

      <div className="tech-tags">
        {tech.map((t, index) => (
          <span key={index} className="tech-tag">
            {t}
          </span>
        ))}
      </div>

      {link &&
        (isExternal ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="app-link"
          >
            Visiter le site →
          </a>
        ) : (
          <Link href={link} className="app-link">
            Voir les détails →
          </Link>
        ))}

      {!link && <span className="app-link disabled">Bientôt disponible</span>}

      {platform && (
        <div className="platform-distrib">
          {platform.map((plat, index) => (
            <span key={index}> {choiceIm(plat)} { plat}</span>
          ))}
        </div>
      )}


    </div>
  );
}
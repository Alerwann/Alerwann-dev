import "./component.css"
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="mon-entete">
      <div className="contenaire-entete">
        <div className="container-titre">
          <p className="titre-header">Alerwann</p>
          <p className="sous-titre-header">Un développeur en cours de chargement...</p>
        </div>
        <div className="image-cont">
          {" "}
          <Image
            src="/icon.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="image-ronde"
          />
        </div>

        <nav className="liens-entete">
          <Link href="/">Accueil</Link>
          <span className="separateur">|</span>
          <Link href="/about">À propos</Link>
        </nav>
      </div>
    </header>
  );
}

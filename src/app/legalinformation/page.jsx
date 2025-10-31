import Link from "next/link";
import Contact from "../../components/confidentialite/contacts";
import ConfidentialiteSans from "../../components/confidentialite/confidentialite";
import "./legalinformation.css";
import Terms from "@/src/components/confidentialite/terms";

export default function LegalInformation() {
  return (
    <main className="all-info-container">
      <h2>Informations Légales</h2>
      <ConfidentialiteSans />
      <Terms/>
      <Contact />
    </main>
  );
}

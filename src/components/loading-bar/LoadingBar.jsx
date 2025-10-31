/* eslint-disable react/no-unescaped-entities */
import "./LoadingBar.css";

export default function LoadingBar() {
  return (
    <div className="loading-container">
      <div className="loading-bar">
        <div className="loading-progress"></div>
      </div>
      <p className="loading-text">Données en cours d'acquisition...</p>
    </div>
  );
}

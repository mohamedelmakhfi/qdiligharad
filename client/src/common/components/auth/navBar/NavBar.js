import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LanguageSelector from "../../LanguageSelector/LanguageSelector";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <a className="landie">QdiLiGharad</a>
        <div className="homeAboutContactMenuWrapper">
          <div className="homeAboutContactMenu">
            <NavLink to="/" className="home" activeClassName="active">
              {t("home")}
            </NavLink>
            <NavLink to="/about" className="about" activeClassName="active">
              {t("about")}
            </NavLink>
            <NavLink to="/services" className="services" activeClassName="active">
              {t("services")}
            </NavLink>
            <NavLink to="/contact" className="contact" activeClassName="active">
              {t("contact")}
            </NavLink>
          </div>
        </div>
        <div className="auth-buttons">
          <button className="connexion" onClick={handleLoginClick}>
            {t("login")}
          </button>
          <button className="inscription" onClick={handleRegisterClick}>
            {t("register")}
          </button>
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

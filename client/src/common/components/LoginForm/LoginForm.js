import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import profileImage from "../../../asset/images/womanSection.png";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [language, setLanguage] = useState("French");
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login, loginError, user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleRememberMe = () => setRememberMe(!rememberMe);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (user.role.includes("ADMIN")) {
        navigate('/admin/dashboard');
      } else if (user.role.includes("AGENT")) {
        navigate('/client/profile');
      } else if (user.role.includes("CLIENT")) {
        navigate('/client/profile');
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="login-formm">
      <div className="login-form-container">
        <div className="image-container">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="form--and--footer">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-title-p">
              <h2>
                {" "}
                <i className="fas fa-user"></i> <br />
                Se connecter
                {loginError && <p className="error">{loginError}</p>}
              </h2>
              <p>Connectez-vous pour accéder à votre compte</p>
            </div>
            <div className="form-gro">
              <div className="form-groupp">
                <label htmlFor="email">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-groupp">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="checkBoxx">
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="show-password"
                    checked={showPassword}
                    onChange={toggleShowPassword}
                  />
                  <label htmlFor="show-password">
                    Afficher le mot de passe
                  </label>
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="remember-me"
                    checked={rememberMe}
                    onChange={toggleRememberMe}
                  />
                  <label htmlFor="remember-me">Se souvenir de moi</label>
                </div>
              </div>
              <button type="submit" className="login-button">
                Se connecter
              </button>
              <div className="language-selector">
                <select value={language} onChange={handleChange}>
                  <option value="French">Français / French</option>
                  <option value="Arabic">Arabe / Arabic</option>
                </select>
              </div>
            </div>
          </form>
          <div className="form-footer">
            <div className="footer-logo">
              <span className="company-name">QdiLiGharad</span>
            </div>
            <div className="footer-copyright">
              <p>
                Copyright : &copy; 2024{" "}
                <span className="highlight">QdiLiGharad.</span> Tous droits
                réservés.
              </p>
            </div>
            <div className="socials-icons">
              <a href="/aboutsd">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/aboutsd">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/aboutsd">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

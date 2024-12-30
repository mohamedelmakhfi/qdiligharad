import React, { useState, useEffect } from "react";
import "./SignupForm.css";
import profileImage from "../../../asset/images/womanSection.png";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [language, setLanguage] = useState("French");
  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const [email, setEmail] = useState("");
  const [fullname, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CLIENT");  
  const [showPassword, setShowPassword] = useState(false);

  const { signup, signupError, user, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNameChange = (e) => setFullName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);  
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const USER = {
      email,
      fullName: fullname,
      password,
      roles: [{ name: role }]  
    };
    await signup(USER);

  };

  useEffect(() => {
    if (isAuthenticated) {
      if (user.role.includes("ADMIN")) {
        navigate("/admin/dashboard");
      } else if (user.role.includes("AGENT")) {
        navigate("/agent/dashboard");
      } else if (user.role.includes("CLIENT")) {
        navigate("/client/profile");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="signup-formm">
      <div className="signup-form-container">
        <div className="image-container">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="form--and--footer">
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="signup-title-p">
              <h2>
                <i className="fas fa-user"></i> <br />
                Inscrivez-vous
                {signupError && <p className="error">{signupError}</p>}
              </h2>
              <p>Cree votre compte</p>
            </div>
            <div className="form-gro">
              <div className="form-gro-signup">
                <div className="from-groupp-sigup-min">
                  <label htmlFor="fullname">Nom complet:</label>
                  <input
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                <div className="from-groupp-sigup-min">
                  <label htmlFor="role">Inscrivez-vous comme :</label>
                  <select id="role" value={role} onChange={handleRoleChange} required>
                    <option value="CLIENT">Client</option>
                    <option value="AGENT">Agent</option>
                  </select>
                </div>
              </div>
              <div className="from-groupp-sigup">
                <label htmlFor="email">Adresse e-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="from-groupp-sigup">
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
              </div>
              <button type="submit" className="signup-button">
                Inscription
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

export default SignupForm;

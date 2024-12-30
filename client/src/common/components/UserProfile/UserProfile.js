import React from "react";
import profileImage from '../../../asset/images/womanpic.png'; 
import "./UserProfile.css";
import useAuthStore from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {
  const ProfileForm = () => {
    return (
      <div className="profile-form">
        <FormRow>
          <FormGroup label="Full Name" placeholder="Your First Name" />
          <FormGroup label="Nick Name" placeholder="Your First Name" />
        </FormRow>
        <FormRow>
          <FormGroup label="Gender" placeholder="Your First Name" />
          <FormGroup label="Country" placeholder="Your First Name" />
        </FormRow>
        <FormRow>
          <FormGroup label="Language" placeholder="Your First Name" />
          <FormGroup label="Time Zone" placeholder="Your First Name" />
        </FormRow>
        <FormRow>
          <FormGroup label="Email Address">
            <InputIcon icon="📧" placeholder="Address email" type="email" />
          </FormGroup>
          <FormGroup label="Phone Number">
            <InputIcon icon="📞" placeholder="Phone number" type="tel" />
          </FormGroup>
        </FormRow>
      </div>
    );
  };

  const FormRow = ({ children }) => {
    return <div className="form-row">{children}</div>;
  };

  const FormGroup = ({ label, children, placeholder, type = "text" }) => {
    return (
      <div className="form-Group">
        <label>{label}</label>
        {children ? children : <input type={type} placeholder={placeholder} />}
      </div>
    );
  };

  const InputIcon = ({ icon, placeholder, type = "text" }) => {
    return (
      <div className="input-icon">
        <span>{icon}</span>
        <input type={type} placeholder={placeholder} />
      </div>
    );
  };

  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };

  return (
    <>
      <div className="profile-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>EL MAKHFI MOHAMED</h2>
          <p>mohamedelmakhfi@gmail.com</p>
        </div>
        <button className="edit-button">Modifier</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <ProfileForm />
    </>
  );
};

export default UserProfile;

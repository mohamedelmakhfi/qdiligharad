import React, { useState } from 'react';
import './SidebarLeft.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ServiceNavItem from './ServiceNavItem';

export const NavItem = ({ to, icon, label, onClick, extraIcon = "fa-solid fa-chevron-right" }) => {
    return (
        <div onClick={onClick}>
            <NavLink to={to} className="sidebar-link" activeClassName="active">
                <i className={icon}></i>
                <span>{label}</span>
                {extraIcon && <i className={extraIcon}></i>}
            </NavLink>
        </div>
    );
};

const SidebarLeft = () => {
    const { t } = useTranslation();

    const [isServiceOptionsVisible, setServiceOptionsVisible] = useState(false);


    const handleNavItemClick = () => {
        if (isServiceOptionsVisible) {
            setServiceOptionsVisible(false);
        }
    };

    return (
        <div className="sidebar">
            <h1 className="sidebar-title">QdiLiGharad</h1>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <NavItem 
                            to="profile" 
                            icon="fa-regular fa-user" 
                            label={t("Profile")}
                            onClick={handleNavItemClick}
                        />
                    </li>
                    <li>
                        <NavItem 
                            to="demandes" 
                            icon="fa-regular fa-file-lines" 
                            label={t("Mes demandes")}
                            onClick={handleNavItemClick}
                        />
                    </li>
                    <li>
                        <ServiceNavItem label={t("Services")} isServiceOptionsVisible={isServiceOptionsVisible} setServiceOptionsVisible={setServiceOptionsVisible} />
                    </li>
                    <li>
                        <NavItem 
                            to="suivi_Demandes" 
                            icon="fa-solid fa-list-check" 
                            label={t("Suivi les Demandes")}
                            onClick={handleNavItemClick}
                        />
                    </li>
                    <li>
                        <NavItem 
                            to="reclamation" 
                            icon="fa-solid fa-headset" 
                            label={t("réclamation")}
                            onClick={handleNavItemClick}
                        />
                    </li>
                    <li>
                        <NavItem 
                            to="historiques" 
                            icon="fa-solid fa-clock-rotate-left" 
                            label={t("Historiques")}
                            onClick={handleNavItemClick}
                        />
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default SidebarLeft;

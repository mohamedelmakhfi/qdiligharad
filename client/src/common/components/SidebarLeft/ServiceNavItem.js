import React from 'react';
import './SidebarLeft.css';
import { NavItem } from './SidebarLeft';
import { useTranslation } from 'react-i18next';

const ServiceNavItem = ({ label, setServiceOptionsVisible, isServiceOptionsVisible }) => {
    const { t } = useTranslation();

    const toggleServiceOptions = () => {
        setServiceOptionsVisible(!isServiceOptionsVisible);
    };

    return (
        <div>
            <div className="sidebar-link" onClick={toggleServiceOptions}>
                <i className="fa-solid fa-clock-rotate-left"></i>
                <span className={isServiceOptionsVisible ? 'active_option' : ''}>{label}</span>
                <i className={isServiceOptionsVisible ? "fa-solid fa-chevron-down" : "fa-solid fa-chevron-right"}></i>
            </div>
            {isServiceOptionsVisible && (
                <ul className="service-options">
                    <li>
                        <NavItem to="services/cree_Service" icon="fa-solid fa-plus" label={t("Nouveau Service")} />
                    </li>
                    <li>
                        <NavItem to="services/mes_services" icon="fa-solid fa-list" label={t("Mes Services")} />
                    </li>
                </ul>
            )}
        </div>
    );
};

export default ServiceNavItem;

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavMenu from "../nav-menu/nav-menu";
import BeansPattern from "../beans-pattern/Beans-pattern";
import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <NavMenu color="#000000"/>
            <BeansPattern color="#000000"/>
        </footer>
    );
};

export default Footer;
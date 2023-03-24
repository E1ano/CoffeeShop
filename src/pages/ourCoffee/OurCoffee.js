import React from 'react';
import NavMenu from "../../components/nav-menu/nav-menu";
import styles from './ourCoffee.module.scss';

const OurCoffee = () => {
    return (
        <>
            <div className={styles.coffee__intro}>
                <div className={styles.container}>
                    <NavMenu color="#ffffff"/>
                    <h1 className={styles.coffee__title}>Our Coffee</h1>
                </div>
            </div>

        </>
    );
};

export default OurCoffee;
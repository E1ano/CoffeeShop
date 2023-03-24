import React from 'react';
import NavMenu from "../../components/nav-menu/nav-menu";
import BeansPattern from "../../components/beans-pattern/Beans-pattern";
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import styles from "./CoffeeHouse.module.scss";
import {Link} from "react-router-dom";

const CoffeeHouse = ({cards}) => {
    return (
        <>
            <div className={styles.coffee__intro}>
                <div className={styles.container}>
                    <NavMenu color="#ffffff"/>
                    <h1 className={styles.coffee__title}>Everything You Love About Coffee</h1>
                    <BeansPattern color="#ffffff"/>
                    <div className={styles.coffee__subtitle}>
                        <div>We makes every day full of energy and taste</div>
                        <div>Want to try our beans?</div>
                    </div>
                    <Link className={styles.more__btn} to="/our-coffee">More</Link>
                </div>
            </div>

            <div className={styles.aboutUs}>
                <div className={styles.container}>
                    <h2 className={styles.aboutUs__title}>About Us</h2>
                    <BeansPattern color="#000000"/>
                    <p className={styles.aboutUs__text}>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br/><br/>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.
                    </p>
                </div>
            </div>

            <div className={styles.ourBest}>
                <div className={styles.container}>
                    <h2 className={styles.ourBest__title}>Our best</h2>
                    <div className={styles.ourBest__cards}>
                        {
                            cards.map((item, i) => {
                                return (
                                    <Card key={i} {...item}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer/>

        </>
    );
};

export default CoffeeHouse;
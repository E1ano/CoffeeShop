import React, {useState} from 'react';
import NavMenu from "../../components/nav-menu/nav-menu";
import styles from './forYourPleasure.module.scss';
import BeansPattern from "../../components/beans-pattern/Beans-pattern";
import goods from '../../images/goods.jpg';
import Card from "../../components/card/Card";
import Footer from "../../components/footer/Footer";
import aboutCoffee from "../../images/aboutCoffee.jpg";
const ForYourPleasure = ({cards}) => {
    const [cardDetails, setCardDetails] = useState(null);
    const handleCardChange = (value) => {
        setCardDetails(value);
    }

    return (
        <>
            <div className={styles.coffee__intro}>
                <div className={styles.container}>
                    <NavMenu color="#ffffff"/>
                    <h1 className={styles.coffee__title}>For your pleasure</h1>
                </div>
            </div>
            {cardDetails != null ? (
                <>
                    <div className={styles.aboutOurGoods}>
                        <div className={styles.aboutOurGoods__coffee}>
                            <img src={aboutCoffee} alt="aboutCoffee"/>
                        </div>

                        <div className={styles.aboutOurGoods__information}>
                            <div className={styles.aboutOurGoods__title}>About it</div>
                            <BeansPattern color="#000000"/>
                            <div className={styles.aboutCountry}><b>Country:</b> {cardDetails.country}</div>
                            <div className={styles.aboutDescription}><b>Description:</b> Coffee is renowned for its vibrant fruity and flowery characteristics. They often contain complex taste nuances, a light to medium body, and a stronger acidity. The processing technique significantly influences the coffee's final flavor. Longberry: The biggest and best-quality of the three.</div>
                            <div className={styles.aboutPrice}><b>Price:</b> <span className={styles.price}>{cardDetails.price}$</span><span onClick={() => handleCardChange(null)} className={styles.back}>← go back</span></div>
                        </div>
                    </div>
                </>

            ) : (
            <>
                <div className={styles.aboutOurGoods}>
                    <div className={styles.aboutOurGoods__img}>
                        <img src={goods} alt="goods"/>
                    </div>

                    <div className={styles.aboutOurGoods__information}>
                        <div className={styles.aboutOurGoods__title}>About our goods</div>
                        <BeansPattern color="#000000"/>
                        <div className={styles.aboutOurGoods__text}>
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br/><br/>
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            <br/><br/>
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div className={styles.coffee__catalog}>
                    <div className={styles.ourBest}>
                        <div className={styles.container}>
                            <div className={styles.ourBest__cards}>
                                {
                                        cards.map((item, i) => {
                                            return (
                                                <Card key={i} {...item} handleCardChange={handleCardChange}/>
                                            )
                                        })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )}
            <Footer/>
        </>
    );
};

export default ForYourPleasure;
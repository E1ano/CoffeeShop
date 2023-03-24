import React, {useRef, useState} from 'react';
import NavMenu from "../../components/nav-menu/nav-menu";
import styles from './ourCoffee.module.scss';
import BeansPattern from "../../components/beans-pattern/Beans-pattern";
import woman from '../../images/woman.jpg';
import aboutCoffee from '../../images/aboutCoffee.jpg'
import Footer from "../../components/footer/Footer";
import Card from "../../components/card/Card";
const OurCoffee = ({cards}) => {
    const [term, setTerm] = useState('');
    const [filteredArray, setFilteredArray] = useState([]);
    const [activeBtn, setActiveBtn] = useState(null);

    const [cardDetails, setCardDetails] = useState(null);
    const handleCardChange = (value) => {
        setCardDetails(value);
    }
    const onChangeTerm = (e) => {
        setTerm(e.target.value);
    }

    const onChangeActiveBtn = (e, value) => {
        if (activeBtn === e.target.id) {
            setActiveBtn(null);
            setFilteredArray([]);
        } else {
            setActiveBtn(e.target.id);
            setFilteredArray(cards.filter(item => item.country.toLowerCase().includes(value.toLowerCase())));
        }
    }

    return (
        <>
            <div className={styles.coffee__intro}>
                <div className={styles.container}>
                    <NavMenu color="#ffffff"/>
                    <h1 className={styles.coffee__title}>Our Coffee</h1>
                </div>
            </div>

            {cardDetails != null ? (
                <>
                    <div className={styles.aboutOurBeans}>
                        <div className={styles.aboutOurBeans__coffee}>
                            <img src={aboutCoffee} alt="aboutCoffee"/>
                        </div>

                        <div className={styles.aboutOurBeans__information}>
                            <div className={styles.aboutOurBeans__title}>About it</div>
                            <BeansPattern color="#000000"/>
                            <div className={styles.aboutCountry}><b>Country:</b> {cardDetails.country}</div>
                            <div className={styles.aboutDescription}><b>Description:</b> Coffee is renowned for its vibrant fruity and flowery characteristics. They often contain complex taste nuances, a light to medium body, and a stronger acidity. The processing technique significantly influences the coffee's final flavor. Longberry: The biggest and best-quality of the three.</div>
                            <div className={styles.aboutPrice}><b>Price: </b> <span className={styles.price}>{cardDetails.price}$</span><span onClick={() => handleCardChange(null)} className={styles.back}>← go back</span></div>
                        </div>
                    </div>
                </>
                ) : (
                <>
                    <div className={styles.aboutOurBeans}>
                        <div className={styles.aboutOurBeans__img}>
                            <img src={woman} alt="woman"/>
                        </div>

                        <div className={styles.aboutOurBeans__information}>
                            <div className={styles.aboutOurBeans__title}>About our beans</div>
                            <BeansPattern color="#000000"/>
                            <div className={styles.aboutOurBeans__text}>
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
                        <div className={styles.container}>
                            <div className={styles.searchPanel}>
                                <div className={styles.searchPanel__search}>
                                    <span>Looking for</span>
                                    <input
                                        type="text"
                                        placeholder="start typing here..."
                                        onChange={(e) => onChangeTerm(e)}
                                    />
                                </div>
                                <div className={styles.searchPanel__filter}>
                                    <span>Or filter</span>
                                    <div className={styles.filter__buttons}>
                                        <button className={"Brazil" === activeBtn ? styles.active : null} id="Brazil" onClick={(e) => {
                                            onChangeActiveBtn(e, "Brazil");
                                        }}>Brazil</button>
                                        <button className={"Kenya" === activeBtn ? styles.active : null} id="Kenya" onClick={(e) => {
                                            onChangeActiveBtn(e, "Kenya");
                                        }}>Kenya</button>
                                        <button className={"Columbia" === activeBtn ? styles.active : null} id="Columbia" onClick={(e) => {
                                            onChangeActiveBtn(e, "Columbia");
                                        }}>Columbia</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.ourBest}>
                            <div className={styles.container}>
                                <div className={styles.ourBest__cards}>
                                    {
                                        (filteredArray.length > 0 ? filteredArray : cards)
                                            .filter(item => item.title.toLowerCase().includes(term.toLowerCase()) || item.country.toLowerCase().includes(term.toLowerCase()))
                                            .map((item, i) => {
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

export default OurCoffee;


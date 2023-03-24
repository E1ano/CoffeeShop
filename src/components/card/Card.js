import React, {useEffect, useState} from 'react';
import "./card.scss";

const Card = ({imgUrl, title, price, country, mainPage, handleCardChange}) => {
    let clazz = "card";
    if (!mainPage) { clazz = "card param" };

    return (
        <>
            <div onClick={handleCardChange? () => handleCardChange({country, price}) : null} className={clazz}>
                <img src={imgUrl} alt="image"/>
                <div className="card__title">{title}</div>
                {country ? <div className="card__country">{country}</div> : null}
                <div className="card__price">{price}$</div>
            </div>
        </>
    );
};

export default Card;
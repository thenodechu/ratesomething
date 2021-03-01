import React from "react";

import './categories.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Categories extends React.Component {
  render() {
    return (
        <div className="categories">
            
            <div className="titleOfBlockCategories">
                <p>Что оцениваем?</p>
            </div>
            <div className="points">
            <Link  className="nothing" to="/rateImage/Обычные фото">
                <div className="pointOfCategories">
                    <div className="firstPoint">
                     <p>Обычные фото</p>
                    </div>
                </div> 
            </Link>
            <Link  className="nothing" to="/rateImage/Внешность людей"> 
                <div className="pointOfCategories">
                <div className="secondPoint">
                        <p>Внешность людей</p>
                    </div>
                    </div> 
                </Link>
                <Link  className="nothing" to="/rateImage/Картины"> 
                <div className="pointOfCategories">
                <div className="thirdPoint">
                        <p>Картины</p>
                    </div>
                    </div> 
                </Link>
                <Link  className="nothing" to="/rateImage/Веб дизайн"> 
                <div className="pointOfCategories">
                <div className="fourthPoint">
                        <p>Веб дизайн</p>
                    </div>
                    </div> 
                </Link>
                <Link  className="nothing" to="/rateImage/Графический дизайн"> 
                <div className="pointOfCategories">
                    <div className="fivethPoint">
                        <p>Графический дизайн</p>
                    </div>
                    </div>
                </Link>
                <Link  className="nothing" to="/rateImage/Что-то другое"> 
                <div className="pointOfCategories">
                    <div className="sixthPoint">
                        <p>Что-то другое</p>
                    </div>
                    </div> 
                    </Link>
                </div>
              
      </div>
    );
  }
}

export default Categories;
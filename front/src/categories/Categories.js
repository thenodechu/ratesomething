import React from "react";
import './categories.css';

class Categories extends React.Component {
  render() {
    return (
        <div className="categories">
            <div className="titleOfBlockCategories">
                <p>Что оцениваем?</p>
            </div>
            <div className="points">
                <div className="pointOfCategories">
                <div className="firstPoint">
                        <p>Обычные фото</p>
                    </div>
                </div> 
                <div className="pointOfCategories">
                <div className="secondPoint">
                        <p>Внешность людей</p>
                    </div>
                </div> 
                <div className="pointOfCategories">
                <div className="thirdPoint">
                        <p>Картины</p>
                    </div>
                </div> 
                <div className="pointOfCategories">
                <div className="fourthPoint">
                        <p>Веб дизайн</p>
                    </div>
                </div> 
                <div className="pointOfCategories">
                    <div className="fivethPoint">
                        <p>Графический дизайн</p>
                    </div>
                </div>
                <div className="pointOfCategories">
                    <div className="sixthPoint">
                        <p>Что-то другое</p>
                    </div>
                </div> 
            </div>
      </div>
    );
  }
}

export default Categories;
import React from "react";
import Menu from "../menu/Menu";
import './ratePage.css';

class RatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          db: [],
        };
        this.getDb = this.getDb.bind(this);
      }
    async getDb() {
    let result = await fetch("http://localhost:8080/api/get/image/"+ this.props.match.params.id);
        
        let db = await result.json();
        console.log(db);
        if (db !== null) {
            await this.setState({ db: [db] });
        }
    
  }

  async componentDidMount() {
    await this.getDb();
  }
  render() {
    return (
        <div>
            <Menu />
            <div className="nameOfCategory">
                <p>{this.props.match.params.id}</p>
            </div>
            
                {this.state.db.map(function (item,index) {
                    return (
                        <div key={index}>
                            <div className="image">
                                <img src={item.linkOfImg} alt={item.type}  />
                            </div>
                            <div className="descriptionName">
                                <a>Описание</a>
                            </div>
                            <div className="description">
                                <a>{item.description} </a>
                            </div>
                        </div>
                        )
                })}
                
           
            <div className="controlBlock">
                <div className="blockWithButtons">
                    <div className="buttonWithPoint">01</div>
                    <div className="buttonWithPoint">02</div> 
                    <div className="buttonWithPoint">03</div> 
                    <div className="buttonWithPoint">04</div> 
                    <div className="buttonWithPoint">05</div> 
                    <div className="buttonWithPoint">06</div> 
                    <div className="buttonWithPoint">07</div> 
                    <div className="buttonWithPoint">08</div>
                    <div className="buttonWithPoint">09</div> 
                    <div className="buttonWithPoint">10</div> 
                </div>
                <div className="givePoint">
                    <a>Оставить оценку</a>
                </div>
            </div>
        </div>
    );
  }
}

export default RatePage;

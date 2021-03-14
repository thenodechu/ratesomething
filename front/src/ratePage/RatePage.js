import React from "react";
import Menu from "../menu/Menu";
import './ratePage.css';

class RatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: [],
            numberOfGrade: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            indexOfGrade: 0
        };
        this.getDb = this.getDb.bind(this);
        this.giveGrade = this.giveGrade.bind(this);
        this.postGrade = this.postGrade.bind(this);
      }
    async getDb() {
    let result = await fetch("http://localhost:8080/api/get/image/"+ this.props.match.params.type);
         
        let db = await result.json();
        console.log(db);
        if (db !== null) {
            await this.setState({ db: [db] });
        }
    
    }
    
    async giveGrade() {
        let response = await fetch("http://localhost:8080/api/post/grade/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify({ grade: this.state.indexOfGrade,type:this.props.match.params.type,idOfImg:this.state.db[0].index }),
        });
        let db = await response.json();
        if (db === "Выберите оценку") {
            console.log(db)
        } else {
            await this.setState({ db: [db],numberOfGrade: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],indexOfGrade:0 });
        }
       
    }

    async postGrade(grade,id) {
        let array = this.state.numberOfGrade;
        array.forEach(function (item,index) {
            if (grade - 1 === index) {
                array[index] = 1;
            } else {
                array[index] = 0;
          }
            
        });
        this.setState({numberOfGrade:array,indexOfGrade:grade,})
     
  }
  async componentDidMount() {
    await this.getDb();
  }
  render() {
    return (
        <div>
            <Menu />
            <div className="nameOfCategory">
                <p>{this.props.match.params.type}</p>
            </div>
            <div>
                
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
                    {
                        this.state.numberOfGrade.map((item, index) => {
                            if (item === 1) {
                                return (<div key={ index} className="buttonWithPointBlack" onClick={() => this.postGrade(index + 1)}>{ String(index+1)}</div>) 
                            } else {
                                return (<div key={index} className="buttonWithPoint" onClick={() => this.postGrade(index + 1)}>{String(index + 1)}</div>)
                                
                            }
                         
                        })
                    }
               
                </div>
                <div className="givePoint">
                    <a onClick={this.giveGrade}>Оставить оценку</a>
                </div>
            </div>
        </div>
    );
  }
}

export default RatePage;

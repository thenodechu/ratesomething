import React from "react";
import Menu from "../menu/Menu";
import './usersPage.css';

class UsersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            db: []
        };
        this.getDb = this.getDb.bind(this);

    }
    
    async getDb() {
        let result = await fetch("http://localhost:8080/api/get/imageUsers/"+ this.props.match.params.id);
        let db = await result.json();
        console.log(db);
            if (db !== null) {
                this.setState({ db: db });
                console.log(this.state.db[0])
            }
    
    }
    
    async componentDidMount() {
        await this.getDb();
      }
  render() {
    return (
      <div>
        <Menu/>
            <div className="imagesOfUser">
                {this.state.db.map((item, index) => {
                    let style = { backgroundImage: `url(${item})` }
                    let grade;
                    if (item.grade === 0 && item.numberOfGrades === 0) {
                        grade = "Нет"
                    } else {
                        grade = (item.grade / item.numberOfGrades).toFixed(1)
                    }

                    return (
                        
                        <div className="blockWithImg" key={ index}>
                            <div>
                                <div className="imgOfUser" style={{ backgroundImage: `url(${item.linkOfImg})` }}>
                                </div>
                            
                                <div className="infoAboutImg">
                                    <div className="typeOfImage">
                                        <a>{ item.type}</a>
                                    </div>
                                    <div className="gradeDelete">
                                        
                                        <div className="grade"><a>Средняя оценка {grade}</a></div>
                                        <div className="deleteButton"><a>Удалить</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                
                    )
                })}
                
                
         
                <div className="blockWithImg">
                    <div className="topButton">
                        <div>
                            <div className="addButton">
                                <a>Добавить изображение</a>
                            </div>
                        </div>
                    </div>
                    <div style={{height:"50px"}}>

                    </div>
                </div>
               
           
            </div>
      </div>
    );
  }
}

export default UsersPage;

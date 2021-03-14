class SingUp {
    constructor(dataAboutUser) {
      this.md = require('md5');
      this.Users = require("./models/users").Users;
      this.dataAboutUser = dataAboutUser;
      this.checkValueFromUser = true;
      this.errors = [];
    }
  
    async _searchName() {
      let name = await this.Users.find({ name: this.dataAboutUser.name });
      if (name.length !== 0) {
        this.checkValueFromUser = false;
        this.errors.push("Пользователь с таким именем уже есть");
      }
    }
  
    _checkXss(str) {
      let db = [
        "<",
        ">",
        "/",
        "[",
        "]",
        "(",
        "{",
        "}",
        ")",
        "*",
        "&",
        "^",
        "%",
        "$",
        "#",
        "!",
        "?",
        "`",
        "~",
        ":",
      ];
      for (let item = 0; item < db.length; item++) {
        if (str.indexOf(db[item]) !== -1) {
          this.checkValueFromUser =false;
          this.errors.push("Неправильный формат данных");
          break;
        }
      }
    }
  
    _checkLenght() {
      if (
        (this.dataAboutUser.name.length >= 0 &&
          this.dataAboutUser.name.length < 3) ||
        (this.dataAboutUser.password.length >= 0 &&
          this.dataAboutUser.password.length < 5) ||
        (this.dataAboutUser.email.length >= 0 &&
          this.dataAboutUser.email.length < 5)
      ) {
        this.checkValueFromUser = false;
        this.errors.push("Что-то не так, попробуйте ввести новые данные");
      }
    }
  
    async _hashPassword() {
      let hash =  this.md(this.dataAboutUser.password);
      return hash;
    }
  

    async _allCheck() {
        await this._searchName();
        this._checkXss(this.dataAboutUser.name);
        this._checkXss(this.dataAboutUser.password);
        this._checkLenght();
    }

  async resultSingup() {
      await this._allCheck();
        if ( this.checkValueFromUser) {
            await this.Users.collection.insertOne(this.dataAboutUser);
            return ["Аккаунт успешно создан"];
        } else {
            return this.errors;
        }
    }
  }
  
  module.exports = SingUp;
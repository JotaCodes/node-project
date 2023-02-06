import PlanMock from "../mocks/PlanMock";
const db = require('../database/db');

 export default class PlanModule {
  constructor() {
  }

 async getLimitCategoryExceeded(){
      const response = await db.connection.query('SELECT (id, name, status) FROM category');
    let categoryLimit : number = PlanMock.CATEGORY;
    let categoryActual : number = response.rowCount;
    if (categoryActual >= categoryLimit){
        return true;
    } else {
        return false;
    }
  }
};
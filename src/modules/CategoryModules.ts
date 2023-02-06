const datb = require('../database/db');

import PlanMock from '../mocks/PlanMock';

export default class CategoryModules {
  constructor() {
  }

  async registerCategory(status: any, name: string) {
    const response = await datb.connection.query(
      'INSERT INTO category (name, status) VALUES ($1, $2) RETURNING *',
      [name, status],
    );
    return response.rows[0];
  }

  async editCategory(status: any, name: string, id: number) {
    const response = await datb.connection.query(
      'UPDATE category SET (name,status) = ($1,$2) WHERE id = $3 RETURNING *',
      [name, status, id],
    );
    return response.rows[0];
  }

  async listCategory() {
    const response = await datb.connection.query(
      'SELECT * from category WHERE status = true');
    return response.rows;
  }

  async detailCategory(id: number) {
    const response = await datb.connection.query('SELECT * from category WHERE id = $1',[id]);
    return response.rows[0];
  }
  async deleteCategory(id: number) {
    const response = await datb.connection.query(
      'DELETE from category WHERE id = $1',
      [id],
    );
    return { error: false };
  }
};

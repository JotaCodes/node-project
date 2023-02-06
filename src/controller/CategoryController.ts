import { ErrorTypes } from "../types/ErrorTypes";

import PlanModule  from "../modules/PlanModule";
import CategoryModule from "../modules/CategoryModules";

const categoryRegister = async (req: any, res: any) => {
  const plan = new PlanModule();
  const name: any = req.fields.name;
  const status: any = req.fields.status;
  if (await plan.getLimitCategoryExceeded()) {
    res.status(400).send({ error: true, type: ErrorTypes.PLAN_EXCEEDED_LIMIT });
  } else {
    const category = new CategoryModule();

    const response = category.registerCategory(status, name);
    res.status(201).send(response);
  }
};
const categoryEdit = async (req: any, res: any) => {
  let id: number = req.params.id;
  const name: any = req.fields.name;
  const status: any = req.fields.status;
  const category = new CategoryModule();
  const response = category.editCategory(status, name, id);
  res.status(200).send(response);
};
const categoryList = async (req: any, res: any) => {
  const category = new CategoryModule();
  const response = category.listCategory();
  res.status(200).send(response);

};
const categoryDetail = async (req: any, res: any) => {
  let id: number = req.params.id;
  const category = new CategoryModule();
  const response = category.detailCategory(id);
  res.status(200).send(response);
};
const categoryDelete = async (req: any, res: any) => {
    let id: number = req.params.id;
    const category = new CategoryModule();
    const response = category.deleteCategory(id);
    res.status(200).send(response);
  };
module.exports = {
  register: categoryRegister,
  edit: categoryEdit,
  list: categoryList,
  detail: categoryDetail,
  delete: categoryDelete
};

"use server";

import { CreateCategoryParams } from "@/types";
import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

export const createCategory = async ({
  categoryName,
}: CreateCategoryParams) => {
  try {

    await connectToDatabase()

    const newCategory = await Category.create({name: categoryName})

    return JSON.parse(JSON.stringify(newCategory)); 



  } catch (error) {
    handleError(error)
  }
};
export const getAllCategories = async () => {
  try {

    await connectToDatabase()

    const category = await Category.find()

    return JSON.parse(JSON.stringify(category)); 



  } catch (error) {
    handleError(error)
  }
};

import fs from 'fs';
import slugify from 'slugify';
import categoryModel from '../models/categoryModel.js';
import { v2 as cloudinary } from "cloudinary";


export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const imageFile = req.file;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingCategory = await categoryModel.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Category Already Exisits",
      });
    }
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {resource_type: 'image'});
    const imageUrl = imageUpload.secure_url;
    const category = await new categoryModel({
      name,
      slug: slugify(name),
      photo: imageUrl
    })
    // if (photo) {
    //     category.photo.data = fs.readFileSync(photo.path);
    //     category.photo.contentType = photo.type;
    //   }

    await category.save();
    res.status(201).send({
      success: true,
      message: "Category Created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error: error.message,
      message: "Errro in Category",
    });
  }
};


export const getAllCategories = async (req,res) => {
  try {
    const allcategories = await categoryModel.find(); 
    res.json({ success: true, allcategories });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message }); 
  }
}
//update category

export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      messsage: "Category Updated Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating category",
    });
  }
};

// get all cat
export const categoryControlller = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all categories",
    });
  }
};

// single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get SIngle Category SUccessfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single Category",
    });
  }
};

//delete category
export const deleteCategoryCOntroller = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Categry Deleted Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error while deleting category",
      error,
    });
  }
};

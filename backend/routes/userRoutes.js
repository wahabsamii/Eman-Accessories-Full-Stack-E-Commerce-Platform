import express from "express";
import { forgotPasswordController, getAllUsers, loginController, registerController, testController, updateProfileController } from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddlewares.js";
import { createCategoryController, getAllCategories } from "../controllers/categoryController.js";
import upload from "../middlewares/upload.js";
import { brainTreePaymentController, braintreeTokenController, createProductController, getProductController, productPhotoController } from "../controllers/productController.js";

const routes = express.Router();

routes.post('/register', registerController);
routes.post('/login', loginController);
routes.post("/forgot-password", forgotPasswordController);

// getting All Users 
routes.get('/all-users', getAllUsers);
//test routes
routes.get("/test", requireSignIn, isAdmin, testController);

//protected User route auth
routes.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
routes.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//update profile
routes.put("/profile", requireSignIn, updateProfileController);
routes.post("/create-category",upload.single("photo"), createCategoryController);
routes.get("/all-categories",getAllCategories);


routes.post("/create-product",upload.single('photo'), createProductController);
routes.get("/get-allproducts", getProductController);

routes.get("/product-photo/:pid", productPhotoController);

//payments routes
//token
routes.get("/braintree/token", braintreeTokenController);

//payments
routes.post("/braintree/payment", requireSignIn, brainTreePaymentController);

export default routes;
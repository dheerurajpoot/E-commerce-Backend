import express, { application } from "express";
import {
	adminLogin,
	// applyCoupon,
	createOrder,
	createUser,
	deleteUser,
	forgotPasswordToken,
	getAllOrder,
	getAllUsers,
	getUser,
	getUserCart,
	getUserOrder,
	getWishlist,
	logOut,
	refreshTokenHandler,
	removeCartItem,
	resetPassword,
	saveAddress,
	updateCartProductQty,
	updateOrderStatus,
	updatePassword,
	updateUser,
	userCart,
	userLogin,
} from "../controllers/userController.js";
import { auth, isAdmin } from "../middlewares/authMiddleware.js";
import {
	checkout,
	paymentVerification,
} from "../controllers/paymentController.js";
const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put("/password", auth, updatePassword);
router.put("/orders/order-status/:id", auth, isAdmin, updateOrderStatus);
router.post("/login", userLogin);
router.post("/admin-login", adminLogin);
router.post("/cart", auth, userCart);
router.post("/order/checkout", auth, checkout);
router.post("/order/payment-verification", auth, paymentVerification);
router.put("/update-user", auth, updateUser);
// router.post("/cart/apply-coupon", auth, applyCoupon);
router.post("/cart/create-order", auth, createOrder);
router.put("/address", auth, saveAddress);
router.get("/all-users", auth, isAdmin, getAllUsers);
router.get("/get-orders", auth, getUserOrder);
router.get("/all-orders", auth, isAdmin, getAllOrder);
router.get("/refresh", refreshTokenHandler);
router.get("/logout", logOut);
router.get("/wishlist", auth, getWishlist);
router.get("/cart", auth, getUserCart);
router.get("/:id", auth, getUser);
router.delete("/remove-cart-product/:id", auth, removeCartItem);
router.delete(
	"/update-cart-product/:id/:newquantity",
	auth,
	updateCartProductQty
);
router.delete("/:id", deleteUser);

export default router;

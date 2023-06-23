import express from 'express'
const router=express.Router()
import Usercontroller from '../controllers/Usercontroller.js';
import Authmiddlewear from '../middleWear/Authmiddlewear.js';



router.post('/signup',Usercontroller.RegisterUser)
router.post('/login',Usercontroller.LoginUser)
router.post('/addtocart',Authmiddlewear,Usercontroller.Addtocart)
router.get('/getproduct',Usercontroller.getproduct)
router.post('/addproduct',Usercontroller.Addproduct)
router.get('/cartCount',Authmiddlewear, Usercontroller.cartCount)
router.get('/cartproduct',Authmiddlewear, Usercontroller.cartproduct)
router.get('/deletecart/:id',Authmiddlewear, Usercontroller.deletecart)
router.get('/updatestock/:id',Authmiddlewear, Usercontroller.DecrementCount)
router.get('/incrementstock/:id',Authmiddlewear, Usercontroller.IncrementCount)

export default router;
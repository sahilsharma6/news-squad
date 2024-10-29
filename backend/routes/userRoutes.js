import express from 'express'; 
import {
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,

} from '../controllers/userController.js';


import { protect, admin } from '../middleware/authMiddleware.js';

const router = express.Router();


router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

  

  router.route("/check-admin").get(protect,admin);


export default router;

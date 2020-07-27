/** @format */

import { Router } from 'express';
import authCtrl from '../controller/authController';
import { loginRules, validate } from '../helper/validation';

const router = Router();
const { signIn } = authCtrl;

/*
  @ POST Route
  @ public route
  @ For SignIn user
*/
router.post('/signin', loginRules(), validate, signIn);

export default router;

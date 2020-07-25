/** @format */

import { Router } from 'express';
import authCtrl from '../controller/authController';
import { loginRules, validate } from '../helper/validation';

const router = Router();
const { signin } = authCtrl;

/*
  @ POST Route
  @ public route
*/
router.post('/auth/signin', loginRules(), validate, signin);

export default router;

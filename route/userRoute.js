import { Router } from 'express';

const router = Router()

router.get('/',(req,res) => {
  return res.json({msg: 'This is the rest route from user'})
}
)
export default router
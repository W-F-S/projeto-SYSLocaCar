import { Router } from 'express';
import {create, researchId,researchAll,update,deleted } from '../controllers/clienteController'

const router = Router()

router.post('/cliente',create)
router.get('/cliente',researchAll)
router.get('/cliente/:email',researchId)
router.put('/cliente/:id',update)
router.delete('/cliente/:id',deleted)

export default router
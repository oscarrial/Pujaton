import { Router } from "express";
import { BidController } from "../controllers/bid.controller"
import { RateController } from "../controllers/rate.controller"
import {isAuthenticate} from "../middlewares/auth.middlewares"

const router = Router()


//GET Listar todas las pujas localhost:3000/api/bids/?title=react&category=dam
router.get('/', isAuthenticate ,BidController.getAll)
router.get('/:id',isAuthenticate, BidController.getById)
//POST Añadir una puja localhost:3000/api/bids/ {body}
router.post('/', BidController.save)
//DELETE Borrar una puja localhost:3000/api/bids/XXXX
router.delete('/:id', BidController.delete)
//PUT modificar una puja localhost:3000/api/bids/XXXX {body}
router.put('/:id', BidController.update)

// Calificamos una puja x {body}
router.post('/:id/rate/', RateController.rate)
// Vemos que calificacion (total) se le ha dado a una puja
router.get('/:id/rate/', RateController.getRate) 

export default router
import { NextFunction, Request, Response } from "express"
import { BidService } from "../services/bid.service"

export class BidController {
    static async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id)
            const offer = await BidService.getById(id)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }
    static async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const offert = await BidService.getAll()
            res.status(200).json(offert)
        } catch (error) {
            next(error)
        }
    }
    static async save(req: Request, res: Response, next: NextFunction) {
        try {
            const offer = req.body
            await BidService.save(offer)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }
    static async delete(req: Request, res: Response, next: NextFunction) {
        try {
            const idOffer = Number(req.params.id)
            await BidService.delete(idOffer)
            res.status(200).json(idOffer)
        } catch (error) {
            next(error)
        }
    }
    static async update(req: Request, res: Response, next: NextFunction) {
        try {
            const offer = Number(req.params.id)
            const change = req.body
            await BidService.update(offer, change)
            res.status(200).json(offer)
        } catch (error) {
            next(error)
        }
    }

}
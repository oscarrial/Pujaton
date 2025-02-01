import { Bid, Prisma, PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException"
import bcrypt, { compare } from "bcrypt"
import jwt from "jsonwebtoken"

// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class RateService {
    static async rate(id: number, value:Number) {
        const findBid = await prisma.bid.findUnique({ where: { id } })
        return findBid
    }
    static async getRate(idBid: number) {
        const rate = await prisma.rate.findMany({ where: { idBid} })
        return rate
    }
}
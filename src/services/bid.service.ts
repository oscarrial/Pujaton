import { Bid, Prisma, PrismaClient, User } from "@prisma/client";
import { HttpException } from "../exceptions/httpException"
import bcrypt, { compare } from "bcrypt"
import jwt from "jsonwebtoken"

// Alta cohexion y bajo acoplamiento

// Usar un patron singleton

const prisma = new PrismaClient()
const TOKEN_PASSWORD = process.env.TOKEN_PASSWORD || 'pass'

export class BidService {
    static async getById(id: number) {
        const findBid = await prisma.bid.findUnique({ where: { id } })
        if (!findBid) throw new HttpException(404, 'User not found')
        return findBid
    }

    static async getAll() {
        const offerts = await prisma.bid.findMany()
        return offerts
    }
    static async save(offer: Bid) {
        return await prisma.bid.create({
            data: {
                ...bid
            }
        })
    }
    static async delete(id: number) {
        return await prisma.bid.delete( {
            where: {id}
        }
        )
    }
    static async update(id:number, change:Bid ) {
        return await prisma.bid.update( {
            where:{id},
            data:change
        }
        )
    }
}
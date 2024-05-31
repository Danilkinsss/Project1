import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const createPost = async (data) => {
 return await prisma.message.create({
    data
  })
}

export const getAll = async () => {
  return await prisma.message.findMany()
}
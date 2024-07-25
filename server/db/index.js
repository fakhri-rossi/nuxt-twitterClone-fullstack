// import Prisma from "@prisma/client";
// import Prisma from "/";

// const { PrismaClient } = Prisma;
import { PrismaClient } from "../../prisma/@prisma/client/.prisma/client";

const prisma = new PrismaClient();

export { prisma }


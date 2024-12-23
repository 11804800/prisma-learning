import { PrismaClient } from "@prisma/client";


//to see the log of queries
const prisma=new PrismaClient({
    log:["query"],
});

export default prisma;
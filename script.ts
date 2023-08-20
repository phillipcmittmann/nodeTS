import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.customer.deleteMany();

    const customer = await prisma.customer.create({
        data: {
            name: "Phillip",
            password: "huehuebrbr",
            email: "huehuebrbr@gmail.com"
        }
    });

    const customers = await prisma.customer.findMany();

    console.log(customers);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
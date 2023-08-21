import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.customer.deleteMany();
    await prisma.product.deleteMany();
    await prisma.productorder.deleteMany();

    // const customer = await prisma.customer.create({
    //     data: {
    //         name: "Phillip",
    //         password: "huehuebrbr",
    //         email: "huehuebrbr@gmail.com"
    //     }
    // });

    // const customerId = await prisma.customer.findMany({
    //     where: {
    //         name: "Phillip"
    //     }
    // });

    // const product = await prisma.product.create({
    //     data: {
    //         name: "Produto",
    //         description: "Descricao",
    //         instock_quantity: 10,
    //         price: 1.0
    //     }
    // });

    // const productId = await prisma.product.findMany({
    //     where: {
    //         name: "Produto"
    //     }
    // });
    
    await prisma.customer.create({
        data: {
            name: "Phillip",
            password: "huehuebrbr",
            email: "huehuebrbr@gmail.com",
            productorder: {
                create: {
                    product: {
                        create: {
                            name: "Produto",
                            description: "Descricao",
                            instock_quantity: 10,
                            price: 1.0
                        }
                    },
                    product_quantity: 10
                }
            }
        }
    });

    const productorder = await prisma.productorder.findFirst();
    const customer = await prisma.customer.findFirst();

    console.log(productorder);
    console.log(customer);
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
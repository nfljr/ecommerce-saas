
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
    data : [
    {
        name: "Laptop Gaming",
        slug: "laptop-gaming",
        description: "Laptop gaming dengan performa tinggi",
        image: "/images/products/laptop-gaming.jpg",
        price: 15000000,
        stock: 10,
    },
    {
        name: "Mechanical Keyboard",
        slug: "mechanical-keyboard",
        description: "Keyboard Mechanical RGB.",
        image: "/images/products/keyboard-mechanical.jpg",
        price: 1250000,
        stock: 15,
    },
],
});
}

main()
    .then(()=>prisma.$disconnect())
    .catch(async (e)=> {
        console.error(e);
        await prisma.$disconnect();
        console.log("seed berhasil");
    });
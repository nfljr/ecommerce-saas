"use server";

import { prisma } from "../lib/prisma"
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData){
    const name = formData.get("name") as string;
    if (!name){
        throw new Error("Nama Wajib diisi");
    }
    const slug = formData.get("slug") as string;
    const description = formData.get("description") as string;
    const image = formData.get("image") as string;
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock"));

    await prisma.product.create({
        data:{
            name,
            slug,
            description,
            image,
            price,
            stock,
        },
    });

    redirect("/admin");
}

export async function getProducts(){
    return prisma.product.findMany({
        orderBy : {
            id: "asc",
        },
    });
}

export async function getProductBySlug(slug: string) {
    return prisma.product.findUnique({
        where: {
            slug,
        },
    });
}
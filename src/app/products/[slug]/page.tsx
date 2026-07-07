import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import { formatRupiah } from "@/src/lib/format";
import { getProductBySlug } from "@/src/actions/products";


type ProductDetailPageProps = {
    params : Promise<{
        slug:string;
    }>;
};

export default async function ProductDetailPage({
    params,
}:ProductDetailPageProps){
    const {slug} = await params;

    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return(
        <>
        <div className="grid gap-10 md:grid-cols-2">
            <Image src={product.image} alt={product.image} width={700} height={700} className="rounded-xl"/>

            <div>
                <h1 className="text-4xl font-bold">
                    {product.name}
                </h1>
                <p className="mt-5 text-2xl font-bold">
                    {formatRupiah(product.price)}
                </p>
                <p className="mt-2 text-green-600">
                    Stok: {product.stock}
                </p>
                <p className="mt-5 text-gray-600">
                    {product.description}
                </p>

                <Link href="/products" className="mt-8 inline-block rounded bg-black px-5 py-2 text-white">
                    Kembali Ke Products
                </Link>
            </div>
            </div>
        </>
    );
}
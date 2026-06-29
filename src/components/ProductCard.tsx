import Link from "next/link";
import Image from "next/image";

type ProductCardProps = {
    slug : string;
    name : string;
    price: number;
    image: string;
};

export default function ProductCard({
    slug, name, price, image,
} : ProductCardProps) {
    return(
        <div className="overflow-hidden rounded-xl border shadow-sm transition hover: shadow-lg">
            <Image src={image} alt={name} width={500} height={300} className="h-56 w-full object-cover"/>

            <div className="p-5">

            <h2 className="text-xl font-semibold">
                {name}
            </h2>

            <p className="mt-2 text-gray-500">
                Rp {price.toLocaleString("id-ID")}
            </p>

            <Link href={`products/${slug}`} className="mt-5 inline-block rounded bg-black px-4 py-2 text-white">
                Detail
            </Link>

            </div>
        </div>
    );
}
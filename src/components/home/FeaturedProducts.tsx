import ProductCard from "../ProductCard";
import { products } from "@/src/data/products";

export default function FeaturedProducts(){
    return(
        <section className="mt-12">
            <h2 className="mb-6 text-3xl font-bold">
                Featured Product
            </h2>

            <div>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        slug={product.slug}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </section>
    );
}
import ProductCard from "@/src/components/ProductCard";
import { products } from "@/src/data/products";

export default function ProductsPage(){
    return(
        <>
            <h1 className="text-4xl font-bold">Products</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product)=> (
                    <ProductCard 
                        key={product.id}
                        slug={product.slug}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </>
    );
}
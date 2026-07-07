import ProductCard from "@/src/components/ProductCard";
import { getProducts } from "@/src/actions/products";

export default async function ProductsPage(){
    const products = await getProducts();
    return(
        <>
            <h1 className="text-4xl font-bold">Products</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
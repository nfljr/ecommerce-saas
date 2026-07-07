import { getProducts } from "@/src/actions/products";
import Link from "next/link";

export default async function AdminPage() {
    const products = await getProducts();

    return(
        <div>
            <h1 className="mb-8 text-4xl font-bold">
                Admin Product
            </h1>
            <div className="mb-6">
                <Link href="/admin/products/create"
                className="rounded bg-black px-4 py-2 text-white">
                    Add Product
                </Link>
            </div>
            
            <table className="w-full border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-3">ID</th>
                        <th className="border p-3">Name</th>
                        <th className="border p-3">Price</th>
                        <th className="border p-3">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=> (
                        <tr key={product.id}>
                            <td className="border p-3">
                                {product.id}
                            </td>
                            <td className="border p-3">
                                {product.name}
                            </td>
                            <td className="border p-3">
                                {product.price}
                            </td>
                            <td className="border p-3">
                                {product.stock}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
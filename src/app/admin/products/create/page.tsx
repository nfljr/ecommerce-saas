import { createProduct } from "@/src/actions/products";

export default function CreateProductPage(){
    return(
        <div>
            <h1 className="text-4xl font-bold">
                Create Product
            </h1>

            <form action={createProduct} className="space-y-4">
                <div>
                    <label>Name</label>
                    <input name="name" required className="w-full rounded border p-3"/>
                </div>
                <div>
                    <label>Slug</label>
                    <input name="slug" required className="w-full rounded border p-3"/>
                </div>
                <div>
                    <label>Description</label>
                    <input name="description" required className="w-full rounded border p-3"/>
                </div>
                <div>
                    <label>Image Path</label>
                    <input name="image" required placeholder="/image/products/new-product.jpg" className="w-full rounded border p-3"/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" name="price" required className="w-full rounded border p-3"/>
                </div>
                <div>
                    <label>Stock</label>
                    <input type="number" name="stock" required className="w-full rounded border p-3"/>
                </div>
                <button className="rounded bg-black px-5 py-3 text-white">
                    Save Product
                </button>

            </form>
        </div>
    )
}
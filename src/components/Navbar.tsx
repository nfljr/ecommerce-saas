import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="mx-auto flex max-w-6xl items-center justify-between p-5">
                <h1 className="text-xl font-bold">
                    My Ecommerce
                </h1>

                <div className="flex gap-6">
                    <Link rel="stylesheet" href="/">Home</Link>
                    <Link rel="stylesheet" href="/products">Products</Link>
                    <Link rel="stylesheet" href="/about">About</Link>
                </div>
            </div>
        </nav>
    );
}
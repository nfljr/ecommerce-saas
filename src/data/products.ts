import { Product } from "../types/products"

export const products : Product[] =[
    {
        id: 1,
        slug: "laptop-gaming",
        name: "Laptop Gaming",
        price: 15000000,
        image: "/image/products/laptop-gaming.jpg",
        description: "Laptop gaming ini cocok untuk game berat"
    },
    {
        id: 2,
        slug: "mechanical-keyboard",
        name: "Mechanical-Keyboard",
        price: 1250000,
        image: "/image/products/mechanical-keyboard.jpg",
        description: "keyboard mecha dengan rgd menyala"
    },
    {
        id: 3,
        slug: "wireless-mouse",
        name: "Wireless Mouse",
        price: 50000,
        image: "/image/products/wireless-mouse.jpg",
        description:"bisa sejauh mata memandang"
    },
    {
        id: 4,
        slug: "monitor-27-inch",
        name: "Monitor 27 Inch",
        price: 3500000,
        image:"/image/products/monitor-27-inch.jpg",
        description:"monitor dengan pixel tinggi layar jelas"
    },
]
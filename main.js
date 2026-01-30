const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg' , 
            instock: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variant: [
                { id: 2234, color: "green" },
                { id: 2235, color: "blue" }
            ]
}
    }
 })



import { createApp } from './vue.esm-browser.js';

const app = createApp({
    data() {
        return {
            currentCategory: 0,
            product_intro:
                [
                    "Special Offers: Check out our latest deals and discounts!",
                    "Food",
                    "Beverages",
                ],
            cat_products_list: [
                [
                    { pid: "1",cat:1, pname: 'Ferrero Collection', price: 33.3, image: 'resources/category1/product1.jpg' },
                    { pid: "7",cat:2, pname: 'Pocari Sweat', price: 33.3, image: 'resources/category2/product1.jpg' },
                ],
                [
                    { pid: "1",cat:1, pname: 'Ferrero Collection', price: 33.3, image: 'resources/category1/product1.jpg' },
                    { pid: "2",cat:1, pname: 'Orihiro Jelly', price: 33.3, image: 'resources/category1/product2.jpg' },
                    { pid: "3",cat:1, pname: 'Garden Crackers Malkist', price: 33.3, image: 'resources/category1/product3.jpg' },
                    { pid: "4",cat:1, pname: 'Four Seas Seaweed', price: 33.3, image: 'resources/category1/product4.jpg' },
                    { pid: "5",cat:1, pname: 'Uha Cororo', price: 33.3, image: 'resources/category1/product5.jpg' },
                    { pid: "6",cat:1, pname: 'Pringles Chips', price: 33.3, image: 'resources/category1/product6.jpg' },
                ],
                [
                    { pid: "7",cat:2, pname: 'Pocari Sweat', price: 33.3, image: 'resources/category2/product1.jpg' },
                    { pid: "8",cat:2, pname: 'Hokkaido Natural Mineral Water', price: 33.3, image: 'resources/category2/product2.jpg' },
                    { pid: "9",cat:2, pname: 'Vitamin Orange', price: 33.3, image: 'resources/category2/product3.jpg' },
                    { pid: "10",cat:2, pname: 'Coix Seed Drink', price: 33.3, image: 'resources/category2/product4.jpg' },
                    { pid: "11",cat:2, pname: 'Chi Forest Sparking Drink', price: 33.3, image: 'resources/category2/product5.jpg' },
                    { pid: "12",cat:2, pname: 'LOTTE Natural Mineral Water', price: 33.3, image: 'resources/category2/product6.jpg' }
                ]],
            cartItems: {},
            showCart: false,
            currentProductDetail: null,
            showDetail:false,
            selectedQuantity: 1,
        };
    },
    methods: {
        selectCategory(category) {
            this.currentCategory = category;
            if(this.showDetail){
                this.closeDetail();
            }
        },
        addToCart(pd) {
            if (this.cartItems[pd.pid]) {
                this.cartItems[pd.pid] += this.selectedQuantity;
            } else {
                this.cartItems[pd.pid] = this.selectedQuantity;
            }
        },
        toggleCart() {
            this.showCart = !this.showCart;
        },
        getProductById(pid) {
            for (let i = 0; i < this.cat_products_list.length; i++) {
                const product = this.cat_products_list[i].find(item => item.pid === pid);
                if (product) {
                    return product;
                }
            }
            return { pname: 'Unknown' };
        },
        showProductDetail(product) {
            this.currentProductDetail = product;
            this.selectedQuantity = 1;
            this.showDetail=true;
            this.currentCategory = product.cat;
        },
        closeDetail() {
            this.currentProductDetail = null;
            this.selectedQuantity = 1;
            this.showDetail=false;
        },
        checkout() {
            alert("Proceeding to checkout...");
        }
    },
    computed: {
        isCartEmpty() {
            return Object.keys(this.cartItems).length === 0;
        }
    }
});

app.mount('#app');
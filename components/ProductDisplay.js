app.component('product-display', {
  props:{
    premium: {
      type: Boolean,
      required: true
    }
  }
template:
/*html*/

`<div class="product-display">
        <div class="product-container">
<div class="product-image">
  <img v-bind:src="image">
</div>
<div class="product-info">
  <h1>{{ title }} </h1>

      <h1>{{ product }}</h1>



      <p v-if="instock"> In stock</p>
      <p v-else> Out of stock</p>
      <p>shipping:{{Shipping}} </p>
<ul>
  <li v-for="detail in details">{{ detail }}</li>
   </ul>
   <div v-for="(variant, index)  in variant" 
   :key="variant.id"
    @mouseover="updateVariant(index)"
    class="color-circle"
    :style="{ backgroundColor: variant.color }">
    
  </div>

   <button 
   class="button"
   :class="{ disabledButton: !instock }"
   :disabled="!instock"
    @click="addTocart">
    Add to Cart
  </button>
        </div>
    </div>
</div>`,

    data() {
        return {
            product: 'Socks',
            selectedVariant: 0,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variant: [
                { id: 2234, color: 'green' , image: './assets/images/socks_green.jpg', quantity: 50 },
                { id: 2235, color: 'blue' , image: './assets/images/socks_blue.jpg' ,   quantity: 0 }
            ]
}
    }, 
    methods: {
        addTocart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
         
        }
 },
 computed : {
    title() {
     return this.brand + ' ' + this.product
    },
    image() {
        return this.variant[this.selectedVariant].image
    },
      instock() {
        return this.variant[this.selectedVariant].quantity
    },
    shipping() {
        if (this.premium) {
            return "Free"
        }
        return 2.99
    }
})


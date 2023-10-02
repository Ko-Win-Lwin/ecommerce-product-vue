<template>
  <div id="" class="flex flex-col lg:flex-row lg:gap-20 mb-10 lg:mt-[8%]">
    <ProductShowcase @showProductDetailModal="showProductDetailModal"></ProductShowcase>

    <div id="" class="text-start mt-8 lg:mt-16 px-5">
      <h4 class="text-orange-400 font-extrabold text-[15px] lg:text-[12px] mb-4 tracking-widest">SNEAKER COMPANY</h4>
      <h2 class="text-[34px] lg:text-[40px] font-bold mb-5 leading-10">Fall Limited Edition Sneakers</h2>
    
      <p class="text-[17px] leading-8 lg:text-sm text-slate-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga in earum ut nostrum ea debitis saepe quod quisquam quae voluptate, maiores.
      </p>


      <!-- price tag -->
      <div id="" class="flex  lg:flex-col  lg:items-start justify-between items-center mt-5">
        <div class="flex items-center gap-5 lg:gap-3">
          <span class="text-[35px] lg:text-[25px] font-bold">${{ totalCost.price }}</span>
          <span class="bg-orange-200 px-3 py-1 lg:px-1 lg:py-0 rounded-md text-sm font-bold text-orange-500">50%</span>
        </div>

        <div class="text-[20px] lg:text-[20px] line-through text-gray-400 font-bold">$250.00</div> 
      </div>



      <!-- buttons -->
      <div id="btns" class="flex flex-col lg:flex-row gap-5 justify-between mt-5">
        <!-- plus and minus btns -->
        <div class="w-full lg:w-[40%] bg-slate-100 rounded grid place-items-center">
          <div class="w-full flex justify-between items-center rounded px-4 lg:px-2 py-4">
            <button  @click="decreaseItems" class="bg-transparent  p-0"><img  src="../assets/icon-minus.svg" alt="" class="lg:w-[15px]"></button>
            <span class="block lg:w-[50px] text-center font-bold mx-5">{{ quantity }}</span>
            <button @click="addItems" class="p-0 bg-transparent"><img src="../assets/icon-plus.svg" alt="" class="lg:w-[15px]"></button>
          </div>
        </div>

        <!-- add to cart btn -->
        <div class="w-full lg:w-[60%]">
          <button @click="addToCart" class="w-full bg-orange-500 flex items-center justify-center  gap-3  px-[60px] py-4 lg:py-[13px] hover:bg-orange-400" >

            <svg  width="22" height="20"  xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="" fill-rule="" class="stroke-none fill-white " /></svg>
            <span class="text-white text-lg lg:text-[14px] font-bold">Add to cart</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="isShowDetailModal"> 
        <DetailModal :show="isShowDetailModal" @hideProductDetailModal="hideProductDetailModal"></DetailModal> {{ isShowDetailModal }}
    </div>

    <div v-if="store.state.isShowCart" id="cart_box" class="top-24 left-[50%] translate-x-[-50%] lg:top-18 lg:left-[80%]">
      <Cart :totalCost="totalCost" :mainImage="mainImage" @resetQuantity="resetQuantity"></Cart>
    </div>
  </div>
  
</template>

<script>
import Cart from '../components/Cart.vue'
import DetailModal from '../components/DetailModal.vue'
import ProductShowcase from '../components/ProductShowcase.vue'


import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Cart,
    ProductShowcase, 
    DetailModal 
  },

  setup() {

    const store = useStore()
    let quantity = ref(0)

    const totalCost = ref({ price: 125.00, quantity: computed(() => quantity.value) })


    
    // define big image
    let mainImage = ref("src/assets/image-product-1.jpg")
    let isShowDetailModal = ref(null)

    // define thumbnail images
    let images = ref([
      "src/assets/image-product-1-thumbnail.jpg",
      "src/assets/image-product-2-thumbnail.jpg",
      "src/assets/image-product-3-thumbnail.jpg",
      "src/assets/image-product-4-thumbnail.jpg"
    ])


    // get the index of thumbnail images to show responsively large image
    let getIndexOfImage = (index) => {
      mainImage.value = `src/assets/image-product-${index+1}.jpg`
    }

    // show product detail modal 
    let showProductDetailModal = (showDetailModal) => {
      isShowDetailModal.value = showDetailModal
      if(store.state.isShowCart) {
        store.commit("toggleCartButton")
      }
      
    }

    // hide product detail modal
    let hideProductDetailModal = (hideDetailModal) => {
      isShowDetailModal.value = hideDetailModal
    }

    // add items
    let addItems = () => {
      quantity.value++
      store.commit('increment')
      console.log(totalCost.value.quantity)
    }

    // decrease Items
    let decreaseItems = () => {
      if(quantity.value) {
        quantity.value--
        store.commit('decrement')
      }
    }

    //add to cart button 
    let addToCart = () => {
      console.log("redirection to add to cart")
    }


    // reset quantity 
    let resetQuantity = (q) => {
      quantity.value = q
      store.commit("resetItemsCount")
    }

    return { 
      mainImage, 
      images, 
      getIndexOfImage,  
      isShowDetailModal, 
      showProductDetailModal, 
      hideProductDetailModal, 
      addItems, 
      decreaseItems, 
      quantity,
      addToCart,
      store,
      totalCost,
      resetQuantity
    }
  }

  

}
</script>

<style>
#home_view_section {
  display: flex;
  justify-content: space-around;
  gap: 7%;
}

#home_view_section {
  margin-top: 10%;
}

#show_products {
  width: 55%;
  margin-left: 5%;
}

#detail_products {
  width: 50%;
}

#showcase_img {
  border-radius: 20px;
  cursor: pointer;
}

#thumbnails_img {
  margin-top: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6%;

}

.thumbnail_img {
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  object-fit: contain;
}

.border {
  border: 6px solid orange;
}

#cart_box {
  position: absolute;
}

</style>
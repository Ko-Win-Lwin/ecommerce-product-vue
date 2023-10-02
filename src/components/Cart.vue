<template>
  <div id="cart" class="shadow-xl rounded-md w-[340px] pb-3 ">
    <p class="p-5 text-start font-semibold">Cart</p>
    <hr>

    <div v-if="totalCost.quantity"> 
      <CartItems :totalCost="totalCost" :mainImage="mainImage" @resetQuantity="resetQuantity"></CartItems>
    </div>
    <div v-else class="h-[50%] w-full  grid place-items-center">
      <p class="h-[150px] grid place-items-center"> Your cart is empty</p>
    </div>
    

  </div>
</template>

<script>
import { useStore } from 'vuex'
import CartItems from './CartItems.vue'
export default {
  components: { CartItems },
  props: ['totalCost', "mainImage"],

  setup(props , {emit}) {
    const store = useStore()
    let totalCost = props.totalCost;
    let mainImage = props.mainImage

    let resetQuantity = (quantity) => {
      let q = quantity
      emit("resetQuantity", q)

    }

    return { store, totalCost, mainImage, resetQuantity } 
  }
  

}
</script>

<style>
#cart {
    background: white;
}
</style>
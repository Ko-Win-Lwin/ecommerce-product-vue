<template>
    <div class="my-3 mx-3 flex flex-col gap-4">
        <div id="cart_item" class="flex justify-between items-center">
            <div>
                <img :src="mainImage" alt="thumbnail" class="w-12 h-12 lg:w-10 lg:h-10 rounded-lg" >
            </div>

            <div class="text-start text-slate-500 text-[17px] lg:text-[14px]">
                <h6 class=" ">Fall Limited Editions Sneakers</h6>
                <p class="">
                    <span>${{ totalCost.price }}</span> x
                    <span>{{ totalCost.quantity }} </span> x 
                    <span class="text-black font-bold">${{ totalCost.price * totalCost.quantity }}</span>
                </p>   
            </div>

            <div class="cursor-pointer mt-5" @click="deleting" >
                <span class="text-[14px] " > 🗑 </span>
            </div>
        </div>

        <button class="bg-orange-500 w-full gap-3 px-[60px] py-[10px] hover:bg-orange-400" >
              <span class="text-white text-[14px] font-bold">Checkout</span>
        </button>
        
    </div>

    
  
</template>

<script>

export default {

    props: ['totalCost', "mainImage"],

    setup(props, { emit }) {
        let deleting = () =>  {
            emit("resetQuantity", 0)
        }

        return { deleting }
    }

}
</script>

<style>

</style>
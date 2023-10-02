<template>
  <nav  class="flex justify-between items-center  lg:border-b  px-5 py-3 lg:py-8 ">

    <div class="text-[35px] text-slate-500 grid place-items-center mb-1 me-3 cursor-pointer lg:hidden">
      &#8801;
    </div>
        
    
    <!-- brand logo -->
    <router-link :to="{name: 'home'} " class="me-10 lg:me-8">
        <img id="nav_logo" class="h-10 lg:w-[120px]" src="../assets/logo.svg" alt="">
    </router-link>

        
    <!-- pages links -->
    <div class="hidden lg:flex  lg:items-center gap-10 lg:mr-10 lg:text-[14px] lg:flex-1" >
          <router-link :to="{ name: 'collections' }" class="text-slate-500">Collections</router-link>
          <router-link :to="{ name: 'men' }" class="text-slate-500">Men</router-link>
          <router-link :to="{ name: 'women' }" class="text-slate-500">Women</router-link>
          <router-link :to="{ name: 'about' }" class="text-slate-500">About</router-link>
          <router-link :to="{ name: 'contact' }" class="text-slate-500">Contact</router-link>
    </div>
        


    <!-- right side navigation items -->
    <div id="right_nav_items" class="flex justify-around items-center gap-2">
        <img src="../assets/icon-cart.svg" alt="" class="cursor-pointer w-[30%] lg:w-5" @click="showCart">
        <div v-if="store.state.itemsCount" id="badge" class="top-[3.2%] left-[77%] lg:left-[80%] lg:top-[3.3%]" >
          <span  class="w-6 h-4 p-1 bg-orange-400 text-center text-[12px] rounded-lg flex justify-center items-center">{{ store.state.itemsCount }}</span>
        </div>
         

        <router-link :to="{name: 'myprofile'}" id="avatar_img" class="w-[40%] lg:w-[30%]">
            <img  src="../assets/image-avatar.png" alt="">
        </router-link>
    </div>
  </nav>

</template>

<script>

import { useStore } from 'vuex';


export default {

  setup() {
    const store = useStore()
    


    let showCart = () => {
        store.commit('toggleCartButton')
        console.log("is cart show : ", store.state.isShowCart)
    }


    return { 
      showCart,
      store
    }
  }
}


</script>

<style>
#badge {
    display: grid;
    place-items: center;
    color: white;
    position: absolute;
}


</style>
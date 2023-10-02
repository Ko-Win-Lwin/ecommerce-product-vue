<template>
  <div id="" class="w-full lg:w-[90%] lg:ml-[5%]">
    <div class="w-full">
        <img  v-bind:src=mainImage alt="" id="" class="w-full lg:mt-5 lg:rounded-lg" @click="showProductDetailModal">
    </div>

    <div id="" class="hidden lg:flex lg:justify-between gap-5 lg:mt-5">
        <div v-for="(image, index) in images" :key="index">
            <img :src="image" alt="" @click="getIndexOfImage(index)" class="thumbnail_img hover:opacity-70 ">
        </div> 
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(props, { emit }) {

        let isShowDetailModal = ref(false)


        let mainImage = ref("src/assets/image-product-1.jpg")

        // define thumbnail images
        let images = ref([
            "src/assets/image-product-1-thumbnail.jpg",
            "src/assets/image-product-2-thumbnail.jpg",
            "src/assets/image-product-3-thumbnail.jpg",
            "src/assets/image-product-4-thumbnail.jpg"
        ])


        // get the index of thumbnail images to show responsively large image
        let getIndexOfImage = (index) => {
            mainImage.value = `src/assets/image-product-${index + 1}.jpg`
            console.log(mainImage)
        }

        let showProductDetailModal = () => {
          emit("showProductDetailModal", isShowDetailModal)
        }


        return { mainImage, images, getIndexOfImage, showProductDetailModal }
    }
}
</script>

<style>



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
</style>
<template>
    <div id="detailModal" @click.self="hideProductDetailModal">
        <button @click="hideProductDetailModal" class="bg-transparent text-[30px] text-white font-bold hover:text-orange-500" id="corss_btn">&#x2717;</button>
        <ProductShowcase id="product_showcase"></ProductShowcase>
    </div>
  
</template>

<script>
import ProductShowcase from './ProductShowcase.vue'

export default {
  components: { ProductShowcase },

    props: ['show'],
    
    setup(props , { emit }) {
        let hideProductDetailModal = () => {
            emit("hideProductDetailModal", !props.show)
        }
        return { hideProductDetailModal }
    }
}
</script>



<style scope>
#detailModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);

}

#product_showcase {
    width: 35%;
}

#corss_btn {
    position: absolute;
    cursor: pointer;
    top: 12%;
    left: 62%;
}

</style>
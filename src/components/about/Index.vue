<template>
    <div class="lg:mx-96">
        <div class="flex flex-col gap-y-6 pb-4">
            <div class="flex lg:flex-row flex-col gap-x-4 gap-y-4">
                <Information class />
                <Photo class="order-first lg:order-last" />
            </div>
            <Description />
        </div>
    </div>
</template>

<script>

import Photo from './Photo.vue'
import Description from './Description.vue'
import Information from './Information.vue'



export default {
    components: {

        Photo,
        Description,
        Information
    }

}
</script>

<style>
</style>
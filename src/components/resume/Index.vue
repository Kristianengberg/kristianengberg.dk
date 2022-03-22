<template>
    <div class="flex flex-col gap-y-6 pb-4 ">
        <div class="flex flex-col lg:flex-row">
            <Education />
            <!-- <Personal /> -->
        </div>
        <div class="flex flex-col lg:flex-row gap-x-2">
            <Languages />
            <Technologies />
        </div>
        <Experience />
    </div>
</template>

<script>
import Personal from './Personal.vue'
import Education from './Education.vue'
import Languages from './Languages.vue'
import Technologies from './Technologies.vue'
import Experience from './Experience.vue'

export default {
    components: {
        Personal,
        Education,
        Languages,
        Technologies,
        Experience
    }

}
</script>

<style>
</style>
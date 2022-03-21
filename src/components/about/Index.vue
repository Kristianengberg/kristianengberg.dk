<template>
    <Headline>About</Headline>
    <div class="h-screen lg:mx-96 ">
        <div class="border lg:block p-6 rounded-md">
            <Photo class="mx-auto lg:mx-12"/>
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
            <Description />
        </div>
    </div>
</template>

<script>

import Photo from './Photo.vue'
import Description from './Description.vue'
import Headline from '../utilities/Headline.vue'

export default {
    components: {
        Headline,
        Photo,
        Description
    }

}
</script>

<style>
</style>
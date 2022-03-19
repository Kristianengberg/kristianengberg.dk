<template>
    <div class="py-2 bg-gray-300 shadow-md">
        <div class="w-2/4 md:flex hidden justify-between mx-auto">
            <a
                href="/"
                class="flex justify-between border-2 rounded-md border-transparent hover:cursor-pointer hover:border-gray-200 px-2 mx-2"
            >
                <p class="font-medium tracking-widest">Home</p>
            </a>
            <a
                href="/about"
                class="flex justify-between border-2 rounded-md border-transparent hover:cursor-pointer hover:border-gray-200 px-2 mx-2"
            >
                <p class="font-medium tracking-widest">About</p>
            </a>
            <a
                href="/resume"
                class="flex justify-between border-2 rounded-md border-transparent hover:cursor-pointer hover:border-gray-200 px-2 mx-2"
            >
                <p class="font-medium tracking-widest">Resume</p>
            </a>
            <a
                href="/contact"
                class="flex justify-between border-2 rounded-md border-transparent hover:cursor-pointer hover:border-gray-200 px-2 mx-2"
            >
                <p class="font-medium tracking-widest">Contact</p>
            </a>
        </div>

        <PopMenu class="md:hidden my-auto" />
    </div>
</template>

<script>
import PopMenu from './PopMenu.vue'
import { HomeIcon } from '@heroicons/vue/solid'

export default {
    components: {
        HomeIcon,
        PopMenu
    }

}
</script>

<style>
</style>
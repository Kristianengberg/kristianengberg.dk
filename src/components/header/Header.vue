<template>
    <div class="flex justify-between py-2">
        <a
            href="/"
            class="flex justify-between border-2 border-transparent hover:cursor-pointer hover:border-gray-200 px-2 rounded-md"
        >
            <HomeIcon class="w-6 text-blue-300" />
            <p class="font-mono">kristianengberg.dk</p>
        </a>
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
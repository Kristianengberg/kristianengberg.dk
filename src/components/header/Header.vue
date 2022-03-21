<template>
    <header class="py-2 bg-gray-300 shadow-md fixed top-0 z-10 w-full">
        <div class="w-2/4 md:flex hidden justify-between mx-auto">
            <router-link
                v-for="link in links"
                :key="link.name"
                :to="link.href"
                class="flex justify-between border-2 rounded-md border-transparent hover:cursor-pointer hover:border-gray-200 px-2 mx-2"
            >
                <p class="font-medium tracking-widest">{{ link.name }}</p>
            </router-link>
        </div>

        <PopMenu class="md:hidden my-auto" />
    </header>
</template>

<script>
import PopMenu from './PopMenu.vue'
import { HomeIcon } from '@heroicons/vue/solid'

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About',
        href: '/about'
    },
    {
        name: 'Resume',
        href: '/resume'
    },
    {
        name: 'Contact',
        href: '/contact'
    },
]

export default {
    components: {
        HomeIcon,
        PopMenu
    },
    setup() {

        return {
            links
        }
    }

}
</script>

<style>
</style>
<template>
    <div class="h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
            <div class="m-12">Content</div>
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'

import Footer from '../components/Footer/Footer.vue'




export default {
    components: {
        Header,

        Footer,

    },

    setup() {

        return {

        }
    }
}
</script>

<style>
</style>
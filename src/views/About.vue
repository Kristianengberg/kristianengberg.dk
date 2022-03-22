<template>
    <div class="h-screen flex flex-col">
        <Header />
        <Headline>About</Headline>
        <main class="flex-grow ">
            <About />
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'

import Footer from '../components/Footer/Footer.vue'

import About from '../components/about/Index.vue'

import Headline from '../components/utilities/Headline.vue'




export default {
    components: {
        Header,
        About,
        Footer,
        Headline

    },

    setup() {

        return {

        }
    }
}
</script>

<style>
</style>
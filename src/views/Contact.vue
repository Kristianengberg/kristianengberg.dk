<template>
    <div class="h-screen flex flex-col bg-gray-700">
        <Header />
        <Headline>Contact</Headline>
        <main class="flex-grow bg-gray-700">
            <Contact class />
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'

import Footer from '../components/Footer/Footer.vue'

import Headline from '../components/utilities/Headline.vue'

import Contact from '../components/contact/Index.vue'


export default {
    components: {
        Header,
        Headline,
        Footer,
        Contact

    },

    setup() {

        return {

        }
    }
}
</script>

<style>
</style>
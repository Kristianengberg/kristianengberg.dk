<template>
    <div class="h-screen flex flex-col">
        <Header />
        <Headline>Resume</Headline>
        <main class="flex-grow">
            <div class="m-12">Content</div>
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'

import Footer from '../components/Footer/Footer.vue'

import Headline from '../components/utilities/Headline.vue'




export default {
    components: {
        Header,
        Headline,

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
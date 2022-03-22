<template>
    <div class="h-screen flex flex-col">
        <Header />
        <Headline>Resume</Headline>
        <main class="flex-grow lg:mx-96">
            <Resume />
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'

import Footer from '../components/Footer/Footer.vue'

import Headline from '../components/utilities/Headline.vue'

import Resume from '../components/resume/Index.vue'




export default {
    components: {
        Header,
        Headline,
        Resume,
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
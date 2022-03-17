<template>
    <div class="md:mx-40">
        <Header />
        <Index />
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'
import database from '../database/database.json'
import Index from '../components/home/Index.vue'
import Footer from '../components/Footer/Footer.vue'

export default {
    components: {
        Header,
        Index,
        Footer
    },

    setup() {

        return {
            database,
        }
    }
}
</script>

<style>
</style>
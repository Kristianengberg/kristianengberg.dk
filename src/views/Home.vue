<template>
    <div class="h-screen flex flex-col">
        <Header />
        <main class="flex-grow">
            <Index class="bg-gray-700" />
        </main>
        <div id="projects">
            <Headline>Projects</Headline>
            <div class="flex flex-row flex-wrap sm:w-2/3 mx-auto justify-center gap-4 mb-4">
                <Projects />
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'
import database from '../database/database.json'
import Projects from '../components/projects/Index.vue'
import Footer from '../components/Footer/Footer.vue'
import Index from '../components/home/Index.vue'
import Headline from '../components/utilities/Headline.vue'


export default {
    components: {
        Header,
        Index,
        Projects,
        Footer,
        Headline
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
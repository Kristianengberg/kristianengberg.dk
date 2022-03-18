<template>
    <div class="h-screen">
        <div class>
            <Header class="sticky top-0" />
            <section id="home">
                <Index class="bg-gray-700" />
            </section>
            <section id="projects">
                <Headline>Projects</Headline>

                <div class="md:mx-40">
                    <Projects />
                </div>
            </section>
        </div>
        <Footer class="relative bottom-0" />
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
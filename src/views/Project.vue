<template>
    <div class="h-screen flex flex-col">
        <Header />
        <Headline>{{ currentProject.title }}</Headline>
        <main class="flex-grow">
            <Project :project="currentProject" />
        </main>
        <Footer />
    </div>
</template>

<script>

import Header from '../components/header/Header.vue'

import Footer from '../components/Footer/Footer.vue'

import Project from '../components/projectsite/Index.vue'

import Headline from '../components/utilities/Headline.vue'

import Database from '../database/database.json'
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'


export default {
    components: {
        Header,
        Footer,
        Headline,
        Project

    },
    props: {
        projectid: {
            required: true,
            type: String
        }
    },

    setup(props) {

        const currentProject = Database.project[props.projectid]


        return {
            currentProject
        }
    }
}
</script>

<style>
</style>
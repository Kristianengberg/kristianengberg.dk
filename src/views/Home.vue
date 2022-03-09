<template>
    <Index />
    <Index />
    <div v-for="(project, index) in database.project" :key="index">{{ project.title }}</div>
</template>

<script>

import database from '../database/database.json'
import Index from '../components/home/Index.vue'

export default {
    components: {
        Index
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
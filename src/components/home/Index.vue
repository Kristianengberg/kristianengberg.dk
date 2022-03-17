<template>
    <div v-for="project in Database.project" :key="project.title">
        <PreviewOne :project="project" />
        <PreviewTwo :project="project" />
    </div>
</template>

<script>

import PreviewOne from "./PreviewOne.vue"
import PreviewTwo from "./PreviewTwo.vue"
import Database from '../../database/database.json'

export default {

    components: {
        PreviewOne,
        PreviewTwo
    },

    setup() {

        return {
            Database
        }
    }

}
</script>

<style>
</style>
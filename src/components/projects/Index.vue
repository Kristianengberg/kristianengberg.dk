<template>
    <div v-for=" project  in Database.project" :key="project.title" class="flex flex-col">
        <PreviewOne :project="project" class="py-12" />
        <PreviewTwo :project="project" class="py-12" />
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
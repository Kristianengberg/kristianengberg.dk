<template>
    <PreviewTwo v-for=" project  in Database.project" :key="project.title" :project="project" class>
        <div class="hidden">
            <img :src="project.picture" alt />
        </div>
    </PreviewTwo>
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
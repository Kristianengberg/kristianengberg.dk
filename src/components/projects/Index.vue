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
import { ref } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'

export default {

    components: {
        PreviewOne,
        PreviewTwo
    },

/*     computed: {
        images() {
            return require('../../assets')
        }
    }, */

    setup() {

        /* 
                const db = ref({})
        
                fetch('src/database/database.json').then((response) => {
                    return response.json()
                }).then((data) => {
                    db.value = data
                }).catch((err) => {
                    console.log(err)
                }) */



        return {
            Database
        }
    }

}
</script>

<style>
</style>
<template>
    <PreviewOne :project="Database.project[0]" />
</template>

<script>

import PreviewOne from "./PreviewOne.vue"
import Database from '../../database/database.json'

export default {

    components: {
        PreviewOne
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
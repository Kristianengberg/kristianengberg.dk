<template>
    <div v-for="(project, index) in database.project" :key="index">{{ project.title }}</div>
</template>

<script>

import database from '../database/database.json'

export default {

    setup() {

        return {
            database
        }
    }
}
</script>

<style>
</style>
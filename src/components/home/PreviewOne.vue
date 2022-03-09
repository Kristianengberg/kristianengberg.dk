<template>
    <div class="p-4 bg-green-200 border-2 flex flex-row mx-40">
        <div class="basis-2/4">
            <div>{{ props.project.title }}</div>
        </div>
        <div class="basis-2/4 flex flex-row space-x-4">
            <div>{{ props.project.picture }}</div>
            <div>{{ props.project.video }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: String
    },

    setup(props) {

        return {
            props
        }
    }

}
</script>

<style>
</style>
<template>
    <div class="flex justify-between p-4 bg-slate-200 border-2">
        <div class="flex flex-row">
            <div>{{ props.project.picture }}</div>
            <div>{{ props.project.video }}</div>
        </div>
        <div class="flex">
            <div>{{ props.project.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: Object
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
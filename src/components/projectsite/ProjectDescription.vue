<template>
    <div class="rounded-md shadow-md bg-gray-700 text-slate-300 p-4">{{ props.description }}</div>
</template>

<script>
export default {
    props: {
        description: String
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
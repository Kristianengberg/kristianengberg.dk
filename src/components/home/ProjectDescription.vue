<template>
    <div>{{ props.description }}</div>
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
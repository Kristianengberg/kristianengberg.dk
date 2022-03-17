<template>
    <div>{{ props.video }}</div>
</template>

<script>
export default {
    props: {
        video: String
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
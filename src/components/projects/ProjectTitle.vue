<template>
    <div>{{ props.title }}</div>
</template>

<script>
export default {
    props: {
        title: String
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
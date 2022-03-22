<template>
    <div class="">
        <img :src="props.picture" alt class="object-scale-down h-96 rounded-md my-4 bg-white" />
    </div>
</template>

<script>
export default {
    props: {
        picture: String
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
<template>
    <div class="flex flex-row justify-center border rounded-md  my-4 py-4  bg-white">
        <img
            v-for="tech in props.tech"
            :key="tech"
            :src="tech"
            class="object-scale-down h-20 w-20"
            alt
        />
    </div>
</template>

<script>
export default {
    props: {
        tech: Array
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
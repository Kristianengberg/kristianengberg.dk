<template>
    <div class="flex flex-col justify-center">
        <div class="flex justify-center">
            <img src="../../assets/youtube.png" class="w-12 h-12" alt />
        </div>
        <div class="flex justify-center">
            <p>Demo</p>
        </div>
    </div>
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
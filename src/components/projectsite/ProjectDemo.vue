<template>
    <div
        class="flex flex-row justify-center border p-2 shadow-md hover:bg-red-700 hover:cursor-pointer"
    >
        <div class="flex justify-center">
            <img src="../../assets/youtube.png" class="w-12 h-12" alt />
        </div>
        <div class="flex items-center">
            <p class>Demo</p>
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
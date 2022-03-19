<template>
    <div
        class="flex flex-row justify-center items-center border p-2 shadow-md hover:bg-green-700 hover:cursor-pointer"
    >
        <div class="flex justify-center">
            <p>Read More</p>
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
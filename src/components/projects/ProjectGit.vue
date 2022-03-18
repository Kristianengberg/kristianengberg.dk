<template>
    <div class="flex flex-col justify-center border rounded-md p-2 shadow-md">
        <div>
            <img src="../../assets/githubwhite.png" class="w-12 h-12" alt />
        </div>
        <div class="flex justify-center">
            <p>Code</p>
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
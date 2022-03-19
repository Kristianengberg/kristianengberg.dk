<template>
    <a
        :href="props.git"
        target="_blank"
        class="flex flex-row justify-center border p-2 shadow-md hover:bg-purple-700 hover:cursor-pointer"
    >
        <div>
            <img src="../../assets/githubwhite.png" class="w-12" alt />
        </div>
        <div class="flex justify-center items-center">
            <p>Code</p>
        </div>
    </a>
</template>

<script>
export default {
    props: {
        git: String
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
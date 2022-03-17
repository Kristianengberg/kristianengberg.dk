<template>
    <div class="flex flex-col justify-center -mx-3">
        <div>
            <img src="../../assets/vue.png" class="w-12 h-auto" alt />
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
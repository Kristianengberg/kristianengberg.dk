<template>
    <div class="flex flex-col justify-center my-12">
        <div>
            <img :src="props.tech" class="object-scale-down h-20 w-20" alt />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tech: String
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
<template>
    <div
        class="h-screen flex flex-col justify-center items-center text-slate-300 font-mono text-2xl shadow-md lg:text-6xl"
    >
        <p class="drop-shadow-md">
            Hello, I'm
            <span class="text-red-400">Kristian Engberg</span>
        </p>
        <p class="drop-shadow-md">A full-stack web developer</p>
        <div class="mt-12">
            <router-link
                :to="{ name: 'home', hash: '#projects' }"
                class="border p-4 text-lg hover:bg-blue-600 hover:cursor-pointer shadow-md"
            >See my projects</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
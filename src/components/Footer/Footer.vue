<template>
    <footer class="flex flex-col gap-y-2 justify-center h-20 bg-black w-full text-slate-300">
        <div class="flex gap-x-6 mx-auto">
            <a
                href="https://www.linkedin.com/in/kristian-engberg-23a742b3/"
                class="hover:underline"
                target="_blank"
            >LinkedIn</a>
            <a
                href="https://www.github.com/kristianengberg"
                class="hover:underline"
                target="_blank"
            >Github</a>
        </div>
        <div class="mx-auto">Kristian Mannerup Engberg Nielsen &#169; {{ year }}</div>
    </footer>
</template>

<script>
export default {
    setup() {

        const date = new Date()
        const year = date.getFullYear();

        return {
            year
        }
    }

}
</script>

<style>
</style>
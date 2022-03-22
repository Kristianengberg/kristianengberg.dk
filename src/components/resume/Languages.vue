<template>
  <div class="rounded-md shadow-md bg-gray-700 text-slate-300  px-4 pb-4 w-full">
    <div class="flex justify-center text-4xl">Languages</div>
    <div class="flex flex-col">
      <p v-for="language in languages" :key="language.name" class>{{ language.name }}</p>
    </div>
  </div>
</template>

<script>

const languages = [
  {
    name: "JavaScript"
  },
  {
    name: "C#"
  },
  {
    name: "Java"
  },
  {
    name: "PHP"
  },
  {
    name: "Python"
  }

]

export default {
  setup() {

    return {
      languages
    }
  }
}
</script>

<style>
</style>
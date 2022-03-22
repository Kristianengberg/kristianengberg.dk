<template>
  <div class="rounded-md shadow-md bg-gray-700 text-slate-300 px-4 pb-4 w-full">
    <div class="flex justify-center text-4xl">Technologies</div>
    <div class="flex flex-col">
      <div v-for="tech in technologies" :key="tech.name" class="lg:self-end">{{ tech.name }}</div>
    </div>
  </div>
</template>

<script>

const technologies = [
  {
    name: "VueJS"
  },
  {
    name: "Laravel"
  },
  {
    name: "NodeJS"
  },
  {
    name: "MySQL"
  },
  {
    name: "MongoDB"
  },
  {
    name: "Postman"
  },
  {
    name: "AWS"
  },
  {
    name: "Git"
  }
]

export default {
  setup() {

    return {
      technologies
    }
  }
}
</script>

<style>
</style>
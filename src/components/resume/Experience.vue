<template>
  <div
    class="rounded-md shadow-md flex flex-col bg-gray-700 text-slate-300 px-4 pb-4 w-full gap-y-2"
  >
    <div class="flex justify-center text-4xl">Experience</div>
    <div
      v-for="experience in experiences"
      :key="experience.company"
      class="flex flex-col gap-x-4 border-b"
    >
      <div class="flex flex-row justify-between">
        <p class="font-bold">{{ experience.position }}</p>
        <p>{{ experience.length }}</p>
      </div>
      <p class>{{ experience.company }}</p>
    </div>
  </div>
</template>

<script>

const experiences = [

  {
    position: "VueJS Intern",
    company: "Meeshop Aps",
    location: "Herlev",
    length: "August 2021 - October 2021"
  },
  {
    position: "Part-time Sales",
    company: "Skousen",
    location: "Hvidovre",
    length: "May 2014 - February 2022"
  },
]

export default {
  setup() {

    return {
      experiences
    }
  }

}
</script>

<style>
</style>
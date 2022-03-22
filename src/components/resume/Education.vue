<template>
  <div
    class="rounded-md shadow-md flex flex-col bg-gray-700 text-slate-300 px-4 pb-4 w-full gap-y-2"
  >
    <div class="flex justify-center text-4xl">Education</div>
    <div v-for="edu in education" :key="edu.name" class="flex flex-col lg:gap-x-4 border-b">
      <div class="flex lg:flex-row flex-col justify-between">
        <p class="font-bold">{{ edu.name }}</p>
        <p class>{{ edu.year }}</p>
      </div>
      <p class>{{ edu.school }}</p>
    </div>
  </div>
</template>

<script>

const education = [
  {
    name: 'Computer Science',
    year: 'August 2019 - January 2022',
    school: 'Copenhagen School of Design and Technology'
  },
  {
    name: 'Master of Medialogy',
    year: 'September 2018 - January 2019',
    school: 'Aalborg University'
  },
  {
    name: 'Bachelor of Medialogy',
    year: 'September 2015 - June 2018',
    school: 'Aalborg University'
  },
]

export default {

  setup() {

    return {
      education
    }
  }

}
</script>

<style>
</style>
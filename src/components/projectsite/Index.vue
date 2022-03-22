<template>
    <div class="flex flex-col lg:mx-96">
        <div class="flex lg:flex-row flex-col lg:gap-x-4 gap-y-4">
            <div class="lg:w-4/5">
                <ProjectDescription :description="props.project.description" />
            </div>
            <div class="rounded-md shadow-md bg-gray-700 text-slate-300 p-4">
                <ProjectPicture :picture="props.project.picture" />
                <ProjectTech :tech="props.project.tech" />
                <div class="flex flex-row justify-center gap-x-4">
                    <ProjectGit :git="props.project.git" />
                    <ProjectDemo :video="props.project.video" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectDescription from "./ProjectDescription.vue"
import ProjectGit from "./ProjectGit.vue"
import ProjectPicture from "./ProjectPicture.vue"
import ProjectTech from "./ProjectTech.vue"
import ProjectDemo from "./ProjectDemo.vue"

export default {
    components: {
        ProjectDescription,
        ProjectGit,
        ProjectPicture,
        ProjectTech,
        ProjectDemo
    },
    props: {
        project: Object
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
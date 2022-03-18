<template>
    <div class="bg-gray-700 text-slate-300 font-mono">
        <div class="flex justify-between lg:mx-12">
            <div class="flex flex-col w-full">
                <div class="flex flex-row gap-x-4">
                    <ProjectGit />
                    <ProjectLive />
                </div>
            </div>
            <div class="flex flex-col justify-center gap-y-6 w-full">
                <ProjectTitle :title="props.project.title" class="mx-auto" />
                <div class="mx-auto border-2 p-2 hover:bg-green-700 hover:cursor-pointer">
                    <p class="text-lg">Read more</p>
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div class="flex flex-row justify-end">
                    <ProjectTech />
                    <ProjectTech />
                    <ProjectTech />
                    <ProjectTech />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectPicture from "./ProjectPicture.vue"
import ProjectVideo from "./ProjectVideo.vue"
import ProjectDescription from "./ProjectDescription.vue"
import ProjectTitle from "./ProjectTitle.vue"
import ProjectGit from "./ProjectGit.vue"
import ProjectLive from './ProjectLive.vue'
import ProjectTech from './ProjectTech.vue'

export default {
    components: {
        ProjectGit,
        ProjectPicture,
        ProjectVideo,
        ProjectDescription,
        ProjectTitle,
        ProjectLive,
        ProjectTech
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
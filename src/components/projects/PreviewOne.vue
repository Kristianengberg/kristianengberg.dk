<template>
    <div class="flex justify-between p-4 bg-gray-800 ">
        <div class="flex flex-col">
            <div>
                <ProjectTitle :title="props.project.title" />
            </div>
            <div class="flex flex-row mt-12">
                <ProjectTech />
                <ProjectTech />
                <ProjectTech />
                <ProjectTech />
            </div>
        </div>
        <div class="flex gap-x-4">
            <ProjectGit />
            <!-- <ProjectPicture :picture="props.project.picture" /> -->
            <ProjectLive />
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
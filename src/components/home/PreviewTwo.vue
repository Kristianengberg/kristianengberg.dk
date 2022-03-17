<template>
    <div class="flex justify-between p-4 bg-slate-400 border-2">
        <div class="flex flex-row gap-x-4">
            <ProjectGit />
            <!-- <ProjectPicture :picture="props.project.picture" /> -->
            <ProjectLive />
        </div>
        <div class="flex">
            <ProjectTitle :title="props.project.title" />
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

export default {
    components: {
        ProjectGit,
        ProjectPicture,
        ProjectVideo,
        ProjectDescription,
        ProjectTitle,
        ProjectLive
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
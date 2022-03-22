<template>
    <div class="bg-gray-700 text-slate-300 font-mono shadow-md rounded-md pb-8 w-96">
        <div class="border rounded-md mx-4 my-4 bg-white">
            <ProjectPicture :picture="props.project.picture" />
        </div>
        <div class="flex flex-row justify-center gap-x-4 border rounded-md mx-4 my-4 bg-white">
            <ProjectTech v-for="tech in props.project.tech" :key="tech" :tech="tech" />
        </div>
        <div class="flex flex-row justify-center">
            <ProjectTitle :title="props.project.title" />
        </div>

        <div class="flex flex-row gap-x-2 justify-center pt-12">
            <ProjectGit :git="props.project.git" />
            <ProjectLive v-if="project.video" />
            <ProjectRead @click="goToProject(props.project.id)" />
        </div>
    </div>
</template>

<script>
import ProjectPicture from "./ProjectPicture.vue"
import ProjectVideo from "./ProjectVideo.vue"
import ProjectDescription from "./ProjectDescription.vue"
import ProjectTitle from "./ProjectTitle.vue"
import ProjectGit from "./ProjectGit.vue"
import ProjectRead from "./ProjectRead.vue"
import ProjectLive from './ProjectLive.vue'
import ProjectTech from './ProjectTech.vue'
import { useRouter } from 'vue-router'

export default {
    components: {
        ProjectGit,
        ProjectPicture,
        ProjectVideo,
        ProjectDescription,
        ProjectTitle,
        ProjectLive,
        ProjectTech,
        ProjectRead
    },
    props: {
        project: Object
    },

    setup(props) {

        const router = useRouter();

        const goToProject = (projectid) => {
            console.log(projectid)
            router.replace({ name: 'project', params: { projectid } })
        }

        return {
            props,
            goToProject
        }
    }

}
</script>

<style>
</style>
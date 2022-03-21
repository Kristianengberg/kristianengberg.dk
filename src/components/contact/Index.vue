<template>
    <Headline>Contact</Headline>
    <div class="mt-2 flex flex-col justify-center text-slate-300">
        <div class="flex justify-center">
            <Photo />
        </div>
        <div class="flex justify-center my-12 gap-x-4">
            <Github class="w-32" />
            <Linkedin class="w-32" />
        </div>
        <div class="flex flex-col lg:flex-row lg:justify-center items-center lg:my-12 mb-12 gap-x-4">
            <div class="flex lg:flex-row flex-col items-center">
                <PhoneIcon class="w-12" />
                <p>+45 31 27 29 48</p>
            </div>
            <a
                href="mailto: krissoengberg@gmail.com"
                class="flex lg:flex-row flex-col items-center"
            >
                <MailIcon class="w-12" />
                <p class="underline">krissoengerg@gmail.com</p>
            </a>
        </div>
    </div>
</template>

<script>
import Photo from './Photo.vue'
import Headline from '../utilities/Headline.vue'
import Github from '../utilities/Github.vue'
import Linkedin from '../utilities/Linkedin.vue'
import { PhoneIcon, MailIcon } from '@heroicons/vue/solid'

export default {
    components: {
        Photo,
        Headline,
        Github,
        Linkedin,
        PhoneIcon,
        MailIcon
    }


}
</script>

<style>
</style>
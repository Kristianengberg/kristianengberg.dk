<template>
    <Popover class="z-0 static" v-slot="{ open }">
        <div class="relative z-10">
            <div class="max-w-7xl mx-auto flex px-4">
                <PopoverButton
                    :class="[open ? 'text-gray-900' :
                    'text-gray-500',
                    'group rounded-md inline-flex items-center text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2']"
                >
                    <MenuIcon
                        :class="[open ? 'text-gray-800' : 'text-gray-600', ' h-5 w-5']"
                        aria-hidden="true"
                    />
                </PopoverButton>
            </div>
        </div>

        <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
        >
            <PopoverPanel class="absolute my-2 z-10 inset-x-0 transform shadow-lg">
                <div class="bg-white">
                    <div class="max-w-7xl mx-auto grid gap-y-6 px-4 py-6">
                        <a
                            v-for="item in menu"
                            :key="item.name"
                            :href="item.href"
                            class="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
                        >
                            <div class="flex">
                                <div class="flex-shrink-0">
                                    <div
                                        class="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white"
                                    >
                                        <component
                                            :is="item.icon"
                                            class="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                                <div class="ml-4">
                                    <div>
                                        <p
                                            class="text-base font-medium text-gray-900"
                                        >{{ item.name }}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>

<script>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

import {
    UserIcon,
    DocumentTextIcon,
    MailIcon,
    MenuIcon
} from '@heroicons/vue/outline'

const menu = [
    {
        name: 'About',
        href: '/about',
        icon: UserIcon,
    },
    {
        name: 'Resume',
        href: '/resume',
        icon: DocumentTextIcon,
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: MailIcon,
    },
]

export default {
    components: {
        Popover,
        PopoverButton,
        PopoverPanel,
        MenuIcon
    },
    setup() {
        return {
            menu,

        }
    },
}
</script>
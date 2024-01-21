<template>
    <th v-for="i in prop?.table_headers" v-show="i.value" class="px-2 py-2 font-medium text-start text-lg"
        style="font-family: 'Figtree', sans-serif;">
        <!-- {{ prop.each }} -->
        <div v-if="i.name==='username'">
            <span>
                <!-- <img :src="prop.each[image_url]" alt=""> -->
                
                <span class="flex flex-row items-center">
                    <img :src="prop.each.image_url" class="w-10 h-10 rounded-full" alt="">
                    <span class="pl-4">
                        {{ prop.each[i.name] }}
                    </span>
                </span>
            </span>
        </div>

        <div v-else>
            <span class=""> {{ prop.each[i.name] }}</span>
        </div>

    </th>
</template>

<script setup>

import { ref } from 'vue';
const show_icons = ref(false);

const prop = defineProps(['table_headers', 'each'])

const showAdditionFunction = () => {
    // setTimeout(() => {
        show_icons.value = true;
    // }, 250)
}

const hideAdditionFunction = () => {
    show_icons.false = false;
}

</script>

<style scoped>

.show-icons{
    animation: show-icons-frame 0.2s
}

@keyframes show-icons-frame {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0%);
    }
}

</style>
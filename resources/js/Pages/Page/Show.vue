<script setup>
import {defineAsyncComponent} from "vue";

defineProps({
    page: {
        type: Object,
        default: {
            sections: []
        }
    }
})
</script>

<template>
    <div class="w-full h-full bg-red-100">
        <div v-for="section in page.sections">
            <component
                :is="defineAsyncComponent(() => import(`../../Blocks/${section.block.name}.vue`))"
                :json="section.json"
                :sectionId="section.id"
            ></component>
        </div>
    </div>
</template>

<style scoped>

</style>

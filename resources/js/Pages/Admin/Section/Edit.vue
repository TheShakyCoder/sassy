<script setup>
import AdminLayout from "@/Layouts/AdminLayout.vue";
import {defineAsyncComponent} from "vue";

const props = defineProps({
    section: {
        type: Object,
        default: {}
    }
})
const Block = defineAsyncComponent(() => import(`../../../Blocks/${props.section.block}.vue`))
</script>

<template>
    <AdminLayout>
        <Block
            :edit="true"
            :section="section"
            :json="section.json"
        >
        </Block>
    </AdminLayout>
</template>

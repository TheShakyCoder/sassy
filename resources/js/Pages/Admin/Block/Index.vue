<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    blocks: {
        type: Object,
        default: {
            data: []
        }
    }
})
</script>

<template>
    <AdminLayout>
        <template #title>Blocks Index</template>
        <ul class="flex flex-col">
            <li v-for="block in blocks.data" class=" ">
                <div class="flex justify-between bg-gray-100 p-8">

                    <span>{{ block.name }}</span>
                    <Link :href="`/admin/blocks/${block.id}`">view</Link>
                </div>
            </li>
        </ul>
    </AdminLayout>
</template>

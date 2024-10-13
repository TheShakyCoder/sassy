<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    page: {
        type: Object,
        default: {
            sections: []
        }
    }
})
</script>

<template>
    <AdminLayout>
        <template #title>Page Details</template>

        <div class="flex flex-col space-y-8">

            <div class="bg-gray-100 p-8">
                <h2 class="text-xl font-bold">Details</h2>
                <h2>{{ page.title }}</h2>
            </div>

            <div class="bg-gray-100 p-8">
                <h2 class="text-xl font-bold">Sections</h2>
                <ul class="flex space-y-4">
                    <li v-for="section in page.sections" class="flex justify-between p-4 bg-white w-full">
                        <span>{{ section.block.name }}</span>
                        <Link :href="`/admin/sections/${section.id}/edit`">edit</Link>
                    </li>
                </ul>
            </div>
        </div>
    </AdminLayout>
</template>

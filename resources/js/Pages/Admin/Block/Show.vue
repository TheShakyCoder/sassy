<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    block: {
        type: Object,
        default: {
            sections: []
        }
    }
})
</script>

<template>
    <AppLayout>
        <template #title>Block Details</template>

        <div class="flex flex-col space-y-8">

            <div class="bg-gray-100 p-8">
                <h2 class="text-xl font-bold">Details</h2>
                <h2>{{ block.name }}</h2>
            </div>

            <div class="bg-gray-100 p-8">
                <h2 class="text-xl font-bold">Sections</h2>
                <ul class="flex space-y-4">
                    <li v-for="section in block.sections" class="flex justify-between p-4 bg-white w-full">
                        <span>{{ section.page.title }}</span>
                        <Link :href="`/admin/sections/${section.id}/edit`">edit</Link>
                    </li>
                </ul>
            </div>
        </div>
    </AppLayout>
</template>

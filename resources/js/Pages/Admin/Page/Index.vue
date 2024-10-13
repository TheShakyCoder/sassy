<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    pages: {
        type: Object,
        default: {
            data: []
        }
    }
})
</script>

<template>
    <AdminLayout>
        <template #title>Page Index</template>
        <ul class="flex flex-col">
            <li v-for="page in pages.data" class=" ">
                <div class="flex justify-between bg-gray-100 p-8">

                    <span>{{ page.title }}</span>
                    <Link :href="`/admin/pages/${page.id}`">view</Link>
                </div>
            </li>
        </ul>
    </AdminLayout>
</template>

<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
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
    <div>
        <h2>{{ page.slug }}</h2>
        <ul>
            <li v-for="section in page.sections">
                <span>{{ section.id }}</span>
                <Link :href="`/admin/sections/${section.id}/edit`">edit</Link>
            </li>
        </ul>
    </div>
</template>

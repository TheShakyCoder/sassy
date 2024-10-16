<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import SectionModal from '@/Modals/SectionModal.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { ref } from 'vue';

const showModal = ref(false)

const props = defineProps({
    page: {
        type: Object,
        default: {
            sections: []
        }
    },
    blocks: {
        type: Object,
        default: {}
    }
})

const form = useForm({
    block: null,
    page_id: props.page.id,

    _method: null,
})

const submit = () => {
    form.post('/admin/sections')
}

const close = () => {
    showModal.value = false
}
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
                <ul class="flex flex-col space-y-4">
                    <li v-for="section in page.sections" class="flex justify-between p-4 bg-white w-full">
                        <span>{{ section.block }}</span>
                        <Link :href="`/admin/sections/${section.id}/edit`">edit</Link>
                    </li>
                </ul>
                <button @click="showModal = true">Add Block</button>
            </div>
        </div>


        <SectionModal
            :open="showModal"
            :form="form"
            :blocks="blocks"
            @close="close"
            @save="submit"
        />
    </AdminLayout>
</template>

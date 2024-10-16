<script setup>
import PrimaryButton from '@/Components/PrimaryButton.vue';
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import PageModal from '@/Modals/PageModal.vue';
import { ref } from 'vue';

const showModal = ref(false)

const props = defineProps({
    pages: {
        type: Object,
        default: {
            data: []
        }
    }
})

const form = useForm({
    title: null,
    slug: null,

    _method: null,
})

const add = () => {
    form.title = ''
    form.slug = ''
    form._method = 'POST'
    showModal.value = true
}

const close = () => showModal.value = false

const submit = ()  => {
    form.post('/admin/pages')
}
</script>

<template>
    <AdminLayout>
        <template #title>Page Index</template>
        <button @click="add">Add Page</button>

        <ul class="flex flex-col space-y-4">
            <li v-for="page in pages.data" class=" ">
                <div class="flex justify-between bg-gray-100 p-4">

                    <span>{{ page.title }}</span>
                    <Link :href="`/admin/pages/${page.id}`">view</Link>
                </div>
            </li>
        </ul>

        <PageModal
            :open="showModal"
            :form="form"
            @close="close"
            @save="submit"
        />
    </AdminLayout>
</template>

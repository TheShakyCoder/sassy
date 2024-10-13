<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { computed, onMounted, reactive } from 'vue';

const props = defineProps({
    edit: {
        type: Boolean,
        default: false
    },
    sectionId: {
        type: String,
        default: ''
    },
    json: {
        type: String,
        default: '{}'
    }
})

onMounted(() => {
    if(props.json) {
        form.json = props.json
    }
})

const form = useForm({
    json: "",

    _method: 'PATCH'
})

const submit = () => form.patch('/admin/sections/' + props.sectionId)
</script>

<template>
    <div :class="{'p-4 m-4 pattern-diagonal-lines pattern-gray-300 pattern-bg-white pattern-size-6 pattern-opacity-100': edit}">
        <slot></slot>
    </div>

    <template v-if="edit">
        <hr class="py-6 my-6 bg-gray-500">
        <div class="bg-red-100  p-10 m-10 rounded-2xl">
            <form @submit.prevent="submit" class="flex flex-col">
                <textarea v-model="form.json" rows="20" cols="40" class="font-mono"></textarea>
                <input type="submit" value="Save" />
            </form>
        </div>
    </template>
</template>

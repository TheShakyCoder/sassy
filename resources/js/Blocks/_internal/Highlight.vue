<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import { computed, onMounted, reactive } from 'vue';
import PrimaryButton from '../../Components/PrimaryButton.vue'

const props = defineProps({
    edit: {
        type: Boolean,
        default: false
    },
    section: {
        type: Object,
        default: {}
    },
    json: {
        type: String,
        default: '{}'
    }
})

onMounted(() => {
    if(props.json)
        form.json = props.json

    form.posts = props.section.posts
})

const form = useForm({
    json: "",
    posts: 0,

    _method: 'PATCH'
})

const submit = () => form.post('/admin/sections/' + props.section.id)
</script>

<template>
    <div :class="{'p-4 my-4 pattern-diagonal-lines pattern-gray-300 pattern-bg-white pattern-size-6 pattern-opacity-100': edit}">
        <slot></slot>
    </div>

    <template v-if="edit">
        <div class="bg-red-600  p-10 rounded-2xl">
            <form @submit.prevent="submit" class="flex flex-col">
                <textarea v-model="form.json" rows="20" cols="40" class="font-mono"></textarea>

                <div>
                    <label for="posts" class="text-left block text-sm font-medium leading-6 text-gray-900">Posts</label>
                    <select v-model="form.posts" id="posts" name="posts" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        <option value="0">None</option>
                        <option value="3">3</option>
                        <option value="10">10</option>
                    </select>
                </div>

                <button type="submit" class="max-w-80">Save</button>
            </form>
        </div>
    </template>
</template>

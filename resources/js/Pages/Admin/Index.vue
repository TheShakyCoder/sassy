<script setup>
import AdminLayout from '@/Layouts/AdminLayout.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <AdminLayout>
        <ul>
            <li>
                <Link href="/admin/blocks">Blocks</Link>
            </li>
            <li>
                <Link href="/admin/pages">Pages</Link>
            </li>
        </ul>

    </AdminLayout>
</template>

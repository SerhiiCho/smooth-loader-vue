<script setup lang="ts">
import { onMounted } from 'vue'
import smoothLoader from 'smooth-loader'

interface Props {
    src: string
}

const { src } = defineProps<Props>()

onMounted(() => smoothLoader())
</script>

<template>
    <img :data-src="src" class="smooth-loader">
</template>
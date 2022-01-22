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
    <div :data-src="src" class="smooth-loader">
        <slot/>
    </div>
</template>
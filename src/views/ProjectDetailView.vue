<template>
  <div v-if="project" class="project-detail-view">
    <ProjectDetail :project="project" @close="handleClose" />
  </div>
  <div v-else class="not-found">
    <p>프로젝트를 찾을 수 없습니다.</p>
    <button @click="handleClose">목록으로</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProjectDetail from '@/components/ProjectDetail.vue'
import { projects } from '@/data/projects.js'

const route = useRoute()
const router = useRouter()

const project = computed(() =>
  projects.find((p) => p.detail.id === route.params.id)?.detail ?? null
)

function handleClose() {
  router.push({ path: '/', hash: '#projects' })
}
</script>

<style lang="scss" scoped>
.project-detail-view {
  padding-top: 8rem;
}
</style>

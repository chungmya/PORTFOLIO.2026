<template>
  <!-- ============================================================
       프로젝트 섹션: 필터 탭 + 카드 그리드 + 디테일 페이지 전환
       ============================================================ -->
  <section id="projects" class="projects" aria-labelledby="projects-title">
    <div class="container">

      <!-- 목록 화면 -->
        <!-- 섹션 헤더 -->
        <div class="section-header reveal">
          <span class="section-eyebrow">Projects</span>
          <h2 id="projects-title" class="section-title">
            주요 <span>프로젝트</span>
          </h2>
          <p class="section-desc">구축부터 운영까지 다양한 프로젝트 경험을 소개합니다.</p>
        </div>

        <!-- 필터 탭 -->
        <div class="projects__filters" role="tablist" aria-label="프로젝트 카테고리 필터">
          <button
            v-for="filter in filters"
            :key="filter.value"
            class="projects__filter-btn"
            :class="{ 'is-active': activeFilter === filter.value }"
            role="tab"
            :aria-selected="activeFilter === filter.value"
            aria-controls="projects-grid"
            @click="setFilter(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>

        <!-- 프로젝트 카드 그리드 -->
        <div
          id="projects-grid"
          class="projects__grid"
          role="tabpanel"
          :aria-label="`${activeFilterLabel} 프로젝트 목록`"
        >
          <TransitionGroup name="card-fade" tag="div" class="projects__grid-inner">
            <article
              v-for="project in filteredProjects"
              :key="project.id"
              class="project-card reveal"
              role="button"
              tabindex="0"
              :aria-label="`${project.title} 프로젝트 상세 보기`"
              @click="openDetail(project)"
              @keydown.enter="openDetail(project)"
              @keydown.space.prevent="openDetail(project)"
            >
              <!-- 썸네일 -->
              <div class="project-card__thumb">
                <img
                  :src="project.thumbnail"
                  :alt="`${project.title} 썸네일`"
                  width="400"
                  height="240"
                  loading="lazy"
                />
                <!-- hover 오버레이 -->
                <div class="project-card__overlay" aria-hidden="true">
                  <span class="project-card__overlay-text">자세히 보기</span>
                </div>
              </div>

              <!-- 카드 정보 -->
              <div class="project-card__body">
                <span class="project-card__category">{{ getCategoryLabel(project.category) }}</span>
                <h3 class="project-card__title">{{ project.title }}</h3>
                <p class="project-card__desc">{{ project.desc }}</p>
                <ul class="project-card__tags" aria-label="사용 기술">
                  <li v-for="tag in project.tags" :key="tag" class="project-card__tag">
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </article>
          </TransitionGroup>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue' 
import { useRouter } from 'vue-router'
import { projects } from '@/data/projects.js'

const router = useRouter()

// ============================================================
// 필터 탭 설정
// ============================================================
const filters = [
  { value: 'all', label: '전체' },
  { value: 'build', label: '구축' },
  { value: 'operation', label: '운영관리' },
  { value: 'personal', label: '개인작업' },
]

const activeFilter = ref('all')

const activeFilterLabel = computed(
  () => filters.find((f) => f.value === activeFilter.value)?.label ?? '전체'
)

function setFilter(value) {
  activeFilter.value = value
}

function getCategoryLabel(value) {
  return filters.find((f) => f.value === value)?.label ?? value
}

// 필터링된 프로젝트 목록
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})
  
// ============================================================
// 카드 클릭 → 디테일 페이지로 라우터 이동
// ============================================================

const openDetail = (project) => {
  router.push(`/projects/${project.detail.id}`)
}
// ============================================================
// Intersection Observer: 카드 등장 애니메이션
// ============================================================
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll('#projects .reveal').forEach((el) => {
    observer.observe(el)
  })
})

// 필터 변경 시 새로 렌더된 카드에도 is-visible 즉시 적용
watch(activeFilter, () => {
  nextTick(() => {
    document.querySelectorAll('#projects .reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/page/ProjectSection';
</style>

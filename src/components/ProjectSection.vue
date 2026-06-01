<template>
  <!-- ============================================================
       프로젝트 섹션: 필터 탭 + 카드 그리드 + 모달 팝업
       ============================================================ -->
  <section id="projects" class="projects" aria-labelledby="projects-title">
    <div class="container">
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
          :aria-controls="'projects-grid'"
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
            @click="openModal(project)"
            @keydown.enter="openModal(project)"
            @keydown.space.prevent="openModal(project)"
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
              <!-- 카테고리 -->
              <span class="project-card__category">{{ getCategoryLabel(project.category) }}</span>
              <!-- 타이틀 -->
              <h3 class="project-card__title">{{ project.title }}</h3>
              <!-- 설명 -->
              <p class="project-card__desc">{{ project.desc }}</p>
              <!-- 태그 목록 -->
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

    <!-- ============================================================
         모달 팝업
         ============================================================ -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="activeModal"
          class="modal-overlay"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`modal-title-${activeModal.id}`"
          @click.self="closeModal"
          @keydown.esc="closeModal"
          ref="modalRef"
          tabindex="-1"
        >
          <div class="modal">
            <!-- 닫기 버튼 -->
            <button
              class="modal__close"
              @click="closeModal"
              aria-label="모달 닫기"
              ref="closeButtonRef"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <!-- 썸네일 -->
            <div class="modal__thumb">
              <img
                :src="activeModal.thumbnail"
                :alt="`${activeModal.title} 대표 이미지`"
                width="800"
                height="400"
                loading="lazy"
              />
            </div>

            <!-- 내용 -->
            <div class="modal__body">
              <span class="modal__category">{{ getCategoryLabel(activeModal.category) }}</span>
              <h3 :id="`modal-title-${activeModal.id}`" class="modal__title">
                {{ activeModal.title }}
              </h3>
              <p class="modal__desc">{{ activeModal.detail || activeModal.desc }}</p>

              <!-- 역할 & 기간 -->
              <dl class="modal__meta">
                <div class="modal__meta-item" v-if="activeModal.role">
                  <dt>담당 역할</dt>
                  <dd>{{ activeModal.role }}</dd>
                </div>
                <div class="modal__meta-item" v-if="activeModal.period">
                  <dt>진행 기간</dt>
                  <dd>{{ activeModal.period }}</dd>
                </div>
              </dl>

              <!-- 태그 -->
              <ul class="modal__tags" aria-label="사용 기술">
                <li v-for="tag in activeModal.tags" :key="tag" class="project-card__tag">
                  {{ tag }}
                </li>
              </ul>

              <!-- 링크 -->
              <div class="modal__links" v-if="activeModal.link">
                <a
                  :href="activeModal.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary"
                  aria-label="프로젝트 사이트 새 탭에서 열기"
                >
                  사이트 방문
                </a>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'

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

// ============================================================
// 프로젝트 데이터 (더미 — 나중에 교체)
// ============================================================
const projects = [
  {
    id: 1,
    category: 'build',
    title: '나라사랑 포털',
    desc: '국가보훈부 나라사랑 포털 웹사이트 구축 프로젝트',
    detail: '국가보훈부에서 운영하는 나라사랑 포털 웹사이트 신규 구축 프로젝트. Vue 3 기반 SPA 구조로 개발하였으며 웹 접근성 AA 등급 획득.',
    thumbnail: 'https://picsum.photos/seed/project1/800/480',
    tags: ['Vue 3', 'SCSS', '웹 접근성', 'Vite'],
    role: '웹 퍼블리싱 전담, 컴포넌트 설계 참여',
    period: '2023.03 ~ 2023.08 (6개월)',
    link: '#',
  },
  {
    id: 2,
    category: 'operation',
    title: '암웨이 코리아 웹사이트',
    desc: '대규모 이커머스 플랫폼 운영 및 유지보수',
    detail: '암웨이 코리아 공식 이커머스 웹사이트의 지속적인 운영, 유지보수 및 신규 이벤트 페이지 제작 담당.',
    thumbnail: 'https://picsum.photos/seed/project2/800/480',
    tags: ['HTML', 'CSS', 'jQuery', 'Bootstrap'],
    role: '운영 퍼블리셔, 이벤트 페이지 제작',
    period: '2020.01 ~ 2022.12 (3년)',
    link: '#',
  },
  {
    id: 3,
    category: 'build',
    title: '라이나원 TMR',
    desc: '보험사 영업 지원 시스템 UI 구축',
    detail: '라이나생명보험 TMR(텔레마케팅 리포팅) 시스템 신규 구축. 대시보드 및 업무 화면 퍼블리싱 전담.',
    thumbnail: 'https://picsum.photos/seed/project3/800/480',
    tags: ['HTML', 'SCSS', 'Vue 3', 'JavaScript'],
    role: '전체 화면 퍼블리싱',
    period: '2024.06 ~ 2024.07 (1개월)',
    link: '#',
  },
  {
    id: 4,
    category: 'build',
    title: '한화 ESG 플랫폼',
    desc: 'ESG 보고 및 데이터 관리 플랫폼 구축 (진행 중)',
    detail: '한화그룹 ESG 보고 플랫폼 신규 구축 프로젝트. Vue 3 기반 대규모 어드민 시스템 퍼블리싱.',
    thumbnail: 'https://picsum.photos/seed/project4/800/480',
    tags: ['Vue 3', 'SCSS', 'Vite', 'Git'],
    role: '퍼블리셔 겸 프론트엔드 개발',
    period: '2025.01 ~ 진행 중',
    link: '#',
  },
  {
    id: 5,
    category: 'personal',
    title: '웹 퍼블리셔 포트폴리오',
    desc: '입사 지원용 개인 포트폴리오 웹사이트 제작',
    detail: 'Vue 3 + Vite + SCSS 기반으로 직접 기획, 디자인, 개발한 포트폴리오 웹사이트. GSAP 애니메이션 및 Intersection Observer 활용.',
    thumbnail: 'https://picsum.photos/seed/project5/800/480',
    tags: ['Vue 3', 'Vite', 'SCSS', 'GSAP'],
    role: '기획 / 디자인 / 개발 전담',
    period: '2025.05 ~ 2026.01',
    link: '#',
  },
  {
    id: 6,
    category: 'personal',
    title: 'CSS 컴포넌트 라이브러리',
    desc: '자주 사용하는 UI 컴포넌트 모음 (개인 스터디)',
    detail: '실무에서 자주 사용하는 UI 컴포넌트들을 순수 HTML/CSS/SCSS로 정리한 개인 스터디 프로젝트.',
    thumbnail: 'https://picsum.photos/seed/project6/800/480',
    tags: ['HTML', 'SCSS', 'JavaScript'],
    role: '개인 프로젝트',
    period: '2024.01 ~ 진행 중',
    link: '#',
  },
]

// 필터링된 프로젝트 목록
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects
  return projects.filter((p) => p.category === activeFilter.value)
})

// ============================================================
// 모달 팝업 제어
// ============================================================
const activeModal = ref(null)
const modalRef = ref(null)
const closeButtonRef = ref(null)

function openModal(project) {
  activeModal.value = project
  // body 스크롤 잠금
  document.body.style.overflow = 'hidden'
  // 모달 포커스 이동 (접근성)
  nextTick(() => {
    closeButtonRef.value?.focus()
  })
}

function closeModal() {
  activeModal.value = null
  document.body.style.overflow = ''
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

// 필터 변경 시 새 카드에도 observer 적용
watch(activeFilter, () => {
  nextTick(() => {
    document.querySelectorAll('#projects .reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

// ============================================================
// 프로젝트 섹션
// ============================================================
.projects {
  @include section-base;
  background: $color-bg-section;
}

// ============================================================
// 필터 탭
// ============================================================
.projects__filters {
  display: flex;
  justify-content: center;
  gap: $spacing-xs;
  flex-wrap: wrap;
  margin-bottom: $spacing-xl;
}

.projects__filter-btn {
  padding: 0.5rem 1.25rem;
  border-radius: $border-radius-full;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-text-muted;
  background: transparent;
  border: 1.5px solid $color-border;
  cursor: pointer;
  transition: all $transition-normal;

  &:hover {
    border-color: rgba($color-primary, 0.4);
    color: $color-primary-light;
  }

  &.is-active {
    background: $color-primary;
    border-color: $color-primary;
    color: $color-white;
    font-weight: $font-weight-semibold;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 3px;
  }
}

// ============================================================
// 카드 그리드
// ============================================================
.projects__grid {
  width: 100%;
}

.projects__grid-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-md;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

// ============================================================
// 프로젝트 카드
// ============================================================
.project-card {
  background: $color-bg-card;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  overflow: hidden;
  cursor: pointer;
  transition: transform $transition-normal, box-shadow $transition-normal, border-color $transition-normal;

  &:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: $shadow-hover;
    border-color: rgba($color-primary, 0.3);

    .project-card__overlay {
      opacity: 1;
    }

    .project-card__thumb img {
      transform: scale(1.05);
    }
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 3px;
  }
}

// 썸네일
.project-card__thumb {
  position: relative;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform $transition-slow;
  }
}

// hover 오버레이
.project-card__overlay {
  @include absolute-fill;
  @include flex-center;
  background: rgba($color-primary-dark, 0.75);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity $transition-normal;

  &-text {
    color: $color-white;
    font-weight: $font-weight-semibold;
    font-size: $font-size-base;
    letter-spacing: 0.05em;
  }
}

// 카드 본문
.project-card__body {
  padding: $spacing-md;
}

.project-card__category {
  display: inline-block;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $color-primary-light;
  margin-bottom: $spacing-xs;
}

.project-card__title {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: $color-text;
  margin-bottom: $spacing-xs;
}

.project-card__desc {
  font-size: $font-size-sm;
  color: $color-text-muted;
  line-height: $line-height-normal;
  margin-bottom: $spacing-sm;
  @include text-ellipsis(2);
}

.project-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
}

.project-card__tag {
  display: inline-block;
  font-size: $font-size-xs;
  font-weight: $font-weight-medium;
  color: $color-text-muted;
  background: rgba(255, 255, 255, 0.06);
  border-radius: $border-radius-sm;
  padding: 0.2rem 0.6rem;
  border: 1px solid $color-border;
}

// ============================================================
// 필터 전환 애니메이션
// ============================================================
.card-fade-enter-active,
.card-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.card-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.card-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

// ============================================================
// 모달 팝업
// ============================================================
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(6px);
  z-index: $z-modal;
  @include flex-center;
  padding: $spacing-sm;
  overflow-y: auto;
}

.modal {
  background: $color-bg-card;
  border: 1px solid $color-border;
  border-radius: $border-radius-lg;
  width: 100%;
  max-width: 680px;
  position: relative;
  overflow: hidden;
  max-height: 90vh;
  overflow-y: auto;
}

.modal__close {
  position: absolute;
  top: $spacing-sm;
  right: $spacing-sm;
  z-index: 1;
  @include flex-center;
  width: 36px;
  height: 36px;
  @include glassmorphism(0.15);
  border-radius: 50%;
  color: $color-text;
  transition: all $transition-fast;

  &:hover {
    background: rgba($color-accent, 0.2);
    color: $color-accent;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 2px;
  }
}

.modal__thumb {
  img {
    width: 100%;
    height: 220px;
    object-fit: cover;

    @include tablet {
      height: 300px;
    }
  }
}

.modal__body {
  padding: $spacing-lg;
}

.modal__category {
  display: inline-block;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $color-primary-light;
  margin-bottom: $spacing-xs;
}

.modal__title {
  font-size: $font-size-xl;
  font-weight: $font-weight-bold;
  color: $color-text;
  margin-bottom: $spacing-sm;
}

.modal__desc {
  color: $color-text-muted;
  line-height: $line-height-loose;
  margin-bottom: $spacing-md;
}

.modal__meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: $spacing-sm;
  margin-bottom: $spacing-md;
  padding: $spacing-sm;
  background: rgba(255, 255, 255, 0.04);
  border-radius: $border-radius-sm;

  &-item {
    dt {
      font-size: $font-size-xs;
      color: $color-primary-light;
      font-weight: $font-weight-semibold;
      margin-bottom: 0.2rem;
    }

    dd {
      font-size: $font-size-sm;
      color: $color-text;
    }
  }
}

.modal__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-bottom: $spacing-md;
}

.modal__links {
  display: flex;
  gap: $spacing-sm;
}

// 모달 전환 애니메이션
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;

  .modal {
    transition: transform 0.25s ease;
  }
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;

  .modal {
    transform: scale(0.95) translateY(20px);
  }
}
</style>

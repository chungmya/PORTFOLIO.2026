<template>
  <!-- 프로젝트 디테일 섹션 전체 래퍼 -->
  <article class="detail" role="main" :aria-label="`${project.title} 프로젝트 상세`">
    <!-- 뒤로가기 버튼 -->
    <div class="detail__back">
      <button
        class="detail__back-btn"
        @click="$emit('close')"
        aria-label="프로젝트 목록으로 돌아가기"
      >
        <ArrowLeft class="detail__back-icon" aria-hidden="true" :size="18" />
        목록으로
      </button>
    </div>

    <!-- 히어로 영역: 프로젝트명 + 핵심 메타 정보 -->
    <header class="detail__hero">
      <div class="detail__hero-inner">
        <div class="detail__category">{{ project.category }}</div>
        <h1 class="detail__title">{{ project.title }}</h1>
        <p class="detail__subtitle">{{ project.subtitle }}</p>

        <!-- 핵심 수치 배지 -->
        <ul class="detail__stats" aria-label="프로젝트 핵심 정보">
          <li v-for="stat in project.stats" :key="stat.label" class="detail__stat">
            <span class="detail__stat-value">{{ stat.value }}</span>
            <span class="detail__stat-label">{{ stat.label }}</span>
          </li>
        </ul>
      </div>

      <!-- 사용 기술 섹션 -->
      <div aria-labelledby="skills-heading">
        <ul class="detail__skills" aria-label="사용한 기술 스택">
          <li
            v-for="skill in project.skills"
            :key="skill.name"
            class="detail__skill-tag"
            :class="`detail__skill-tag--${skill.type}`"
          >
            {{ skill.name }}
          </li>
        </ul>
      </div>
    </header>

    <!-- 본문 콘텐츠 영역 -->
    <div class="detail__body">
      <!-- 담당 업무 섹션 -->
      <section class="detail__section" aria-labelledby="tasks-heading">
        <h2 id="tasks-heading" class="detail__section-title">담당 업무</h2>
        <ul class="detail__tasks" aria-label="담당한 업무 목록">
          <li v-for="(task, index) in project.tasks" :key="index" class="detail__task-item">
            <span class="detail__task-dot" aria-hidden="true"></span>
            <span>{{ task }}</span>
          </li>
        </ul>
      </section>

      <!-- 특징 & 어려웠던 점 통합 섹션 -->
      <section class="detail__section" aria-labelledby="highlights-heading">
        <h2 id="highlights-heading" class="detail__section-title">작업 특징</h2>
        <div class="detail__highlights">
          <!-- 프로젝트 특징 -->
          <ul
            v-if="project.features && project.features.length"
            class="detail__features"
            aria-label="프로젝트 특징 목록"
          >
            <li
              v-for="(feature, index) in project.features"
              :key="index"
              class="detail__feature-card"
            >
              <!-- 이미지 -->
              <div v-if="feature.images && feature.images.length" class="detail__feature-imgs">
                <img
                  v-for="(img, i) in feature.images"
                  :key="i"
                  :src="img"
                  :alt="feature.text"
                  class="detail__feature-img"
                  loading="lazy"
                />
              </div>

              <!-- 스니펫 -->
              <pre
                v-if="feature.code"
                class="detail__code-block"
              ><code>{{ feature.code }}</code></pre>

              <p class="detail__feature-text">{{ feature.text }}</p>
            </li>
          </ul>

          <!-- 어려웠던 점 & 해결 -->
          <ul
            v-if="project.challenges && project.challenges.length"
            class="detail__challenges"
            aria-label="어려움과 해결 사례 목록"
          >
            <li
              v-for="(item, index) in project.challenges"
              :key="index"
              class="detail__challenge-item"
            >
              <div class="detail__challenge-problem" aria-label="어려웠던 점">
                <span class="detail__challenge-badge detail__challenge-badge--problem">문제</span>
                <p>{{ item.problem }}</p>
              </div>
              <span class="detail__challenge-arrow" aria-hidden="true"></span>
              <div class="detail__challenge-solution" aria-label="해결 방법">
                <span class="detail__challenge-badge detail__challenge-badge--solution">해결</span>
                <p>{{ item.solution }}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <!-- 웹사이트 링크 -->
      <section
        class="detail__section"
        v-if="project.links && project.links.length"
        aria-labelledby="link-heading"
      >
        <h2 id="link-heading" class="detail__section-title">웹사이트 링크</h2>
        <div class="detail__links">
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            class="detail__link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${link.text} 새 탭에서 열기`"
          >
            {{ link.text }}
          </a>
        </div>
      </section>
    </div>
  </article>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import { ArrowLeft } from '@lucide/vue'

// 부모 컴포넌트에서 프로젝트 데이터를 받아옴
const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

// 닫기 이벤트 정의
defineEmits(['close'])
</script>

<style lang="scss" scoped>
@use '@/assets/scss/page/ProjectDetail';
</style>

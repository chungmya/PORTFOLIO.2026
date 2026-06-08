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
        <span class="detail__back-icon" aria-hidden="true">←</span>
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
        <h2 id="tasks-heading" class="detail__section-title">
          <span class="detail__section-num" aria-hidden="true">02</span>
          담당 업무
        </h2>
        <ul class="detail__tasks" aria-label="담당한 업무 목록">
          <li v-for="(task, index) in project.tasks" :key="index" class="detail__task-item">
            <span class="detail__task-dot" aria-hidden="true"></span>
            <span>{{ task }}</span>
          </li>
        </ul>
      </section>

      <!-- 이 페이지의 특징 섹션 -->
      <section class="detail__section" aria-labelledby="features-heading">
        <h2 id="features-heading" class="detail__section-title">
          <span class="detail__section-num" aria-hidden="true">03</span>
          이 프로젝트의 특징
        </h2>
        <ul class="detail__features" aria-label="프로젝트 특징 목록">
          <li
            v-for="(feature, index) in project.features"
            :key="index"
            class="detail__feature-card"
          >
            <span class="detail__feature-icon" aria-hidden="true">{{ feature.icon }}</span>
            <p class="detail__feature-text">{{ feature.text }}</p>
          </li>
        </ul>
      </section>

      <!-- 프로젝트 이미지 섹션 -->
      <section
        v-if="project.images && project.images.length"
        class="detail__section"
        aria-labelledby="images-heading"
      >
        <h2 id="images-heading" class="detail__section-title">
          <span class="detail__section-num" aria-hidden="true">02</span>
          작업 화면
        </h2>

        <!-- 첫 번째 이미지: 크게 -->
        <figure class="detail__img-main">
          <img :src="project.images[0].src" :alt="project.images[0].caption" class="detail__img" />
          <figcaption class="detail__img-caption">
            {{ project.images[0].caption }}
          </figcaption>
        </figure>

        <!-- 나머지 이미지: 2열 그리드 -->
        <ul v-if="project.images.length > 1" class="detail__img-grid" aria-label="추가 작업 화면">
          <li v-for="(image, index) in project.images.slice(1)" :key="index">
            <figure>
              <img :src="image.src" :alt="image.caption" class="detail__img" />
              <figcaption class="detail__img-caption">
                {{ image.caption }}
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <!-- 어려웠던 점 & 해결 섹션 -->
      <section class="detail__section" aria-labelledby="challenges-heading">
        <h2 id="challenges-heading" class="detail__section-title">
          <span class="detail__section-num" aria-hidden="true">04</span>
          어려웠던 점과 해결
        </h2>
        <ul class="detail__challenges" aria-label="어려움과 해결 사례 목록">
          <li
            v-for="(item, index) in project.challenges"
            :key="index"
            class="detail__challenge-item"
          >
            <!-- 문제 -->
            <div class="detail__challenge-problem" aria-label="어려웠던 점">
              <span class="detail__challenge-badge detail__challenge-badge--problem">문제</span>
              <p>{{ item.problem }}</p>
            </div>
            <!-- 화살표 -->
            <span class="detail__challenge-arrow" aria-hidden="true">↓</span>
            <!-- 해결 -->
            <div class="detail__challenge-solution" aria-label="해결 방법">
              <span class="detail__challenge-badge detail__challenge-badge--solution">해결</span>
              <p>{{ item.solution }}</p>
            </div>
          </li>
        </ul>
      </section>

      <section class="detail__section" aria-labelledby="link-heading">
        <h2 id="link-heading" class="detail__section-title">
          <span class="detail__section-num" aria-hidden="true">05</span>
          웹사이트
        </h2>
        <a
          :href="project.link"
          class="detail__link-btn"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`${project.title} 웹사이트 새 탭에서 열기`"
        >
          {{ project.link }}
          <span class="detail__link-icon" aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  </article>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

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

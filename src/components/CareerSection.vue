<template>
  <!-- ============================================================
       커리어 섹션: 세로 타임라인 형태의 경력 데이터
       ============================================================ -->
  <section id="career" class="career" aria-labelledby="career-title">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="section-header reveal">
        <span class="section-eyebrow">Career</span>
        <h2 id="career-title" class="section-title">
          걸어온 <span>경력</span>
        </h2>
        <p class="section-desc">다양한 규모와 도메인에서 쌓아온 실무 경험입니다.</p>
      </div>

      <!-- 타임라인 래퍼 -->
      <div class="timeline" role="list">
        <!-- 세로선 (그려지는 애니메이션 적용) -->
        <div class="timeline__line" ref="timelineLineRef" aria-hidden="true"></div>

        <!-- 경력 아이템 -->
        <article
          v-for="(item, index) in careers"
          :key="item.year"
          class="timeline__item"
          :class="{ 'is-right': index % 2 !== 0 }"
          role="listitem"
        >
          <!-- 타임라인 점(노드) -->
          <div class="timeline__node" aria-hidden="true">
            <span class="timeline__node-dot"></span>
          </div>

          <!-- 카드 내용 -->
          <div class="timeline__card reveal">
            <!-- 연도 -->
            <time class="timeline__year" :datetime="item.year">{{ item.year }}</time>

            <!-- 타이틀 -->
            <h3 class="timeline__title">
              {{ item.title }}
              <!-- 진행 중 뱃지 -->
              <span
                v-if="item.badge"
                class="timeline__badge"
                aria-label="현재 진행 중인 프로젝트"
              >
                {{ item.badge }}
              </span>
            </h3>

            <!-- 설명 -->
            <p class="timeline__desc">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ============================================================
// 경력 데이터
// ============================================================
const careers = [
  {
    year: '2019',
    title: '웹 에이전시 입사',
    desc: '다양한 웹사이트 구축 및 퍼블리싱 업무 시작. HTML/CSS/jQuery 기반의 반응형 웹 제작.',
  },
  {
    year: '2020~2022',
    title: '암웨이 운영 관리',
    desc: '웹사이트 운영 및 유지보수 약 3년. 대규모 이커머스 플랫폼의 UI 개선 및 배너 제작 담당.',
  },
  {
    year: '2023',
    title: '나라사랑 포털 웹사이트 구축',
    desc: 'Vue 3 활용, 약 6개월 프로젝트. 공공기관 접근성 가이드라인 준수 및 퍼블리싱 전반 담당.',
  },
  {
    year: '2024',
    title: '라이나원 TMR 구축',
    desc: '약 1개월 단기 프로젝트. 영업 지원 시스템 UI 퍼블리싱 및 컴포넌트 구조 설계.',
  },
  {
    year: '2025',
    title: '한화 ESG 프로젝트',
    desc: '진행 중. Vue 3 기반 ESG 보고 플랫폼 퍼블리싱 및 프론트엔드 개발.',
    badge: '✦ In Progress',
  },
]

// ============================================================
// 타임라인 세로선 그리기 애니메이션 (Intersection Observer)
// ============================================================
const timelineLineRef = ref(null)

onMounted(() => {
  // 타임라인 라인 그리기
  const lineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-drawn')
          lineObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.05 }
  )

  if (timelineLineRef.value) {
    lineObserver.observe(timelineLineRef.value)
  }

  // 카드 등장 애니메이션
  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          cardObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 }
  )

  document.querySelectorAll('#career .reveal').forEach((el) => {
    cardObserver.observe(el)
  })
})
</script>


<style lang="scss" scoped>
@use '@/assets/scss/page/CareerSection';
</style>

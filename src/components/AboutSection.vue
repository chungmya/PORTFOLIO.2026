<template>
  <!-- ============================================================
       어바웃 섹션: 프로필 이미지, 자기소개, 강점 태그
       ============================================================ -->
  <section id="about" class="about" aria-labelledby="about-title">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="section-header reveal">
        <span class="section-eyebrow">About Me</span>
        <h2 id="about-title" class="section-title">
          저는 이런 사람입니다 <span>👋</span>
        </h2>
      </div>

      <!-- 콘텐츠 레이아웃 (이미지 + 텍스트) -->
      <div class="about__inner">
        <!-- 프로필 이미지 영역 -->
        <div class="about__image-wrap reveal-left" ref="imageRef">
          <div class="about__image-frame" aria-hidden="true">
            <div class="about__image-deco about__image-deco--ring"></div>
            <div class="about__image-deco about__image-deco--dot"></div>
          </div>
          <figure class="about__image">
            <img
              src="/images/profile-placeholder.svg"
              alt="박지민 프로필 사진"
              width="360"
              height="420"
              loading="lazy"
            />
          </figure>
          <!-- 경력 연차 배지 -->
          <div class="about__badge" aria-label="경력 5년차">
            <strong>5</strong>
            <span>Year+</span>
          </div>
        </div>

        <!-- 자기소개 텍스트 -->
        <div class="about__content reveal-right" ref="contentRef">
          <h3 class="about__subtitle">
            코드와 디자인의 경계를 잇는<br />
            <span>웹 퍼블리셔</span>입니다.
          </h3>

          <div class="about__bio">
            <p>
              웹 에이전시를 시작으로 대기업 운영, 공공기관 구축까지 다양한 규모의 프로젝트를
              경험한 <strong>5년차 웹 퍼블리셔 / 프론트엔드 개발자</strong>입니다.
            </p>
            <p>
              픽셀 단위의 정밀한 마크업과 CSS 구조 설계에 강점을 가지고 있으며,
              Vue 3 기반의 컴포넌트 개발까지 영역을 확장하고 있습니다.
            </p>
            <p>
              디자인 의도를 정확하게 구현하는 것을 최우선으로 생각하며,
              유지보수하기 쉬운 코드와 접근성 높은 웹을 만드는 것을 즐깁니다.
            </p>
          </div>

          <!-- 주요 강점 키워드 태그 -->
          <div class="about__tags" role="list" aria-label="주요 강점">
            <span
              v-for="tag in strengths"
              :key="tag"
              class="about__tag"
              role="listitem"
            >
              {{ tag }}
            </span>
          </div>

          <!-- 링크 -->
          <div class="about__links">
            <a
              href="https://github.com/bluepark1023"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline"
              aria-label="GitHub 프로필 새 탭에서 열기"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 주요 강점 태그 데이터
const strengths = [
  '📐 정밀한 마크업',
  '🎨 CSS / SCSS 설계',
  '♿ 웹 접근성',
  '⚡ Vue 3 컴포넌트',
  '🔧 크로스브라우징',
  '📱 반응형 레이아웃',
  '🤝 협업 커뮤니케이션',
  '🌐 웹 표준',
]

// ============================================================
// Intersection Observer: 좌우 슬라이드인 애니메이션
// ============================================================
const imageRef = ref(null)
const contentRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  // 섹션 내 모든 reveal 요소 관찰
  document.querySelectorAll('#about .reveal, #about .reveal-left, #about .reveal-right').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/page/AboutSection';
</style>

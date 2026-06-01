<template>
  <!-- ============================================================
       히어로 섹션: 이름, 직군, 슬로건, 스크롤 유도 화살표
       ============================================================ -->
  <section class="hero" aria-label="인트로 섹션">
    <!-- 배경 파티클/오브 장식 -->
    <div class="hero__bg" aria-hidden="true">
      <div class="hero__orb hero__orb--1"></div>
      <div class="hero__orb hero__orb--2"></div>
      <div class="hero__orb hero__orb--3"></div>
    </div>

    <!-- 메인 콘텐츠 -->
    <div class="container">
      <div class="hero__content">
        <!-- 인삿말 -->
        <p class="hero__greeting reveal-up" :style="{ transitionDelay: '0.1s' }">
          안녕하세요, 저는
        </p>

        <!-- 이름 -->
        <h1 class="hero__name reveal-up" :style="{ transitionDelay: '0.25s' }">
          박 지 민
          <span class="hero__name-en">Park Jimin</span>
        </h1>

        <!-- 직군 타이핑 텍스트 -->
        <div class="hero__title reveal-up" :style="{ transitionDelay: '0.4s' }" aria-live="polite">
          <span class="hero__title-prefix">I'm a </span>
          <span class="hero__title-typed" aria-label="직군">{{ displayText }}</span>
          <span class="hero__cursor" aria-hidden="true">|</span>
        </div>

        <!-- 슬로건 -->
        <p class="hero__slogan reveal-up" :style="{ transitionDelay: '0.55s' }">
          코드로 완성하는 디자인, 픽셀 하나까지 정성을 담습니다.
        </p>

        <!-- CTA 버튼 -->
        <div class="hero__actions reveal-up" :style="{ transitionDelay: '0.7s' }">
          <a href="#contact" class="btn-primary" aria-label="연락하기 섹션으로 이동">
            연락하기
          </a>
          <a href="#projects" class="btn-outline" aria-label="프로젝트 섹션으로 이동">
            프로젝트 보기
          </a>
        </div>
      </div>
    </div>

    <!-- 스크롤 유도 arrow -->
    <button
      class="hero__scroll-btn"
      @click="scrollToNext"
      aria-label="다음 섹션으로 스크롤"
    >
      <span class="hero__scroll-text">Scroll</span>
      <span class="hero__scroll-arrow" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="12" y1="5" x2="12" y2="19" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </span>
    </button>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// ============================================================
// 타이핑 효과 설정
// ============================================================
const titles = [
  'Web Publisher',
  'Frontend Developer',
  'UI Craftsman',
]

const displayText = ref('')
let titleIndex = 0
let charIndex = 0
let isDeleting = false
let typingTimer = null

// 타이핑 애니메이션 함수
function typeEffect() {
  const current = titles[titleIndex]

  if (isDeleting) {
    displayText.value = current.substring(0, charIndex - 1)
    charIndex--
  } else {
    displayText.value = current.substring(0, charIndex + 1)
    charIndex++
  }

  // 단어 완성 → 잠시 대기 후 삭제 시작
  if (!isDeleting && charIndex === current.length) {
    typingTimer = setTimeout(() => {
      isDeleting = true
      typeEffect()
    }, 2000)
    return
  }

  // 단어 삭제 완료 → 다음 단어로
  if (isDeleting && charIndex === 0) {
    isDeleting = false
    titleIndex = (titleIndex + 1) % titles.length
  }

  typingTimer = setTimeout(typeEffect, isDeleting ? 60 : 100)
}

// ============================================================
// 히어로 텍스트 등장 애니메이션 (Intersection Observer)
// ============================================================
function initRevealAnimation() {
  const elements = document.querySelectorAll('.hero .reveal-up')
  elements.forEach((el) => el.classList.add('is-visible'))
}

// ============================================================
// 스크롤 버튼 클릭 → 다음 섹션 이동
// ============================================================
function scrollToNext() {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // 약간의 딜레이 후 등장 애니메이션 실행
  setTimeout(initRevealAnimation, 100)
  // 타이핑 효과 시작
  setTimeout(typeEffect, 800)
})

onUnmounted(() => {
  clearTimeout(typingTimer)
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

// ============================================================
// 히어로 섹션 스타일
// ============================================================
.hero {
  position: relative;
  min-height: 100vh;
  @include flex-center;
  overflow: hidden;
  padding: 6rem 0 4rem;

  // 배경 그라데이션
  background: radial-gradient(
    ellipse 80% 60% at 50% 0%,
    rgba($color-primary, 0.15) 0%,
    transparent 70%
  ),
  $color-bg;
}

// ============================================================
// 배경 오브 장식
// ============================================================
.hero__bg {
  @include absolute-fill;
  pointer-events: none;
  z-index: 0;
}

.hero__orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  animation: floatOrb 8s ease-in-out infinite;

  &--1 {
    width: 400px;
    height: 400px;
    background: $color-primary;
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }

  &--2 {
    width: 300px;
    height: 300px;
    background: $color-accent;
    bottom: 0;
    left: -80px;
    animation-delay: -3s;
  }

  &--3 {
    width: 200px;
    height: 200px;
    background: $color-accent-mint;
    top: 40%;
    right: 20%;
    animation-delay: -6s;
  }
}

@keyframes floatOrb {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-30px) scale(1.05); }
}

// ============================================================
// 히어로 콘텐츠
// ============================================================
.hero__content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero__greeting {
  font-size: $font-size-md;
  color: $color-text-muted;
  margin-bottom: $spacing-sm;
  font-weight: $font-weight-medium;
}

.hero__name {
  font-size: $font-size-4xl;
  font-weight: $font-weight-extrabold;
  line-height: $line-height-tight;
  margin-bottom: $spacing-xs;
  @include gradient-text;

  @include tablet {
    font-size: $font-size-5xl;
  }
}

.hero__name-en {
  display: block;
  font-size: $font-size-lg;
  font-weight: $font-weight-regular;
  color: $color-text-muted;
  background: none;
  -webkit-text-fill-color: $color-text-muted;
  margin-top: $spacing-xs;
  letter-spacing: 0.15em;
}

// 직군 타이핑 영역
.hero__title {
  font-size: $font-size-xl;
  font-weight: $font-weight-semibold;
  color: $color-text;
  margin-bottom: $spacing-sm;
  height: 2.5rem;

  @include tablet {
    font-size: $font-size-2xl;
    height: 3rem;
  }

  &-prefix {
    color: $color-text-muted;
  }

  &-typed {
    color: $color-primary-light;
  }
}

// 커서 깜빡임
.hero__cursor {
  color: $color-accent;
  animation: blink 0.9s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

// 슬로건
.hero__slogan {
  font-size: $font-size-base;
  color: $color-text-muted;
  line-height: $line-height-loose;
  margin-bottom: $spacing-lg;

  @include tablet {
    font-size: $font-size-md;
  }
}

// CTA 버튼 영역
.hero__actions {
  display: flex;
  gap: $spacing-sm;
  justify-content: center;
  flex-wrap: wrap;
}

// ============================================================
// 스크롤 유도 버튼
// ============================================================
.hero__scroll-btn {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.375rem;
  color: $color-text-muted;
  cursor: pointer;
  transition: color $transition-normal;
  z-index: 1;

  &:hover {
    color: $color-primary-light;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 4px;
    border-radius: 4px;
  }
}

.hero__scroll-text {
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.hero__scroll-arrow {
  animation: bounceDown 1.8s ease-in-out infinite;
}

@keyframes bounceDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}

// ============================================================
// 등장 애니메이션
// ============================================================
.reveal-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.7s ease, transform 0.7s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

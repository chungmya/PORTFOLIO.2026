<template>
  <!-- ============================================================
       App.vue: 전체 포트폴리오 단일 페이지 진입점
       각 섹션 컴포넌트를 순서대로 렌더링
       ============================================================ -->
  <div id="portfolio">

    <!-- 상단 네비게이션 (스크롤 시 고정) -->
    <header class="site-header" :class="{ 'is-scrolled': isScrolled }" role="banner">
      <div class="container">
        <nav class="site-nav" aria-label="주 내비게이션">
          <!-- 로고 -->
          <a href="#" class="site-nav__logo" aria-label="포트폴리오 상단으로 이동">
            <span aria-hidden="true">✦</span> Jimin.dev
          </a>

          <!-- 모바일 햄버거 버튼 -->
          <button
            class="site-nav__toggle"
            :class="{ 'is-open': isMenuOpen }"
            @click="toggleMenu"
            :aria-expanded="isMenuOpen"
            aria-controls="nav-menu"
            aria-label="메뉴 열기/닫기"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <!-- 내비게이션 링크 목록 -->
          <ul
            id="nav-menu"
            class="site-nav__links"
            :class="{ 'is-open': isMenuOpen }"
            role="list"
          >
            <li v-for="item in navItems" :key="item.href" role="listitem">
              <a
                :href="item.href"
                class="site-nav__link"
                :class="{ 'is-active': activeSection === item.section }"
                @click="closeMenu"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- 메인 콘텐츠 -->
    <main id="main-content" tabindex="-1">
      <HeroSection />
      <AboutSection />
      <CareerSection />
      <ProjectSection />
      <SkillsSection />
      <ContactSection />
    </main>

    <!-- 페이지 상단으로 이동 버튼 -->
    <Transition name="scroll-top">
      <button
        v-if="isScrolled"
        class="scroll-top-btn"
        @click="scrollToTop"
        aria-label="페이지 상단으로 이동"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import CareerSection from './components/CareerSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ContactSection from './components/ContactSection.vue'

// ============================================================
// 네비게이션 데이터
// ============================================================
const navItems = [
  { href: '#about', label: 'About', section: 'about' },
  { href: '#career', label: 'Career', section: 'career' },
  { href: '#projects', label: 'Projects', section: 'projects' },
  { href: '#skills', label: 'Skills', section: 'skills' },
  { href: '#contact', label: 'Contact', section: 'contact' },
]

// ============================================================
// 헤더 스크롤 감지
// ============================================================
const isScrolled = ref(false)
const activeSection = ref('')
const isMenuOpen = ref(false)

function handleScroll() {
  isScrolled.value = window.scrollY > 50
  // 현재 활성 섹션 감지
  const sections = ['about', 'career', 'projects', 'skills', 'contact']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 100) {
      activeSection.value = id
      break
    }
  }
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 키보드 접근성: ESC로 메뉴 닫기
function handleKeydown(e) {
  if (e.key === 'Escape' && isMenuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style lang="scss">
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

// ============================================================
// 헤더 네비게이션
// ============================================================
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $z-nav;
  transition: background $transition-normal, box-shadow $transition-normal;
  padding: 1.25rem 0;

  // 스크롤 시 배경 추가
  &.is-scrolled {
    background: rgba($color-bg, 0.9);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 1px 0 $color-border;
    padding: 0.875rem 0;
  }
}

.site-nav {
  @include flex-between;
}

.site-nav__logo {
  font-size: $font-size-lg;
  font-weight: $font-weight-bold;
  color: $color-text;
  text-decoration: none;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  gap: 0.375rem;

  span {
    @include gradient-text;
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 4px;
    border-radius: 4px;
  }
}

// 내비 링크 목록
.site-nav__links {
  display: none;
  list-style: none;

  @include tablet {
    display: flex;
    align-items: center;
    gap: $spacing-sm;
  }

  // 모바일 메뉴 열림
  &.is-open {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: $color-bg;
    @include flex-center;
    gap: $spacing-lg;
    z-index: $z-nav - 1;
    animation: fadeIn 0.25s ease;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.site-nav__link {
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
  color: $color-text-muted;
  text-decoration: none;
  letter-spacing: 0.05em;
  padding: 0.375rem 0;
  position: relative;
  transition: color $transition-fast;

  // 모바일 메뉴 열림 상태
  .site-nav__links.is-open & {
    font-size: $font-size-xl;
    font-weight: $font-weight-bold;
  }

  // 활성 상태 밑줄
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, $color-primary, $color-accent);
    border-radius: 2px;
    transition: width $transition-normal;
  }

  &:hover,
  &.is-active {
    color: $color-text;

    &::after {
      width: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 4px;
    border-radius: 4px;
  }
}

// 햄버거 버튼 (모바일)
.site-nav__toggle {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  cursor: pointer;
  z-index: $z-nav + 1;
  position: relative;

  @include tablet {
    display: none;
  }

  span {
    display: block;
    height: 2px;
    background: $color-text;
    border-radius: 2px;
    transition: all $transition-normal;
    transform-origin: center;
  }

  // 열림 상태: X 모양
  &.is-open {
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 4px;
    border-radius: 4px;
  }
}

// ============================================================
// 페이지 상단 이동 버튼
// ============================================================
.scroll-top-btn {
  position: fixed;
  bottom: 2rem;
  right: 1.5rem;
  z-index: $z-nav;
  @include flex-center;
  width: 44px;
  height: 44px;
  @include glassmorphism(0.15);
  border-radius: 50%;
  color: $color-primary-light;
  transition: all $transition-normal;
  cursor: pointer;

  &:hover {
    background: rgba($color-primary, 0.2);
    transform: translateY(-3px);
    @include glow($color-primary, 15px);
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 3px;
  }
}

.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.scroll-top-enter-from,
.scroll-top-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>


<template>

  <div id="portfolio">

    <!-- 상단 네비게이션 -->
    <header class="site-header" :class="{ 'is-scrolled': isScrolled }" role="banner">
      <div class="container">
        <nav class="site-nav" aria-label="주 내비게이션">
          <!-- 로고 -->
          <a href="#" class="site-nav__logo" aria-label="포트폴리오 상단으로 이동">
            <span aria-hidden="true">✦</span> PCM's Portfolio
          </a>

          <!-- 모바일 네비게이션 햄버거 버튼 -->
          <button
            class="site-nav__toggle"
            :class="{ 'is-open': isMenuOpen }"
            @click="toggleMenu"
            :aria-expanded="isMenuOpen"
            aria-controls="nav-menu"
            aria-label="메뉴 열기/닫기"
          >
          <Menu :size="20" />
          </button>

          <!-- 네비게이션 -->
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
    <RouterView />

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
import { RouterView } from 'vue-router'

// 아이콘
import { Menu } from '@lucide/vue'


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
@use '@/assets/scss/page/App';
</style>

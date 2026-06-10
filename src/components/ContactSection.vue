<template>
  <!-- ============================================================
       컨택트 섹션: 연락처, 링크, 웨이브 배경
       ============================================================ -->
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="section-header reveal">
        <span class="section-eyebrow">Contact</span>
        <h2 id="contact-title" class="section-title">함께 일하고 싶으신가요?</h2>
        <p class="section-desc">
          좋은 기회와 협업을 기다리고 있습니다.<br />
          아래 연락처로 편하게 연락 주세요 😊
        </p>
      </div>

      <!-- 연락처 카드 그리드 -->
      <div class="contact__cards">
        <a
          v-for="link in contactLinks"
          :key="link.label"
          :href="link.href"
          :target="link.external ? '_blank' : undefined"
          :rel="link.external ? 'noopener noreferrer' : undefined"
          class="contact__card reveal"
          :aria-label="link.ariaLabel"
        >
          <div class="contact__card-icon" aria-hidden="true">
            <component :is="link.icon" :size="28" :stroke-width="1.5" />
          </div>
          <div class="contact__card-info">
            <span class="contact__card-label">{{ link.label }}</span>
            <span class="contact__card-value">{{ link.value }}</span>
          </div>
          <div class="contact__card-arrow" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { Mail, Github, NotebookText } from '@lucide/vue'

// ============================================================
// 연락처 링크 데이터
// ============================================================
const contactLinks = [
  {
    label: 'Email',
    value: 'bluepark@example.com',
    href: 'mailto:bluepark@example.com',
    ariaLabel: '이메일 클라이언트 열기',
    external: false,
    icon: Mail,
  },
  {
    label: 'GitHub',
    value: 'github.com/bluepark1023',
    href: 'https://github.com/bluepark1023',
    ariaLabel: 'GitHub 프로필 새 탭에서 열기',
    external: true,
    icon: Github,
  },
  {
    label: 'Notion',
    value: '이력서 & 포트폴리오 문서',
    href: '#',
    ariaLabel: 'Notion 이력서 새 탭에서 열기',
    external: true,
    icon: NotebookText,
  },
]

// ============================================================
// Intersection Observer: 등장 애니메이션
// ============================================================
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, i * 100)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('#contact .reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/scss/page/ContactSection';
</style>

<template>
  <!-- ============================================================
       컨택트 섹션: 연락처, 링크, 웨이브 배경
       ============================================================ -->
  <section id="contact" class="contact" aria-labelledby="contact-title">
    <!-- 웨이브 SVG 장식 (상단) -->
    <div class="contact__wave-top" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>
    </div>

    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="section-header reveal">
        <span class="section-eyebrow">Contact</span>
        <h2 id="contact-title" class="section-title">
          함께 일하고 싶으신가요?
        </h2>
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
          <div class="contact__card-icon" aria-hidden="true" v-html="link.icon"></div>
          <div class="contact__card-info">
            <span class="contact__card-label">{{ link.label }}</span>
            <span class="contact__card-value">{{ link.value }}</span>
          </div>
          <div class="contact__card-arrow" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>
      </div>

      <!-- 가용 상태 표시 -->
      <div class="contact__status reveal" aria-live="polite">
        <span class="contact__status-dot" aria-hidden="true"></span>
        <p>현재 <strong>채용 제안 및 프리랜서 협업</strong>을 검토 중입니다.</p>
      </div>
    </div>

    <!-- 푸터 -->
    <footer class="contact__footer" role="contentinfo">
      <p>
        © 2026 <strong>박지민</strong>. Crafted with 💜 using Vue 3 + SCSS
      </p>
    </footer>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

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
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <polyline points="2,4 12,13 22,4"/>
    </svg>`,
  },
  {
    label: 'GitHub',
    value: 'github.com/bluepark1023',
    href: 'https://github.com/bluepark1023',
    ariaLabel: 'GitHub 프로필 새 탭에서 열기',
    external: true,
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/>
    </svg>`,
  },
  {
    label: 'Notion',
    value: '이력서 & 포트폴리오 문서',
    href: '#',
    ariaLabel: 'Notion 이력서 새 탭에서 열기',
    external: true,
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.047.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
    </svg>`,
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
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

// ============================================================
// 컨택트 섹션
// ============================================================
.contact {
  @include section-base;
  position: relative;
  background: linear-gradient(
    135deg,
    #151423 0%,
    $color-bg 50%,
    rgba($color-primary, 0.05) 100%
  );
  padding-top: 5rem;
}

// 상단 웨이브
.contact__wave-top {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 80px;
  color: $color-bg; // 이전 섹션 배경색과 일치

  svg {
    width: 100%;
    height: 100%;
  }
}

// ============================================================
// 연락처 카드
// ============================================================
.contact__cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-sm;
  max-width: 600px;
  margin: 0 auto $spacing-xl;

  @include tablet {
    grid-template-columns: repeat(3, 1fr);
  }
}

.contact__card {
  display: flex;
  align-items: center;
  gap: $spacing-sm;
  padding: $spacing-md;
  background: $color-bg-card;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  transition: all $transition-normal;
  text-decoration: none;
  cursor: pointer;

  @include tablet {
    flex-direction: column;
    align-items: flex-start;
    gap: $spacing-sm;
  }

  &:hover {
    border-color: rgba($color-primary, 0.4);
    background: rgba($color-primary, 0.06);
    transform: translateY(-4px);
    box-shadow: $shadow-card;

    .contact__card-arrow {
      transform: translateX(4px);
      color: $color-primary-light;
    }
  }

  &:focus-visible {
    outline: 2px solid $color-primary;
    outline-offset: 3px;
  }
}

.contact__card-icon {
  color: $color-primary-light;
  flex-shrink: 0;
  @include flex-center;
  width: 48px;
  height: 48px;
  background: rgba($color-primary, 0.1);
  border-radius: $border-radius-sm;
}

.contact__card-info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  flex: 1;
}

.contact__card-label {
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: $color-primary-light;
}

.contact__card-value {
  font-size: $font-size-sm;
  color: $color-text;
  font-weight: $font-weight-medium;
}

.contact__card-arrow {
  color: $color-text-muted;
  transition: transform $transition-normal, color $transition-normal;
  margin-left: auto;
  flex-shrink: 0;

  @include tablet {
    margin-left: 0;
  }
}

// ============================================================
// 가용 상태 배지
// ============================================================
.contact__status {
  @include flex-center;
  gap: $spacing-xs;
  margin-bottom: $spacing-xl;

  p {
    font-size: $font-size-sm;
    color: $color-text-muted;

    strong {
      color: $color-text;
    }
  }
}

.contact__status-dot {
  width: 10px;
  height: 10px;
  background: #00b894;
  border-radius: 50%;
  flex-shrink: 0;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(#00b894, 0.4); }
  50% { box-shadow: 0 0 0 6px rgba(#00b894, 0); }
}

// ============================================================
// 푸터
// ============================================================
.contact__footer {
  text-align: center;
  padding: $spacing-md 0 $spacing-sm;
  border-top: 1px solid $color-border;
  margin-top: $spacing-xl;

  p {
    font-size: $font-size-sm;
    color: $color-text-muted;

    strong {
      color: $color-text;
    }
  }
}
</style>

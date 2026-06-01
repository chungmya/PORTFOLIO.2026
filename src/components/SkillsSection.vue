<template>
  <!-- ============================================================
       스킬 섹션: 기술 스택 아이콘 그리드 + 순차 FadeIn
       ============================================================ -->
  <section id="skills" class="skills" aria-labelledby="skills-title">
    <div class="container">
      <!-- 섹션 헤더 -->
      <div class="section-header reveal">
        <span class="section-eyebrow">Skills</span>
        <h2 id="skills-title" class="section-title">
          기술 <span>스택</span>
        </h2>
        <p class="section-desc">실무에서 사용하는 기술들을 소개합니다.</p>
      </div>

      <!-- 스킬 카테고리 그룹 -->
      <div class="skills__groups">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="skills__group reveal"
        >
          <h3 class="skills__group-title">{{ group.title }}</h3>
          <ul class="skills__list" role="list" :aria-label="`${group.title} 기술 목록`">
            <li
              v-for="(skill, index) in group.items"
              :key="skill.name"
              class="skill-item"
              :style="{ transitionDelay: `${index * 0.07}s` }"
            >
              <!-- 스킬 아이콘 -->
              <div
                class="skill-item__icon"
                :style="{ background: skill.bg }"
                aria-hidden="true"
              >
                <span v-if="skill.emoji">{{ skill.emoji }}</span>
                <img
                  v-else-if="skill.iconUrl"
                  :src="skill.iconUrl"
                  :alt="skill.name + ' 아이콘'"
                  width="32"
                  height="32"
                />
              </div>
              <!-- 스킬 이름 & 레벨 -->
              <span class="skill-item__name">{{ skill.name }}</span>
              <!-- 레벨 바 -->
              <div class="skill-item__level" :aria-label="`${skill.name} 숙련도 ${skill.level}%`">
                <div
                  class="skill-item__level-bar"
                  :style="{ '--level': skill.level + '%', background: skill.bg }"
                ></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// ============================================================
// 스킬 데이터 (카테고리별)
// ============================================================
const skillGroups = [
  {
    title: '마크업 & 스타일링',
    items: [
      { name: 'HTML5', emoji: '🧱', bg: 'linear-gradient(135deg, #e34f26, #f06529)', level: 95 },
      { name: 'CSS3', emoji: '🎨', bg: 'linear-gradient(135deg, #1572b6, #33a9dc)', level: 92 },
      { name: 'SCSS', emoji: '💅', bg: 'linear-gradient(135deg, #cc6699, #e4a0c1)', level: 90 },
      { name: 'Bootstrap', emoji: '🅱', bg: 'linear-gradient(135deg, #7952b3, #a174d4)', level: 80 },
    ],
  },
  {
    title: '스크립트 & 프레임워크',
    items: [
      { name: 'JavaScript', emoji: '⚡', bg: 'linear-gradient(135deg, #f7df1e, #f0c419)', level: 85 },
      { name: 'jQuery', emoji: '$', bg: 'linear-gradient(135deg, #0769ad, #1a9ac7)', level: 88 },
      { name: 'Vue 3', emoji: '🟢', bg: 'linear-gradient(135deg, #42b883, #369870)', level: 78 },
    ],
  },
  {
    title: '빌드 도구 & 협업',
    items: [
      { name: 'Vite', emoji: '⚡', bg: 'linear-gradient(135deg, #646cff, #9b59f6)', level: 75 },
      { name: 'Git', emoji: '🔀', bg: 'linear-gradient(135deg, #f05032, #e35125)', level: 82 },
    ],
  },
]

// ============================================================
// Intersection Observer: 순차 FadeIn 애니메이션
// ============================================================
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // 자식 스킬 아이템들에도 애니메이션 적용
          entry.target.querySelectorAll('.skill-item').forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('is-visible')
            }, i * 80)
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('#skills .reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style lang="scss" scoped>
@use '@/assets/styles/variables' as *;
@use '@/assets/styles/mixins' as *;

// ============================================================
// 스킬 섹션
// ============================================================
.skills {
  @include section-base;
  background: $color-bg;
}

// ============================================================
// 스킬 그룹 레이아웃
// ============================================================
.skills__groups {
  display: grid;
  grid-template-columns: 1fr;
  gap: $spacing-xl;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skills__group {
  background: $color-bg-card;
  border: 1px solid $color-border;
  border-radius: $border-radius-md;
  padding: $spacing-lg;
}

.skills__group-title {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $color-primary-light;
  margin-bottom: $spacing-md;
  padding-bottom: $spacing-xs;
  border-bottom: 1px solid $color-border;
}

.skills__list {
  display: flex;
  flex-direction: column;
  gap: $spacing-sm;
}

// ============================================================
// 스킬 아이템
// ============================================================
.skill-item {
  display: grid;
  grid-template-columns: 44px 1fr;
  grid-template-rows: auto auto;
  column-gap: $spacing-sm;
  row-gap: 0.375rem;
  align-items: center;
  opacity: 0;
  transform: translateY(15px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
}

// 아이콘 박스
.skill-item__icon {
  grid-row: 1 / 3;
  @include flex-center;
  width: 44px;
  height: 44px;
  border-radius: $border-radius-sm;
  font-size: 1.375rem;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

// 스킬 이름
.skill-item__name {
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  color: $color-text;
  align-self: end;
}

// 레벨 바 컨테이너
.skill-item__level {
  height: 5px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: $border-radius-full;
  overflow: hidden;
  align-self: start;
}

// 레벨 채우기 (CSS 변수로 너비 제어)
.skill-item__level-bar {
  height: 100%;
  width: 0;
  border-radius: $border-radius-full;
  transition: width 1s ease 0.3s;

  .skill-item.is-visible & {
    width: var(--level);
  }
}
</style>

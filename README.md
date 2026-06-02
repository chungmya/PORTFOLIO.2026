# Portfolio — Web Publisher
> 5년차 웹 퍼블리셔의 입사 지원용 포트폴리오 웹사이트입니다.

<br>

## 소개

웹 에이전시에서 5년간 다양한 구축/운영 프로젝트를 경험한 웹 퍼블리셔의 포트폴리오입니다.  
웹 표준 및 웹 접근성을 중시하며, 사용자 경험을 고려한 퍼블리싱을 지향합니다.

<br>

## 기술 스택

| 분류 | 기술 |
|------|------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Framework | Vue 3 (Composition API) |
| Styling | SCSS |
| Bundler | Vite |
| 버전 관리 | Git / GitHub |
| 기타 | jQuery, Bootstrap, Vite |

<br>

## 프로젝트 구조

```
src/
├── assets/
│   ├── images/
│   └── styles/
│       ├── _variables.scss
│       ├── _mixins.scss
│       ├── _reset.scss
│       └── main.scss
├── components/
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── CareerSection.vue
│   ├── ProjectSection.vue
│   ├── SkillsSection.vue
│   └── ContactSection.vue
├── App.vue
└── main.js
```

<br>

## 실행 방법

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

<br>

## 섹션 구성

| 섹션 | 내용 |
|------|------|
| Hero | 이름, 직군 타이틀, 슬로건 |
| About | 자기소개, 강점 키워드 |
| Career | 경력 타임라인 |
| Projects | 작업물 카드 그리드 + 필터 |
| Skills | 기술 스택 시각화 |
| Contact | 연락처 및 링크 |

<br>

## ✅ 주요 고려사항

- 웹 접근성 (WCAG 2.1) 준수 — 시맨틱 태그, aria 속성, 키보드 접근 지원
- 모바일 퍼스트 반응형 디자인
- Intersection Observer 기반 스크롤 애니메이션

<br>

---

> 📬 문의: [bluepark1023@gmail.com]

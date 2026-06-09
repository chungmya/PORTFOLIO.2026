export const projects = [
  // ==========================================
  // 1. 라이나원 Go
  // ==========================================
  {
    id: 1,
    category: 'build',
    title: '라이나원 Go',
    desc: '보험사 라이나원 TMR 모집 신청 신규 웹사이트 구축',
    thumbnail: 'https://picsum.photos/seed/project3/800/480',
    tags: ['HTML5', 'CSS3', 'Sass', 'JavaScript', 'Mobile First'],
    detail: {
      id: 'laina-one',
      category: '신규 웹사이트 구축',
      title: '라이나원 Go',
      subtitle:
        '라이나원 Go는 보험사 TMR 모집 신청 웹사이트로, 단독으로 구축한 프로젝트입니다. CTA 버튼 애니메이션과 상담 성향 테스트부터 신청까지 이어지는 인터랙션 플로우 구현에 집중했습니다.',
      accent: '#4A90D9',
      stats: [
        { value: '1.5개월', label: '작업 기간' },
        { value: '100%', label: '단독 기여' },
        { value: '메인+서브 4', label: '총 페이지' },
        { value: '팝업 5개', label: '모달' },
      ],
      skills: [
        { name: 'HTML5', type: 'markup' },
        { name: 'CSS3', type: 'style' },
        { name: 'Sass', type: 'style' },
        { name: 'JavaScript', type: 'script' },
        { name: 'Mobile First', type: 'tool' },
        { name: 'WAI-ARIA', type: 'a11y' },
      ],
      tasks: [
        '메인 1개 · 서브 3개 · 에러 페이지 · 팝업 5개 퍼블리싱 단독 수행',
        'CTA 버튼 CSS 애니메이션 구현',
        'TM 상담 성향 테스트 · 결과 · 신청 페이지 인터랙션 구현',
        '다양한 유형의 모달 패턴을 가이드화하여 재사용 가능한 컴포넌트로 정리',
        'Mobile First 시맨틱 마크업 기반 반응형 구현',
        '크로스 브라우저 대응 완료',
      ],
      features: [
        {
          images: ['/images/cta_pc.gif', '/images/cta_mo.gif'],
          text: 'CTA 버튼 CSS 애니메이션으로 사용자 행동을 유도하는 인터랙션 구현',
        },
        {
          images: ['/images/test_intro.png', '/images/test_01.png', '/images/apply_form_01.png'],
          text: '성향 테스트 → 결과 확인 → 신청서 작성까지 단계별로 끊기지 않는 플로우 설계',
        },
        {
          images: '',
          text: '모달 유형을 분류하고 재사용 가능한 컴포넌트 가이드로 정리했습니다. 이후 추가 모달 작업 시간이 크게 단축됐습니다.',
        },
      ],
      links: [
        {
          text: '라이나원 Go 바로가기',
          url: 'http://netive.synology.me:8092/html/RE_TM0000V.html',
        },
      ],
      keywords: ['단독 퍼블리싱', '컴포넌트 가이드화', 'CTA 인터랙션', 'WAI-ARIA', 'Mobile First'],
    },
  },

  // ==========================================
  // 2. 나라사랑 포털
  // ==========================================
  {
    id: 2,
    category: 'build',
    title: '나라사랑 포털',
    desc: '현역 군인 전용 복지 플랫폼 어드민 및 반응형 웹사이트 구축',
    thumbnail: 'https://picsum.photos/seed/project1/800/480',
    tags: ['HTML5', 'Vue 3', 'Quasar', 'SCSS', 'GSAP', 'WAI-ARIA'],
    detail: {
      id: 'nara-sarang',
      category: '대규모 포털 구축',
      title: '나라사랑 포털',
      subtitle:
        '현역 군인 전용 복지 플랫폼. 나라사랑카드 발급·인터넷뱅킹·수령 금액 조회·카드 혜택, 입대일·전역일 관리, 병 복지 길라잡이, 문서 발급, 군 이벤트 공지 등 군 생활 전반을 아우르는 대민 서비스 포털입니다.',
      accent: '#2E7D6B',
      stats: [
        { value: '8개월', label: '작업 기간' },
        { value: '50인+', label: '전체 투입 인력' },
        { value: '137p', label: '담당 페이지' },
        { value: 'WA 인증', label: '웹접근성 취득' },
      ],
      skills: [
        { name: 'HTML5', type: 'markup' },
        { name: 'SCSS', type: 'style' },
        { name: 'Gulp', type: 'tool' },
        { name: 'IBsheet', type: 'tool' },
        { name: 'Vue 3', type: 'framework' },
        { name: 'Quasar', type: 'framework' },
        { name: 'GSAP', type: 'script' },
        { name: 'WAI-ARIA', type: 'a11y' },
      ],
      tasks: [
        '[어드민] 총 170p 중 84p 담당 (기여율 약 49%) — 로그인·회원관리·복지혜택·빌링·카드발급·마이페이지 등',
        '[어드민] IBsheet 그리드 연동, 데이터 테이블 및 입력 폼 중심 화면 다수 구현',
        '[어드민] 버튼·테이블·입력 폼·타이틀 등 공통 UI 컴포넌트 가이드 제작',
        '[프론트] 총 201p 중 53p 반응형 퍼블리싱 담당 (기여율 약 26%)',
        '[프론트] 나라사랑카드 소개·발급·혜택·인터넷뱅킹, 입대일·전역일 조회, 병 복지 길라잡이, 문서 발급 등 전 영역 참여',
        '[프론트] 현역·예비역·부사관 등 신분 유형별 분기 UI 구조 설계 및 구현',
        '단위 테스트·통합 테스트 참여, WAI-ARIA 기반 보이스오버 및 키보드 접근성 플로우 검증',
        '웹 접근성 인증 마크(WA) 취득 기여',
      ],
      features: [
        {
          icon: '🪖',
          text: '현역·예비역·부사관 신분 유형별로 보이는 화면이 달라지는 분기 UI 구조 직접 설계',
        },
        {
          icon: '🏛️',
          text: '어드민과 반응형 프론트를 동시에 진행한 약 50인 규모 대형 프로젝트',
        },
        {
          icon: '♿',
          text: 'WAI-ARIA 기반 보이스오버·키보드 접근성 검증 및 웹 접근성 인증 마크(WA) 취득 기여',
        },
        {
          icon: '🧩',
          text: '어드민 공통 UI 컴포넌트 가이드 제작으로 팀 전체 작업 일관성 확보',
        },
      ],
      challenges: [
        {
          problem:
            '신분 유형(현역/예비역/부사관)에 따라 화면 구성과 기능이 달라져 분기 처리가 복잡해졌습니다.',
          solution:
            '신분별 조건을 공통 로직으로 추상화하고 컴포넌트 단위로 분리해 유지보수 가능한 구조로 구현했습니다.',
        },
        {
          problem:
            'Vue 3 + Quasar를 실무에 처음 적용하면서 프레임워크 학습과 납기를 동시에 맞춰야 했습니다.',
          solution:
            '공식 문서와 팀원 코드 리뷰를 병행하며 빠르게 습득했고, 담당 페이지를 기한 내 완료했습니다.',
        },
      ],
      links: [],
      keywords: [
        '약 50인 대규모 프로젝트',
        'Vue 3 + Quasar',
        '웹접근성 인증 취득',
        '신분별 분기 UI',
        '어드민 UI',
        '통합 테스트 참여',
      ],
    },
  },

  // ==========================================
  // 3. 암웨이 코리아
  // ==========================================
  {
    id: 3,
    category: 'operation',
    title: '암웨이 코리아',
    desc: '대형 이커머스 브랜드 웹사이트 콘텐츠 퍼블리싱 및 운영',
    thumbnail: 'https://picsum.photos/seed/project2/800/480',
    tags: ['HTML5', 'CSS3', 'JavaScript', '유틸리티 클래스', '이커머스'],
    detail: {
      id: 'amway-korea',
      category: '웹사이트 장기 운영',
      title: '암웨이 코리아',
      subtitle:
        '국내 대형 이커머스 브랜드 웹사이트 운영을 4년간 담당했습니다. 월 평균 100페이지 이상의 콘텐츠를 빠른 납기 안에 안정적으로 처리하면서, 공통 유틸리티 클래스 체계를 직접 설계해 팀 전체 작업 효율을 높였습니다.',
      accent: '#C0392B',
      stats: [
        { value: '4년', label: '운영 기간' },
        { value: '100p+', label: '월 평균 퍼블리싱' },
        { value: '3인', label: '팀 규모' },
        { value: '풀커버', label: '이커머스 전 영역' },
      ],
      skills: [
        { name: 'HTML5', type: 'markup' },
        { name: 'CSS3', type: 'style' },
        { name: 'JavaScript', type: 'script' },
        { name: 'jQuery', type: 'script' },
      ],
      tasks: [
        '브랜드 소개·이벤트·상품 프로모션 등 월 평균 100p 이상 퍼블리싱 (3인 기준)',
        '타이포그래피·여백 등 반응형 공통 유틸리티 클래스 정의 → 반복 작업 최소화 및 스타일 일관성 유지',
        '메인·카테고리·상품 상세·장바구니 등 이커머스 전 영역 경험',
        '빠른 납기 요구 대응, 4년간 안정적 운영 유지',
      ],
      features: [
        {
          icon: '⚡',
          text: '월 100p 이상 고속 퍼블리싱 환경에서 납기와 품질을 함께 유지',
        },
        {
          icon: '🛒',
          text: '메인·카테고리·상품 상세·장바구니 등 이커머스 전 영역 페이지 경험',
        },
        {
          icon: '🎨',
          text: '반응형 공통 유틸리티 클래스를 직접 설계해 팀 전체 스타일 가이드로 활용',
        },
        {
          icon: '📅',
          text: '4년 장기 운영으로 다양한 시즌 프로모션 패턴과 긴급 대응 경험 축적',
        },
      ],
      challenges: [
        {
          problem: '디자인 시스템 없이 3인이 작업하다 보니 스타일 불일관성이 점점 누적됐습니다.',
          solution:
            '타이포그래피·여백 기준의 공통 유틸리티 클래스를 직접 정의하고 팀 가이드로 공유해 일관성을 잡았습니다.',
        },
        {
          problem:
            '시즌 이벤트 기간엔 납기가 짧아 퀄리티와 속도 사이에서 균형을 맞추기 어려웠습니다.',
          solution:
            '반복되는 레이아웃 패턴을 템플릿으로 정리해 초기 작업 시간을 줄이고, 디테일 다듬는 데 집중할 수 있도록 작업 구조를 개선했습니다.',
        },
      ],
      links: [{ text: '암웨이 코리아 바로가기', url: 'https://www.amway.co.kr' }],
      keywords: [
        '장기 운영 경험',
        '대용량 콘텐츠 처리',
        '이커머스 전 영역',
        '납기 준수',
        '유틸리티 클래스 설계',
      ],
    },
  },

  // ==========================================
  // 4. 웹 퍼블리셔 포트폴리오 (개인 작업)
  // ==========================================
  {
    id: 4,
    category: 'personal',
    title: '웹 퍼블리셔 포트폴리오',
    desc: '입사 지원용 개인 포트폴리오 웹사이트 제작',
    thumbnail: 'https://picsum.photos/seed/project5/800/480',
    tags: ['Vue 3', 'Vite', 'SCSS', 'GSAP'],
    detail: {
      id: 'portfolio',
      category: '개인 작업',
      title: '웹 퍼블리셔 포트폴리오',
      subtitle:
        '경력직 입사 지원을 위해 직접 기획부터 구현까지 제작한 포트폴리오 사이트입니다. Vue 3 Composition API와 GSAP를 조합해 인터랙티브한 스크롤 경험을 구현했습니다.',
      accent: '#7B4FD4',
      stats: [
        { value: '진행중', label: '작업 기간' },
        { value: '100%', label: '단독 작업' },
        { value: 'Vue 3', label: '주요 기술' },
        { value: '2026', label: '작업 연도' },
      ],
      skills: [
        { name: 'Vue 3', type: 'framework' },
        { name: 'Vite', type: 'tool' },
        { name: 'SCSS', type: 'style' },
        { name: 'GSAP', type: 'script' },
        { name: 'WAI-ARIA', type: 'a11y' },
      ],
      tasks: [
        'Vue 3 Composition API 기반 SPA 설계 및 구현',
        'Vue Router를 활용한 프로젝트 디테일 페이지 라우팅 구현',
        'GSAP ScrollTrigger를 활용한 스크롤 인터랙션 구현',
        'Intersection Observer API로 섹션별 등장 애니메이션 처리',
        'prefers-reduced-motion 미디어쿼리로 모션 감소 옵션 대응',
        '모바일 퍼스트 반응형 레이아웃 설계',
      ],
      features: [
        {
          icon: '✨',
          text: 'GSAP ScrollTrigger와 Intersection Observer를 조합한 스크롤 인터랙션',
        },
        {
          icon: '♿',
          text: 'WAI-ARIA 및 키보드 접근성을 고려한 시맨틱 마크업 구조',
        },
        {
          icon: '📐',
          text: '모바일 퍼스트 기반 반응형 설계, prefers-reduced-motion 대응',
        },
        {
          icon: '🧩',
          text: '재사용 가능한 Vue 컴포넌트 구조로 유지보수성 확보',
        },
      ],
      challenges: [
        {
          problem:
            'Vue 3 Composition API를 실무에 처음 적용하면서 Options API와 다른 패턴에 익숙해지는 데 시간이 걸렸습니다.',
          solution:
            '공식 문서와 실제 프로젝트 코드를 병행하며 단계적으로 적용했고, 이 포트폴리오 자체가 학습의 결과물입니다.',
        },
      ],
      links: [],
      keywords: ['Vue 3', 'Composition API', 'GSAP', '반응형', '웹접근성'],
    },
  },

  // ==========================================
  // 5. CSS 컴포넌트 라이브러리 (개인 스터디)
  // ==========================================
  {
    id: 5,
    category: 'personal',
    title: 'CSS 컴포넌트 라이브러리',
    desc: '자주 사용하는 UI 컴포넌트 모음 (개인 스터디)',
    thumbnail: 'https://picsum.photos/seed/project6/800/480',
    tags: ['HTML5', 'SCSS', 'JavaScript'],
    detail: {
      id: 'css-components',
      category: '개인 스터디',
      title: 'CSS 컴포넌트 라이브러리',
      subtitle:
        '퍼블리싱 작업에서 반복적으로 만드는 UI 패턴들을 한곳에 정리한 개인 스터디 프로젝트입니다. 접근성 처리까지 포함된 재사용 가능한 컴포넌트 모음입니다.',
      accent: '#E67E22',
      stats: [
        { value: '진행중', label: '작업 기간' },
        { value: '100%', label: '단독 작업' },
        { value: '스터디', label: '목적' },
        { value: '2025~', label: '시작 연도' },
      ],
      skills: [
        { name: 'HTML5', type: 'markup' },
        { name: 'SCSS', type: 'style' },
        { name: 'JavaScript', type: 'script' },
      ],
      tasks: [
        '모달·탭·드롭다운·아코디언 등 자주 쓰는 UI 패턴 컴포넌트화',
        'BEM 네이밍 컨벤션 기반 SCSS 구조 정리',
        'WAI-ARIA 접근성 속성 적용 및 스크린리더 동작 검증',
        '키보드 인터랙션 처리 — 포커스 트랩, ESC 닫기, 탭 순서 관리',
      ],
      features: [
        {
          icon: '📚',
          text: '반복되는 UI 패턴을 유형별로 분류해 필요할 때 바로 꺼내 쓸 수 있도록 정리',
        },
        {
          icon: '🔡',
          text: 'BEM 네이밍으로 클래스 구조를 명확하게 유지, 협업 시 가독성 확보',
        },
        {
          icon: '♿',
          text: '각 컴포넌트마다 WAI-ARIA 속성과 키보드 인터랙션 처리를 기본으로 포함',
        },
      ],
      challenges: [
        {
          problem:
            '모달 포커스 트랩 구현 시 동적으로 추가되는 요소의 포커스 순서가 의도대로 동작하지 않았습니다.',
          solution:
            'MutationObserver로 DOM 변경을 감지하고 포커스 가능한 요소 목록을 동적으로 갱신해 해결했습니다.',
        },
      ],
      links: [],
      keywords: ['컴포넌트화', 'BEM', 'SCSS', '웹접근성', '키보드 인터랙션'],
    },
  },
]

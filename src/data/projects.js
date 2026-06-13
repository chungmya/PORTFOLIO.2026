
export const projects = [
  // ==========================================
  // 1. 라이나원 Go
  // ==========================================
  {
    id: 1,
    category: 'build',
    title: '라이나원 Go',
    desc: '보험사 라이나원 TMR 모집 신청 신규 웹사이트 구축',
    thumbnail: '/images/thumbnail_linaone.jpg',
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
          images: ['/images/linaone_cta_pc.gif', '/images/linaone_cta_mo.gif'],
          text: 'CTA 버튼 CSS 애니메이션으로 사용자 행동을 유도하는 인터랙션 구현',
        },
        {
          images: ['/images/linaone_test_intro.png', '/images/linaone_test_01.png', '/images/linaone_apply_form_01.png'],
          text: '성향 테스트 → 결과 확인 → 신청서 작성까지 단계별로 끊기지 않는 플로우 설계',
        },
        {
          images: '',
          text: '모달 유형을 분류하고 재사용 가능한 컴포넌트 가이드로 정리했습니다. 이후 추가 모달 작업 시간이 크게 단축됐습니다.',
        },
      ],
      links: [
        {
          text: '(오픈전)메인 페이지',
          url: 'http://netive.synology.me:8092/html/RE_TM0000V.html',
        },
        {
          text: '(오픈전)서브페이지_1',
          url: 'http://netive.synology.me:8092/html/RE_CA0000V.html',
        },
        {
          text: '(오픈전)성향 테스트 페이지',
          url: 'http://netive.synology.me:8092/html/RE_CA0100P.html',
        },
        {
          text: '(오픈전)성향 테스트 결과 페이지',
          url: 'http://netive.synology.me:8092/html/RE_CA0200P.html',
        },
        {
          text: '(오픈전)신청 폼 모달',
          url: 'http://netive.synology.me:8092/html/RE_AP0000P.html',
        },
      ],
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
    thumbnail: '/images/thumbnail_narasarang.jpg',
    tags: ['HTML5', 'SCSS', 'Vue 3', 'Gulp', 'Quasar', 'gulp', 'WAI-ARIA'],
    detail: {
      id: 'nara-sarang',
      category: '대규모 프로젝트 구축',
      title: '나라사랑 포털',
      subtitle:
        '현역 군인 전용 복지 플랫폼. 나라사랑카드 발급·인터넷뱅킹·수령 금액 조회·카드 혜택, 입대일·전역일 관리, 병 복지 길라잡이, 문서 발급, 군 이벤트 공지 등 군 생활 전반을 아우르는 대민 서비스 포털입니다.',
      accent: '#2E7D6B',
      stats: [
        { value: '8개월', label: '작업 기간' },
        { value: '50인+', label: '전체 투입 인력' },
        { value: 'WA 인증', label: '웹접근성 취득' },
      ],
      skills: [
        { name: 'HTML5', type: 'markup' },
        { name: 'SCSS', type: 'style' },
        { name: 'Gulp', type: 'tool' },
        { name: 'IBsheet', type: 'tool' },
        { name: 'Vue 3', type: 'framework' },
        { name: 'Quasar', type: 'framework' },
        { name: 'WAI-ARIA', type: 'a11y' },
      ],
      tasks: [
        // 어드민
        '[어드민] 총 170p 중 84p 담당 (기여율 약 49%) — 로그인·회원관리·복지혜택·빌링·카드발급·마이페이지 등',
        '[어드민] IBsheet 그리드 연동, 표준 데이터 테이블 및 입력 폼 중심 화면 다수 구현',
        '[어드민] 버튼·테이블·입력 폼·타이틀 등 공통 UI 컴포넌트 가이드 제작 — 팀 전체 작업 일관성 확보',
        // 프론트
        '[프론트] 총 201p 중 53p 반응형 퍼블리싱 담당 (기여율 약 26%)',
        '[프론트] 나라사랑카드 소개·발급·혜택·인터넷뱅킹, 입대일·전역일 조회, 병 복지 길라잡이, 문서 발급 등 서비스 전 영역 참여',
        '[프론트] 기존 Quasar 컴포넌트 구조 기반으로 현역·예비역·부사관 신분별 분기 조건 추가 및 화면 퍼블리싱 담당',
        '[프론트] 나라사랑카드 사전신청 페이지 퍼블리싱 — Quasar 공통 컴포넌트(CustomBadge, q-img 등)를 활용해 카드사별 UI를 일관된 구조로 구현',
        '[프론트] target="_blank" 링크에 title="새창열림" 및 aria-label 적용 등 WAI-ARIA 기반 접근성 처리',
        '[프론트] 웹 접근성 인증 마크(WA) 취득 기여',
        // 테스트
        '단위 테스트·통합 테스트 참여, 보이스오버 및 키보드 접근성 플로우 검증',
      ],
      features: [
        // 프로젝트 규모/환경 특징
        {
          images: [], // 전체 프로젝트 구조 캡쳐 or 팀 작업 화면
          text: '어드민과 반응형 프론트를 동시에 진행한 약 50인 규모 대형 프로젝트. 퍼블리셔 4인이 역할을 나눠 어드민 170p, 프론트 201p를 병행 작업했습니다.',
        },
        // 분기 UI
        {
          code: `<!-- 신분별 테마 분기 -->
          <div class="content-wrap" :data-theme="theme">
          /* SCSS - 육군 */
          [data-theme="ROKA"] { .exclusive-benefit { background-color: #2a5034; }}
          /* SCSS - 해군 */
          [data-theme="ROKN"] { .exclusive-benefit { background-color: #012153; } }`,
          text: '현역·예비역·부사관 신분 유형별로 보이는 화면이 달라지는 분기 UI. data-theme 속성값에 따라 각 군별 컬러와 UI가 자동으로 변경되도록 구현했습니다.',
        },
        // 접근성
        {
          text: 'WAI-ARIA 기반 보이스오버·키보드 접근성 검증에 참여해 웹 접근성 인증 마크(WA) 취득에 기여했습니다. target="_blank" 링크에 aria-label, title 속성을 일관되게 적용했습니다.',
        },
        // 사전신청 페이지
        {
          images: [
            '/images/narasarang_landing-page.png',
          ],
          text: '나라사랑카드 사전신청 랜딩 페이지 퍼블리싱. Quasar 공통 컴포넌트를 활용해 나라사랑 보털과 일관된 구조로 구현했습니다.',
        },
      ],
      challenges: [
        {
          problem:
            'Vue 3 + Quasar를 실무에 처음 적용하면서 프레임워크 학습과 납기를 동시에 맞춰야 했습니다.',
          solution:
            '공식 문서 정독과 팀원 코드 리뷰를 병행하며 빠르게 습득했고, 담당 페이지를 기한 내 완료했습니다.',
        },
        {
          problem:
            '신분 유형(현역/예비역/부사관 등)에 따라 화면 구성과 기능이 달라 분기 처리가 복잡해졌습니다.',
          solution:
            '기존 컴포넌트 구조를 파악하고, 신분별 조건을 일관된 방식으로 추가해 유지보수 가능한 구조로 구현했습니다.',
        },
      ],
      links: [
        {
          text: '나라사랑 포털',
          url: 'https://www.narasarang.or.kr/#/',
        },
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
    thumbnail: '/images/thumbnail_amway.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', '유틸리티 클래스', '이커머스'],
    detail: {
      id: 'amway-korea',
      category: '웹사이트 장기 운영',
      title: '암웨이 코리아',
      subtitle:
      '국내 대형 이커머스 브랜드 웹사이트 운영을 4년간 담당했습니다. 월 평균 100페이지 이상의 콘텐츠를 빠른 납기 안에 안정적으로 처리하면서, 팀 내 공통 유틸리티 클래스 체계를 함께 활용해 반복 작업을 최소화했습니다.',
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
        '메인 페이지, 상품 프로모션, 상세페이지, 상품 브랜드 페이지, 제휴 카드 등 이커머스 전 영역 경험',
        '빠른 납기 요구 대응, 4년간 안정적 운영 유지',
      ],
      features: [
        {
          text: '월 100p 이상 고속 퍼블리싱 환경 — 3인이 역할을 나눠 납기와 품질을 함께 유지했습니다.',
        },
        {
          text: '메인·상품 상세·브랜드·제휴 카드 등 이커머스 전 영역을 4년간 경험했습니다.',
        },
        {
          text: '시즌별 프로모션·긴급 업데이트 등 다양한 운영 상황을 장기간 경험했습니다.',
        },
      ],
      challenges: [
        {
          problem:
            'NUTRILITE 브랜드 페이지 개편 시 기존 레거시 코드가 복잡하게 얽혀 있어 신규 스타일 적용 시 충돌이 발생했습니다.',
          solution:
            '기존 코드에 손대지 않고 독립 클래스 체계를 별도로 적용해 충돌 없이 안정적으로 리팩토링했습니다.',
        },
        {
          problem:
            '고객사에서 갤럭시 430px부터 폴드폰까지 기기별로 세세한 모바일 대응을 요구해 반응형 분기가 복잡해졌습니다.',
          solution:
            '브레이크포인트를 기기 유형별로 세분화하고, 각 구간별 레이아웃을 별도로 정의해 모든 기기에서 디자인 시안에 따라 구현했습니다.',
        },
        {
          problem:
            '아티스트리·뉴트리 제품 리뉴얼 시 기존에 배포된 제품 30개를 동일한 디자인으로 일괄 업데이트해야 했습니다.',
          solution:
            '공통 스타일을 클래스화해 한 번에 적용할 수 있도록 구조를 잡아 최소한의 공수로 30개 제품을 일괄 리뉴얼했습니다.',
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
  title: 'ESG 공시 지원 시스템',
  desc: 'AI 협업 기반 ESG 지표 관리 대시보드 퍼블리싱',
  thumbnail: '/images/thumbnail_esg.jpg',
  tags: ['Vue 3', 'TypeScript', 'SCSS', 'AG Grid', 'Claude AI'],
  detail: {
    id: 'esg-dashboard',
    category: '사전과제',
    title: 'ESG 공시 지원 시스템',
    subtitle:
      'Claude AI로 생성된 기획 문서와 피그마 디자인 토큰 기반 HTML을 Vue 3로 전환한 ESG 지표 관리 대시보드입니다. AI 협업 워크플로우 안에서 퍼블리셔 역할을 수행했습니다.',
    accent: '#00A651',
    stats: [
      { value: '3인', label: '팀 구성' },
      { value: 'Vue 3', label: '전환 작업' },
      { value: 'AI 협업', label: '작업 방식' },
    ],
    skills: [
      { name: 'Vue 3', type: 'framework' },
      { name: 'TypeScript', type: 'script' },
      { name: 'SCSS', type: 'style' },
      { name: 'AG Grid', type: 'tool' },
      { name: 'Claude AI', type: 'tool' },
    ],
    tasks: [
      'Claude AI가 생성한 기획 문서 기반으로 퍼블리싱 지침서 작성',
      '디자이너가 피그마 디자인 토큰 기반으로 생성한 HTML을 Vue 3 컴포넌트로 전환',
      'AI가 React 기준으로 출력한 코드를 Vue 3 문법에 맞게 재작성',
      'DefaultLayout.vue 기반 공통 레이아웃 구조 구현 — GNB·TopBar·에러 배너 포함',
      'BEM 네이밍 + rem 단위 + SCSS 변수/믹스인 기반 스타일 작업',
      'AG Grid 연동 ESG 지표 목록 화면 퍼블리싱 — Environmental·Social·Governance 탭 분기',
    ],
    features: [
      {
        images: ['/images/esg_01.png'],
        text: 'Claude AI → 기획자 → 디자이너 → 퍼블리셔로 이어지는 AI 협업 워크플로우 안에서 퍼블리싱 담당.',
      },
      {
        images: ['/images/esg_02.png'],
        text: 'AI가 React 기준으로 생성한 결과물을 Vue 3 Composition API 문법으로 재작성. 프레임워크 차이를 파악하고 변환하는 작업을 수행했습니다.',
      },
      {
        images: ['/images/esg_03.png'],
        text: 'AG Grid를 활용한 ESG 지표 목록 구현. Environmental·Social·Governance 탭 분기 및 필터·검색·CSV 내보내기 UI 퍼블리싱.',
      },
      {
        text: '퍼블리싱 지침서를 직접 작성해 레이아웃 구조·SCSS 규칙·컴포넌트 네이밍 등 팀 작업 기준을 문서화했습니다.',
      },
    ],
    challenges: [
      {
        problem: 'Claude AI가 React 기준으로 코드를 생성해 Vue 3에서 바로 사용할 수 없었습니다.',
        solution: 'React와 Vue 3의 문법 차이(JSX → template, useState → ref, className → class 등)를 파악하고 Vue 3 Composition API 방식으로 재작성했습니다.',
      },
      {
        problem: 'AI·기획·디자인·퍼블리싱이 각자 다른 산출물을 내놓다 보니 일관된 작업 기준이 없었습니다.',
        solution: '레이아웃 구조·SCSS 규칙·컴포넌트 네이밍 등을 담은 퍼블리싱 지침서를 직접 작성해 팀 전체 기준으로 공유했습니다.',
      },
    ],
    links: [],
    keywords: ['AI 협업', 'Vue 3 전환', 'AG Grid', '지침서 작성', 'ESG 대시보드'],
  },
},

]

// ========================================
// 다국어 번역 데이터
// ========================================
const translations = {
  ko: {
    // 상단 네비게이션
    nav_resume: "Anne's Resume",
    nav_contact: "Contact",
    
    // 사이드 네비게이션
    nav_home: "Home",
    nav_webtoons: "Webtoons",
    nav_novels: "Novels", 
    nav_design: "Design",
    nav_characters: "Characters",
    nav_videos: "Videos",
    nav_dashboards: "Dashboards",
    
    // Hero 섹션
    hero_title: "Anne",
    hero_subtitle: "Visual Story by Anne",
    
    // About 섹션
    about_title: "About Me",
    about_text: "안녕하세요. 웹툰 작가이자 애니메이션 창작자 <strong>Anne</strong>입니다.<br>웹툰 창작과 애니메이션, 수학 교육, 음악과 해양 환경 활동까지<br>다양한 경험을 이야기로 엮어 감정을 나누고, 독자와 연결되는 작업을 합니다.<br>깊은 바다처럼, 따뜻하고 포근한 감정을 건네는 이야기꾼이 되고 싶습니다.",
    
    // 섹션 제목들
    section_webtoons: "My Webtoons",
    section_novels: "My Novels",
    section_design: "Design Works",
    section_characters: "Character Design",
    section_videos: "Videos",
    section_dashboards: "Data Dashboards",
    
    // 웹툰 카드
    webtoon1_title: "시간의 약방",
    webtoon1_desc: "2025 제주콘텐츠진흥원 웹툰 지원사업 선정작",
    webtoon2_title: "자본과 권력의 그림자 노동자들",
    webtoon2_desc: "🏆 2025 진천 K스토리 슈퍼루키 해커톤 장려상",
    webtoon3_title: "First Love",
    webtoon3_desc: "2025년 AI 컨텐츠 제작 수업 작품",
    webtoon4_title: "심야편의점",
    webtoon4_desc: "2025년 AI 컨텐츠 제작 수업 팀 프로젝트",
    webtoon5_title: "고냉이 하오",
    webtoon5_desc: "2024년 1월 제작",
    webtoon6_title: "덴티스트",
    webtoon6_desc: "2024년 6월 제작 복수 스릴러",
    webtoon7_title: "백초의 수학",
    webtoon7_desc: "🏆 2024 제주콘텐츠진흥원 스토리 원정대 선정작",
    webtoon8_title: "오렌지 실버타운",
    webtoon8_desc: "2023년 CJ ENM × 제주콘텐츠진흥원 협업",
    webtoon9_title: "막역지우",
    webtoon9_desc: "2023년 8월 제작 한자성어 이야기",
    webtoon10_title: "백련초",
    webtoon10_desc: "2023년 3월 제작 - 가시 때문에 친구를 사귀지 못하는 백련초의 이야기. 제주 특산물 캐릭터 에피소드",
    webtoon11_title: "고뇌의 시작 물부족의 세계",
    webtoon11_desc: "2023년 공모전 출품작",
    webtoon12_title: "물을 물로 보지마",
    webtoon12_desc: "2023년 공모전 출품작",
    webtoon13_title: "무안의 날개",
    webtoon13_desc: "🏆 2023년 무안국제공항 홍보 웹툰 장려상",
    webtoon14_title: "백초의 전기",
    webtoon14_desc: "2023년 6월 제작 - 첫 공모전 출품작. 백초 캐릭터의 시작",
    
    // 웹소설 카드
    novel1_title: "대치동 수학강사의 조선시대 과외일지",
    novel1_desc: "🏆 2025 진천 K 스토리 공모전 장려상",
    novel2_title: "자본과 권력의 그림자 노동자들",
    novel2_desc: "🏆 2025 슈퍼루키 해커톤 전국대학생 웬툰 최강자전 장려상 수상작 웹소설",
    novel3_title: "시간의 약방 에피소드",
    novel3_desc: "2025 제주콘텐츠 진흥원 웹툰 지원사업 선정 \"시간의 약방\" 에피소드",
    
    // 디자인 카드
    design1_title: "Solar-powered Hygiene Bollard Lighting System",
    design1_desc: "🏆 2025 경기도 공공디자인 공모전 은상",
    design2_title: "돌고래 전망대",
    design2_desc: "🏆 2025 제주도 옥외광고대전 특선",
    design3_title: "Silver Safe Mat Network System",
    design3_desc: "SDGs Design International Awards 2025 출품",
    
    // 캐릭터 카드
    char1_title: "백련초 캐릭터 \"초초\"",
    char2_title: "2024 제주 스토리 원정대 선정 특산물 캐릭터",
    char3_title: "지도 교수님 캐릭터",
    
    // 영상 카드
    video1_title: "초초와 비비",
    video1_desc: "선인장 \"초초\"와 길고양이 \"비비\"의 따뜻한 우정 이야기",
    video2_title: "이어도의 붉은 꽃",
    video2_desc: "2025 제주 글로벌 AI 필름 공모전 출품작",
    video3_title: "다시는 혼자가 아니게",
    video3_desc: "2024 제주 유기동물 보호센터 다큐멘터리",
    video4_title: "오션팰리스",
    video4_desc: "제주도 문섬의 오션팰리스 다이빙 포인트",
    
    // 대시보드 카드
    dash1_title: "Pandemic Defense Innovation",
    dash1_desc: "팬데믹 발생 시 국방력 강화 전략",
    dash2_title: "Silver Safe Mat Network System",
    dash2_desc: "IoT 기반 독거노인 안전 모니터링 시스템, 전국 17개 지역의 실시간 안전 현황과 고위험군 노인 관리 대시보드",
    
    // 팝업
    popup_view_button: "전체보기",
    popup_episode_select: "에피소드를 선택하세요:",
    
    // Resume 페이지
    resume_title: "Anne's Resume",
    resume_subtitle: "Creative Artist & Ocean Advocate",
    resume_education: "🎓 학력(Education)",
    resume_career: "💼 경력(Career in Animation)",
    resume_teaching: "📘 강의 경력(Teaching Career)",
    resume_creative: "🖋 창작 활동(Creative Work)",
    resume_ai: "🤖 AI 활용 역량(AI Skills)",
    resume_music: "🎶 음악 창작 역량(Music Creation)",
    resume_awards: "🏆 수상 경력(Awards)",
    resume_activities: "📌 주요 활동(Key Activities)",
    resume_marine: "🌊 해양 환경 봉사(Marine Environment)",
    resume_hobbies: "🎸 취미 및 활동(Hobbies & Personal Activities)",
    resume_skills: "🛠 기술 역량(Skills)",
    
    // Contact 페이지
    contact_name: "임영란(Anne)",
    contact_title: "웹툰 아티스트 / Creative Artist",
    contact_email: "Email",
    contact_instagram: "Instagram",
    contact_website: "Website"
  },
  
  en: {
    // Top Navigation
    nav_resume: "Anne's Resume",
    nav_contact: "Contact",
    
    // Side Navigation
    nav_home: "Home",
    nav_webtoons: "Webtoons",
    nav_novels: "Novels",
    nav_design: "Design",
    nav_characters: "Characters",
    nav_videos: "Videos",
    nav_dashboards: "Dashboards",
    
    // Hero Section
    hero_title: "Anne",
    hero_subtitle: "Visual Story by Anne",
    
    // About Section
    about_title: "About Me",
    about_text: "Hello, I'm <strong>Anne</strong>, a webtoon artist and animation creator.<br>From webtoon creation and animation to math education, music, and marine environmental activities,<br>I weave diverse experiences into stories to share emotions and connect with readers.<br>Like the deep ocean, I aspire to be a storyteller who delivers warm and comforting emotions.",
    
    // Section Titles
    section_webtoons: "My Webtoons",
    section_novels: "My Novels",
    section_design: "Design Works",
    section_characters: "Character Design",
    section_videos: "Videos",
    section_dashboards: "Data Dashboards",
    
    // Webtoon Cards
    webtoon1_title: "Time's Pharmacy",
    webtoon1_desc: "2025 Jeju Content Agency Webtoon Support Program Selection",
    webtoon2_title: "Shadow Workers of Capital and Power",
    webtoon2_desc: "🏆 2025 Jincheon K-Story Super Rookie Hackathon Encouragement Award",
    webtoon3_title: "First Love",
    webtoon3_desc: "2025 AI Content Creation Class Project",
    webtoon4_title: "Midnight Convenience Store",
    webtoon4_desc: "2025 AI Content Creation Team Project",
    webtoon5_title: "Cat Hao",
    webtoon5_desc: "Created January 2024",
    webtoon6_title: "Dentist",
    webtoon6_desc: "June 2024 Revenge Thriller",
    webtoon7_title: "Math with Baekcho",
    webtoon7_desc: "🏆 2024 Jeju Content Agency Story Expedition Selection",
    webtoon8_title: "Orange Silver Town",
    webtoon8_desc: "2023 CJ ENM × Jeju Content Agency Collaboration",
    webtoon9_title: "Makyeokjiwoo",
    webtoon9_desc: "August 2023 Friendship Story",
    webtoon10_title: "Baekryeoncho",
    webtoon10_desc: "March 2023 - Story of Baekryeoncho who can't make friends. Jeju special product character",
    webtoon11_title: "The Agony Begins: World of Water Scarcity",
    webtoon11_desc: "2023 Contest Entry",
    webtoon12_title: "Don't Take Water for Granted",
    webtoon12_desc: "2023 Contest Entry",
    webtoon13_title: "Wings of Muan",
    webtoon13_desc: "🏆 2023 Muan International Airport Promotional Webtoon Award",
    webtoon14_title: "Baekcho's Electricity",
    webtoon14_desc: "June 2023 - First contest entry. The birth of Baekcho character",
    
    // Novel Cards
    novel1_title: "Daechi Math Teacher's Joseon Dynasty Tutoring Journal",
    novel1_desc: "🏆 2025 Jincheon K-Story Competition Encouragement Award",
    novel2_title: "Shadow Workers of Capital and Power",
    novel2_desc: "🏆 2025 Super Rookie Hackathon National University Webtoon Champion Award-winning Web Novel",
    novel3_title: "Time's Pharmacy Episode",
    novel3_desc: "2025 Jeju Content Agency Webtoon Support Project Selection \"Time's Pharmacy\" Episode",
    
    // Design Cards
    design1_title: "Solar-powered Hygiene Bollard Lighting System",
    design1_desc: "🏆 2025 Gyeonggi-do Public Design Competition Silver Award",
    design2_title: "Dolphin Observatory",
    design2_desc: "🏆 2025 Jeju Outdoor Advertising Competition Special Selection",
    design3_title: "Silver Safe Mat Network System",
    design3_desc: "SDGs Design International Awards 2025 Entry",
    
    // Character Cards
    char1_title: "Baekryeoncho Character \"Chocho\"",
    char2_title: "2024 Jeju Story Expedition Selected Local Specialty Character",
    char3_title: "Professor Character",
    
    // Video Cards
    video1_title: "Chocho and Bibi",
    video1_desc: "A heartwarming friendship story between cactus \"Chocho\" and stray cat \"Bibi\"",
    video2_title: "Red Flower of Ieodo",
    video2_desc: "2025 Jeju Global AI Film Contest Entry",
    video3_title: "Never Alone Again",
    video3_desc: "2024 Jeju Animal Shelter Documentary",
    video4_title: "Ocean Palace",
    video4_desc: "Ocean Palace Diving Point at Jeju Munseom Island",
    
    // Dashboard Cards
    dash1_title: "Pandemic Defense Innovation",
    dash1_desc: "Strategic Analysis for Strengthening Defense During Pandemic Outbreak",
    dash2_title: "Silver Safe Mat Network System",
    dash2_desc: "IoT-based elderly safety monitoring system, real-time safety status and high-risk elderly management dashboard across 17 regions nationwide",
    
    // Popup
    popup_view_button: "View Full",
    popup_episode_select: "Select an episode:",
    
    // Resume Page
    resume_title: "Anne's Resume",
    resume_subtitle: "Creative Artist & Ocean Advocate",
    resume_education: "🎓 Education",
    resume_career: "💼 Career in Animation",
    resume_teaching: "📘 Teaching Career",
    resume_creative: "🖋 Creative Work",
    resume_ai: "🤖 AI Skills",
    resume_music: "🎶 Music Creation",
    resume_awards: "🏆 Awards",
    resume_activities: "📌 Key Activities",
    resume_marine: "🌊 Marine Environment",
    resume_hobbies: "🎸 Hobbies & Personal Activities",
    resume_skills: "🛠 Skills",
    
    // Contact Page
    contact_name: "Anne Lim (임영란)",
    contact_title: "Webtoon Artist / Creative Artist",
    contact_email: "Email",
    contact_instagram: "Instagram",
    contact_website: "Website"
  },
  
  ja: {
    // トップナビゲーション
    nav_resume: "Anne's Resume",
    nav_contact: "Contact",
    
    // サイドナビゲーション
    nav_home: "ホーム",
    nav_webtoons: "ウェブトゥーン",
    nav_novels: "小説",
    nav_design: "デザイン",
    nav_characters: "キャラクター",
    nav_videos: "動画",
    nav_dashboards: "ダッシュボード",
    
    // ヒーローセクション
    hero_title: "Anne",
    hero_subtitle: "Visual Story by Anne",
    
    // アバウトセクション
    about_title: "自己紹介",
    about_text: "こんにちは。ウェブトゥーン作家でありアニメーション創作者の<strong>Anne</strong>です。<br>ウェブトゥーン創作とアニメーション、数学教育、音楽、海洋環境活動まで<br>多様な経験を物語に織り込み、感情を分かち合い、読者とつながる作品を作ります。<br>深い海のように、温かく穏やかな感情を届けるストーリーテラーになりたいです。",
    
    // セクションタイトル
    section_webtoons: "ウェブトゥーン作品",
    section_novels: "小説作品",
    section_design: "デザイン作品",
    section_characters: "キャラクターデザイン",
    section_videos: "動画作品",
    section_dashboards: "データダッシュボード",
    
    // ウェブトゥーンカード
    webtoon1_title: "時間の薬房",
    webtoon1_desc: "2025年済州コンテンツ振興院ウェブトゥーン支援事業選定作",
    webtoon2_title: "資本と権力の影の労働者たち",
    webtoon2_desc: "🏆 2025年鎮川K-Storyスーパールーキーハッカソン奨励賞",
    webtoon3_title: "First Love",
    webtoon3_desc: "2025年AIコンテンツ制作授業作品",
    webtoon4_title: "深夜コンビニ",
    webtoon4_desc: "2025年AIコンテンツ制作チームプロジェクト",
    webtoon5_title: "猫のハオ",
    webtoon5_desc: "2024年1月制作",
    webtoon6_title: "デンティスト",
    webtoon6_desc: "2024年6月制作 復讐スリラー",
    webtoon7_title: "ペクチョの数学",
    webtoon7_desc: "🏆 2024年済州コンテンツ振興院ストーリー探検隊選定作",
    webtoon8_title: "オレンジシルバータウン",
    webtoon8_desc: "2023年CJ ENM × 済州コンテンツ振興院コラボ",
    webtoon9_title: "莫逆之友",
    webtoon9_desc: "2023年8月制作 友情の物語",
    webtoon10_title: "白蓮草",
    webtoon10_desc: "2023年3月制作 - トゲのせいで友達が作れない白蓮草の物語",
    webtoon11_title: "苦悩の始まり 水不足の世界",
    webtoon11_desc: "2023年コンテスト出品作",
    webtoon12_title: "水を水と見るな",
    webtoon12_desc: "2023年コンテスト出品作",
    webtoon13_title: "務安の翼",
    webtoon13_desc: "🏆 2023年務安国際空港PRウェブトゥーン奨励賞",
    webtoon14_title: "ペクチョの電気",
    webtoon14_desc: "2023年6月制作 - 初コンテスト出品作。ペクチョキャラクターの誕生",
    
    // 小説カード
    novel1_title: "大峙洞数学講師の朝鮮時代家庭教師日誌",
    novel1_desc: "🏆 2025年鎮川K-ストーリーコンテスト奨励賞",
    novel2_title: "資本と権力の影の労働者たち",
    novel2_desc: "🏆 2025年スーパールーキーハッカソン全国大学生ウェブトゥーン最強者戦奨励賞受賞作ウェブ小説",
    novel3_title: "時間の薬房エピソード",
    novel3_desc: "2025年済州コンテンツ振興院ウェブトゥーン支援事業選定「時間の薬房」エピソード",
    
    // デザインカード
    design1_title: "太陽光衛生ボラード照明システム",
    design1_desc: "🏆 2025年京畿道公共デザインコンペティション銀賞",
    design2_title: "イルカ展望台",
    design2_desc: "🏆 2025年済州道屋外広告大会特選",
    design3_title: "シルバーセーフマットネットワークシステム",
    design3_desc: "SDGs Design International Awards 2025出品",
    
    // キャラクターカード
    char1_title: "白蓮草キャラクター「チョチョ」",
    char2_title: "2024年済州ストーリー探検隊選定特産物キャラクター",
    char3_title: "指導教授キャラクター",
    
    // 動画カード
    video1_title: "チョチョとビビ",
    video1_desc: "サボテン「チョチョ」と野良猫「ビビ」の温かい友情物語",
    video2_title: "イオドの赤い花",
    video2_desc: "2025年済州グローバルAIフィルムコンテスト出品作",
    video3_title: "二度と一人じゃない",
    video3_desc: "2024年済州動物保護センタードキュメンタリー",
    video4_title: "オーシャンパレス",
    video4_desc: "済州島ムンソムのオーシャンパレスダイビングポイント",
    
    // ダッシュボードカード
    dash1_title: "パンデミック防衛イノベーション",
    dash1_desc: "パンデミック発生時の国防力強化戦略",
    dash2_title: "シルバーセーフマットネットワークシステム",
    dash2_desc: "IoTベース独居高齢者安全モニタリングシステム、全国17地域のリアルタイム安全状況と高リスク高齢者管理ダッシュボード",
    
    // ポップアップ
    popup_view_button: "全体を見る",
    popup_episode_select: "エピソードを選択してください：",
    
    // 履歴書ページ
    resume_title: "Anne's Resume",
    resume_subtitle: "クリエイティブアーティスト＆海洋活動家",
    resume_education: "🎓 学歴",
    resume_career: "💼 アニメーション業界の経歴",
    resume_teaching: "📘 講師経歴",
    resume_creative: "🖋 創作活動",
    resume_ai: "🤖 AI活用スキル",
    resume_music: "🎶 音楽創作スキル",
    resume_awards: "🏆 受賞歴",
    resume_activities: "📌 主な活動",
    resume_marine: "🌊 海洋環境ボランティア",
    resume_hobbies: "🎸 趣味・活動",
    resume_skills: "🛠 技術スキル",
    
    // 連絡先ページ
    contact_name: "イム・ヨンラン（Anne）",
    contact_title: "ウェブトゥーンアーティスト / クリエイティブアーティスト",
    contact_email: "メール",
    contact_instagram: "Instagram",
    contact_website: "ウェブサイト"
  },
  
  zh: {
    // 顶部导航
    nav_resume: "Anne's Resume",
    nav_contact: "Contact",
    
    // 侧边导航
    nav_home: "首页",
    nav_webtoons: "网络漫画",
    nav_novels: "小说",
    nav_design: "设计",
    nav_characters: "角色",
    nav_videos: "视频",
    nav_dashboards: "仪表板",
    
    // 主页部分
    hero_title: "Anne",
    hero_subtitle: "Visual Story by Anne",
    
    // 关于部分
    about_title: "关于我",
    about_text: "你好，我是网络漫画作家和动画创作者<strong>Anne</strong>。<br>从网络漫画创作和动画到数学教育、音乐和海洋环境活动，<br>我将多样化的经验编织成故事，分享情感，与读者建立联系。<br>像深海一样，我渴望成为一个传递温暖和舒适情感的故事讲述者。",
    
    // 章节标题
    section_webtoons: "我的网络漫画",
    section_novels: "我的小说",
    section_design: "设计作品",
    section_characters: "角色设计",
    section_videos: "视频作品",
    section_dashboards: "数据仪表板",
    
    // 网络漫画卡片
    webtoon1_title: "时间的药房",
    webtoon1_desc: "2025年济州内容振兴院网络漫画支援事业选定作品",
    webtoon2_title: "资本与权力的影子劳动者",
    webtoon2_desc: "🏆 2025年镇川K-Story超级新秀黑客松鼓励奖",
    webtoon3_title: "First Love",
    webtoon3_desc: "2025年AI内容制作课程作品",
    webtoon4_title: "深夜便利店",
    webtoon4_desc: "2025年AI内容制作团队项目",
    webtoon5_title: "猫咪浩",
    webtoon5_desc: "2024年1月制作",
    webtoon6_title: "牙医",
    webtoon6_desc: "2024年6月制作 复仇惊悚片",
    webtoon7_title: "百草的数学",
    webtoon7_desc: "🏆 2024年济州内容振兴院故事探险队选定作品",
    webtoon8_title: "橙色银色小镇",
    webtoon8_desc: "2023年CJ ENM × 济州内容振兴院合作",
    webtoon9_title: "莫逆之友",
    webtoon9_desc: "2023年8月制作 友情故事",
    webtoon10_title: "白莲草",
    webtoon10_desc: "2023年3月制作 - 因刺无法交朋友的白莲草故事",
    webtoon11_title: "苦恼的开始 水资源短缺的世界",
    webtoon11_desc: "2023年比赛参赛作品",
    webtoon12_title: "不要把水当水看",
    webtoon12_desc: "2023年比赛参赛作品",
    webtoon13_title: "务安的翅膀",
    webtoon13_desc: "🏆 2023年务安国际机场宣传网络漫画奖",
    webtoon14_title: "百草的电气",
    webtoon14_desc: "2023年6月制作 - 首次比赛参赛作品。百草角色的诞生",
    
    // 小说卡片
    novel1_title: "大峙洞数学讲师的朝鲜时代家教日志",
    novel1_desc: "🏆 2025年镇川K-Story竞赛奖励奖",
    novel2_title: "资本与权力的影子劳动者",
    novel2_desc: "🏆 2025年超级新秀黑客松全国大学生网络漫画最强者战奖励奖获奖网络小说",
    novel3_title: "时间的药房剧集",
    novel3_desc: "2025年济州内容振兴院网络漫画支持项目选定「时间的药房」剧集",
    
    // 设计卡片
    design1_title: "太阳能卫生防撞柱照明系统",
    design1_desc: "🏆 2025年京畿道公共设计竞赛银奖",
    design2_title: "海豚瞭望台",
    design2_desc: "🏆 2025年济州道户外广告大赛特选",
    design3_title: "银色安全垫网络系统",
    design3_desc: "SDGs设计国际奖2025参赛作品",
    
    // 角色卡片
    char1_title: "白莲草角色「初初」",
    char2_title: "2024年济州故事探险队选定特产角色",
    char3_title: "指导教授角色",
    
    // 视频卡片
    video1_title: "初初和比比",
    video1_desc: "仙人掌「初初」与流浪猫「比比」的温馨友谊故事",
    video2_title: "离於岛的红花",
    video2_desc: "2025年济州全球AI电影竞赛参赛作品",
    video3_title: "不再孤独",
    video3_desc: "2024年济州流浪动物保护中心纪录片",
    video4_title: "海洋宫殿",
    video4_desc: "济州岛文岛的海洋宫殿潜水点",
    
    // 仪表板卡片
    dash1_title: "疫情防御创新",
    dash1_desc: "疫情发生时国防力量强化战略",
    dash2_title: "银色安全垫网络系统",
    dash2_desc: "基于IoT的独居老人安全监控系统，全国17个地区的实时安全状况和高危老人管理仪表板",
    
    // 弹窗
    popup_view_button: "查看全部",
    popup_episode_select: "选择一集：",
    
    // 简历页面
    resume_title: "Anne's Resume",
    resume_subtitle: "创意艺术家与海洋倡导者",
    resume_education: "🎓 学历",
    resume_career: "💼 动画行业经历",
    resume_teaching: "📘 教学经历",
    resume_creative: "🖋 创作活动",
    resume_ai: "🤖 AI应用技能",
    resume_music: "🎶 音乐创作技能",
    resume_awards: "🏆 获奖经历",
    resume_activities: "📌 主要活动",
    resume_marine: "🌊 海洋环境志愿服务",
    resume_hobbies: "🎸 爱好与活动",
    resume_skills: "🛠 技术技能",
    
    // 联系页面
    contact_name: "林英兰（Anne）",
    contact_title: "网络漫画艺术家 / 创意艺术家",
    contact_email: "邮箱",
    contact_instagram: "Instagram",
    contact_website: "网站"
  }
};
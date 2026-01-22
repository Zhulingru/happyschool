// ============================================
// SDGs Tech Showcase - Main Application
// ============================================

// Global State
let currentLang = 'zh';
let projects = [];
let filteredProjects = [];

// i18n Translations
const translations = {
    zh: {
        nav: {
            home: '首頁',
            projects: '學生作品',
            sdgs: 'SDGs',
            team: '授課教師'
        },
        hero: {
            title: 'SDGs 科技素養專題成果展',
            subtitle: '五組作品，五種觀點，讓家長用手機直接體驗孩子的創作',
            cta: '開始探索作品'
        },
        summary: {
            title: '課程摘要',
            short: '本課程結合 SDGs 永續發展目標與科技素養，引導學生透過 Delightex 平台創作互動式專題。學生分為五組，從不同面向探討永續議題，運用科技工具提出創新解決方案，展現對社會責任的思考與實踐能力。',
            expand: '展開閱讀更多',
            collapse: '收起',
            full: '本專題課程為期一學期，旨在培養學生的科技素養與永續發展意識。課程內容涵蓋 SDGs 目標 7（可負擔的潔淨能源）、9（產業創新與基礎設施）、10（減少不平等）、11（永續城市與社區）、12（負責任的消費與生產）等五大面向。學生透過 Delightex 互動式平台，將抽象的永續概念轉化為具體可體驗的數位作品，不僅學習程式設計與互動設計，更深入理解永續發展的內涵與實踐方式。每組作品都經過完整的設計思考流程，從問題發想、使用者研究、原型製作到最終呈現，展現學生跨領域整合能力與創新思維。'
        },
        projects: {
            title: '學生作品',
            subtitle: '點擊「學生名稱」進入作品頁面（建議用手機橫向操作）',
            sceneInfo: '數字代表學生負責的場景編號',
            experience: '開始體驗',
            details: '作品介紹'
        },
        filter: {
            all: '全部',
            sdg7: 'SDG 7',
            sdg9: 'SDG 9',
            sdg10: 'SDG 10',
            sdg11: 'SDG 11',
            sdg12: 'SDG 12'
        },
        sdgs: {
            title: 'SDGs 永續發展目標',
            '7': {
                title: '可負擔的潔淨能源',
                desc: '確保所有人都能取得可負擔、可靠、永續及現代的能源'
            },
            '9': {
                title: '產業創新與基礎設施',
                desc: '建立具有韌性的基礎設施，促進包容且永續的工業化，並加速創新'
            },
            '10': {
                title: '減少不平等',
                desc: '減少國內及國家間的不平等'
            },
            '11': {
                title: '永續城市與社區',
                desc: '使城市與人類居住具包容、安全、韌性及永續性'
            },
            '12': {
                title: '負責任的消費與生產',
                desc: '確保永續消費及生產模式'
            }
        },
        team: {
            title: '授課教師',
            qubi: {
                role: '指導教師',
                bio: '致力於科技教育與永續發展教育，引導學生運用科技工具探索社會議題，培養創新思維與實踐能力。'
            }
        },
        footer: {
            copyright: '© 2026 SDGs 科技素養專題成果展 | 版權所有',
            note: '本網站僅供教育展示用途'
        },
        modal: {
            tip: '建議用手機直向體驗，若載入較久請稍候',
            openNew: '在新分頁開啟',
            close: '關閉'
        }
    },
    en: {
        nav: {
            home: 'Home',
            projects: 'Projects',
            sdgs: 'SDGs',
            team: 'Team'
        },
        hero: {
            title: 'SDGs Tech Literacy Project Showcase',
            subtitle: 'Five projects, five perspectives, allowing parents to experience their children\'s creations directly on mobile',
            cta: 'Explore Projects'
        },
        summary: {
            title: 'Course Summary',
            short: 'This course combines SDGs sustainable development goals with tech literacy, guiding students to create interactive projects through the Delightex platform. Students are divided into five groups, exploring sustainability issues from different perspectives, using technology tools to propose innovative solutions, demonstrating their thinking and practical abilities regarding social responsibility.',
            expand: 'Read More',
            collapse: 'Collapse',
            full: 'This project course spans one semester, aiming to cultivate students\' tech literacy and sustainable development awareness. The course content covers five major aspects of SDGs: Goal 7 (Affordable and Clean Energy), 9 (Industry, Innovation and Infrastructure), 10 (Reduced Inequalities), 11 (Sustainable Cities and Communities), and 12 (Responsible Consumption and Production). Through the Delightex interactive platform, students transform abstract sustainability concepts into concrete, experienceable digital works, not only learning programming and interaction design but also deeply understanding the connotation and practice of sustainable development. Each group\'s work goes through a complete design thinking process, from problem ideation, user research, prototyping to final presentation, demonstrating students\' cross-disciplinary integration abilities and innovative thinking.'
        },
        projects: {
            title: 'Student Projects',
            subtitle: 'Click thumbnail to start experience (recommended: mobile portrait mode)',
            sceneInfo: 'The number represents the scene number that the student is responsible for',
            experience: 'Start Experience',
            details: 'Project Details'
        },
        filter: {
            all: 'All',
            sdg7: 'SDG 7',
            sdg9: 'SDG 9',
            sdg10: 'SDG 10',
            sdg11: 'SDG 11',
            sdg12: 'SDG 12'
        },
        sdgs: {
            title: 'SDGs Sustainable Development Goals',
            '7': {
                title: 'Affordable and Clean Energy',
                desc: 'Ensure access to affordable, reliable, sustainable and modern energy for all'
            },
            '9': {
                title: 'Industry, Innovation and Infrastructure',
                desc: 'Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation'
            },
            '10': {
                title: 'Reduced Inequalities',
                desc: 'Reduce inequality within and among countries'
            },
            '11': {
                title: 'Sustainable Cities and Communities',
                desc: 'Make cities and human settlements inclusive, safe, resilient and sustainable'
            },
            '12': {
                title: 'Responsible Consumption and Production',
                desc: 'Ensure sustainable consumption and production patterns'
            }
        },
        team: {
            title: 'Teaching Team',
            qubi: {
                role: 'Instructor',
                bio: 'Dedicated to technology education and sustainable development education, guiding students to use technology tools to explore social issues and cultivate innovative thinking and practical abilities.'
            }
        },
        footer: {
            copyright: '© 2024 SDGs Tech Literacy Project Showcase | All Rights Reserved',
            note: 'This website is for educational display purposes only'
        },
        modal: {
            tip: 'Recommended: mobile portrait mode. Please wait if loading takes time',
            openNew: 'Open in New Tab',
            close: 'Close'
        }
    }
};

// ============================================
// Initialization
// ============================================

document.addEventListener('DOMContentLoaded', async () => {
    await loadProjects();
    renderProjects();
    setupEventListeners();
    setupIntersectionObserver();
    loadLanguage();
});

// ============================================
// Load Projects Data
// ============================================

async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        projects = await response.json();
        filteredProjects = [...projects];
    } catch (error) {
        console.error('Failed to load projects:', error);
        // Fallback to empty array
        projects = [];
        filteredProjects = [];
    }
}

// ============================================
// Render Projects
// ============================================

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;

    grid.innerHTML = '';

    if (filteredProjects.length === 0) {
        grid.innerHTML = `<p style="text-align: center; color: var(--color-text-dim); grid-column: 1 / -1;">${currentLang === 'zh' ? '沒有符合條件的作品' : 'No projects found'}</p>`;
        return;
    }

    filteredProjects.forEach((project, index) => {
        const card = createProjectCard(project, index);
        grid.appendChild(card);
    });
}

function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const lang = currentLang;
    const title = project.title[lang] || project.title.zh;
    const summary = project.summary[lang] || project.summary.zh;
    const credits = project.credits[lang] || project.credits.zh;

    // Students list with scene numbers and individual links
    let studentsList = '';
    if (project.students && project.students.length > 0) {
        studentsList = '<div class="project-students"><h4 class="students-title">' + 
            (currentLang === 'zh' ? '學生名單' : 'Students') + '</h4><ul class="students-list">';
        project.students.forEach((student, studentIndex) => {
            // Create clickable student item that opens modal
            const studentId = `${project.id}-student-${studentIndex}`;
            studentsList += `<li class="student-item">
                <a href="#" class="student-link" data-student-id="${studentId}" data-project-id="${project.id}" data-student-index="${studentIndex}">
                    <span class="student-name">${student.name}</span>
                </a>
            </li>`;
        });
        studentsList += '</ul></div>';
    }

    card.innerHTML = `
        <div class="project-thumb">
            <img src="${project.thumb}" alt="${title}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 450%22%3E%3Crect fill=%22%232d2d2d%22 width=%22800%22 height=%22450%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23D4AF37%22 font-size=%2248%22 font-weight=%22bold%22%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E'">
        </div>
        <div class="project-content">
            ${studentsList}
            <p class="project-credits">${credits}</p>
        </div>
    `;

    // Add click handlers for student links
    const studentLinks = card.querySelectorAll('.student-link');
    studentLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = link.dataset.projectId;
            const studentIndex = parseInt(link.dataset.studentIndex);
            const project = projects.find(p => p.id === projectId);
            if (project && project.students && project.students[studentIndex]) {
                openStudentModal(project.students[studentIndex], project);
            }
        });
    });

    return card;
}

// ============================================
// Project Experience
// ============================================

function openProjectExperience(project) {
    const modal = document.getElementById('experienceModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalIframe = document.getElementById('modalIframe');
    const modalExternalLink = document.getElementById('modalExternalLink');

    if (!modal) return;

    const lang = currentLang;
    const title = project.title[lang] || project.title.zh;

    modalTitle.textContent = title;
    modalExternalLink.href = project.delightex_url;
    modalExternalLink.textContent = translations[currentLang].modal.openNew;

    // Try embed mode first, fallback to external
    if (project.mode === 'embed') {
        modalIframe.src = project.delightex_url;
        modalIframe.style.display = 'block';
    } else {
        modalIframe.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Auto-open in new tab if embed fails or mode is external
    if (project.mode === 'external') {
        setTimeout(() => {
            window.open(project.delightex_url, '_blank', 'noopener,noreferrer');
        }, 500);
    }
}

function closeModal() {
    const modal = document.getElementById('experienceModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        const iframe = document.getElementById('modalIframe');
        if (iframe) {
            iframe.src = '';
        }
    }
}

// ============================================
// Student Modal
// ============================================

function openStudentModal(student, project) {
    const modal = document.getElementById('studentModal');
    const modalTitle = document.getElementById('studentModalTitle');
    const experienceLink = document.getElementById('studentExperienceLink');
    const journeyLink = document.getElementById('studentJourneyLink');

    if (!modal) return;

    // Set modal title
    modalTitle.textContent = student.name;

    // Set experience link
    if (student.experience_url) {
        experienceLink.href = student.experience_url;
        experienceLink.style.display = 'block';
    } else {
        experienceLink.style.display = 'none';
    }

    // Set journey link
    if (student.journey_url) {
        journeyLink.href = student.journey_url;
        journeyLink.style.display = 'block';
    } else {
        journeyLink.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeStudentModal() {
    const modal = document.getElementById('studentModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ============================================
// SDG Filter
// ============================================

function setupSDGFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            const sdg = btn.dataset.sdg;
            if (sdg === 'all') {
                filteredProjects = [...projects];
            } else {
                filteredProjects = projects.filter(p => p.sdgs.includes(parseInt(sdg)));
            }

            renderProjects();
        });
    });
}

// ============================================
// Language Toggle
// ============================================

function setupLanguageToggle() {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    updateLanguage();
    saveLanguage();
}

function updateLanguage() {
    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const keys = key.split('.');
        let value = translations[currentLang];
        
        for (const k of keys) {
            value = value?.[k];
        }
        
        if (value !== undefined) {
            if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
                el.textContent = value;
            } else {
                el.textContent = value;
            }
        }
    });

    // Update lang toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'zh' ? 'EN' : '中';
    }

    // Re-render projects with new language
    renderProjects();
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLang === 'zh' ? 'zh-TW' : 'en';
}

function loadLanguage() {
    const saved = localStorage.getItem('preferredLang');
    if (saved && (saved === 'zh' || saved === 'en')) {
        currentLang = saved;
    }
    updateLanguage();
}

function saveLanguage() {
    localStorage.setItem('preferredLang', currentLang);
}

// ============================================
// Share Functionality
// ============================================

function setupShare() {
    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', sharePage);
    }
}

async function sharePage() {
    const url = window.location.href;
    const title = translations[currentLang].hero.title;
    const text = translations[currentLang].hero.subtitle;

    if (navigator.share) {
        try {
            await navigator.share({
                title: title,
                text: text,
                url: url
            });
        } catch (err) {
            if (err.name !== 'AbortError') {
                fallbackShare(url);
            }
        }
    } else {
        fallbackShare(url);
    }
}

function fallbackShare(url) {
    // Copy to clipboard
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            alert(currentLang === 'zh' ? '連結已複製到剪貼簿！' : 'Link copied to clipboard!');
        }).catch(() => {
            promptShare(url);
        });
    } else {
        promptShare(url);
    }
}

function promptShare(url) {
    const input = document.createElement('input');
    input.value = url;
    input.style.position = 'fixed';
    input.style.opacity = '0';
    document.body.appendChild(input);
    input.select();
    try {
        document.execCommand('copy');
        alert(currentLang === 'zh' ? '連結已複製到剪貼簿！' : 'Link copied to clipboard!');
    } catch (err) {
        prompt(currentLang === 'zh' ? '請複製以下連結：' : 'Please copy this link:', url);
    }
    document.body.removeChild(input);
}

// ============================================
// Accordion
// ============================================

function setupAccordion() {
    const accordionBtn = document.getElementById('accordionBtn');
    const accordionContent = document.getElementById('accordionContent');

    if (accordionBtn && accordionContent) {
        accordionBtn.addEventListener('click', () => {
            const isActive = accordionContent.classList.contains('active');
            
            if (isActive) {
                accordionContent.classList.remove('active');
                accordionBtn.classList.remove('active');
            } else {
                accordionContent.classList.add('active');
                accordionBtn.classList.add('active');
            }
        });
    }
}

// ============================================
// Smooth Scroll
// ============================================

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Intersection Observer (Scroll Animations)
// ============================================

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card, .sdg-card, .team-card').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Navbar Scroll Effect
// ============================================

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.background = 'rgba(26, 26, 26, 0.98)';
        } else {
            navbar.style.background = 'rgba(26, 26, 26, 0.95)';
        }

        lastScroll = currentScroll;
    });
}

// ============================================
// Event Listeners Setup
// ============================================

function setupEventListeners() {
    // Modal close
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on outside click
    const modal = document.getElementById('experienceModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Student modal close
    const studentModalClose = document.getElementById('studentModalClose');
    if (studentModalClose) {
        studentModalClose.addEventListener('click', closeStudentModal);
    }

    // Close modal on outside click
    const studentModal = document.getElementById('studentModal');
    if (studentModal) {
        studentModal.addEventListener('click', (e) => {
            if (e.target === studentModal) {
                closeStudentModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
            closeStudentModal();
        }
    });

    // Setup other features
    setupLanguageToggle();
    setupShare();
    setupSmoothScroll();
    setupNavbarScroll();
}

// ============================================
// Error Handling for Images
// ============================================

// Global error handler for images
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        // Already handled in HTML onerror, but can add additional handling here
    }
}, true);

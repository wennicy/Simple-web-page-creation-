// 景点数据
const attractions = [
    {
        id: 1,
        name: "庐山",
        description: "世界文化遗产，匡庐奇秀甲天下，云雾缭绕的仙境",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/30f459ed-54fb-4eb7-9f0b-913770abdc2a/image_1755140988_2_1.jpg",
        badge: "5A景区",
        rating: 4.8
    },
    {
        id: 2,
        name: "浔阳楼",
        description: "江南十大名楼之一，宋江题诗处，文学名楼",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/a7aac169-53d9-4b3f-a676-e74b1fb67292/image_1755140996_1_1.jpg",
        badge: "文化古迹",
        rating: 4.5
    },
    {
        id: 3,
        name: "九江长江大桥",
        description: "横跨长江的壮观大桥，现代工程奇迹",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/b73cb02a-4b3d-4c7c-adcf-b0c830f1dec1/image_1755141001_4_1.jpg",
        badge: "地标建筑",
        rating: 4.3
    },
    {
        id: 4,
        name: "鄱阳湖",
        description: "中国最大淡水湖，候鸟天堂，生态宝库",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/eb2c3a1c-0dc0-4219-a3b7-8f31af2b041b/image_1755141007_1_1.jpg",
        badge: "自然保护区",
        rating: 4.6
    },
    {
        id: 5,
        name: "白鹿洞书院",
        description: "中国四大书院之一，理学圣地，文化瑰宝",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/8483014f-899e-44a6-82a4-a8b06f78ebc9/image_1755140988_3_1.jpg",
        badge: "历史文化",
        rating: 4.4
    },
    {
        id: 6,
        name: "石钟山",
        description: "苏轼《石钟山记》名篇诞生地，文学胜地",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/21960793-b958-472d-bba6-60a99ac5dbaf/image_1755140996_3_1.jpg",
        badge: "文学名山",
        rating: 4.2
    },
    {
        id: 7,
        name: "龙宫洞",
        description: "地下溶洞奇观，钟乳石林立，神秘瑰丽",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/e3eeb75c-2261-4832-9aa4-f59accde09da/image_1755141001_1_1.jpg",
        badge: "地质奇观",
        rating: 4.1
    },
    {
        id: 8,
        name: "东林寺",
        description: "佛教净土宗发源地，千年古刹，佛教圣地",
        image: "https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/7dd15ad3-f350-44f3-98a8-907c4d6b3662/image_1755141007_4_1.jpg",
        badge: "宗教文化",
        rating: 4.3
    }
];

// 美食数据
const foods = [
    {
        id: 1,
        name: "庐山云雾茶",
        description: "中国十大名茶之一，香气清雅，味道甘醇",
        icon: "fas fa-leaf"
    },
    {
        id: 2,
        name: "鄱阳湖银鱼",
        description: "鄱阳湖特产，肉质鲜嫩，营养丰富",
        icon: "fas fa-fish"
    },
    {
        id: 3,
        name: "九江茶饼",
        description: "传统糕点，酥脆香甜，老少皆宜",
        icon: "fas fa-cookie-bite"
    },
    {
        id: 4,
        name: "修水哨子",
        description: "地方特色小吃，口感独特，回味无穷",
        icon: "fas fa-utensils"
    },
    {
        id: 5,
        name: "都昌豆参",
        description: "传统豆制品，营养价值高，口感醇厚",
        icon: "fas fa-seedling"
    },
    {
        id: 6,
        name: "湖口糟鱼",
        description: "传统腌制鱼类，味道鲜美，工艺独特",
        icon: "fas fa-fish"
    }
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    setupNavigation();
    setupHeroSlider();
    renderAttractions();
    renderFoods();
    setupScrollEffects();
    setupCounters();
    setupScrollProgress();
    setupLazyLoading();
}

// 设置导航
function setupNavigation() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 移动端菜单切换
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // 关闭移动端菜单
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });
}

// 设置英雄区域轮播
function setupHeroSlider() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    if (slides.length === 0) return;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // 每5秒切换一次
    setInterval(nextSlide, 5000);

    // 英雄区域按钮事件
    const exploreBtn = document.querySelector('#hero .bg-primary');
    const videoBtn = document.querySelector('#hero .border-2');

    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            document.querySelector('#attractions').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    if (videoBtn) {
        videoBtn.addEventListener('click', () => {
            // 这里可以添加视频播放逻辑
            alert('视频功能即将上线！');
        });
    }
}

// 渲染景点卡片
function renderAttractions() {
    const attractionsGrid = document.getElementById('attractions-grid');
    if (!attractionsGrid) return;

    attractionsGrid.innerHTML = '';

    attractions.forEach((attraction, index) => {
        const card = createAttractionCard(attraction, index);
        attractionsGrid.appendChild(card);
    });
}

// 创建景点卡片
function createAttractionCard(attraction, index) {
    const card = document.createElement('div');
    card.className = 'attraction-card card-hover';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${attraction.image}" alt="${attraction.name}" class="lazy-image" loading="lazy">
            <div class="card-badge">${attraction.badge}</div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="card-content">
            <h3 class="card-title">${attraction.name}</h3>
            <p class="card-description">${attraction.description}</p>
            <div class="flex items-center justify-between mt-3">
                <div class="flex items-center">
                    <div class="flex text-yellow-400">
                        ${generateStars(attraction.rating)}
                    </div>
                    <span class="ml-2 text-sm text-gray-600">${attraction.rating}</span>
                </div>
                <button class="text-primary hover:text-blue-700 transition-colors">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;

    // 添加点击事件
    card.addEventListener('click', () => {
        showAttractionDetail(attraction);
    });

    return card;
}

// 生成星级评分
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// 显示景点详情
function showAttractionDetail(attraction) {
    alert(`${attraction.name}\n\n${attraction.description}\n\n评分: ${attraction.rating}/5.0`);
}

// 渲染美食卡片
function renderFoods() {
    const foodGrid = document.getElementById('food-grid');
    if (!foodGrid) return;

    foodGrid.innerHTML = '';

    foods.forEach((food, index) => {
        const card = createFoodCard(food, index);
        foodGrid.appendChild(card);
    });
}

// 创建美食卡片
function createFoodCard(food, index) {
    const card = document.createElement('div');
    card.className = 'food-card card-hover';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
        <div class="food-content">
            <div class="food-icon">
                <i class="${food.icon}"></i>
            </div>
            <h3 class="food-title">${food.name}</h3>
            <p class="food-description">${food.description}</p>
            <button class="mt-4 bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                了解更多
            </button>
        </div>
    `;

    // 添加点击事件
    card.addEventListener('click', () => {
        showFoodDetail(food);
    });

    return card;
}

// 显示美食详情
function showFoodDetail(food) {
    alert(`${food.name}\n\n${food.description}`);
}

// 设置滚动效果
function setupScrollEffects() {
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

    // 观察所有卡片
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 设置数字计数器
function setupCounters() {
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// 数字计数动画
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// 设置滚动进度条
function setupScrollProgress() {
    // 创建滚动进度条
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-indicator';
    progressBar.innerHTML = '<div class="scroll-progress"></div>';
    document.body.appendChild(progressBar);

    const progress = progressBar.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progress.style.width = scrollPercent + '%';
    });
}

// 设置懒加载
function setupLazyLoading() {
    const images = document.querySelectorAll('.lazy-image');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// 工具函数：防抖
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 工具函数：节流
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 页面加载完成后的额外初始化
window.addEventListener('load', () => {
    // 隐藏加载动画
    const loader = document.querySelector('.loading');
    if (loader) {
        loader.style.display = 'none';
    }

    // 添加页面加载完成的类
    document.body.classList.add('loaded');
});

// 处理页面可见性变化
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        document.body.classList.add('paused');
    } else {
        // 页面显示时恢复动画
        document.body.classList.remove('paused');
    }
});

// 错误处理
window.addEventListener('error', (e) => {
    console.error('页面错误:', e.error);
});

// 导出主要函数供外部使用
export {
    initializeApp,
    renderAttractions,
    renderFoods,
    setupNavigation,
    setupHeroSlider
};
// 1. تفعيل القائمة في الجوال
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// إغلاق القائمة عند الضغط على أي رابط
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// 2. حركة ظهور العناصر عند السكرول (Intersection Observer)
const observerOptions = {
    threshold: 0.2 // العنصر يظهر عندما يكون 20% منه مرئياً
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور الأول
        }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 3. عداد الأرقام (يعمل عندما يصل المستخدم لقسم الإحصائيات)
const statsSection = document.querySelector('.impact-section');
const counters = document.querySelectorAll('.counter');
let started = false; // للتأكد من أن العداد يعمل مرة واحدة فقط

if (statsSection && counters.length > 0) {
    window.onscroll = function() {
        // التأكد من أن العنصر موجود قبل حساب الـ offsetTop
        if (window.scrollY >= statsSection.offsetTop - window.innerHeight + 200) {
            if (!started) {
                counters.forEach((counter) => startCount(counter));
            }
            started = true;
        }
    };
}

function startCount(el) {
    let goal = el.dataset.target;
    // تسريع العد للأرقام الكبيرة
    let speed = goal > 1000 ? 20 : 50; 
    
    let count = setInterval(() => {
        let current = parseInt(el.textContent);
        let increment = Math.ceil(goal / speed);
        
        if (current + increment >= goal) {
            el.textContent = goal;
            clearInterval(count);
        } else {
            el.textContent = current + increment;
        }
    }, 30); // تحديث كل 30 ملي ثانية
}

// 4. وظيفة إظهار وإخفاء تفاصيل الأخبار
function toggleNewsDetails(button) {
    const newsDetails = button.previousElementSibling;
    const card = button.closest('.news-card');
    
    if (newsDetails.style.display === 'none' || !newsDetails.style.display) {
        newsDetails.style.display = 'block';
        button.textContent = 'إغلاق';
        card.style.gap = '20px';
    } else {
        newsDetails.style.display = 'none';
        button.textContent = 'إقرأ المزيد';
    }
}

// 5. وظيفة إظهار وإخفاء تفاصيل المشاريع
function toggleProjectDetails(button) {
    const projectDetails = button.nextElementSibling;
    
    if (projectDetails.style.display === 'none' || !projectDetails.style.display) {
        projectDetails.style.display = 'block';
        button.textContent = 'إغلاق';
    } else {
        projectDetails.style.display = 'none';
        button.textContent = 'اعرف المزيد';
    }
}

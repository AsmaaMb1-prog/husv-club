// 1. تفعيل القائمة في الجوال
// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('nav');

// if (hamburger) {
//     hamburger.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     });
// }

// // إغلاق القائمة عند الضغط على أي رابط
// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', () => {
//         nav.classList.remove('active');
//     });
// });

// // 2. حركة ظهور العناصر عند السكرول (Intersection Observer)
// const observerOptions = {
//     threshold: 0.2 // العنصر يظهر عندما يكون 20% منه مرئياً
// };

// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//             observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور الأول
//         }
//     });
// }, observerOptions);

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));

// // 3. عداد الأرقام (يعمل عندما يصل المستخدم لقسم الإحصائيات)
// const statsSection = document.querySelector('.impact-section');
// const counters = document.querySelectorAll('.counter');
// let started = false; // للتأكد من أن العداد يعمل مرة واحدة فقط

// if (statsSection && counters.length > 0) {
//     window.onscroll = function() {
//         // التأكد من أن العنصر موجود قبل حساب الـ offsetTop
//         if (window.scrollY >= statsSection.offsetTop - window.innerHeight + 200) {
//             if (!started) {
//                 counters.forEach((counter) => startCount(counter));
//             }
//             started = true;
//         }
//     };
// }

// function startCount(el) {
//     let goal = el.dataset.target;
//     // تسريع العد للأرقام الكبيرة
//     let speed = goal > 1000 ? 20 : 50; 
    
//     let count = setInterval(() => {
//         let current = parseInt(el.textContent);
//         let increment = Math.ceil(goal / speed);
        
//         if (current + increment >= goal) {
//             el.textContent = goal;
//             clearInterval(count);
//         } else {
//             el.textContent = current + increment;
//         }
//     }, 30); // تحديث كل 30 ملي ثانية
// }

// // 4. وظيفة إظهار وإخفاء تفاصيل الأخبار
// function toggleNewsDetails(button) {
//     const newsDetails = button.previousElementSibling;
//     const card = button.closest('.news-card');
    
//     if (newsDetails.style.display === 'none' || !newsDetails.style.display) {
//         newsDetails.style.display = 'block';
//         button.textContent = 'إغلاق';
//         card.style.gap = '20px';
//     } else {
//         newsDetails.style.display = 'none';
//         button.textContent = 'إقرأ المزيد';
//     }
// }

// // 5. وظيفة إظهار وإخفاء تفاصيل المشاريع
// function toggleProjectDetails(button) {
//     const projectDetails = button.nextElementSibling;
    
//     if (projectDetails.style.display === 'none' || !projectDetails.style.display) {
//         projectDetails.style.display = 'block';
//         button.textContent = 'إغلاق';
//     } else {
//         projectDetails.style.display = 'none';
//         button.textContent = 'اعرف المزيد';
//     }
// }





document.addEventListener("DOMContentLoaded", function () {
    
    // ==========================================
    // 1. تفعيل القائمة في الجوال (Navigation Menu)
    // ==========================================
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
            if (nav) nav.classList.remove('active');
        });
    });

    // ==========================================
    // 2. حركة ظهور العناصر عند التمرير (Scroll Animation)
    // ==========================================
    const observerOptions = {
        threshold: 0.2 // العنصر يظهر عندما يكون 20% منه مرئياً
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // إيقاف المراقبة بعد الظهور الأول
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // ==========================================
    // 3. عداد الأرقام لقسم الإحصائيات (Counters)
    // ==========================================
    const statsSection = document.querySelector('.impact-section');
    const counters = document.querySelectorAll('.counter');
    let started = false; 

    if (statsSection && counters.length > 0) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= statsSection.offsetTop - window.innerHeight + 200) {
                if (!started) {
                    counters.forEach((counter) => startCount(counter));
                }
                started = true;
            }
        });
    }

    function startCount(el) {
        let goal = parseInt(el.dataset.target) || 0;
        let speed = goal > 1000 ? 20 : 50; 
        
        let count = setInterval(() => {
            let current = parseInt(el.textContent) || 0;
            let increment = Math.ceil(goal / speed);
            
            if (current + increment >= goal) {
                el.textContent = goal;
                clearInterval(count);
            } else {
                el.textContent = current + increment;
            }
        }, 30);
    }

    // ==========================================
    // 4 & 5. وظائف تفاصيل الأخبار والمشاريع (اعرف المزيد)
    // ==========================================
    window.toggleNewsDetails = function(button) {
        const newsDetails = button.previousElementSibling;
        const card = button.closest('.news-card');
        
        if (newsDetails.style.display === 'none' || !newsDetails.style.display) {
            newsDetails.style.display = 'block';
            button.textContent = 'إغلاق';
            if (card) card.style.gap = '20px';
        } else {
            newsDetails.style.display = 'none';
            button.textContent = 'إقرأ المزيد';
        }
    };

    window.toggleProjectDetails = function(button) {
        const projectDetails = button.nextElementSibling;
        
        if (projectDetails.style.display === 'none' || !projectDetails.style.display) {
            projectDetails.style.display = 'block';
            button.textContent = 'إغلاق';
        } else {
            projectDetails.style.display = 'none';
            button.textContent = 'اعرف المزيد';
        }
    };

    // ==========================================
    // 6. السلايدر الموحد مع الدوران اللانهائي والانتقال التلقائي
    // ==========================================
    const track = document.getElementById('projectsTrack');
    if (!track) return; 

    const cards = Array.from(track.children);
    const prevBtn = document.getElementById('prevArrow');
    const nextBtn = document.getElementById('nextArrow');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreWrapper = loadMoreBtn ? loadMoreBtn.closest('.load-more-wrapper') : null;

    const MOBILE_BREAKPOINT = 768; 
    const INITIAL_VISIBLE_ON_MOBILE = 3; 

    let cardsPerView = 3;
    let currentPage = 0;
    let autoplayInterval = null;

    function getCardsPerView() {
        const w = window.innerWidth;
        if (w <= MOBILE_BREAKPOINT) return 1; // جوال
        if (w <= 1024) return 2; // تابلت
        return 3; // شاشات كبيرة
    }

    function totalPages() {
        return Math.max(1, Math.ceil(cards.length / cardsPerView));
    }

    // دالة التنقل مع ميزة الدوران اللانهائي (Infinite Loop)
    function moveToPage(pageIndex) {
        const total = totalPages();
        
        if (pageIndex >= total) {
            currentPage = 0; // العودة للبداية إذا تجاوزنا النهاية
        } else if (pageIndex < 0) {
            currentPage = total - 1; // الذهاب للنهاية إذا رجعنا خلف البداية
        } else {
            currentPage = pageIndex;
        }

        const firstCard = cards[0];
        if (!firstCard) return;
        
        const cardWidth = firstCard.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(track).gap) || 20;
        const step = (cardWidth + gap) * cardsPerView;

        track.style.transform = `translateX(${currentPage * step}px)`;
    }

    // دالة بدء الحركة التلقائية (Autoplay كل 5 ثوانٍ)
    function startAutoplay() {
        stopAutoplay(); // تنظيف أي مؤقت سابق أولاً
        if (window.innerWidth > MOBILE_BREAKPOINT) {
            autoplayInterval = setInterval(() => {
                moveToPage(currentPage + 1);
            }, 5000); 
        }
    }

    // دالة إيقاف الحركة التلقائية
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }

    function setupDesktopMode() {
        track.style.transform = 'translateX(0)';
        cards.forEach(card => { 
            card.style.display = 'flex'; 
        });
        if (loadMoreWrapper) loadMoreWrapper.style.display = 'none';
        currentPage = 0;
        startAutoplay(); // تشغيل الانتقال التلقائي في الديسكتوب والتابلت
    }

    function setupMobileMode() {
        stopAutoplay(); // إيقاف الانتقال التلقائي في الجوال ليعتمد على زر "عرض المزيد"
        track.style.transform = 'translateX(0)';
        cards.forEach((card, i) => {
            card.style.display = i < INITIAL_VISIBLE_ON_MOBILE ? 'flex' : 'none';
        });
        if (loadMoreWrapper) loadMoreWrapper.style.display = 'flex';
        if (loadMoreBtn) {
            loadMoreBtn.textContent = 'عرض المزيد من الأعمال';
            loadMoreBtn.dataset.expanded = 'false';
        }
    }

    function applyLayout() {
        cardsPerView = getCardsPerView();
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            setupMobileMode();
        } else {
            setupDesktopMode();
        }
    }

    // أحداث أزرار التنقل
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            moveToPage(currentPage - 1);
            startAutoplay(); // إعادة تشغيل العداد لتجنب التداخل مع النقرة اليدوية
        });
    }
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            moveToPage(currentPage + 1);
            startAutoplay(); 
        });
    }

    // إيقاف مؤقت عند تمرير الماوس فوق السلايدر لراحة المستخدم أثناء القراءة
    track.addEventListener('mouseenter', stopAutoplay);
    track.addEventListener('mouseleave', startAutoplay);

    // مستمع الأحداث لزر عرض المزيد في الجوال
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            const expanded = loadMoreBtn.dataset.expanded === 'true';

            if (!expanded) {
                cards.forEach(card => { card.style.display = 'flex'; });
                loadMoreBtn.textContent = 'عرض أقل';
                loadMoreBtn.dataset.expanded = 'true';
            } else {
                cards.forEach((card, i) => {
                    if (i >= INITIAL_VISIBLE_ON_MOBILE) card.style.display = 'none';
                });
                loadMoreBtn.textContent = 'عرض المزيد من الأعمال';
                loadMoreBtn.dataset.expanded = 'false';

                const activitiesSection = document.getElementById('activities');
                if (activitiesSection) {
                    activitiesSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // التشغيل الأولي للتهيئة
    applyLayout();

    // مراقبة تغيير حجم الشاشة بمرونة
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(applyLayout, 150);
    });
});


/* ================================================================
   حصادي - عرض إنجازات المتطوع عبر رقم القيد
   طريقة الدمج في موقع النادي (قبل إغلاق </body>):

   <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
   <script src="hasadi.js"></script>

   وأضف زرًا في أي مكان بالصفحة (مثلاً داخل شريط التنقل):
   <a href="#" id="hasadi-btn">حصادي</a>
   ================================================================ */

(function () {
  // 1) عدّل هذين السطرين ببيانات مشروعك في Supabase (Settings > API)
  const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co';
  const SUPABASE_ANON_KEY = 'YOUR-ANON-PUBLIC-KEY';

  const { createClient } = supabase;
  const db = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // 2) حقن التنسيقات (عدّل الألوان لتطابق هوية موقعكم)
  const style = document.createElement('style');
  style.textContent = `
    .hasadi-overlay{position:fixed;inset:0;background:rgba(15,25,20,.55);display:none;align-items:center;justify-content:center;z-index:9999;padding:20px;}
    .hasadi-overlay.open{display:flex;}
    .hasadi-modal{background:#fff;border-radius:14px;max-width:480px;width:100%;max-height:85vh;overflow-y:auto;padding:28px;direction:rtl;font-family:inherit;box-shadow:0 20px 50px rgba(0,0,0,.25);position:relative;}
    .hasadi-close{position:absolute;top:14px;left:14px;background:none;border:none;font-size:22px;cursor:pointer;color:#666;line-height:1;}
    .hasadi-modal h2{margin:0 0 6px;font-size:20px;color:#0f6e56;}
    .hasadi-modal p.hasadi-sub{margin:0 0 18px;color:#666;font-size:14px;}
    .hasadi-field{margin-bottom:14px;}
    .hasadi-field label{display:block;margin-bottom:6px;font-size:14px;color:#333;}
    .hasadi-field input{width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;font-size:14px;box-sizing:border-box;}
    .hasadi-submit{width:100%;padding:12px;background:#0f6e56;color:#fff;border:none;border-radius:8px;font-size:15px;cursor:pointer;margin-top:6px;}
    .hasadi-submit:disabled{opacity:.6;cursor:default;}
    .hasadi-msg{margin-top:14px;font-size:14px;padding:10px 12px;border-radius:8px;}
    .hasadi-msg.error{background:#fdeceb;color:#a32d2d;}
    .hasadi-results{margin-top:6px;}
    .hasadi-stats{display:flex;gap:10px;margin-bottom:18px;}
    .hasadi-stat{flex:1;background:#eaf3ee;border-radius:10px;padding:12px 8px;text-align:center;}
    .hasadi-stat b{display:block;font-size:22px;color:#0f6e56;}
    .hasadi-stat span{font-size:12px;color:#555;}
    .hasadi-section-title{font-size:15px;font-weight:600;margin:16px 0 8px;color:#222;}
    .hasadi-item{border:1px solid #eee;border-radius:8px;padding:10px 12px;margin-bottom:8px;font-size:13px;line-height:1.6;}
    .hasadi-item b{display:block;font-size:14px;margin-bottom:2px;}
    .hasadi-item a{color:#0f6e56;text-decoration:underline;}
    .hasadi-empty{font-size:13px;color:#888;margin:0 0 10px;}
  `;
  document.head.appendChild(style);

  // 3) حقن الـ HTML الخاص بالنافذة المنبثقة
  const overlay = document.createElement('div');
  overlay.className = 'hasadi-overlay';
  overlay.innerHTML = `
    <div class="hasadi-modal" role="dialog" aria-modal="true" aria-label="حصادي">
      <button type="button" class="hasadi-close" aria-label="إغلاق">&times;</button>
      <h2>حصادي</h2>
      <p class="hasadi-sub">أدخل رقم قيدك واسمك الكامل كما هو مسجل لدى النادي لعرض ساعاتك وشهاداتك</p>
      <form id="hasadi-form">
        <div class="hasadi-field">
          <label for="hasadi-reg">رقم القيد</label>
          <input type="text" id="hasadi-reg" required autocomplete="off">
        </div>
        <div class="hasadi-field">
          <label for="hasadi-name">الاسم الكامل</label>
          <input type="text" id="hasadi-name" required autocomplete="off">
        </div>
        <button type="submit" class="hasadi-submit">عرض حصادي</button>
      </form>
      <div id="hasadi-output"></div>
    </div>
  `;
  document.body.appendChild(overlay);

  const form = overlay.querySelector('#hasadi-form');
  const output = overlay.querySelector('#hasadi-output');
  const submitBtn = overlay.querySelector('.hasadi-submit');

  function openModal() {
    overlay.classList.add('open');
    output.innerHTML = '';
    form.reset();
    form.style.display = 'block';
  }
  function closeModal() {
    overlay.classList.remove('open');
  }

  overlay.querySelector('.hasadi-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  // أي عنصر بمعرّف hasadi-btn أو بالكلاس hasadi-trigger يفتح النافذة
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('#hasadi-btn, .hasadi-trigger');
    if (trigger) {
      e.preventDefault();
      openModal();
    }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const reg = overlay.querySelector('#hasadi-reg').value.trim();
    const name = overlay.querySelector('#hasadi-name').value.trim();
    if (!reg || !name) return;

    submitBtn.disabled = true;
    submitBtn.textContent = 'جاري البحث...';
    output.innerHTML = '';

    const { data, error } = await db.rpc('get_hasadi', {
      p_registration_number: reg,
      p_full_name: name
    });

    submitBtn.disabled = false;
    submitBtn.textContent = 'عرض حصادي';

    if (error) {
      output.innerHTML = `<div class="hasadi-msg error">حدث خطأ تقني، حاول مرة أخرى لاحقًا</div>`;
      console.error(error);
      return;
    }

    if (!data.matched) {
      output.innerHTML = `<div class="hasadi-msg error">${data.message}</div>`;
      return;
    }

    form.style.display = 'none';
    renderResults(data);
  });

  function renderResults(data) {
    const s = data.summary;
    let html = `
      <div class="hasadi-results">
        <div class="hasadi-stats">
          <div class="hasadi-stat"><b>${s.total_hours}</b><span>ساعة تطوعية</span></div>
          <div class="hasadi-stat"><b>${s.total_initiatives}</b><span>مبادرة</span></div>
          <div class="hasadi-stat"><b>${s.total_certificates}</b><span>شهادة</span></div>
        </div>
    `;

    html += `<div class="hasadi-section-title">مبادراتك</div>`;
    if (data.initiatives.length === 0) {
      html += `<p class="hasadi-empty">لا توجد مشاركات مسجلة بعد</p>`;
    } else {
      data.initiatives.forEach(i => {
        html += `<div class="hasadi-item"><b>${i.initiative_name}</b>${i.category ? i.category + ' · ' : ''}${i.role} · ${i.status} · ${i.hours} ساعة</div>`;
      });
    }

    html += `<div class="hasadi-section-title">شهاداتك</div>`;
    if (data.certificates.length === 0) {
      html += `<p class="hasadi-empty">لا توجد شهادات مصدرة بعد</p>`;
    } else {
      data.certificates.forEach(c => {
        const link = c.file_path ? `<br><a href="${c.file_path}" target="_blank" rel="noopener">تحميل الشهادة</a>` : '';
        html += `<div class="hasadi-item"><b>${c.certificate_type}${c.initiative_name ? ' - ' + c.initiative_name : ''}</b>رقم الشهادة: ${c.certificate_number} · ${c.issue_date}${link}</div>`;
      });
    }

    if (data.achievements.length > 0) {
      html += `<div class="hasadi-section-title">إنجازاتك</div>`;
      data.achievements.forEach(a => {
        html += `<div class="hasadi-item"><b>${a.title}</b>${a.description || ''}</div>`;
      });
    }

    html += `</div>`;
    output.innerHTML = html;
  }
})();


/* هنا تبدأ الإضافة الجديدة الجميلة في حصادي كشكل نبتة لطيفة */
document.addEventListener('DOMContentLoaded', () => {
  const hasadi = document.querySelector('.hasadi'); // بالـ class مش بالـ id
  if (!hasadi) return;

  hasadi.addEventListener('click', () => {
    hasadi.classList.toggle('is-active');
    hasadi.classList.remove('is-pulsing');
    void hasadi.offsetWidth;
    hasadi.classList.add('is-pulsing');
  });

  hasadi.addEventListener('animationend', () => {
    hasadi.classList.remove('is-pulsing');
  });
});
// هنا تنتهي الإضافة الجديدة الجميلة في حصادي كشكل نبتة لطيفة 

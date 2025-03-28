// انتظر حتى يتم تحميل المستند بالكامل
document.addEventListener('DOMContentLoaded', function() {
    // تنعيم الانتقال عند النقر على روابط القائمة
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // إزالة الفئة النشطة من جميع الروابط
            navLinks.forEach(item => item.classList.remove('active'));
            
            // إضافة الفئة النشطة إلى الرابط المنقور عليه
            this.classList.add('active');
            
            // التمرير السلس إلى القسم المستهدف إذا كان موجوداً
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // معالجة تقديم نموذج الاتصال
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // جمع بيانات النموذج
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // هنا يمكنك إضافة أي منطق للتحقق من صحة النموذج
            
            // عرض رسالة نجاح مؤقتة (في المشروع الحقيقي يتم إرسال البيانات للخادم)
            alert(`شكراً ${name} على رسالتك! سنتواصل معك قريباً على البريد ${email}.`);
            
            // إعادة تعيين النموذج
            this.reset();
        });
    }
    
    // إضافة تأثير التمرير للعناصر
    const animateOnScroll = function() {
        const featureCards = document.querySelectorAll('.feature-card');
        
        featureCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (cardTop < windowHeight - 100) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // تعيين التنسيق الأولي لبطاقات الميزات
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // تشغيل التنسيق عند التمرير
    window.addEventListener('scroll', animateOnScroll);
    
    // تشغيل التنسيق مرة واحدة عند تحميل الصفحة
    animateOnScroll();
    
    // تفاعل زر "اكتشف المزيد"
    const exploreBtn = document.querySelector('.hero .btn');
    
    if (exploreBtn) {
        exploreBtn.addEventListener('click', function() {
            const featuresSection = document.querySelector('.features');
            
            if (featuresSection) {
                window.scrollTo({
                    top: featuresSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    }
}); 
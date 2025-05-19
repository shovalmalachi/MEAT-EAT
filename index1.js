// פונקציה לגלילת תפריט בקטגוריית הקינוחים
function scrollMenu(button, direction) {
    const scrollWrapper = button.parentElement.querySelector('.menu-scroll-wrapper');
    const scrollAmount = 300;
    
    if (direction === 'left') {
      scrollWrapper.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      scrollWrapper.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
  
  // פונקציה להוספת אפקט מעבר כשגוללים את העמוד
  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    // בדיקה אם האלמנט נראה בחלון הצפייה
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    
    // פונקציה להוספת אנימציה לאלמנטים שנראים במסך
    function animateOnScroll() {
      menuItems.forEach(item => {
        if (isElementInViewport(item)) {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }
      });
    }
    
    // הגדרת סגנון התחלתי לפריטי התפריט
    menuItems.forEach(item => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // הפעלת האנימציה בטעינה ובגלילה
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // קוד JavaScript עבור הגלריה - פתיחת תמונות בגדול
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').getAttribute('src');
        const imgAlt = this.querySelector('img').getAttribute('alt');
        
        // יצירת מודאל לתצוגת התמונה
        const modal = document.createElement('div');
        modal.classList.add('gallery-modal');
        
        // יצירת תוכן המודאל
        modal.innerHTML = `
          <div class="gallery-modal-content">
            <span class="gallery-close">&times;</span>
            <img src="${imgSrc}" alt="${imgAlt}">
            <div class="gallery-caption">${imgAlt}</div>
          </div>
        `;
        
        // הוספת המודאל לעמוד
        document.body.appendChild(modal);
        
        // הצגת המודאל
        setTimeout(() => {
          modal.style.opacity = '1';
        }, 10);
        
        // סגירת המודאל בלחיצה על X
        const closeBtn = modal.querySelector('.gallery-close');
        closeBtn.addEventListener('click', () => {
          modal.style.opacity = '0';
          setTimeout(() => {
            document.body.removeChild(modal);
          }, 300);
        });
        
        // סגירת המודאל בלחיצה מחוץ לתמונה
        modal.addEventListener('click', function(e) {
          if (e.target === modal) {
            modal.style.opacity = '0';
            setTimeout(() => {
              document.body.removeChild(modal);
            }, 300);
          }
        });
      });
    });
  }); 
//轮播图
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('petCarousel');
    const indicators = document.querySelectorAll('.carousel-indicators-custom button');
    
    const carouselInstance = new bootstrap.Carousel(carousel, {
        wrap: true
    });
    
    carousel.addEventListener('slid.bs.carousel', function(event) {
        const activeIndex = event.to;
        updateIndicators(activeIndex);
        updateSlidePositions();
    });
    
    indicators.forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-bs-slide-to'));
            carouselInstance.to(index);
            updateIndicators(index);
        });
    });
    
    function updateIndicators(activeIndex) {
        indicators.forEach((button, index) => {
            if (index === activeIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }
    
    function updateSlidePositions() {
        const items = carousel.querySelectorAll('.carousel-item');
        const activeIndex = Array.from(items).findIndex(item => item.classList.contains('active'));
        
        items.forEach((item, index) => {
            item.classList.remove('carousel-item-prev', 'carousel-item-next');
            
            if (index === (activeIndex - 1 + items.length) % items.length) {
                item.classList.add('carousel-item-prev');
            } else if (index === (activeIndex + 1) % items.length) {
                item.classList.add('carousel-item-next');
            }
        });
    }
    
    updateSlidePositions();
    updateIndicators(0);
});

//侧边导航栏
document.querySelectorAll('.sidebar .nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (!this.getAttribute('href') || this.getAttribute('href') === '#') {
            e.preventDefault();
        }
        
        document.querySelectorAll('.sidebar .nav-link').forEach(item => {
            item.classList.remove('active');
        });

        this.classList.add('active');
        
        const newTitle = this.getAttribute('data-title');
        document.getElementById('siteTitle').textContent = newTitle;
    });
});

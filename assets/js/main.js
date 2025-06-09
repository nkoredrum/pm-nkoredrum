// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-navigation');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
        menuToggle.setAttribute('aria-expanded', !expanded);
        mainNav.setAttribute('aria-expanded', !expanded);
    });
}

// Back to top button
const backToTop = document.createElement('button');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<svg viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Lazy loading images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

lazyImages.forEach(img => imageObserver.observe(img));

// Add class to header when scrolling
const header = document.querySelector('.site-header');
if (header) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('site-header--scrolled');
            return;
        }
        
        if (currentScroll > lastScroll) {
            // Scrolling down
            header.classList.remove('site-header--scrolled');
        } else {
            // Scrolling up
            header.classList.add('site-header--scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// Initialize Disqus comments
function disqusConfig() {
    this.page.url = window.location.href;
    this.page.identifier = window.location.pathname;
}

function loadDisqus() {
    const disqus = document.querySelector('#disqus_thread');
    if (disqus) {
        const script = document.createElement('script');
        script.src = `https://${disqus_shortname}.disqus.com/embed.js`;
        script.async = true;
        script.setAttribute('data-timestamp', +new Date());
        disqus.appendChild(script);
    }
}

// Initialize AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });
}

// Initialize clipboard functionality
if (typeof ClipboardJS !== 'undefined') {
    new ClipboardJS('.copy-code');
}

// Initialize lightbox for images
if (typeof lightGallery !== 'undefined') {
    lightGallery(document.querySelector('.post-content'), {
        selector: 'a[href$=\.jpg], a[href$=\.jpeg], a[href$=\.png], a[href$=\.gif], a[href$=\.webp]',
        counter: true,
        download: false
    });
}

// Initialize table of contents
document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.table-of-contents');
    if (toc) {
        const headings = document.querySelectorAll('.post-content h2, .post-content h3');
        
        if (headings.length > 0) {
            toc.innerHTML = '<h3>Contents</h3><nav class="toc-list"></nav>';
            const tocList = toc.querySelector('.toc-list');
            
            headings.forEach(heading => {
                const link = document.createElement('a');
                const listItem = document.createElement('li');
                
                link.href = `#${heading.id}`;
                link.textContent = heading.textContent;
                
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
        }
    }
});

// Initialize dark mode toggle
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

if (darkModeToggle) {
    const isDark = localStorage.getItem('darkMode') === 'true' || (prefersDarkScheme.matches && !localStorage.getItem('darkMode'));
    
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', !isCurrentlyDark);
    });
}

// Initialize search functionality
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 3) {
            searchResults.innerHTML = '';
            return;
        }
        
        // Replace with actual search implementation
        fetch(`/search.json?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(results => {
                displaySearchResults(results);
            });
    }, 300));
}

// Debounce function
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

// Display search results
function displaySearchResults(results) {
    searchResults.innerHTML = results.map(result => `
        <div class="search-result">
            <h3><a href="${result.url}">${result.title}</a></h3>
            <p>${result.excerpt}</p>
        </div>
    `).join('');
}

// Initialize clipboard copy functionality
if (typeof ClipboardJS !== 'undefined') {
    new ClipboardJS('.copy-code');
}

// Initialize table of contents
document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('.table-of-contents');
    if (toc) {
        const headings = document.querySelectorAll('.post-content h2, .post-content h3');
        
        if (headings.length > 0) {
            toc.innerHTML = '<h3>Contents</h3><nav class="toc-list"></nav>';
            const tocList = toc.querySelector('.toc-list');
            
            headings.forEach(heading => {
                const link = document.createElement('a');
                const listItem = document.createElement('li');
                
                link.href = `#${heading.id}`;
                link.textContent = heading.textContent;
                
                listItem.appendChild(link);
                tocList.appendChild(listItem);
            });
        }
    }
});

// Initialize dark mode toggle
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

if (darkModeToggle) {
    const isDark = localStorage.getItem('darkMode') === 'true' || (prefersDarkScheme.matches && !localStorage.getItem('darkMode'));
    
    if (isDark) {
        document.documentElement.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
        const isCurrentlyDark = document.documentElement.classList.contains('dark-mode');
        document.documentElement.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', !isCurrentlyDark);
    });
}

// Initialize search functionality
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

if (searchInput && searchResults) {
    searchInput.addEventListener('input', debounce((e) => {
        const query = e.target.value.toLowerCase();
        
        if (query.length < 3) {
            searchResults.innerHTML = '';
            return;
        }
        
        // Replace with actual search implementation
        fetch(`/search.json?q=${encodeURIComponent(query)}`)
            .then(response => response.json())
            .then(results => {
                displaySearchResults(results);
            });
    }, 300));
}

// Debounce function
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

// Display search results
function displaySearchResults(results) {
    searchResults.innerHTML = results.map(result => `
        <div class="search-result">
            <h3><a href="${result.url}">${result.title}</a></h3>
            <p>${result.excerpt}</p>
        </div>
    `).join('');
}

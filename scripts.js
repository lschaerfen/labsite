// scripts.js
window.addEventListener('DOMContentLoaded', () => {
    // Run sticky check right away
    updateStickyHeader();
});

// Re-check on resize
window.addEventListener('resize', updateStickyHeader);
window.addEventListener('scroll', updateStickyHeader);

function updateStickyHeader() {
    const topbar = document.querySelector('.topbar');
    const nav = document.querySelector('.nav-cards');
    const allHeaders = document.querySelectorAll('h1');
    const allPubs = document.querySelectorAll('.publications');

    if (!topbar || !nav) return;

    const card = nav.querySelector('.card');
    if (!card) return;

    const styles = getComputedStyle(nav);
    const gap = parseFloat(styles.gap || '0');
    const rowHeight = card.offsetHeight + gap;
    const maxHeightFor1Row = rowHeight + 1; // small buffer

    if (nav.offsetHeight > maxHeightFor1Row) {
        topbar.classList.remove('sticky-enabled');
        allHeaders.forEach(h => h.classList.add('center-enabled'));
        allPubs.forEach(p => p.classList.add('center-enabled'));
    } else {
        topbar.classList.add('sticky-enabled');
        allHeaders.forEach(h => h.classList.remove('center-enabled'));
        allPubs.forEach(p => p.classList.remove('center-enabled'));
    }

    // topbar.offsetHeight;
}

function setSafeViewportHeight() {
    const vh = (window.visualViewport?.height || window.innerHeight) * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('DOMContentLoaded', setSafeViewportHeight);
window.addEventListener('resize', setSafeViewportHeight);
window.visualViewport?.addEventListener('resize', setSafeViewportHeight);
window.visualViewport?.addEventListener('scroll', setSafeViewportHeight);
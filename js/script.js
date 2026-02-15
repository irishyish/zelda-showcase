/*
 * script.js
 *
 * Provides basic interactivity for the Project ZELDA website.  Includes a mobile navigation toggle and
 * accordion behaviour for the design binder page.  The script waits until the DOM has loaded before attaching
 * event listeners to ensure that elements are present.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Accordion functionality on binder page
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const isOpen = header.classList.contains('active');
            // Close all other open items
            accordionHeaders.forEach(h => {
                if (h !== header) {
                    h.classList.remove('active');
                    const c = h.nextElementSibling;
                    if (c) c.style.maxHeight = null;
                }
            });
            // Toggle current item
            header.classList.toggle('active');
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = null;
            }
        });
    });
});

// Start Checking Display Mode and Adding Resources Conditionally
if (window.matchMedia('(display-mode: standalone)').matches) {
    
    // Add External CSS to Head using innerHTML
    document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/fhs.app.style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css">
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
        <link rel="stylesheet" href="https://unpkg.com/zuck.js@latest/dist/zuck.min.css">
    `;

    // Add External JS to Head
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/zuck.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/nouislider@15.7.0/dist/nouislider.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/wnumb@1.2.0/wNumb.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/fhs.app.custom.js';
    // End Adding External JS to Head

    // Start Preloader Functions
    // Function to show the preloader with fade-in animation
    function fhsAppShowPreloader() {
        // Your code to show the preloader
    }

    // Function to hide the preloader with fade-out animation
    function fhsAppHidePreloader() {
        // Your code to hide the preloader
    }

    // Event listener for when a link is clicked
    document.addEventListener('click', function (event) {
        var target = event.target;

        // Check if the clicked element is an <a> tag
        if (target.tagName.toLowerCase() === 'a') {
            fhsAppShowPreloader();
        }
    });

    // Event listener for when the new page has finished loading
    window.addEventListener('load', function () {
        // Hide the preloader after the new page has fully loaded
        fhsAppHidePreloader();
    });

    // Event listener for when the page is shown (including back/forward navigation)
    window.addEventListener('pageshow', function (event) {
        // Check if the page is not from the cache (e.g., when navigating back)
        if (event.persisted) {
            // Hide the preloader
            fhsAppHidePreloader();
        }
    });

    // Event listener for when the user navigates away from the current page
    window.addEventListener('beforeunload', function () {
        // Show the preloader when the user navigates away
        fhsAppShowPreloader();
    });
    // End Preloader Functions

    document.addEventListener('DOMContentLoaded', () => {
        
        // Start Sidebar
        document.querySelector('.sidebar-target-class').innerHTML += `
            <div class="sidebar-content">
                <p>This content is always appended to the sidebar. Here's a quote: "Example quote" and an apostrophe: 'Example apostrophe'.</p>
            </div>
        `;
        // End Sidebar

        // Start Header
        document.querySelector('.header-target-class').innerHTML += `
            <div class="header-content">
                <p>This content is always appended to the header.</p>
            </div>
        `;
        // End Header

        // Start Notifications
        document.querySelector('.notification-target-class').innerHTML += `
            <div class="notification-content">
                <p>This content is always appended to notifications.</p>
            </div>
        `;
        // End Notifications

        // Start Bottom Navigation
        document.querySelector('.bottom-nav-target-class').innerHTML += `
            <div class="bottom-nav-content">
                <p>This content is always appended to the bottom navigation.</p>
            </div>
        `;
        // End Bottom Navigation

        // Start Script for Light/Dark Mode
        document.querySelector('body').appendChild(document.createElement('script')).textContent = `
            function modeL() {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
            }

            function modeD() {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
            }

            function toggleMode() {
                const checkbox = document.getElementById('switchDark');
                if (checkbox.checked) {
                    modeD();
                } else {
                    modeL();
                }
            }
        `;
        // End Script for Light/Dark Mode

    }); // End DOMContentLoaded Event Listener

} // End Match Media Check

document.addEventListener('DOMContentLoaded', () => {
  // Check if the display mode is standalone
  if (window.matchMedia('(display-mode: standalone)').matches) {

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

    // Start Adding External CSS to Head using innerHTML
    document.querySelector('head').innerHTML += `
      <link rel="stylesheet" href="https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/fhs.app.style.css">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css">
      <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
      <link rel="stylesheet" href="https://unpkg.com/zuck.js@latest/dist/zuck.min.css">
    `;
    // End Adding External CSS to Head

    // Start Adding External JS to Head
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/zuck.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/nouislider@15.7.0/dist/nouislider.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/wnumb@1.2.0/wNumb.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/fhs.app.custom.js';
    // End Adding External JS to Head

  } // End Match Media Check
});

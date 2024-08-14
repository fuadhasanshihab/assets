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

            <div aria-hidden='true' aria-labelledby='modalFilterLabel' class='modal -left --fullScreen modal-collectibles fade' id='mdllCollectibles' tabindex='-1'>
  <div class='modal-dialog modal-dialog-scrollable'>
    <div class='center modal-content'>
      <div class='modal-header' style='padding: 30px 0!important;'>
        <div class=''>
          <h1>Notification</h1>
          <p>- no notification</p>
        </div>
        <button aria-label='Close' class='btn btnClose' data-bs-dismiss='modal' type='button'>
        <i class='ri-close-fill'></i>
        </button>
      </div>
      <div class='modal-body p-0'>
        <div class='un-details-collectibles'>
          <!-- body -->
          <div class='bodyy centerrrrr'>
            <img alt='no-notification-yiran-removebg-preview' border='0' src='https://i.ibb.co/bRFHgTj/no-notification-yiran-removebg-preview.png' style='width:: 100%!important;'/>
          </div>
        </div>
      </div>
      <div class='modal-footer d-block border-0 pt-2' style='padding: 20px 0!important;'>
        <div class='centerrr content-modal-footer'>
          <a class='btn btn-bid-items' href='https://fuadhasanshihab.wpush.io/subscribe'>
            <p>
              Push Notifications<!--span class='size-13'>(2.3)</span-->
            </p>
            <div class='ico'>
              <i class='ri-notification-badge-line'></i>
            </div>
          </a>
          <a class='btn btn-bid-items' href='/p/subscribe.html'>
            <p>
              Email Subscription<!--span class='size-13'>(2.3)</span-->
            </p>
            <div class='ico'>
              <i class='ri-mail-line'></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
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







// preloader when link ckicked
if (window.matchMedia('(display-mode: standalone)').matches) {
   // Function to show the preloader with fade-in animation
   function fhsAppShowPreloader() {
      var preloader = document.querySelector('.fhs-app-preloader');
      preloader.style.display = 'flex';
      setTimeout(function () {
         preloader.classList.add('show');
      }, 10); // small delay to ensure transition

      // Automatically hide preloader after 10 seconds
      setTimeout(function () {
         fhsAppHidePreloader();
      }, 10000); // 10 seconds timeout
   }

   // Function to hide the preloader with fade-out animation
   function fhsAppHidePreloader() {
      var preloader = document.querySelector('.fhs-app-preloader');
      preloader.classList.remove('show');
      setTimeout(function () {
         preloader.style.display = 'none';
      }, 300); // wait for transition to complete before hiding
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
}

// Start Checking Display Mode and Adding Resources Conditionally
if (window.matchMedia('(display-mode: standalone)').matches) {
    
    // Add External CSS to Head using innerHTML
    document.querySelector('head').innerHTML += `
        <link rel="stylesheet" href="https://fuadhasanshihab.github.io/assets/pwa/styles/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css">
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
        <link rel="stylesheet" href="https://unpkg.com/zuck.js@latest/dist/zuck.min.css">
    `;

    // Add External JS to Head
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://fuadhasanshihab.github.io/assets/pwa/scripts/zuck.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/nouislider@15.7.0/dist/nouislider.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/wnumb@1.2.0/wNumb.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js';
    document.querySelector('head').appendChild(document.createElement('script')).src = 'https://fuadhasanshihab.github.io/assets/pwa/scripts/app.js';
    // End Adding External JS to Head

    // Start Preloader Functions
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
    // End Preloader Functions

    document.addEventListener('DOMContentLoaded', () => {
        
        // Start Sidebar
        document.querySelector('.sidebar-html-class').innerHTML += `

<div aria-hidden='true' aria-labelledby='exampleModalLabel' class='modal sidebarMenu -left fade' id='mdllSidebar-connected' tabindex='-1'>
   <div class='modal-dialog modal-dialog-scrollable'>
      <div class='modal-content'>
         <div class='modal-header d-block pb-1'>
            <div class='un-user-profile'>
               <div class='hidden image_user'>
                  <!--picture>
                     <source srcset='images/avatar/11.webp' type='image/webp'/>
                     <img alt='image' src='images/avatar/11.jpg'/>
                     </picture-->
               </div>
               <div class='text-user'>
                  <h3>Fuad Hasan Shihab</h3>
                  <p>V0.1</p>
               </div>
            </div>
            <button aria-label='Close' class='btn btnClose' data-bs-dismiss='modal' type='button'>
            <i class='ri-close-fill'></i>
            </button>
            <!-- cover-balance -->
            <div class='cover-balance'>
               <div class='un-balance'>
                  <div class='content-balance'>
                     <div class='head-balance'>
                        <h4>Account</h4>
                        <a class='btn link-addBalance'>
                           <!--i class='ri-account-circle-line'/-->
                           <img alt='Profile Image' class='fhs-profile-img-2' src='https://fuadhasanshihab.github.io/assets/images/appUser.svg' style='border-radius:50%!important;'/> 
                        </a>
                     </div>
                     <p class='no-balance'>Dashboard</p>
                  </div>
               </div>
               <a class='btn btn-sm-size bg-white text-dark rounded-pill' href='/p/account.html'>
               View
               </a>
            </div>
         </div>
         <div class='modal-body'>
            <ul class='nav flex-column -active-links'>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app.html'>
                     <div class='icon_current'>
                        <i class='ri-home-5-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-home-5-fill'></i>
                     </div>
                     <span class='title_link'>Home</span>
                     <!--span class='xs-badge'>8</span-->
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app-resources.html'>
                     <div class='icon_current'>
                        <i class='ri-store-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-store-fill'></i>
                     </div>
                     <span class='title_link'>Resources</span>
                     <!--div class='badge-circle'>
                        <span class='doted_item'/>
                        </div-->
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app-tools.html'>
                     <div class='icon_current'>
                        <i class='ri-tools-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-tools-fill'></i>
                     </div>
                     <span class='title_link'>Tools</span>
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app-tutorial.html'>
                     <div class='icon_current'>
                        <i class='ri-movie-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-movie-fill'></i>
                     </div>
                     <span class='title_link'>Tutorial</span>
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app-blogs.html'>
                     <div class='icon_current'>
                        <i class='ri-article-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-article-fill'></i>
                     </div>
                     <span class='title_link'>Blog</span>
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/2024/07/community.html'>
                     <div class='icon_current'>
                        <i class='ri-group-2-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-group-2-fill'></i>
                     </div>
                     <span class='title_link'>Community</span>
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/2023/10/qna.html'>
                     <div class='icon_current'>
                        <i class='ri-question-answer-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-question-answer-fill'></i>
                     </div>
                     <span class='title_link'>Forum</span>
                  </a>
               </li>
               <label class='title__label'>Other</label>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app-settings.html'>
                     <div class='icon_current'>
                        <i class='ri-settings-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-settings-fill'></i>
                     </div>
                     <span class='title_link'>Settings</span>
                  </a>
               </li>
               <li class='nav-item'>
                  <a class='nav-link' href='/p/app-contact.html'>
                     <div class='icon_current'>
                        <i class='ri-questionnaire-line'></i>
                     </div>
                     <div class='icon_active'>
                        <i class='ri-questionnaire-fill'></i>
                     </div>
                     <span class='title_link'>Help</span>
                  </a>
               </li>
               <!--li class='nav-item'>
                  <a class='nav-link' href='/p/app-about.html'>
                      <div class='icon_current'>
                          <i class='ri-file-info-line'/>
                      </div>
                      <div class='icon_active'>
                          <i class='ri-file-info-fill'/>
                      </div>
                      <span class='title_link'>About</span>
                  </a>
                  </li-->                        
            </ul>
         </div>
         <div class='modal-footer'>
            <div class='isTranss'> <div class='transW'><div class='transP'> <div class='googleTrans' id='_google_translator_element'/> </div></div> </div></div>
            <div class='em_darkMode_menu'>
               <label class='text' for='switchDark'>
                  <h3>Dark Mode</h3>
                  <p>Browsing in night mode</p>
               </label>
               <!--label class='switch_toggle toggle_lg theme-switch' for='switchDark'>
                  <input aria-describedby='switchDark' class='switchDarkMode theme-switch' id='switchDark' type='checkbox'/>
                  <span class='handle'/>
                  </label-->
               <label class='switch_toggle toggle_lg theme-switch' for='switchDark'>
               <input aria-describedby='switchDark' class='switchDarkMode theme-switch' id='switchDark' onclick='toggleMode()' type='checkbox'/>
               <span class='handle'/>
               </label>
            </div>
         </div>
      </div>
   </div>
</div>

        `;
        // End Sidebar

        // Start Header
        // End Header

        // Start Notifications
        document.querySelector('.notification-html-class').innerHTML += `

<div aria-hidden='true' aria-labelledby='modalFilterLabel' class='modal -left --fullScreen modal-collectibles fade' id='mdllCollectibles' tabindex='-1'>
  <div class='modal-dialog modal-dialog-scrollable'>
    <div class='centerr modal-content' style='padding-left:7.5%!important;padding-right:7.5%!important'>
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
            <img alt='no-notification' border='0' src='https://i.ibb.co/bRFHgTj/no-notification-yiran-removebg-preview.png' style='width: 100%!important;'/>
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

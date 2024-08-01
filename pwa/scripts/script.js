// 2024 Fuad Hasan Shihab

function checkFhsAppMode() {
  if (window.matchMedia('(display-mode: standalone)').matches) {
    // Dynamically add CSS
    const cssLinks = [
      'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/fhs.app.style.css',
      'https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css',
      'https://unpkg.com/swiper/swiper-bundle.min.css',
      'https://unpkg.com/zuck.js@latest/dist/zuck.min.css'
    ];
    cssLinks.forEach(link => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = link;
      document.head.appendChild(linkElement);
    });

    // Dynamically add JS
    const jsScripts = [
      'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/zuck.min.js',
      'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js',
      'https://unpkg.com/swiper/swiper-bundle.min.js',
      'https://cdn.jsdelivr.net/npm/nouislider@15.7.0/dist/nouislider.min.js',
      'https://cdn.jsdelivr.net/npm/wnumb@1.2.0/wNumb.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js',
      'https://cdn.statically.io/gist/fuadhasanshihab/352bd105cf37a0afc655ffcd8f236baa/raw/925bfacb465c9d129437921541c1897020890a31/fhs.app.custom.js'
    ];
    jsScripts.forEach(src => {
      const scriptElement = document.createElement('script');
      scriptElement.src = src;
      document.head.appendChild(scriptElement);
    });

    // Uncomment the following lines when needed in the future
    const fhsAppContent = `
    <div style="height:100vh!important;background:red;">dhejududududjdhdhhdufjfjfjf</div>
    `;
    document.querySelector('body').insertAdjacentHTML('afterbegin', fhsAppContent);

  }
}
// Check FHS-app mode on load
checkFhsAppMode();


// adding translate except settings
document.addEventListener('DOMContentLoaded', (event) => {
  // Define the URL of the page where the script should be blocked
  const blockedPageUrl = '/p/app-settings.html'; // Change this to the path of your specific page

  // Check if the current page is the one where the script should be blocked
  if (window.location.pathname === blockedPageUrl) {
    return; // Exit the script early to prevent it from executing
  }

  function insertFhsAppContent() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
      const fhsAppContent = `
                <li class='isTranss'> 
                    <div class='transW'>
                        <div class='transP'> 
                            <div class='googleTrans' id='_google_translator_element'></div> 
                        </div> 
                    </div>
                </li>
            `;

      const modalFooter = document.querySelector('.modal-footer');
      if (modalFooter) {
        modalFooter.insertAdjacentHTML('afterbegin', fhsAppContent);
      }
    }
  }
  // Insert FHS app content on load
  insertFhsAppContent();
});


// preloader when link ckicked
// Check if in standalone mode ( added to home screen)
if (window.matchMedia('(display-mode: standalone)').matches) {
  // Function to show the preloader with fade-in animation
  function fhsAppShowPreloader() {
    var preloader = document.querySelector('.fhs-app-preloader');
    preloader.style.display = 'flex'; // display as flex container
    setTimeout(function () {
      preloader.classList.add('show'); // add 'show' class to apply opacity transition
    }, 10); // small delay to ensure transition is applied correctly

    // Automatically hide preloader after 10 seconds
    setTimeout(function () {
      fhsAppHidePreloader();
    }, 10000); // 10 seconds timeout
  }

  // Function to hide the preloader with fade-out animation
  function fhsAppHidePreloader() {
    var preloader = document.querySelector('.fhs-app-preloader');
    preloader.classList.remove('show'); // remove 'show' class to trigger opacity transition
    setTimeout(function () {
      preloader.style.display = 'none';
    }, 300); // wait for transition to complete before hiding
  }

  // Event listener for when a link is clicked
  document.addEventListener('click', function (event) {
    var target = event.target;

    // Check if the clicked element is an <a> tag
    if (target.tagName.toLowerCase() === 'a') {
      // Show the preloader immediately
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

// Function to dynamically add CSS
function addFhsAppCSS() {
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
}

// Function to dynamically add JS
function addFhsAppJS() {
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
}



// Define HTML component functions
function FhsAppHeader() {
    const headerContent = `
        <div class="fhs-app-heaxbhdder">Header Conthdudhdbdhdjdhzhhdhdueuhdjdjdhdjeidhdbjdjdhdjdidhdbjdjdiehdbduidhdueidndjdiidbeidndidbdidbdjdidbidbdidbdidbdisjsjjsjsnsjsjsjsjjsjsisiejjwjsjsjsent</div>
    `;
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', headerContent);
}

function FhsAppNotification() {
    const notificationContent = `
        <div style="height:59vh!important;" class="fhs-app-nfjjfotification">Notification Content</div>
    `;
    document.querySelector('body').insertAdjacentHTML('beforeend', notificationContent);
}

function FhsAppBottomBar() {
    const bottomBarContent = `
        <h1 class="fhs-app-bottom-bajdjdjr">Bottom Bafhjdjdjdjdjdhjdjdjdjjdjdjdhr Content</h1>
    `;
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', bottomBarContent);
}


// Function to handle FHS app components
function FhsAppComponents() {
    if (window.matchMedia('(display-mode: browser)').matches) {
        addFhsAppCSS();
        addFhsAppJS();

        // Insert HTML content
        FhsAppHeader();
        FhsAppNotification();
        FhsAppBottomBar();
    }
}

// Check FHS-app mode on load
FhsAppComponents();

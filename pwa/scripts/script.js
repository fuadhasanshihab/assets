document.addEventListener('DOMContentLoaded', () => {
    FhsAppComponents();
});

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
    console.log('CSS added');
}

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
        scriptElement.onload = () => console.log(`Script loaded: ${src}`);
        document.head.appendChild(scriptElement);
    });
}

function FhsAppComponents() {
    if (window.matchMedia('(display-mode: browser)').matches) {
        addFhsAppCSS();
        addFhsAppJS();

        // Insert HTML content
        FhsAppHeader();
        FhsAppNotification();
        FhsAppBottomBar();
    } else {
        console.log('Not in standalone mode');
    }
}

function FhsAppHeader() {
    const headerContent = `
        <header class="fhs-app-header">Header Content</header>
    `;
    const blogCont = document.querySelector('.blogCont');
    if (blogCont) {
        blogCont.insertAdjacentHTML('beforeend', headerContent);
        console.log('Header inserted');
    } else {
        console.error('.blogCont element not found');
    }
}

function FhsAppNotification() {
    const notificationContent = `
        <div class="fhs-app-notification">Notification Content</div>
    `;
    const blogCont = document.querySelector('.blogCont');
    if (blogCont) {
        blogCont.insertAdjacentHTML('beforeend', notificationContent);
        console.log('Notification inserted');
    } else {
        console.error('.blogCont element not found');
    }
}

function FhsAppBottomBar() {
    const bottomBarContent = `
        <footer class="fhs-app-bottom-bar">Bottom Bar Content</footer>
    `;
    const blogCont = document.querySelector('.blogCont');
    if (blogCont) {
        blogCont.insertAdjacentHTML('beforeend', bottomBarContent);
        console.log('Bottom Bar inserted');
    } else {
        console.error('.blogCont element not found');
    }
}

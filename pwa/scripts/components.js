function FhsAppHeader() {
    const headerContent = '<header class="fhs-app-header">Header Content</header>';
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', headerContent);
}

function FhsAppNotification() {
    const notificationContent = '<div class="fhs-app-notification">Notification Content</div>';
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', notificationContent);
}

function FhsAppBottomBar() {
    const bottomBarContent = '<footer class="fhs-app-bottom-bar">Bottom Bar Content</footer>';
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', bottomBarContent);
}

function FhsAppComponents() {
    if (window.matchMedia('(display-mode: standalone)').matches) {
        FhsAppHeader();
        FhsAppNotification();
        FhsAppBottomBar();
    }
}

// Check FHS-app mode on load
FhsAppComponents();

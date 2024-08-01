function FhsAppHeader() {
    const headerContent = '<header class="fhs-app-header">Header Content</header>';
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', headerContent);
}

function FhsAppNotification() {
    const notificationContent = '<div class="fhs-app-notification">Notification Content</div>';
    document.querySelector('.blogCont').insertAdjacentHTML('beforeend', notificationContent);
}

function FhsAppBottomBar() {
    const bottomBarContent = '
        
        <!-- ===================================
      NOTIFICATION
    ==================================== -->
   <div class='onlyStandalone' style='display:none'> 
                                  <div aria-hidden='true' aria-labelledby='modalFilterLabel' class='modal -left --fullScreen modal-collectibles fade' id='mdllCollectibles' tabindex='-1'>
        <div class='modal-dialog modal-dialog-scrollable'>
            <div class='center modal-content'>
                <div class='modal-header' style='padding: 30px 0!important;'>
                    <div class=''>
                        <h1>Notification</h1>
                        <p>- no notification</p>
                    </div>
                    <button aria-label='Close' class='btn btnClose' data-bs-dismiss='modal' type='button'>
                        <i class='ri-close-fill'/>
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
                            <p>Push Notifications<!--span class='size-13'>(2.3)</span--></p>
                            <div class='ico'>
                                <i class='ri-notification-badge-line'/>
                            </div>
                        </a>
                        <a class='btn btn-bid-items' href='/p/subscribe.html'>
                            <p>Email Subscription<!--span class='size-13'>(2.3)</span--></p>
                            <div class='ico'>
                                <i class='ri-mail-line'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>              
    
    ';
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

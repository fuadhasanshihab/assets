document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sidebar-target-class').innerHTML += `

        <footer class="un-bottom-navigation filter-blur">
            <div class="em_body_navigation border-0 -active-links">
                <div class="item_link">
                    <a href="homepage.html" class="btn btn_navLink visited active" aria-label="btnNavigation">
                        <div class="icon_current">
                            <i class="ri-home-5-line"></i>
                        </div>
                        <div class="icon_active">
                            <i class="ri-home-5-fill"></i>
                        </div>
                    </a>
                </div>
                <div class="item_link">
                    <a href="page-search-random.html" class="btn btn_navLink" aria-label="btnNavigation">
                        <div class="icon_current">
                            <i class="ri-search-2-line"></i>
                        </div>
                        <div class="icon_active">
                            <i class="ri-search-2-fill"></i>
                        </div>
                    </a>
                </div>
                <div class="item_link">
                    <button type="button" name="uploadItem" aria-label="uploadItem" class="btn btn_navLink without_active" data-bs-toggle="modal" data-bs-target="#mdllUploadItem">
                        <div class="btn btnCircle_default">
                            <i class="ri-add-line"></i>
                        </div>
                    </button>
                </div>
                <div class="item_link">
                    <a href="page-favourit-random.html" class="btn btn_navLink" aria-label="btnNavigation">
                        <div class="icon_current">
                            <i class="ri-heart-3-line"></i>
                        </div>
                        <div class="icon_active">
                            <i class="ri-heart-3-fill"></i>
                        </div>
                    </a>
                </div>
                <div class="item_link">
                    <a href="page-account.html" class="btn btn_navLink" aria-label="btnNavigation">
                        <div class="icon_current">
                            <i class="ri-user-4-line"></i>
                        </div>
                        <div class="icon_active">
                            <i class="ri-user-4-fill"></i>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    
  `;

  document.querySelector('.header-target-class').innerHTML += `
    <div class="header-content">
      <p>This content is always appended to the header.</p>
    </div>
  `;

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
            <p>
              Push Notifications<!--span class='size-13'>(2.3)</span-->
            </p>
            <div class='ico'>
              <i class='ri-notification-badge-line'/>
            </div>
          </a>
          <a class='btn btn-bid-items' href='/p/subscribe.html'>
            <p>
              Email Subscription<!--span class='size-13'>(2.3)</span-->
            </p>
            <div class='ico'>
              <i class='ri-mail-line'/>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    
  `;

  document.querySelector('.bottom-nav-target-class').innerHTML += `

<div class='hidden border-b-gradient un-bottom-navigation filter-blur' style='display:none;'>
            <div class='center em_body_navigation border-0 -active-links border-b-gradient' style='min-height:76px!important;border-radius:40px 40px 0 0!important;box-shadow: 0 0 10px rgba(0,0,0,0.01)'>
                <div class='item_link'>
                    <a aria-label='btnNavigation' class='btn btn_navLink visited' href='/p/app-resources.html'>
                        <div class='icon_current'>
                            <i class='ri-store-line'/>
                        </div>
                        <div class='icon_active'>
                            <i class='ri-store-fill'/>
                        </div>
                    </a>
                </div>
                <div class='item_link'>
                    <a aria-label='btnNavigation' class='btn btn_navLink visited' href='/p/app-tools.html'>
                        <div class='icon_current'>
                            <i class='ri-tools-line'/>
                        </div>
                        <div class='icon_active'>
                            <i class='ri-tools-fill'/>
                        </div>
                    </a>
                </div>
                <div class='item_link'>
                    <a aria-label='uploadItem' class='btn btn_navLink without_active' href='/p/app.html'>
                        <div class='btn btnCircle_default'>
                            
                          <i class='ri-home-5-fill'/>
                        </div>
                    </a>
                </div>
                <div class='item_link'>
                    <a aria-label='btnNavigation' class='btn btn_navLink visited' href='/p/app-tutorial.html'>
                        <div class='icon_current'>
                            <i class='ri-movie-line'/>
                        </div>
                        <div class='icon_active'>
                            <i class='ri-movie-fill'/>
                          
                        </div>
                    </a>
                </div>
                <div class='item_link'>
                    <a aria-label='btnNavigation' class='btn btn_navLink visited' href='/p/account.html'>
                        <div class='icon_current'>
                            <i class='ri-account-circle-line'/>
                        </div>
                        <div class='icon_active'>
                            <i class='ri-account-circle-fill'/>
                        </div>
                    </a>
                </div>
            </div>
        </div>   
    
  `;
});

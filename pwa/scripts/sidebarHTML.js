document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sidebar-target-class').innerHTML += `

<div aria-hidden='true' aria-labelledby='exampleModalLabel' class='modal sidebarMenu -left fade' id='mdllSidebar-connected' tabindex='-1'>
  <div class='modal-dialog modal-dialog-scrollable'>
    <div class='modal-content'>
      <div class='modal-header d-block pb-1'>
        <!-- un-user-profile -->
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
        <i class='ri-close-fill'/>
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
                <i class='ri-home-5-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-home-5-fill'/>
              </div>
              <span class='title_link'>Home</span>
              <!--span class='xs-badge'>8</span-->
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/p/app-resources.html'>
              <div class='icon_current'>
                <i class='ri-store-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-store-fill'/>
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
                <i class='ri-tools-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-tools-fill'/>
              </div>
              <span class='title_link'>Tools</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/p/app-tutorial.html'>
              <div class='icon_current'>
                <i class='ri-movie-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-movie-fill'/>
              </div>
              <span class='title_link'>Tutorial</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/p/app-blogs.html'>
              <div class='icon_current'>
                <i class='ri-article-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-article-fill'/>
              </div>
              <span class='title_link'>Blog</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/2024/07/community.html'>
              <div class='icon_current'>
                <i class='ri-group-2-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-group-2-fill'/>
              </div>
              <span class='title_link'>Community</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/2023/10/qna.html'>
              <div class='icon_current'>
                <i class='ri-question-answer-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-question-answer-fill'/>
              </div>
              <span class='title_link'>Forum</span>
            </a>
          </li>
          <label class='title__label'>Other</label>
          <li class='nav-item'>
            <a class='nav-link' href='/p/app-settings.html'>
              <div class='icon_current'>
                <i class='ri-settings-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-settings-fill'/>
              </div>
              <span class='title_link'>Settings</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='/p/app-contact.html'>
              <div class='icon_current'>
                <i class='ri-questionnaire-line'/>
              </div>
              <div class='icon_active'>
                <i class='ri-questionnaire-fill'/>
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
          <script>
            //<![CDATA[
                  function modeL() {
                      // Your code for enabling light mode
                      document.body.classList.remove('dark-mode');
                      document.body.classList.add('light-mode');
                  }
            
                  function modeD() {
                      // Your code for enabling dark mode
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
            //]]>
              
          </script>
        </div>
      </div>
    </div>
  </div>
</div>
    
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

<div class='border-b-gradient un-bottom-navigation filter-blur' style='display:none;'>
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

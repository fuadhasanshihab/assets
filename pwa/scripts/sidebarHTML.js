document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sidebar-target-class').innerHTML += `
    <div class="sidebar-content">
      <p>This content is always appended to the sidebar. Here's a quote: "Example quote" and an apostrophe: 'Example apostrophe'.</p>
    </div>
  `;

  document.querySelector('.header-target-class').innerHTML += `
    <div class="header-content">
      <p>This content is always appended to the header.</p>
    </div>
  `;

  document.querySelector('.notification-target-class').innerHTML += `
    <div class="notification-content">
      <p>This content is always appended to notifications.</p>
    </div>
  `;

  document.querySelector('.bottom-nav-target-class').innerHTML += `
    <div class="bottom-nav-content">
      <p>This content is always appended to the bottom navigation.</p>
    </div>
  `;
});

if (window.matchMedia('(display-mode: standalone)').matches) {
  const sidebarElement = document.querySelector('.sidebar-target-class');
  const sidebarHtmlContent = `
    <div class="sidebar-content">
      <p>This content is only visible in standalone mode. Here's a quote: "Example quote" and an apostrophe: 'Example apostrophe'.</p>
    </div>
  `;
  sidebarElement.innerHTML += sidebarHtmlContent;
}

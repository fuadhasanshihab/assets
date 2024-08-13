document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.sidebar-target-class').innerHTML += `
    <div class="sidebar-content">
      <p>This content is always appended. Here's a quote: "Example quote" and an apostrophe: 'Example apostrophe'.</p>
    </div>
  `;
});

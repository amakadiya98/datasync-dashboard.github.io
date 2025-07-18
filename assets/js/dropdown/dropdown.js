// dropdown
document.addEventListener('DOMContentLoaded', function () {
  const messageToggle = document.getElementById('messageToggle');
  const messageBox = document.getElementById('messageBox');
  const messageIconWrapper = messageToggle?.querySelector('.message-icon-wrapper');
  const notificationToggle = document.getElementById('notificationToggle');
  const notificationBox = document.getElementById('notificationBox');
  const notificationIconWrapper = notificationToggle?.querySelector('.notification-icon-wrapper');
  const dropdownToggle = document.getElementById("dropdownToggle");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const arrowDown = document.querySelector(".arrow-down");
  const arrowUp = document.querySelector(".arrow-up");
  function closeAllDropdowns(except = null) {
    if (except !== 'message') {
      if (messageBox) messageBox.style.display = 'none';
      if (messageIconWrapper) messageIconWrapper.classList.remove('active');
    }
    if (except !== 'notification') {
      if (notificationBox) notificationBox.style.display = 'none';
      if (notificationIconWrapper) notificationIconWrapper.classList.remove('active');
    }
    if (except !== 'profile') {
      dropdownMenu?.classList.remove('active');
      if (arrowDown && arrowUp) {
        arrowDown.style.display = 'inline';
        arrowUp.style.display = 'none';
      }
    }
  }
  messageToggle?.addEventListener('click', function (event) {
    event.stopPropagation();
    const isOpen = messageBox.style.display === 'block';
    closeAllDropdowns(isOpen ? null : 'message');
    messageBox.style.display = isOpen ? 'none' : 'block';
    messageIconWrapper?.classList.toggle('active', !isOpen);
  });
  notificationToggle?.addEventListener('click', function (event) {
    event.stopPropagation();
    const isOpen = notificationBox.style.display === 'block';
    closeAllDropdowns(isOpen ? null : 'notification');
    notificationBox.style.display = isOpen ? 'none' : 'block';
    notificationIconWrapper?.classList.toggle('active', !isOpen);
  });
  dropdownToggle?.addEventListener('click', function (event) {
    event.stopPropagation();
    const isActive = dropdownMenu.classList.contains("active");
    if (isActive) {
      closeAllDropdowns();
    } else {
      closeAllDropdowns('profile');
      dropdownMenu.classList.add("active");
      if (arrowDown && arrowUp) {
        arrowDown.style.display = "none";
        arrowUp.style.display = "inline";
      }
    }
  });
  dropdownMenu?.addEventListener('click', function (event) {
    event.stopPropagation();
  });
  document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', (event) => {
      event.stopPropagation();
      document.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
    });
  });
  document.addEventListener('click', function () {
    closeAllDropdowns();
  });
});
// scroll top
window.onload = function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const mainContent = document.querySelector(".main-content");
  scrollToTopBtn?.addEventListener("click", () => {
    mainContent?.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
};
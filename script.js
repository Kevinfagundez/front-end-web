const toggleBtn = document.querySelector('.theme-toggle');
const body = document.body;
const sunIcon = toggleBtn.querySelector('.sun');
const moonIcon = toggleBtn.querySelector('.moon');

function setTheme(mode) {
  if (mode === 'dark') {
    body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'inline';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    moonIcon.style.display = 'inline';
    sunIcon.style.display = 'none';
    localStorage.setItem('theme', 'light');
  }
}

const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark' ? 'dark' : 'light');

toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.contains('dark-mode');
  setTheme(isDark ? 'light' : 'dark');
});

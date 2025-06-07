function applyTheme(theme) {
  const tb = document.getElementById('Title-bar');
  tb.classList.remove('light-mode', 'dark-mode');
  if (theme === 'dark') {
    tb.classList.add('dark-mode');
  } else if (theme === 'light') {
    tb.classList.add('light-mode');
  }
}

function detectSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  } else {
    return 'light';
  }
}

function initializeTheme() {
  const systemTheme = detectSystemTheme();
  applyTheme(systemTheme);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    applyTheme(e.matches ? 'dark' : 'light');
  });
}

function setTheme(theme) {
  if (theme === 'dark' || theme === 'light' || theme === 'auto') {
    if (theme === 'auto') {
      applyTheme(detectSystemTheme());
    } else {
      applyTheme(theme);
    }
  } else {
    console.error("Invalid theme. Use 'dark', 'light', or 'auto'.");
  }
}

window.onload = function() {
  const catEmojis = ['🐈', '😹', '😻', '😼', '😽', '😾', '🙀', '😿', '😺'];
  const randomIndex = Math.floor(Math.random() * catEmojis.length);
  const centeredDiv = document.getElementById('meow'); 
  if (centeredDiv) {
    centeredDiv.textContent = catEmojis[randomIndex];
  }
  initializeTheme();
};
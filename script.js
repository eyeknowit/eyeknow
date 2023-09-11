// Function to toggle the dark theme
function toggleDarkTheme() {
  const body = document.body;
  body.classList.toggle('dark-theme');
}

// Add an event listener to the theme toggle button
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.addEventListener('click', toggleDarkTheme);
}

const checkbox = document.getElementById("theme-toggle")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})

document.getElementById('toggleButton').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'block';
  } else {
      sidebar.style.display = 'none';
  }
});
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  if (sidebar.style.display === 'none' || sidebar.style.display === '') {
      sidebar.style.display = 'block';
  } else {
      sidebar.style.display = 'none';
  }
});
document.querySelector('.sidebar-toggle').addEventListener('click', function () {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-theme");
});

console.log("js loaded");
console.log("new branch created");

document.getElementById("searchInput").addEventListener('input', function() {
    var searchValue = this.value.toLowerCase();
    var projectLinks = document.querySelectorAll('.project-link');

    projectLinks.forEach(function(link) {
      var projectTitle = link.querySelector('a').textContent.toLowerCase();
      if (projectTitle.includes(searchValue)) {
        link.style.display = 'block';
      } else {
        link.style.display = 'none';
      }
    });
  });

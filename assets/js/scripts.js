
let currentFilter = 'all';

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function filterProjects(category) {
    currentFilter = category;
    let projects = document.querySelectorAll(".project-card");
    projects.forEach(project => {
        project.style.display = (category === "all" || project.dataset.category.includes(category)) ? "block" : "none";
        highlightTags(project);
    });
}

function highlightTags(project) {
    let tags = project.querySelectorAll(".tag");
    tags.forEach(tag => {
        if (currentFilter === 'all') {
            tag.classList.remove("highlight");
        } else if (tag.innerText === currentFilter) {
            tag.classList.add("highlight");
        } else {
            tag.classList.remove("highlight");
        }
    });
}

function openTab(tabName) {
    let contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    let buttons = document.querySelectorAll('.tab-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).style.display = 'block';
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');
}

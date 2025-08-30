// Tab functionality
function openTab(evt, tabName) {
    // Hide all tab content
    var tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("active");
    }
    
    // Remove active class from all tab links
    var tabLinks = document.getElementsByClassName("tab-link");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    
    // Show the selected tab and mark the button as active
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// Initialize the page - make sure home tab is active on load
document.addEventListener('DOMContentLoaded', function() {
    // Ensure home tab is active by default
    document.getElementById('home').classList.add('active');
    document.querySelector('.tab-link[onclick*="home"]').classList.add('active');
});
const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("active");
  });

  contents.forEach((c) => {
    c.classList.remove("active");
  });
};

tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");
  });
});
function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}


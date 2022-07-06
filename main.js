const humburger = document.getElementById('nav-humburger')
let state = false;

humburger.addEventListener('click', function() {
  const listMenu = document.getElementById('nav-list-mobile');
  if(state) {
    listMenu.classList.remove("nav-list-mobile--show")
  }else {
    state = true;
    listMenu.classList.add("nav-list-mobile--show")
  }
})

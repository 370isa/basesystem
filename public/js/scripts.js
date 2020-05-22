const currentPage = location.pathname
const menuItens = document.querySelectorAll('header .main .nav-item a')

for (item of menuItens) {
  if (currentPage.includes(item.getAttribute('href'))) {
    item.classList.add('active')
  }
}

function formChecked(classFormChecked, classFormGroup) {
  const formSchedule = document.querySelector(classFormChecked)

  if ($(formSchedule).is(':checked')) {
    $(`.form-group${classFormGroup} .form-control`).toggle()
  } else {
    $(`.form-group${classFormGroup} .form-control`).toggle()
  }
}

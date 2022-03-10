import { menus } from './data.js'

const menuContainer = document.querySelector('.menu_list')

menus.forEach(menu => {
  const li = document.createElement('li')
  const html = `<a href="#">${menu.title}</a>`
  const ul = document.createElement('ul')

  li.innerHTML = html
  li.appendChild(ul)

  menu.subMenu.forEach(item => {
    const li = document.createElement('li')
    const html = `<a href=${item.url}>${item.text}</a>`
    li.innerHTML = html

    ul.appendChild(li)
  })

  menuContainer.appendChild(li)
})
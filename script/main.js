let currentFloor = 2;
let image = document.querySelectorAll('.main__img path');
let imageHome = document.querySelector('.main__img');
let flats = document.querySelectorAll('.flats path');
let imageFlats = document.querySelector('.flats');
let modalImg = document.querySelector('.modal__img');
let counter = document.querySelector('.counter');
let counterFloor = document.querySelector('.counter__floor');
let arrowUp = document.querySelector('.counterr__arrow-up');
let arrowDown = document.querySelector('.counterr__arrow-down');
let modal = document.querySelector('.modal');
let modalCloseButton = document.querySelector('.modal__button-close');
let viewButton = document.querySelector('#view__flats');
let list = document.querySelector('.flat__list')
let itemList = document.querySelectorAll('.flat__link')

//удаляем подсветку этажа
imageHome.addEventListener('mousemove', () => {
   for (floor of image) {
      floor.classList.remove('curren__floor');
   }
})

// слушаем движение мыши по этажам и меняем подцветку этажа
for (floor of image) {
   floor.addEventListener('mouseover', (event) => {
      currentFloor = event.target.getAttribute('data-floor');
      counter.textContent = currentFloor;
      counterFloor.textContent = currentFloor;
   })
}

//удаляем подсветку квартир
modalImg.addEventListener('mousemove', () => {
   for (flat of flats) {
      flat.classList.remove('current__flat')
   }
})

//слушаем движение по списку в модалке и подсвечиваем выбранную квартиру
list.addEventListener('mouseover', (event) => {
   if (event.target.classList.contains('flat__link')) {
      let listNumber = event.target.getAttribute('data-number');
      let flatNumber = document.querySelector(`[data-flat="${listNumber}"]`)

      for (flat of flats) {
         flat.classList.remove('current__flat')
      }
      flatNumber.classList.add('current__flat');
   }
})

//слушаем изображение квартир и подсвечиваем выбранную квартиру в списке
imageFlats.addEventListener('mouseover', (event) => {

   let flatNumber = event.target.getAttribute('data-flat');
   let listNumber = document.querySelector(`[data-number="${flatNumber}"]`)
   for (item of itemList) {
      item.classList.remove('flat__link-active')
   }
   listNumber.classList.add('flat__link-active')

})

//открытие модалки
for (floor of image) {
   floor.addEventListener('click', toggleModal)
}

//закрытие модалки
modalCloseButton.addEventListener('click', toggleModal)

//показываем модалку при нажатии на кнопку
viewButton.addEventListener('click', toggleModal)

//закрывем модалку на кнопку esc
document.addEventListener('keydown', (event) => {
   if (event.keyCode === 27) {
      closeModal();
   }
})

//закрываем модалку кликом на темную область
modal.addEventListener('click', (event) => {
   if (event.target.classList.contains('modal')) {
      closeModal();
   }
})

//слушаем нажатия по стрелке вверх
arrowUp.addEventListener('click', () => {
   if (currentFloor < 18) {
      currentFloor++
      // с помощью toLocaleString добавляем к счетчику нумерцию c нулем (01 02 03 04 etc)
      newFloor = currentFloor.toLocaleString('en-US', {
         minimumIntegerDigits: 2,
         useGrouping: false
      });
      counter.textContent = newFloor;
      counterFloor.textContent = newFloor;
      for (floor of image) {
         floor.classList.remove('curren__floor');
      }
      document.querySelector(`[data-floor="${newFloor}"]`).classList.add('curren__floor')
   }
});

//слушаем нажатия по стрелке вниз
arrowDown.addEventListener('click', () => {
   if (currentFloor > 2) {
      currentFloor--
      // с помощью toLocaleString добавляем к счетчику нумерцию c нулем (01 02 03 04 etc)
      newFloor = currentFloor.toLocaleString('en-US', {
         minimumIntegerDigits: 2,
         useGrouping: false
      });
      counter.textContent = newFloor;
      counterFloor.textContent = newFloor;
      for (floor of image) {
         floor.classList.remove('curren__floor');
      }
      document.querySelector(`[data-floor="${newFloor}"]`).classList.add('curren__floor')
   }
});


//функция закрытия/открытия модалки
function toggleModal() {
   modal.classList.toggle('modal-open');
}

function closeModal() {
   modal.classList.remove('modal-open');
}
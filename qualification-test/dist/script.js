(() => {
  function changeState(card) {
    let currectCheckbox = card.querySelector('.checkbox_hidden');

    if(!card.classList.contains('disabled')) {
      if(currectCheckbox.checked) {
        currectCheckbox.checked = false;
        card.classList.remove('selected');
        card.classList.add('default');
      } else {
        currectCheckbox.checked = true;
        card.classList.add('selected');
        card.classList.remove('default');
      }
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const arrayOfProducts = Array.from(document.querySelectorAll('.catalog__list-item'));

    for (let product of arrayOfProducts) {
      let productCard = product.querySelector('.product-card');
      let productButton = product.querySelector('.buy-now__button');

      productCard.addEventListener('click', () => {
        changeState(product);
      });

      productButton.addEventListener('click', (e) => {
        e.preventDefault();
        changeState(product);
      });

      // Состояние наведения для выбранной карточки

      product.addEventListener('mouseenter', () => {
        if (product.classList.contains('selected')) {
          product.classList.add('selected-hover');
        }
      });

      product.addEventListener('mouseleave', () => {
        product.classList.remove('selected-hover');
      })
    }

    // Отправка формы

    const form = document.getElementById('form');
    document.addEventListener('keyup', (event) => {
      if(event.key == 'Enter') {
        form.submit();
      }
    })
  })
})()

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgZnVuY3Rpb24gY2hhbmdlU3RhdGUoY2FyZCkge1xuICAgIGxldCBjdXJyZWN0Q2hlY2tib3ggPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveF9oaWRkZW4nKTtcblxuICAgIGlmKCFjYXJkLmNsYXNzTGlzdC5jb250YWlucygnZGlzYWJsZWQnKSkge1xuICAgICAgaWYoY3VycmVjdENoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgY3VycmVjdENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2RlZmF1bHQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGN1cnJlY3RDaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2RlZmF1bHQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5T2ZQcm9kdWN0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2xpc3QtaXRlbScpKTtcblxuICAgIGZvciAobGV0IHByb2R1Y3Qgb2YgYXJyYXlPZlByb2R1Y3RzKSB7XG4gICAgICBsZXQgcHJvZHVjdENhcmQgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNhcmQnKTtcbiAgICAgIGxldCBwcm9kdWN0QnV0dG9uID0gcHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuYnV5LW5vd19fYnV0dG9uJyk7XG5cbiAgICAgIHByb2R1Y3RDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjaGFuZ2VTdGF0ZShwcm9kdWN0KTtcbiAgICAgIH0pO1xuXG4gICAgICBwcm9kdWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjaGFuZ2VTdGF0ZShwcm9kdWN0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyDQodC+0YHRgtC+0Y/QvdC40LUg0L3QsNCy0LXQtNC10L3QuNGPINC00LvRjyDQstGL0LHRgNCw0L3QvdC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxuXG4gICAgICBwcm9kdWN0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9kdWN0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xuICAgICAgICAgIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtaG92ZXInKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgcHJvZHVjdC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1ob3ZlcicpO1xuICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyDQntGC0L/RgNCw0LLQutCwINGE0L7RgNC80YtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybScpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGV2ZW50KSA9PiB7XG4gICAgICBpZihldmVudC5rZXkgPT0gJ0VudGVyJykge1xuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KSgpXG4iXX0=

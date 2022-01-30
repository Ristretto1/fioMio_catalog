
let form = document.querySelector('.card__form');
let formats = document.querySelectorAll('.format');
let count = document.querySelector('.count');
let baseCost = document.querySelector(".card__sum");

form.onchange = function() {
    let formatSelect = document.querySelector('input[name="format"]:checked').dataset.formatCost;
    count.oninput = function() {
    let price = formatSelect * count.value;
    baseCost.textContent = price + " ₽";
  }
}

function calc() {
  let formatSelect = document.querySelector('input[name="format"]:checked').dataset.formatCost;
  let price = formatSelect * count.value;
  baseCost.textContent = price + " ₽";
}





// ------------------------------------------------------------------- \\

let cardsWrapper = document.querySelector('.cards__wrapper')


let allCards = '';
for (let i=0; i < 200; i++) {
  allCards += `
                <li class="mix eight-march">
                    <div class="card popup__open"><img src="files/images/8march(${i+1}).jpg" class="card__img"><input type="button" class="card__btn" value="Хочу!"></div>
                </li>
              `;
};
cardsWrapper.innerHTML += allCards;

// ------------------------------------------------------------------- \\


  let openPopUps = document.querySelectorAll('.popup__open');
  let closePopUp = document.querySelector('.popup__close');
  let popUp = document.querySelector('.popup');
  let urlImg = document.querySelector('.url_img');

  for (let openPopUp of openPopUps) {
    openPopUp.addEventListener('click', function(){
        popUp.classList.add('active_popup');

        let imageActive = openPopUp.previousElementSibling;
        urlImg.value = imageActive.src;
    })
  }
  
  
  closePopUp.addEventListener('click', () => {
      popUp.classList.remove('active_popup');
  });


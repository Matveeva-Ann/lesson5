const fildAmound = document.querySelector("#amound");
const btnAdd = document.querySelector(".btnAdd");
const selected = document.querySelectorAll('input[name="radio"]');
const fildArea = document.querySelector(".fildArea");
const info = document.querySelector('.info');
const btnBuy = document.querySelector('.btnBuy');
const purchaseResaltBox = document.querySelector('.purchaseResaltBox');
const balance = document.querySelector('#balance');
const bee = document.querySelector('#beer');
const win = document.querySelector('#wine');
const pep = document.querySelector('#pepsi');

let obj = {
  beer: 0,
  wine: 0,
  pepsi: 0,
};

btnAdd.addEventListener("click", function () {
  let valueProduct;
  let amoundProduct = parseInt(fildAmound.value);
  if (isNaN(amoundProduct)) {
    info.style.display = 'flex';
    info.textContent = 'В поле "Кількість" можна вводити лише числові значення';
    setTimeout(function(){
        info.style.display = 'none';
    },3000)
  } else {
    for (const el of selected) {
      if (el.checked) {
        valueProduct = el.value;
      }
    }
    
    if (valueProduct == "Пиво") {
      obj.beer += amoundProduct;
    }
    if (valueProduct == "Вино") {
      obj.wine += amoundProduct;
    }
    if (valueProduct == "Пепсі") {
      obj.pepsi += amoundProduct;
    }

    if (obj.beer != 0) {
      fildArea.innerHTML =`Пиво: ${obj.beer} шт.` + "<br>";
    }
    if (obj.wine != 0) {
      fildArea.innerHTML +=`Вино: ${obj.wine} шт.` + "<br>";
    }
    if (obj.pepsi != 0) {
      fildArea.innerHTML +=`Пепсі: ${obj.pepsi} шт.` + "<br>";
    }
    fildAmound.value = "";
  }
});

btnBuy.addEventListener('click', function(){
  let beerFunc = Shop.checkBeer(obj.beer);
  let winFunc = Shop.checkWine(obj.wine);
  let pepFunc = Shop.checkPepsi(obj.pepsi);
    if (beerFunc>=0 && winFunc>=0 && pepFunc>=0){
      balance.value = `${Shop.sellProdukt(obj.beer, obj.wine, obj.pepsi)} грн.`;
      bee.value = `${beerFunc} шт.`;
      win.value = `${winFunc} шт.`;
      pep.value = `${pepFunc} шт.`;
      purchaseResaltBox.innerHTML = fildArea.innerHTML + `Всього: ${Shop.sum(obj.beer, obj.wine, obj.pepsi)} грн.`;
    }else{
      info.style.display = 'flex';
      if (beerFunc<0){
        info.textContent = `Вибачте, але на складі залишилось пива: ${parseInt(beerFunc) + parseInt(obj.beer)}шт.`;
        beerFunc = Shop.checkBeer(-obj.beer);
      }
      if (winFunc<0){
        info.textContent = `Вибачте, але на складі залишилось вина: ${parseInt(winFunc) + parseInt(obj.wine)}шт.`;
        winFunc = Shop.checkWine(-obj.wine);
      }
      if (pepFunc<0){
        info.textContent = `Вибачте, але на складі залишилось пепсі: ${parseInt(pepFunc) + parseInt(obj.pepsi)}шт.`;
        pepFunc = Shop.checkPepsi(-obj.pepsi);
      }
      setTimeout(function(){
        info.style.display = 'none';
    },3000)
    }
    fildArea.innerHTML = "";
    obj = {
      beer: 0,
      wine: 0,
      pepsi: 0,
    };
    
})


const Shop = (function () {
  let countBeer = 80;
  let countWine = 45;
  let countPepsi = 70;
  let bank = 1000;
  const preiseBeer = 30;
  const preiseWine = 95;
  const preisePepsi = 20;

  function checkBeer(beer) {
    countBeer = countBeer-beer;
      return `${countBeer}`;
  }
  function checkWine(wine) {
    countWine = countWine - wine;
    return `${countWine}`;
  }
  function checkPepsi(pepsi) {
    countPepsi = countPepsi - pepsi;
    return `${countPepsi}`;
  }

  function sellProdukt (amountBeer, amountWine, amountPepsi) {
    bank += amountBeer * preiseBeer + amountWine * preiseWine + amountPepsi * preisePepsi;
    return bank;
  }
  function sum (amountBeer, amountWine, amountPepsi) {
    let sum =  amountBeer * preiseBeer + amountWine * preiseWine + amountPepsi * preisePepsi
    return sum;
  }
  return {
    checkBeer: checkBeer,
    checkWine: checkWine,
    checkPepsi: checkPepsi,
    sellProdukt: sellProdukt,
    sum: sum
  };

}());

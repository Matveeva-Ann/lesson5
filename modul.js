
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

export {checkBeer, checkWine, checkPepsi, sellProdukt, sum}
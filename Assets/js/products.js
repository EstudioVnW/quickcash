(function() {

  const cash = document.querySelector("#box-product--Cash").getBoundingClientRect();
  const account = document.querySelector("#box-product--Account").getBoundingClientRect();
  
  const Inside1 = document.querySelector('#OurProducts-Inside-1');
  const Inside3 = document.querySelector('#OurProducts-Inside-3');

  Inside1.style.setProperty('--left', (cash.x + (cash.width / 2) - 40) + 'px');
  Inside3.style.setProperty('--left', (account.x + (account.width / 2) - 40) + 'px');

  document.getElementById("box-product--Cash").addEventListener("click", showCashToCash);
  document.getElementById("box-product--Account").addEventListener("click", showCashToAccount);

  // Products
  function showCashToCash() {
    let cashToCash = document.getElementById("OurProducts-Inside-1");
    let cashToAccount = document.getElementById("OurProducts-Inside-3");

    let btnCloseCash = document.getElementById('btn-cash');
    let btnCloseCashMobile = document.getElementById('btn-cash-mobile');

    let cashToCashMobile = document.getElementById("content-cash");
    let cashToAccountMobile = document.getElementById("content-account");

    let imgSeta = document.getElementById('closed-seta');
    let imgSeta2 = document.getElementById('closed-seta2');


    let openCash =true;

    if (openCash = true) {
      // openCash = false;
      cashToCash.style.display = "flex";
      cashToAccount.style.display = "none";

      cashToCashMobile.style.display = "flex";
      cashToAccountMobile.style.display = "none";

      // imgSeta.style.display = "flex";
      imgSeta.style.display = "none";
      imgSeta2.style.display = "none";
    }

    btnCloseCash.onclick = function (e) {
      e.preventDefault();
      cashToCash.style.display = "none";
      cashToCashMobile.style.display = "none";
      imgSeta.style.display = "none";
    }

    btnCloseCashMobile.onclick = function (e) {
      e.preventDefault();
      cashToCash.style.display = "none";
      cashToCashMobile.style.display = "none";
      imgSeta.style.display = "none";
    }

  }

  function showCashToAccount() {
    let cashToAccount = document.getElementById("OurProducts-Inside-3");
    let cashToCash = document.getElementById("OurProducts-Inside-1");

    let btnCloseAccount = document.getElementById("btn-account");
    let btnCloseAccountMobile = document.getElementById("btn-account-mobile");

    let cashToCashMobile = document.getElementById("content-cash");
    let cashToAccountMobile = document.getElementById("content-account");

    let imgSeta = document.getElementById('closed-seta');
    let imgSeta2 = document.getElementById('closed-seta2');

    let openAccount;

    if (!openAccount) {
      openAccount = true;

      cashToAccount.style.display = "flex";
      cashToCash.style.display = "none";

      cashToAccountMobile.style.display = "flex";
      cashToCashMobile.style.display = "none";

      // imgSeta2.style.display = "flex";
      imgSeta.style.display = "none";
      imgSeta.style.display = "none";
    }

    btnCloseAccount.onclick = function (e) {
      e.preventDefault();
      cashToAccount.style.display = "none";
      cashToAccountMobile.style.display = "none";
      imgSeta2.style.display = "none";
    }

    btnCloseAccountMobile.onclick = function (e) {
      e.preventDefault();
      cashToAccount.style.display = "none";
      cashToAccountMobile.style.display = "none";
      imgSeta2.style.display = "none";
    }
  }

})();
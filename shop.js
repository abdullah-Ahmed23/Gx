window.addEventListener("load", () => {
    const loader = document.querySelector(".loder");
    loader.classList.add("loder-hidden");
    loader.addEventListener("transitend", () => {
      document.body.removeChild("loder")
    });
  });
  const openShopping = document.querySelector('.fa-cart-shopping')
  const closeShopping = document.querySelector('.closeshooping')
  const list = document.querySelector('.list')
  const listcard = document.querySelector('.listcart')
  const body = document.querySelector('body')
  const total = document.querySelector('.total')
  const qunatity = document.querySelector('.quantity')
  const btn = document.querySelector('a')
  const cart = document.querySelector('.cart')

  

  openShopping.addEventListener('click', ()=>{
    body.classList.add('act')
  })
  closeShopping.addEventListener('click',()=>{
    body.classList.remove('act')
  })

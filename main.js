let switchlis = document.querySelectorAll(".switch li");
let imgs = Array.from(document.querySelectorAll(".gallery img"));

switchlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", mimgs);
});

function removeActive() {
  switchlis.forEach((li) => {
    li.classList.remove("activee");
    this.classList.add("activee");
  });
}

function mimgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.li).forEach((el) => {
    el.style.display = "inline-block";
    el.style.transition = "0.4s ease";
  });
}
const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".btn");
const nameInput = document.querySelector("#Name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#msg_input");

const publicKey = "uDt6VwT2Ou41smT7M";
const serviceID = "service_1po8ofe";
const templateID = "template_q1cypuo";

emailjs.init(publicKey);

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.innerText = "Wait....";

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };
  emailjs.send(serviceID, templateID, inputFields).then(
    () => {
      submitBtn.innerText = "Thanks For contact us";
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    },
    (error) => {
      console.log(error);
      submitBtn.innerText = "Something Wrong";
    }
  );
});
var today = new Date();

var dato =
  today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
console.log(dato);
document.getElementById("date").innerText = dato;

const icon = document.querySelector(".fa-calendar-days");
const date = document.querySelector("#date");

icon.addEventListener("click", function (event) {
  event.stopPropagation(); 
  date.innerHTML = new Date().toLocaleDateString();
  date.style.opacity = "1";
  date.style.marginTop = "20px";
  
});

document.addEventListener("click", function (event) {
  if (!date.contains(event.target)) {
    
    date.style.opacity = "0";
    date.style.marginTop = "0px";

  }
});

const button = document.querySelector(".Dark");
const toggle = document.querySelector("#toogledark");
const body = document.querySelector("body");
const hero = document.querySelector(".hero");
const herocol = document.querySelector(".row");
const header = document.querySelector("nav");
const li = document.querySelectorAll(".nav-link")
const cards = document.querySelector(".Cardss");
const footer = document.querySelector(".contact-us");
const ourwork = document.querySelector(".Our-Work")


toggle.addEventListener("click", function () {
  this.classList.toggle('fa-sun');
  if(this.classList.toggle('fa-moon')){
    footer.style.background = '#8D99AE'
    hero.style.background = '#8D99AE'
    hero.style.transition = '1s'
    cards.style.transition = '1s'
    herocol.style.transition = '1s'
    header.style.transition = '1s'
    footer.style.transition = '1s'
    ourwork.style.transition = '1s'
    cards.style.background = '#8D99AE'
    herocol.style.color = 'black'
    header.style.background = '#8D99AE'
    ourwork.style.background = '#8D99AE'
   
  }
  else{
    footer.style.background = ''
    hero.style.background = ''
    hero.style.transition = '1s'
    cards.style.transition = '1s'
    herocol.style.transition = '1s'
    header.style.transition = '1s'
    cards.style.background = ''
    herocol.style.color = ''
    header.style.background = ''
    ourwork.style.background = ''
  }
});
document.querySelector('.btn').disabled = true
function valdi() {
  var name = document.getElementById("Name").value;
  var email = document.getElementById("email").value;
  var msg = document.getElementById("msg_input").value;
  var error = document.getElementById("error");

  
   var text = "";
   if (name.length < 8   ) {
    text = "Please enter valid name";
    document.getElementById("error").style.display = "block";
    error.innerHTML = text;
    
    return false;
  }
   else if (email.length < 15 || email.indexOf("@") == -1 )  {
    text = "Please FILL the email";
    document.getElementById("error").style.display = "block";
    error.innerHTML = text;
    
    return false;
  } else {
    
    document.getElementById("error").style.display = "none";
    document.querySelector('.btn').disabled = false
    return true;
  }
}
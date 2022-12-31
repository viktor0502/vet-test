window.addEventListener('DOMContentLoaded', ()=>{
// Price
function tabs (btnSelector, contentSelector, btnParentSelector, btnActiveSelector, contentActiveSelector){
  const tabsBtn = document.querySelectorAll('.'+btnSelector),
  tabsContent = document.querySelectorAll('.'+contentSelector),
  tabsBtnParent = document.querySelector('.'+btnParentSelector);
  
  function hideTabs() {
  tabsContent.forEach((i) => {
    i.classList.remove(contentActiveSelector);
  });
  tabsBtn.forEach((i) => {
    i.classList.remove(btnActiveSelector);
  });
  }
  function showCurrentTab(i = 0) {
  tabsBtn[i].classList.add(btnActiveSelector);
  tabsContent[i].classList.add(contentActiveSelector);
  }
  
  hideTabs();
  showCurrentTab();
  tabsBtnParent.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.classList.contains(btnSelector)) {
    tabsBtn.forEach((item, i) => {
      if (target == item) {
        hideTabs();
        showCurrentTab(i);
      }
    });
  }
  });

}
tabs("price-btn__item", "price-content__item", 'price__btns', "price-btn__item--active", "price-content__item--active" )


// Form

const TOKEN = '5728237657:AAE1VRvGAHVUgMZKrIHPrVxaXySHdj6-FKo';
const CHAT_ID = '-1001603992347';
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const success = document.getElementById('success')

const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    let message = `<b> Заявка с сайта! </b>\n`
    message += `<b> Имя: </b> ${ this.name.value } \n`
    message += `<b> Телефон: </b> ${ this.phone.value }`

    axios.post(URI_API, {
        chat_id: CHAT_ID, 
        parse_mode: 'html',
        text: message
    })
    .then((res) =>{
        this.name.value = ''
        this.phone.value = ''
        success.style.display = 'block'
    })
    .catch((err) => {
        console.warn(err);
    })
    .finally(() =>{
        console.log('Over')
    })

    function onEntry(entry) {
        entry.forEach((change) => {
          if (change.isIntersecting) {
            change.target.classList.add("element-show");
          }
        });
      }
      let options = { threshold: [0.3] };
      let observer = new IntersectionObserver(onEntry, options);
      let elements = document.querySelectorAll(".element-animation");
    
      for (let elm of elements) {
        observer.observe(elm);
      }
    
})
function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        change.target.classList.add("element-show");
      }
    });
  }
  let options = { threshold: [0.3] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll(".element-animation");

  for (let elm of elements) {
    observer.observe(elm);
  }
})
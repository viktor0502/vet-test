window.addEventListener("DOMContentLoaded", () => {
  // Price
  function tabs(
    btnSelector,
    contentSelector,
    btnParentSelector,
    btnActiveSelector,
    contentActiveSelector
  ) {
    const tabsBtn = document.querySelectorAll("." + btnSelector),
      tabsContent = document.querySelectorAll("." + contentSelector),
      tabsBtnParent = document.querySelector("." + btnParentSelector);

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
  tabs(
    "price-btn__item",
    "price-content__item",
    "price__btns",
    "price-btn__item--active",
    "price-content__item--active"
  );


  // FAQ
  function accord(accordBtnSelector, accordItemSelector) {
    const accordItem = document.querySelectorAll("." + accordItemSelector);
    const accordBtn = document.querySelectorAll("." + accordBtnSelector);

    accordBtn.forEach((el) => {
      el.addEventListener("click", () => {
        const parent = el.parentNode;

        if (parent.classList.contains(accordItemSelector + "--active")) {
          parent.classList.remove(accordItemSelector + "--active");
        } else {
          accordItem.forEach((i) => {
            i.classList.remove(accordItemSelector + "--active");
          });
          parent.classList.toggle(accordItemSelector + "--active");
        }
      });
    });
  }

  accord("faq-btn__item", "faq-wrapper__item");

  // Slider
  function slider(
    btnNextSelector,
    btnPrevSelector,
    slideItemSelector,
    dotsSelector
  ) {
    const btnNext = document.querySelector("." + btnNextSelector),
      btnPrev = document.querySelector("." + btnPrevSelector),
      slides = document.querySelectorAll("." + slideItemSelector),
      dots = document.querySelectorAll("." + dotsSelector);
    let slideIndex = 0;
    const interval = setInterval(() => {
      nextSlide(1);
    }, 5000);
    showSlide(0);
    function showSlide(n) {
      if (n >= slides.length) {
        slideIndex = 0;
      }
      if (n < 0) {
        slideIndex = slides.length - 1;
      }
      slides.forEach((slide) => {
        slide.classList.remove(slideItemSelector + "--active");
      });
      slides[slideIndex].classList.add(slideItemSelector + "--active");
      dots.forEach((dot) => {
        dot.classList.remove(dotsSelector + "--active");
      });
      dots[slideIndex].classList.add(dotsSelector + "--active");
    }
    function nextSlide(n) {
      showSlide((slideIndex += n));
    }
    btnNext.addEventListener("click", function () {
      clearInterval(interval);
      nextSlide(1);
    });
    btnPrev.addEventListener("click", function () {
      clearInterval(interval);

      nextSlide(-1);
    });
   
  }

  slider("btn--next", "btn--prev", "slide__img", "dot");
  // Form

  // const TOKEN = "5728237657:AAE1VRvGAHVUgMZKrIHPrVxaXySHdj6-FKo";
  // const CHAT_ID = "-1001603992347";
  // const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  // const success = document.getElementById("success");

  // const form = document.getElementById("form");

  // form.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   let message = `<b> Заявка с сайта! </b>\n`;
  //   message += `<b> Имя: </b> ${this.name.value} \n`;
  //   message += `<b> Телефон: </b> ${this.phone.value}`;

  //   axios
  //     .post(URI_API, {
  //       chat_id: CHAT_ID,
  //       parse_mode: "html",
  //       text: message,
  //     })
  //     .then((res) => {
  //       this.name.value = "";
  //       this.phone.value = "";
  //       success.style.display = "block";
  //     })
  //     .catch((err) => {
  //       console.warn(err);
  //     })
  //     .finally(() => {
  //       console.log("Over");
  //     });
  // });
});

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".element-animation");

for (let elm of elements) {
  observer.observe(elm);
}

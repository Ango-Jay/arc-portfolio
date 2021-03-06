export default {
  mounted(el) {
    function loadImage() {
      const imageElement = el; //Array.from(el.children).find(
      //  (el) => el.nodeName === "IMG"
      // );
      if (imageElement) {
        imageElement.addEventListener("loaded", () => {
          //setTimeout(() => el.classList.add("loaded"), 100);
          el.classList.add("loaded");
        });
        imageElement.addEventListener("error", () => console.log("error"));
        imageElement.src = imageElement.dataset.imgUrl;
      }
    }

    function handleIntersect(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImage();
          observer.unobserve(el);
        }
      });
    }

    function createObserver() {
      const options = {
        root: null,
        threshold: "0"
      };
      const observer = new IntersectionObserver(handleIntersect, options);
      observer.observe(el);
    }
    if (window["IntersectionObserver"]) {
      createObserver();
    } else {
      loadImage();
    }
  }
};

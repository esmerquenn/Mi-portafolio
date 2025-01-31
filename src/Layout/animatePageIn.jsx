import gsap from "gsap";

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1");
  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set(bannerOne, {
      yPercent: 0,
    }).to(bannerOne, {
      yPercent: 100,
    });
  }
};

export const animatePageOut = (href, navigate) => {
  
  const bannerOne = document.getElementById("banner-1");
  if (bannerOne) {
    const tl = gsap.timeline();

    tl.set(bannerOne, {
      top: 0,
      yPercent: -100,
    }).to(bannerOne, {
      yPercent: 0,
    });
  }
};

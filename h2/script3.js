function dom(){
    const canvas = document.querySelector("#pg3 canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })
  
  function files(index) {
    var data = `
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0001.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0002.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0003.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0004.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0004.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0006.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0007.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0008.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0009.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0010.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0011.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0012.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0013.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0014.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0015.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0016.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0017.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0018.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0019.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0020.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0021.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0022.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0023.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0024.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0025.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0026.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0027.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0028.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0029.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0030.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0031.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0032.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0033.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0034.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0035.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0036.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0037.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0038.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0039.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0040.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0041.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0042.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0043.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0044.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0045.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0046.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0047.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0048.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0049.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0050.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0051.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0052.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0053.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0054.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0055.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0056.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0057.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0058.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0059.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0060.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0061.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0061.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0062.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0063.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0064.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0065.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0066.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0067.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0068.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0069.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0070.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0071.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0072.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0073.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0074.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0075.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0076.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0077.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0078.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0079.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0080.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0081.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0082.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0083.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0084.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0085.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0086.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0087.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0088.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0089.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0090.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0091.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0092.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0093.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0094.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0095.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0096.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0097.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0098.jpg
    https://content.rolex.com/v7/dam/collection/family-pages/classic-watches/datejust/features-page/focus-features/landscape/classic-watches-datejust-focus-feature-landscape-0099.jpg
   
    `
   ;
    return data.split("\n")[index];
  }
  
  
  const frameCount = 98;
  
  const images = [];
  const imageSeq = {
    frame: 0
  };
  
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  // gsap.to(imageSeq, {
  //   frame: frameCount - 1,
  //   snap: "frame",
  //   ease: "none",
  //   scrollTrigger: {
  //       scrub:1.8,
  //       pin:true,
  //       trigger:"#home",
  //       // start:"bottom 100%",
        
        
  //   },
  //   onUpdate: render
  // });
  
  
  var cl = gsap.timeline({
    scrollTrigger: {
      scrub:1.8,
            pin:true,
            trigger:"#home",
      //       // start:"bottom 100%",
    }
  })
  cl
  .to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    duration:18,
    onUpdate: render
  })
  
  
  
  images[0].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
   
  
  }
  
  dom();
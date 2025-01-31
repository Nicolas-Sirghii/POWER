const elementStyles = {
  bodyStyles() {
    const b = document.body.style;
          b.margin = "0";
          b.padding = "0";
          b.height = "100vh";
          b.display = "flex";
          b.flexDirection = "column";
          b.justifyContent = "flex-end";
  },
  bottomDivStyles() {
    const b = document.querySelector(".bottom-div").style;
          b.height = "20vh";
          b.width = "100%";
          b.backgroundColor = "blue";
          b.position = "fixed";
          b.bottom = "0";
          b.left = "0";
          b.display = "flex";
          b.alignItems = "center";
          b.justifyContent = "space-around"

  },
  bottomGraphs() {
    const a = document.querySelector(".bottom-div");
    const months = [
"January", "February", "March", "April", "May", "June", 
"July", "August", "September", "October", "November", "December"
];
    months.forEach(element => {
      const b = document.createElement("div");
            b.style.height = "90%";
            b.style.width = "8%";
            b.style.backgroundColor = "gold";
            b.innerText = element;

      b.addEventListener("mouseenter", () => {
        b.style.transform = "scale(3) translateY(-7vh)";
        b.style.zIndex = "2";
          
      });
      
      b.addEventListener("mouseleave", () => {
       b.style.transform = "scale(1) translateY(0)";
       b.style.zIndex = "1";
      });
            a.append(b);
    });
      
      
    
   
  }
}
elementStyles.bodyStyles();
elementStyles.bottomDivStyles();
elementStyles.bottomGraphs();


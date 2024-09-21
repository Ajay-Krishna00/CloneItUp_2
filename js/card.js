function createCard(name, imgSrc,backgroundSrc, description,priceDef,dateDef,ratingDef,button1Def,button2Def) {
  const card = document.createElement("div");
  card.className = "card";

  const imgClass = document.createElement("div");
  imgClass.className = "imgClass";
  const img = document.createElement("img");
  img.src = imgSrc;
  img.alt = `${name}'s image`;
  img.className = "img";
  const background = document.createElement("img");
  background.src = backgroundSrc;
  background.alt = `${name}'s background`;
  background.className = "background";
  const price = document.createElement("h6");
  price.textContent = priceDef;
  price.className = "price";  
  const date = document.createElement("h6");
  date.textContent = dateDef;
  date.className = "date";

  const definitionDiv = document.createElement("div");
  definitionDiv.className = "definitionDiv";

  const headingDiv = document.createElement("div");
  headingDiv.className = "headingDiv";
  const heading = document.createElement("h3");
  heading.textContent = name;
  heading.className = "heading";
  const ratingGroup = document.createElement("div");
  ratingGroup.className = "ratingGroup";
  const star = document.createElement("img");
  star.src = "./icons/star.png";
  star.alt = "star";
  star.className = "star";  
  const rating = document.createElement("h6");
  rating.textContent = ratingDef;
  rating.className = "rating";


  const desc = document.createElement("p");
  desc.textContent = description;
  desc.className = "desc";

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "buttonDiv";
  const button1 = document.createElement("button");
  button1.textContent = button1Def;
  button1.className = "button1";
  const button2 = document.createElement("button");
  button2.textContent = button2Def;
  button2.className = "button2";
  const button3 = document.createElement("button");
  button3.textContent = '';
  button3.style.backgroundImage = "url('./icons/arrow_forward.png')";;
  button3.style.backgroundSize = 'cover'; 
  button3.className = "button3";
  button3.style.width = "30px";
  button3.style.height = "30px";


  card.appendChild(imgClass);
  card.appendChild(definitionDiv);
  imgClass.appendChild(img);
  imgClass.appendChild(background);
  imgClass.appendChild(price);
  imgClass.appendChild(date);
  definitionDiv.appendChild(headingDiv);
  definitionDiv.appendChild(desc);
  definitionDiv.appendChild(buttonDiv);
  headingDiv.appendChild(heading);
  headingDiv.appendChild(ratingGroup);
  ratingGroup.appendChild(star);
  ratingGroup.appendChild(rating);
  buttonDiv.appendChild(button1);
  buttonDiv.appendChild(button2);
  buttonDiv.appendChild(button3);

  return card;
}

fetch("./json/data.json")
  .then((response) => response.json())
  .then((datas) => {
    const container = document.getElementById("cards-container");
    datas.forEach((data) => {
      const card = createCard(
        data.name,
        data.imgSrc,
        data.backgroundSrc,
        data.description,
        data.priceDef,
        data.dateDef,
        data.ratingDef,
        data.button1Def,
        data.button2Def
      );
      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));
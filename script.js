var testeFunc = () => {
  if (window.location.toString().includes("wikitrivia.tomjwatson.com")) {
    var nextCardValues = document.querySelectorAll("[data-rbd-droppable-id='next'] > div > div");
    var container = "";
    var backDate = "Start the game!";
    var hasBadge = document.querySelector("body > p");
    var badge = (hasBadge) ? hasBadge : document.createElement('p');

    nextCardValues.forEach(card => {
      var classes = card.classList;
      classes.forEach(itemClass => {
        if (itemClass.includes("item-card_back"))
          container = document.querySelectorAll(`.${itemClass}`)[0];
      })
    })

    if (typeof container !== "string") {
      container.childNodes.forEach(backInfo => {
        backInfo.classList.forEach(itemClass => {
          if (itemClass.includes("item-card_date"))
            backDate = document.querySelectorAll(`.${itemClass}`)[0];
        })
      })
    }
    
    badge.style = `background-color:lightgreen;border:2px solid darkgreen;border-radius:5px;box-shadow:2px 2px 4px greenyellow;color:#333;left:0;margin-left:auto;margin-right:auto;right:0;padding:5px;position:absolute;text-align:center;top:${backDate==="Start the game!"?"100":"375"}px;width:200px;`;
    badge.textContent = backDate==="Start the game!" ? `👇 ${backDate}` : `👆 ${backDate?.innerText?.split(": ")[1] ?? backDate}`;

    if (!hasBadge)
      document.querySelector("body").insertAdjacentElement('afterbegin', badge);
  }
}

setInterval(() => testeFunc(), 500);
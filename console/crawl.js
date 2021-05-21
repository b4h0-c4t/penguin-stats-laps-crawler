const crawl = () => Array.from(document.querySelectorAll("div.v-window-item--active div.card-item.v-card.v-sheet.theme--light"))
  .map(card_inner => ({
    name: card_inner.childNodes[0].childNodes[0].childNodes[0].innerText,
    orbit_num: Number(card_inner.childNodes[0].childNodes[1].innerText.split(" ")[0]),
  }));

crawl();
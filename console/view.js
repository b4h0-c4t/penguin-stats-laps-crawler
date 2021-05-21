const view = (parentNode, stages) =>stages.map(stage => {
  const dom = document.createElement("div");
  const name = document.createTextNode(stage.name);
  const checkboxes = document.createElement("span");
  for(let i = 0; i < stage.orbit_num; i++) {
    const checkbox = document.createElement("input");
    checkbox.setAttribute("id", stage.name);
    checkbox.setAttribute("type", "checkbox");
    checkboxes.appendChild(checkbox);
  }
  dom.appendChild(name);
  dom.appendChild(checkboxes);
  parentNode.appendChild(dom);
});

document.body.innerHTML = "";
view(document.body, stage);
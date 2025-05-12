document.addEventListener('DOMContentLoaded', solve);

function solve() {
  //TODO

  // Parse input JSON
  // For each entry:
  // - Create row with column for each value
  // - Append to table
  // When buy is clicked 
  // - Iterate all table wors 
  // - Filter by chekced input 
  // - Restore object properties
  // - Add to output

  let [generateBtn, buyBtn] = Array.from(document.querySelectorAll('[type="submit"]'));
  generateBtn.addEventListener('click', onGenerate);
  buyBtn.addEventListener('click', onBuy);

  let table = document.querySelector('tbody');

  function onGenerate(e) {
    e.preventDefault();
    let data = JSON.parse(document.querySelector('#input textarea').value);

    // for (let entry of data) {
    //   let row = createRow(entry);
    //   table.appendChild(row);
    // }

    data.map(createRow).forEach(c => table.appendChild(c))
  }

  function onBuy(e) {
    e.preventDefault();

    let selected = [];
    let total = 0;
    let decFactor = 0;

    for (let row of table.children) {
      if (row.querySelector('input').checked) {
        let [nameP, priceP, decP] = Array.from(row.querySelectorAll('p'))

        selected.push(nameP.textContent)
            
            total += Number(priceP.textContent);
            decFactor += Number(decP.textContent);
      }
    }

    let result = [
      `Bought furniture: ${selected.join(', ')}`,
      `Total price: ${total}`,
      `Average decoration factor: ${decFactor / selected.length}`
    ];

    document.querySelector('#shop textarea').value = result.join('\n')
  }

  function createRow(enrty) {
    
    let row = document.createElement('tr');
    
    let imgCol = document.createElement('td');
    let img = document.createElement('img');
    img.src = enrty.img;
    imgCol.appendChild(img);
    row.appendChild(imgCol);

    row.appendChild(createCol(enrty.name));
    row.appendChild(createCol(enrty.price));
    row.appendChild(createCol(enrty.decFactor));

    let buyCol = document.createElement('td');
    let buyCheck = document.createElement('input');
    buyCheck.type = 'checkbox';
    buyCol.appendChild(buyCheck);
    row.appendChild(buyCol);
    

    return row;
  }

  function createCol(content) {
    let col = document.createElement('td');
    let p = document.createElement('p');
    p.textContent = content;
    col.appendChild(p);
    
    return col;
  }

}
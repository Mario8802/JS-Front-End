function solve() {
   let rows = document.querySelectorAll('.container tbody tr');
   let input = document.getElementById('searchField');

   let pattern = input.value;

   if(!pattern) {
      return;
   }

   for (let row of rows) {
      if (row.textContent.includes(pattern)) {
         row.classList.add('select');
      } else {
         row.classList.remove('select');
      }
   }

   input.value = '';
}


// function solve() {
//    const input = document.getElementById('searchField');
//    const searchText = input.value.toLowerCase();
//    const rows = Array.from(document.querySelectorAll('table.container tbody tr'));

//    for (let row of rows) {
//        row.classList.remove('select'); 
//        const cells = Array.from(row.children);

//        for (let cell of cells) {
//            if (cell.textContent.toLowerCase().includes(searchText)) {
//                row.classList.add('select');
//                break; 
//            }
//        }
//    }

//    input.value = ''; 
// }


// function solve() {
//    document.querySelector('#searchBtn').addEventListener('click', onclick);
   
//    function onclick() {
//       const trElements = document.querySelectorAll('table.container tbody tr');
//       const searchFieldElement = document.getElementById('searchField')
//       const searchText = searchFieldElement.value;

//       for (const trElement of trElements) {
//          const tdElements = trElement.querySelectorAll('td');
//          let isSelected = false;

//          trElement.className.remove('select');

//          for (const tdElement of tdElements) {
//             if (tdElement.textContent.includes(searchText)) {
//                isSelected = true;
//                break;
//             }  
//          }
//          if (isSelected) {
//             trElement.className.add('select');
//          }
//       }

//       searchFieldElement.value = '';
//    }
// }
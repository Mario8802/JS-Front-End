function solve() {
   const input = document.getElementById('searchField');
   const searchText = input.value.toLowerCase();
   const rows = Array.from(document.querySelectorAll('table.container tbody tr'));

   for (let row of rows) {
       row.classList.remove('select'); 
       const cells = Array.from(row.children);

       for (let cell of cells) {
           if (cell.textContent.toLowerCase().includes(searchText)) {
               row.classList.add('select');
               break; 
           }
       }
   }

   input.value = ''; 
}

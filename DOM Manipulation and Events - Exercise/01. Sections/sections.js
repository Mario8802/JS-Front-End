document.addEventListener('DOMContentLoaded', solve);

function solve() {
   // TODO
   // Add event listener to submit button
   // Prevent from submission
   // Find input element and read value
   // Parse value to array 
   // For every string of array:
   // - Create div
   // - Create paragraph
   // - Set paragraph content
   // - Append to div and append div to output

   let submitButton = document.querySelector('input[type="submit"]');
   submitButton.addEventListener('click', addContent);

   function addContent(event) {
      event.preventDefault();

      let data = document.querySelector('input[type="text"]').value;
      let sections = data.split(', ');
      let content = document.getElementById('content');

      for (let entry of sections) {
         let div = document.createElement('div');
         let p = document.createElement('p');
         div.appendChild(p)
         p.textContent = entry;
         content.appendChild(div);

      }
   }
}
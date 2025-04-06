function editElement(element, match, replacer) {
    element.textContent = element.textContent.replace(match, replacer);
} // 50 points


// function editElement(element, match, replacer) {
//     const regex = new RegExp(match, 'g');
//     element.textContent = element.textContent.replace(regex, replacer);
// } // 100 points

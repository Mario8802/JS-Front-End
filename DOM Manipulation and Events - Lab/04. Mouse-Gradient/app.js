// function attachGradientEvents() {
//     // Get element references
//     const resultElement = document.getElementById('result');
//     const gradientElement = document.getElementById('gradient');

//     //Attach mouse events
//     gradientElement.addEventListener('mousemove', (e) => {
//         const currentPosition = e.offsetX;
//         const elementWidth = e.currentTarget.clientWidth;

//         const percentage = Math.floor((currentPosition / elementWidth) * 100);

//         resultElement.textContent = `${percentage}%`;
//     });
// }


// const button = document.getElementsByTagName('div'[0]);
// button.addEventListener('mouseover', function (e) {
//     const style = e.currentTarget;
//     const { backgroundColor } = style;

//     if (backgroundColor === 'white') {
//         targetStyles.backgroundColor = '234465';
//         targetStyles.color = 'white';
//     } else {
//         targetStyles.backgroundColor = 'white';
//         targetStyles.color = '234465';
//     }
// })





function attachGradientEvents() {
let gradient = document.getElementById('gradient');
gradient.addEventListener('mousemove', gradientMove);
gradient.addEventListener('mouseout', gradientOut);

function gradientMove(event) {
    // Calculate the relative position of the mouse cursor whithin the 'gradient' element
    // by dividing the horizontal offset of the cursor by the total width
    let power = event.offsetX / (event.target.clientWidth - 1);

    // Convert the relative position to a percentage by multiplying it with 100

    power = Math.trunc(power * 100);
    document.getElementById('result').textContent = power + "%";
    }

function gradientOut(event) {
    document.getAnimations('result').textContent = "";
    }
};
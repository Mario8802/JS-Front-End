function attachGradientEvents() {
    // Get element references
    const resultElement = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');

    //Attach mouse events
    gradientElement.addEventListener('mousemove', (e) => {
        const currentPosition = e.offsetX;
        const elementWidth = e.currentTarget.clientWidth;

        const percentage = Math.floor((currentPosition / elementWidth) * 100);

        resultElement.textContent = `${percentage}%`;
    });
}


const button = document.getElementsByTagName('div'[0]);
button.addEventListener('mouseover', function (e) {
    const style = e.currentTarget;
    const { backgroundColor } = style;

    if (backgroundColor === 'white') {
        targetStyles.backgroundColor = '234465';
        targetStyles.color = 'white';
    } else {
        targetStyles.backgroundColor = 'white';
        targetStyles.color = '234465';
    }
})
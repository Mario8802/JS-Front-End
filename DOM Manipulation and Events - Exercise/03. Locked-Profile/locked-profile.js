document.addEventListener('DOMContentLoaded', solve);

function solve() {
    //TODO
    // Add event listeners to each 'More' button

    // Find button's parent 
    // Find curent profile's lock status

    // If locked, do nothing
    // Otherwise, toggle additional info and change button text 
    // If hidden, show it
    // Otherwise, hide it

    let buttons = Array.from(document.querySelectorAll('button'));

    for (let button of buttons) {
        button.addEventListener('click', toggleText); 
    }

    function toggleText(ev) {
        let profile = ev.target.parentElement;

        let isLocked = profile.querySelector('[type="radio"]').checked;

        if (isLocked) {
            return;
        }

        let info = profile.querySelector('.hidden-fields');

        if (info.style.display == 'block') {
            info.style.display = 'none';
            ev.target.textContent = 'Show more';
        } else {
            info.style.display = 'block';
            ev.target.textContent = 'Show less';
        }
    }
}
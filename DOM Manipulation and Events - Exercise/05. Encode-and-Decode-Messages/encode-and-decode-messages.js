document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeTextarea = document.querySelector('#encode textarea');
    const decodeTextarea = document.querySelector('#decode textarea');

    const encodeBtn = document.querySelector('#encode button');
    const decodeBtn = document.querySelector('#decode button');

    encodeBtn.addEventListener('click', encodeMessage);
    decodeBtn.addEventListener('click', decodeMessage);

    function encodeMessage(e) {
        e.preventDefault(); 

        const input = encodeTextarea.value;
        let encoded = '';

        for (let i = 0; i < input.length; i++) {
            encoded += String.fromCharCode(input.charCodeAt(i) + 1);
        }

        decodeTextarea.value = encoded;
        encodeTextarea.value = '';
    }

    function decodeMessage(e) {
        e.preventDefault();

        const encoded = decodeTextarea.value;
        let decoded = '';

        for (let i = 0; i < encoded.length; i++) {
            decoded += String.fromCharCode(encoded.charCodeAt(i) - 1);
        }

        decodeTextarea.value = decoded;
    }
}

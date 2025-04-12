function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/reservations/';

    const inputName = document.getElementById('names'); 
    const inputDays = document.getElementById('days');
    const inputDate = document.getElementById('date');

    const addBtn = document.getElementById('add-reservation');
    const editBtn = document.getElementById('edit-reservation');
    const loadBtn = document.getElementById('load-history');
    const list = document.getElementById('list');

    let currentId = null;

    loadBtn.addEventListener('click', onLoad);
    addBtn.addEventListener('click', onAdd);
    editBtn.addEventListener('click', onEdit);

    async function onLoad() {
        list.innerHTML = '';
        editBtn.disabled = true;
        addBtn.disabled = false;
        clearInputs();
        currentId = null;

        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();

            Object.entries(data).forEach(([id, reservation]) => {
                const container = document.createElement('div');
                container.className = 'container';

                const h2 = document.createElement('h2');
                h2.textContent = reservation.names;

                const h3Date = document.createElement('h3');
                h3Date.textContent = reservation.date;

                const h3Days = document.createElement('h3');
                h3Days.id = 'reservation_days';
                h3Days.textContent = reservation.days;

                const buttonsContainer = document.createElement('div');
                buttonsContainer.className = 'buttons-container';

                const changeBtn = document.createElement('button');
                changeBtn.className = 'change-btn';
                changeBtn.textContent = 'Change';
                changeBtn.addEventListener('click', () => {
                    inputName.value = reservation.names;
                    inputDays.value = reservation.days;
                    inputDate.value = reservation.date;

                    currentId = reservation._id;

                    addBtn.disabled = true;
                    editBtn.disabled = false;

                    container.remove();
                });

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'delete-btn';
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', async () => {
                    await fetch(BASE_URL + reservation._id, {
                        method: 'DELETE'
                    });
                    await onLoad();
                });

                buttonsContainer.appendChild(changeBtn);
                buttonsContainer.appendChild(deleteBtn);

                container.appendChild(h2);
                container.appendChild(h3Date);
                container.appendChild(h3Days);
                container.appendChild(buttonsContainer);

                list.appendChild(container);
            });
        } catch (err) {
            console.error('Error loading:', err);
        }
    }

    async function onAdd(event) {
        event.preventDefault();

        const names = inputName.value.trim();
        const days = inputDays.value.trim();
        const date = inputDate.value.trim();

        if (!names || !days || !date) return;

        const reservation = { names, days, date };

        try {
            await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(reservation)
            });
            clearInputs();
            await onLoad();
        } catch (err) {
            console.error('Error adding:', err);
        }
    }

    async function onEdit(event) {
        event.preventDefault();

        if (!currentId) return;

        const names = inputName.value.trim();
        const days = inputDays.value.trim();
        const date = inputDate.value.trim();

        if (!names || !days || !date) return;

        const updated = { names, days, date, _id: currentId };

        try {
            await fetch(BASE_URL + currentId, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updated)
            });

            clearInputs();
            currentId = null;
            editBtn.disabled = true;
            addBtn.disabled = false;

            await onLoad();
        } catch (err) {
            console.error('Error editing:', err);
        }
    }

    function clearInputs() {
        inputName.value = '';
        inputDays.value = '';
        inputDate.value = '';
    }
}

solve();

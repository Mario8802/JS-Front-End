function solve() {
    const firstNameInput = document.getElementById("first_name");
    const lastNameInput = document.getElementById("last_name");
    const phoneInput = document.getElementById("phone");
    const addBtn = document.getElementById("add_btn");

    const pendingList = document.getElementById("pending_contact_list");
    const contactList = document.getElementById("contact_list");

    addBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const phone = phoneInput.value.trim();

        if (!firstName || !lastName || !phone) return;

        const li = document.createElement("li");
        li.className = "contact";

        const nameSpan = document.createElement("span");
        nameSpan.className = "name names";
        nameSpan.textContent = `${firstName} ${lastName}`;

        const phoneSpan = document.createElement("span");
        phoneSpan.className = "phone_number";
        phoneSpan.textContent = phone;

        const editBtn = document.createElement("button");
        editBtn.className = "edit_btn";
        editBtn.textContent = "Edit";

        const verifyBtn = document.createElement("button");
        verifyBtn.className = "verify_btn";
        verifyBtn.textContent = "Verify";

        li.appendChild(nameSpan);
        li.appendChild(phoneSpan);
        li.appendChild(editBtn);
        li.appendChild(verifyBtn);
        pendingList.appendChild(li);

        firstNameInput.value = "";
        lastNameInput.value = "";
        phoneInput.value = "";

        editBtn.addEventListener("click", () => {
            const currentNameSpan = li.querySelector(".name");
            const currentPhoneSpan = li.querySelector(".phone_number");

            if (!currentNameSpan || !currentPhoneSpan) return;

            const nameParts = currentNameSpan.textContent.split(" ");
            const f = nameParts[0] || "";
            const l = nameParts[1] || "";

            firstNameInput.value = f;
            lastNameInput.value = l;
            phoneInput.value = currentPhoneSpan.textContent;

            li.remove();
        });

        verifyBtn.addEventListener("click", () => {
            const currentNameSpan = li.querySelector(".name");
            const currentPhoneSpan = li.querySelector(".phone_number");

            if (!currentNameSpan || !currentPhoneSpan) return;

            li.remove();

            const verifiedLi = document.createElement("li");
            verifiedLi.className = "verified_contact";

            const nameVerified = document.createElement("span");
            nameVerified.className = "name names";
            nameVerified.textContent = currentNameSpan.textContent;

            const phoneVerified = document.createElement("span");
            phoneVerified.className = "phone_number";
            phoneVerified.textContent = currentPhoneSpan.textContent;

            const deleteBtn = document.createElement("button");
            deleteBtn.className = "delete_btn";
            deleteBtn.textContent = "Delete";

            verifiedLi.appendChild(nameVerified);
            verifiedLi.appendChild(phoneVerified);
            verifiedLi.appendChild(deleteBtn);

            contactList.appendChild(verifiedLi);

            deleteBtn.addEventListener("click", (e) => {
                e.preventDefault();
                verifiedLi.remove();
            });
        });
    });
}


document.addEventListener('DOMContentLoaded',()=> {
    const form = document.getElementById('userForm');
    const feedback = document.getElementById('feedback');
    const userList = document.getElementById('users');

    form.addEventListener('submit', e => {
        e.preventDefault();
        feedback.textContent = '';

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const age = Number(form.age.value.trim());

        if (!isValidName(name) || !isValidEmail(email) || !isValidAge(age)) {
            feedback.textContent = 'Please fill out all fields correctly.';
            return;
        }
        if (Number(age) <= 18){
            feedback.textContent = 'You must be over 18 to submit';
            return;
        }

        addUserToList(name, email, age);
        form.reset();
    });
    function isValidName(name) {
        return name !== "";
    }
    function isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }
    function isValidAge(age) {
        return !isNaN(age) && Number(age) > 0;
    }
    function addUserToList(name, email, age) {
        const li = document.createElement('li');
        li.textContent = `Full Name: ${name}, Email: ${email}, Age:${age}`;
        userList.appendChild(li);
    }
});
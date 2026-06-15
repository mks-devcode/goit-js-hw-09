
function getFromLs(key) {
    const savedData = localStorage.getItem(key);
    if (!savedData) {
        return null;
    };
    return JSON.parse(savedData);
};

const localStorageKey = 'feedback-form-state';
let formData = getFromLs(localStorageKey) || { email: '', message: '' };

const formElem = document.querySelector('.feedback-form');
console.log(formElem);

formElem.elements.email.value = formData.email;
formElem.elements.message.value = formData.message;

formElem.addEventListener('input', (e) => {
    if (e.target.name === 'email') 
        formData.email = e.target.value.trim();
     else if (e.target.name === 'message') 
        formData.message = e.target.value.trim();
    
    console.log(formData);
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.message === '') {
        return alert('Fill please all fields')
    };
    console.log(formData.email);
    console.log(formData.message);

    localStorage.removeItem(localStorageKey)
    formElem.reset();

    formData.email = '';
    formData.message = '';
});


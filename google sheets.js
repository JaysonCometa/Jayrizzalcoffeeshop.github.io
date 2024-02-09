const scriptURL = 'https://script.google.com/macros/s/AKfycbzZWFvR3tWLA07n8SfqSttxpjHBycVjMB7Mf_zEgvyUTE5M-INjokKsxRLmToFxV31HLA/exec';

const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { 
        method: 'POST', 
        body: new FormData(form)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        alert("Thank you! Your customer review is submitted successfully. Thank you and come again!!!");
        window.location.reload();
    })
    .catch(error => console.error('Error!', error.message));
});




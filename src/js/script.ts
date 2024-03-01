declare let emailjs: any;

function email() {
    emailjs.init('5xTDUYyzNSHlFUD0q');
}

window.onload = function () {
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;

    if (contactForm) {
        contactForm.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            const form = this as HTMLFormElement;
            form.contact_number.value = (Math.random() * 100000) | 0;
            emailjs.sendForm('service_4lhgra7', 'template_aiojq5s', form)
                .then(function () {
                    console.log('SUCCESS!');
                    alert('Your email was successfully sent');
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                    alert('Your email failed to send');
                });
        });
    }
};

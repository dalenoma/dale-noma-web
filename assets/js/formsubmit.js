document.getElementById('contactForm').addEventListener('submit', function () {
    const submitButton = this.querySelector('input[type="submit"]');
    const loader = document.getElementById('loader');

    // Show the loader and disable the submit button
    loader.style.display = 'block';
    submitButton.disabled = true;
    submitButton.value = 'Sending...';
});

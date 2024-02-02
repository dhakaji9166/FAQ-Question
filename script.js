document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq_question');

    faqQuestions.forEach(function(faq) {
        faq.addEventListener('click', function() {
            const main = this.nextElementSibling;

            if (main.style.display === 'block') {
                main.style.display = 'none';
                this.querySelector('.plus_icon').innerText = '+';
                this.querySelector('.arrow-icon i').classList.remove('fa-arrow-down');
                this.querySelector('.arrow-icon i').classList.add('fa-arrow-right');
            } else {
                main.style.display = 'block';
                this.querySelector('.plus_icon').innerText = '-';
                this.querySelector('.arrow-icon i').classList.remove('fa-arrow-right');
                this.querySelector('.arrow-icon i').classList.add('fa-arrow-down');
            }
        });
    });
});


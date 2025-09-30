document.addEventListener('DOMContentLoaded', () => {

    // --- CONTENT DATA ---
    // To update the website content, just edit the data in this section.

    const projects = [
        { title: "Project One", description: "SaaS Framer Template" },
        { title: "Project Two", description: "Modern Framer Template" },
        { title: "Project Three", description: "Portfolio Framer Template" },
        { title: "Project Four", description: "SaaS Framer Template" }
    ];

    const testimonials = [
        {
            quote: "Roshan expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
            author: "William M."
        },
        {
            quote: "Working with Roshan was a pleasure. He transformed our ideas into a polished product with impressive attention to detail in both design and development.",
            author: "Robert P."
        },
        {
            quote: "Roshan's design and development elevated our product, delivering a seamless and intuitive user experience with his technical expertise.",
            author: "James K."
        }
    ];

    const faqs = [
        {
            question: "What services do you offer?",
            answer: "I offer a range of services including product design, frontend and backend development, and UI/UX consulting. My goal is to deliver comprehensive solutions that are both beautiful and functional."
        },
        {
            question: "What is your design process?",
            answer: "My design process is collaborative and iterative. It starts with understanding your goals, followed by wireframing, prototyping, and user testing to ensure the final product is intuitive and effective."
        },
        {
            question: "How do you handle project timelines?",
            answer: "I use agile methodologies to manage projects, breaking down the work into manageable sprints. This allows for flexibility and ensures we meet our deadlines while maintaining high quality."
        }
    ];

    // --- DYNAMIC CONTENT RENDERING ---

    // Render Projects
    const projectGrid = document.querySelector('.project-grid');
    if (projectGrid) {
        projectGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `).join('');
    }

    // Render Testimonials
    const testimonialContainer = document.querySelector('.testimonial-slider');
    let currentTestimonial = 0;

    function renderTestimonial() {
        if (testimonialContainer) {
            testimonialContainer.innerHTML = `
                <div class="testimonial-card">
                    <p>"${testimonials[currentTestimonial].quote}"</p>
                    <h4>- ${testimonials[currentTestimonial].author}</h4>
                </div>
            `;
        }
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        renderTestimonial();
    }

    if (testimonialContainer) {
        renderTestimonial();
        setInterval(nextTestimonial, 5000);
    }

    // Render FAQs
    const faqList = document.querySelector('.faq-list');
    if (faqList) {
        faqList.innerHTML = faqs.map(faq => `
            <div class="faq-item">
                <h3 class="faq-question">${faq.question}</h3>
                <div class="faq-answer">
                    <p>${faq.answer}</p>
                </div>
            </div>
        `).join('');

        // Re-add event listeners for the newly created FAQ items
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const item = question.parentElement;

                item.classList.toggle('active');

                if (item.classList.contains('active')) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = 0;
                }
            });
        });
    }
});
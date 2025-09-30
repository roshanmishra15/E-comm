document.addEventListener('DOMContentLoaded', () => {
    // Testimonial Slider
    const testimonials = [
        {
            quote: "Jules expertly blends design with functionality, transforming our product into a sleek, user-friendly experience that our customers love!",
            author: "William M."
        },
        {
            quote: "Working with Jules was a pleasure. He transformed our ideas into a polished product with impressive attention to detail in both design and development.",
            author: "Robert P."
        },
        {
            quote: "Jules's design and development elevated our product, delivering a seamless and intuitive user experience with his technical expertise.",
            author: "James K."
        }
    ];

    let currentTestimonial = 0;
    const testimonialContainer = document.querySelector('.testimonial-slider');

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
        setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds
    }
});
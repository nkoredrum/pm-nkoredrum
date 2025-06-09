---
layout: default
title: Contact Us
permalink: /contact/
---

<div class="contact-page">
    <div class="contact-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you! Whether you have a story to share, want to collaborate, or just have questions, please don't hesitate to reach out.</p>
    </div>

    <div class="contact-content">
        <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form action="{{ '/contact/submit' | relative_url }}" method="POST" class="contact-form-container">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                
                <div class="form-group">
                    <button type="submit" class="submit-button">
                        Send Message
                    </button>
                </div>
            </form>
        </div>

        <div class="contact-info">
            <h2>Contact Information</h2>
            <div class="contact-details">
                <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <p>Email: <a href="mailto:contact@nkoredrum.org">contact@nkoredrum.org</a></p>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <p>Phone: +256 XXX XXX XXXX</p>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Location: Mbarara, Western Uganda</p>
                </div>

                <div class="contact-item">
                    <i class="fas fa-clock"></i>
                    <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
                </div>
            </div>

            <div class="social-links">
                <h3>Follow Us</h3>
                <div class="social-icons">
                    <a href="https://twitter.com/nkoredrum" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://facebook.com/nkoredrum" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com/nkoredrum" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com/company/nkoredrum" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="contact-map">
        <h2>Find Us</h2>
        <div class="map-container">
            <!-- Google Maps Embed -->
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779525384669!2d30.64000991484009!3d-0.6167200999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d871b8f2536171%3A0x17c8c16d08a2f8f!2sMbarara%2C%20Uganda!5e0!3m2!1sen!2s!4v1685998529580!5m2!1sen!2s" 
                    width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
</div>

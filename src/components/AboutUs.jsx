import React from 'react';
import './AboutUs.css';

function AboutUs() {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <h1>About Paradise Nursery</h1>

                <div className="company-info">
                    <section className="company-section">
                        <h2>Our Story</h2>
                        <p>
                            Welcome to Paradise Nursery, where green meets serenity! Established in 2010,
                            we have been dedicated to bringing the beauty of nature into your homes and gardens.
                            Our passion for plants drives us to provide the highest quality houseplants,
                            garden plants, and accessories to our valued customers.
                        </p>
                    </section>

                    <section className="company-section">
                        <h2>Our Mission</h2>
                        <p>
                            At Paradise Nursery, our mission is to inspire people to create their own green
                            paradise. We believe that plants not only beautify spaces but also improve air
                            quality, reduce stress, and bring joy to everyday life. We strive to make plant
                            ownership accessible and enjoyable for everyone, from beginners to experienced
                            gardeners.
                        </p>
                    </section>

                    <section className="company-section">
                        <h2>What We Offer</h2>
                        <ul>
                            <li>🌿 Wide variety of indoor and outdoor plants</li>
                            <li>🌱 Premium quality seedlings and mature plants</li>
                            <li>🪴 Exotic and rare plant species</li>
                            <li>🌺 Flowering and non-flowering plants</li>
                            <li>🎋 Air-purifying plants for healthier living</li>
                            <li>📦 Safe and secure delivery to your doorstep</li>
                        </ul>
                    </section>

                    <section className="company-section">
                        <h2>Our Commitment</h2>
                        <p>
                            We are committed to sustainable practices and eco-friendly packaging. Every plant
                            is carefully nurtured and inspected before it reaches you. Our expert team is
                            always ready to provide guidance on plant care, ensuring your green friends thrive
                            in their new home.
                        </p>
                    </section>

                    <section className="company-section">
                        <h2>Contact Us</h2>
                        <p>
                            📍 Address: 123 Green Street, Garden City, GC 12345<br />
                            📞 Phone: (555) 123-4567<br />
                            ✉️ Email: info@paradisenursery.com<br />
                            🕒 Hours: Monday - Saturday, 9:00 AM - 6:00 PM
                        </p>
                    </section>
                </div>

                <div className="about-us-footer">
                    <p className="tagline">
                        "Bringing Nature's Paradise to Your Doorstep"
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;

import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.left}>
                <h2>Contact me</h2>
                <p>Include the Information like:</p>
                <ul>
                    <li>Feel free to reach out with job offers or opportunities like…</li>
                    <li>what role are you looking for?</li>
                    <li>how you will contribute to the new team.</li>
                    <li>Are you open for remote work or even relocate?</li>
                </ul>
            </div>
            <div className={styles.right}>
                <p>Looking forward to hearing from you!</p>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>📧</span>
                    <a href="mailto:felix.wallke@gmail.com">felix.wallke@gmail.com</a>
                </div>
                <div className={styles.contactItem}>
                    <span className={styles.icon}>🔗</span>
                    <a href="#" target="_blank" rel="noopener noreferrer">Profile Page</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

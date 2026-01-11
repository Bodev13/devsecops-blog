import React from 'react';
import styles from './contact.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Contact = () => {
    return (
        <section className={styles.contactSection}>
            <div className={styles.contactSection__content}>
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
                        <span className={styles.icon}>
                            <svg width="23" height="18" viewBox="0 0 23 18" fill="none">
                                <rect
                                    x="0.5"
                                    y="0.5"
                                    width="22"
                                    height="17"
                                    rx="2"
                                    stroke="white"
                                    strokeWidth="1"
                                />
                                <path
                                    d="M0.5 3.5L11.5 11L22.5 3.5"
                                    stroke="white"
                                    strokeWidth="1"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <a href="mailto:bo.test@gmail.com">bo.test@gmial.com</a>
                    </div>

                    <div className={styles.contactItem}>
                        <span className={styles.icon}>
                            <svg width="23" height="28" viewBox="-2 -2 28 28" fill="none">
                                <g transform="translate(1.2, -0.8)">
                                    <path
                                        d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.22 8h4.56v14H.22V8ZM7.1 8h4.38v1.91h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.48 3.04 5.48 6.99V22h-4.56v-6.66c0-1.59-.03-3.64-2.22-3.64-2.22 0-2.56 1.73-2.56 3.52V22H7.1V8Z"
                                        stroke="white"
                                        strokeWidth="1"
                                        fill="none"
                                        strokeLinejoin="miter"
                                    />
                                </g>
                            </svg>
                        </span>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            Profile Page
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

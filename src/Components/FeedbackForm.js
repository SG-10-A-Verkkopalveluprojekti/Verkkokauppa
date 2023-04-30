import React, { useState } from 'react';
import axios from 'axios';

export default function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !email || !message) {
            alert('All fields are required.');
            return;
        }
        
        const data = { name, email, message };

        axios.post('http://localhost:8000/feedback/saveFeedback.php', data)
            .then((response) => {
                alert('Feedback sumbitted succesfully.');
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                alert('Failed to submit feedback.');
            });
    }

    return (
        <form onSubmit={handleSubmit} className="feedback-form">
            <h3>Give us feedback</h3>
            <label className="feedback-label">Name: *required</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

            <label className="feedback-label">Email: *</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label className="feedback-label">Message: *</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button type="submit" className="feedback-submit">Submit</button>
        </form>
    );
}
import React from "react";
import InfoCard from './InfoCard';

export default function Information() {
    const cardData = [
        {
            title: 'Juuso Pesonen',
            text: '- Done: - Products listing ideas and planning. - Logo and half of products images done with Midjourney AI. - Front page carousel banner images. - Products by category section and products shown on each category. - Category buttons on front page. - Search bar functionality. - Feedback page. - Information page. -  Total of hours done: '
        },
        {
            title: 'Samuli Pohjola',
            text: '- Done: - Another example text to showcase the flexibility of the card component. - Total of hours done: '
        },
        {
            title: 'Tuomas Kärki',
            text: '- Done: - Yet another example text to demonstrate the reusability of the InfoCard component. - Total of hours done: '
        },
        {
            title: 'Riku Ketomäki',
            text: '- Done: - This is the final example text, but you can customize it as needed. - Total of hours done: ',
        },
    ];

    const splitText = (text) => text.split('-').filter(item => item.trim() !== '');

    return (
        <div className="container information-container">
            <h2 className="text-center text-white mb-4">Information about project site</h2>
            <div className="row">
                {cardData.map((data, index) => (
                    <div key={index} className="col-md-6 col-lg-3 mb-4">
                        <InfoCard title={data.title} textItems={splitText(data.text)} />
                    </div>
                ))}
            </div>
        </div>
    );
}
import React from "react";
import InfoCard from './InfoCard';

export default function Information() {
    const cardData = [
        {
            title: 'Juuso Pesonen',
            text: '- Done: - Products listing ideas and planning. - Logo and half of products images done with Midjourney AI. - Front page carousel banner images. - Products by category section and products shown on each category. - Category buttons on front page. - Search bar functionality. - Shopping cart products counter. - Feedback page. - Information page. -  Total of logged hours done: 45h 25m '
        },
        {
            title: 'Samuli Pohjola',
            text: '- Done: - Front page layout. - Front page CSS. - Single product backend. - Product carousel. - Discount carousel. - Code that shows discount prices. - Total of logged hours done: 44h 45m'
        },
        {
            title: 'Tuomas Kärki',
            text: '- Done: - Yet another example text to demonstrate the reusability of the InfoCard component. - Total of logged hours done: '
        },
        {
            title: 'Riku Ketomäki',
            text: '- Done: - Side navigation bar - Database creation code - Item page CSS - Admin page where categories and products can be added - Ordering for shopping cart - Product amounts and delete button for shopping cart - Total of logged hours done: 59h',
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
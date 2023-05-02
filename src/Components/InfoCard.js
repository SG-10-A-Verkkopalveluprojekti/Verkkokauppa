import React from "react";

export default function InformationPage({ title, textItems}) {

    return (
        <div className="card card-info h-100">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="card-text-columns">
                    {textItems.map((item, index) => (
                        <p key={index} className="card-text">{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
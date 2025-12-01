import React from "react";
import "../assets/css/WhyTokenization.css";

const GeneralCard = ({ title, description, tags, buttonText, onClick }) => {
    return (
        <div>
            <div className="general-card">
                <h3 className="general-card-header">{title}</h3>
                <div className="general-card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="general-card-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default function CardList() {
    const cardData = [
        {
            title: "Settlement Is Broken",
            tags: ["2-5 days", "Tokenized assets settle instantly, globally, 24/7", "High intermediaries", "High reconciliation cost"],
        },
        {
            title: "Liquidity Is Locked",
            tags: ["Real estate", "Private credit", "Funds", "Commodities", "Tokenization unlocks fractional, global liquidity"],
        },
        // Qo'shimcha cardlar bu yerga qo'shish mumkin...
    ];

    const handleCardButtonClick = (cardName) => {
        console.log(`${cardName} button clicked!`);
    };

    return (
        <div className="general-card-wrapper">
            {cardData.map((card, index) => (
                <GeneralCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    tags={card.tags}
                    buttonText={card.buttonText}
                    onClick={() => handleCardButtonClick(card.title)}
                />
            ))}
        </div>
    );
}

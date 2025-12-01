import React from "react";
import "../assets/css/TokenInfoCards.css"; 

const InfoBlock = ({ heading, items }) => {
    return (
        <div className="info-block">
            <h3 className="info-block-title">{heading}</h3>

            <div className="info-block-tags">
                {items.map((item, idx) => (
                    <span key={idx} className="info-block-tag">
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default function InfoBlockGroup() {
    const blocks = [
        {
            heading: "Institutions Moving Onchain",
            items: [
                "Over $50B of RWAs live on-chain",
                "tokenized real estate",
                "tokenized credit markets",
                "tokenized funds"
            ],
        },
        {
            heading: "Lorem Ipsum Dolor",
            items: [
                "real estate",
                "private credit",
                "Funds",
                "Commodities",
                "Tokenization unlocks fractional, global liquidity"
            ],
        }
    ];

    return (
        <div className="info-block-wrapper">
            {blocks.map((block, idx) => (
                <InfoBlock key={idx} heading={block.heading} items={block.items} />
            ))}
        </div>
    );
}

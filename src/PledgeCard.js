import React from 'react';
import "./PledgeCard.css";

function PledgeCard() {
    return (
        <div className="pledgecard">
            <h2>About This Project</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <div className="pledgecard-content">
                <div className="pledgecard-element">
                    <h3>Bamboo Stand</h3>
                    <h4>Pledge $25 or more</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h1>101<span className="small">left</span></h1>
                    <button className="btn-cyan">Select Reward</button>
                </div>
                <div className="pledgecard-element">
                    <h3>Bamboo Stand</h3>
                    <h4>Pledge $25 or more</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h1>101<span className="small">left</span></h1>
                    <button className="btn-cyan">Select Reward</button>
                </div>
                <div className="pledgecard-element">
                    <h3>Bamboo Stand</h3>
                    <h4>Pledge $25 or more</h4>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <h1>101<span className="small">left</span></h1>
                    <button className="btn-cyan">Select Reward</button>
                </div>
            </div>
        </div>
    )
}

export default PledgeCard

import React, { Component } from 'react';
import './StatsCard.css';


export class StatsCard extends Component {
    render() {
        return (
            <div className="statscard">
                <div className="statscontent">
                    <div className="statscard-element">
                        <h1>$89,000</h1>
                        <p>of $100,000 backed</p>
                    </div>
                    <div className="spacer"></div>
                    <div className="statscard-element">
                        <h1>5007</h1>
                        <p>Total Backers</p>
                    </div>
                    <div className="spacer"></div>
                    <div className="statscard-element">
                        <h1>56</h1>
                        <p>Days Left</p>
                    </div>
                </div>
                <div className="progress-parent">
                    <div className="progress-child"></div>
                </div>
            </div>
        )
    }
}

export default StatsCard

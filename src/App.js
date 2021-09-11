import React, { Component } from 'react';
import Header from './Header';
import './App.css';
import BookmarkCard from './BookmarkCard';
import StatsCard from './StatsCard';
import PledgeCard from './PledgeCard';

export class App extends Component {
  render() {
    return (
      <div className="App">
         <div className="container">
          <div className="img">
            <Header/>
          </div>
          <div className="content">
            <BookmarkCard />
            <StatsCard />
            <PledgeCard />
          </div>
         </div>
    </div>
    )
  }
}

export default App;

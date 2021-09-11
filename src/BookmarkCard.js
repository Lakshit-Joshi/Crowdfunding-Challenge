import React, { Component } from 'react';
import logo from './assets/logo-mastercraft.svg';
import bookmark from './assets/icon-bookmark.svg';
import "./BookmarkCard.css";

export class BookmarkCard extends Component {

    state = { bookmarked: false};

    handleBookmark = () => {
        this.setState({ bookmarked: !this.state.bookmarked });
    }

    render() {
        return (
            <div className="bookmarkcard">
                <img src={logo} className="logo" alt="mastercraft"></img>
                <div className="bookmarkcard-content">
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautiful & handcrafted monitor monitor stand to reduce neck and eye strain</p>
                    <button className="btn-cyan btn-bookmark">Back this project</button>
                    <button onClick={this.handleBookmark} className={this.state.bookmarked ? "bookmarked" : "btn-bookmark-icon"}>
                        <img src={bookmark} alt="bookmark" style={{height: "30px", width: "30px", marginRight: "10px"}}></img>
                        {"  "}Bookmark
                    </button>
                </div>
            </div>
        )
    }
}

export default BookmarkCard

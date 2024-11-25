import React, { useState } from 'react';
import './ProductView.css';

const ProductView: React.FC = () => {
    const [comments, setComments] = useState<string[]>([]);
    const [newComment, setNewComment] = useState<string>("");

    const handleAddComment = () => {
        if (newComment.trim() !== "") {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="navbar-header">
                    <img src="/logo.png" alt="homade" className="logo" />
                </div>
                <nav className="navbar">
                    <ul>
                        <li>
                            <a href="#search">
                                <img src="/searchicon.png" alt="Search" className="icon" />
                                Search
                            </a>
                        </li>
                        <li>
                            <a href="#profile">
                                <img src="/profilicon.png" alt="Profile" className="icon" />
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#basket">
                                <img src="/basketicon.png" alt="Basket" className="icon" />
                                Basket
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Main Content: Split into Two Sections */}
            <div className="product-view">
                {/* Left Section: Product Image */}
                <div className="product-image-section">
                    <img
                        src="/pizza.jpg"
                        alt="Italian Pizza"
                        className="product-image"
                    />
                </div>
                <div className='ADDTOBASKET'>
                    <a href="/basket"> {/* Link to the basket page */}

                        <img
                            src="/+.png"
                            alt="addtobasket"
                            className="basket-image"
                        />
                    </a>
                </div>

                {/* Right Section: Owner Profile and Description */}
                <div className="product-details-section">
                    <div className="profile-card">
                        <img
                            src="/femme.jpg"
                            className="profile-avatar"
                        />
                        <div className="profile-info">
                            <h2 className="profile-name">Anna Parker</h2>
                            <p className="profile-description">
                                <strong>I made:</strong> Italian Pizza
                                <br />
                                <strong>Ingredients:</strong> Tomato Sauce, Mozzarella, Basil
                            </p>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="product-description">
                        <h3>Description</h3>
                        <p>
                            This Italian Pizza is made with fresh ingredients, including
                            homemade tomato sauce, creamy mozzarella, and aromatic basil
                            leaves. Perfect for any occasion!
                        </p>
                    </div>
                </div>
            </div>

            {/* Comments Section */}
            <div className="comments-section">
                <h3>Comments</h3>
                <div className="add-comment">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <button onClick={handleAddComment} className="comment-button">
                        Add Comment
                    </button>
                </div>
                <ul className="comments-list">
                    {comments.map((comment, index) => (
                        <li key={index} className="comment-item">
                            {comment}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductView;


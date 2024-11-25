import React, { useState } from 'react';
import './Product.css';

const Product: React.FC = () => {
    const [profileName, setProfileName] = useState<string>('');
    const [profileDescription, setProfileDescription] = useState<string>('');
    const [profilePhoto, setProfilePhoto] = useState<string | null>(null);

    // Handle file upload for profile photo
    const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfilePhoto(reader.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="product">
            {/* Header Section */}
            <header className="product-header">
                <button className="back-button" onClick={() => window.history.back()}>
                    <img src="/back.png" alt="Back" className="back-icon" />
                </button>
            </header>

            {/* Main Content Section */}
            <div className="product-content">
                {/* Left: Product Image and Actions */}
                <div className="product-image-section">
                    <img src="/product.jpg" alt="Product" className="product-image" />
                    <div className="product-actions">
                        <button className="action-button">Modifier</button>
                        <button className="action-button">Supprimer</button>
                    </div>
                </div>

                {/* Right: Profile Card Section */}
                <div className="profile-card">
                    <h2 className="profile-title">Your Profile</h2>

                    <div className="profile-photo">
                        {profilePhoto ? (
                            <img src={profilePhoto} alt="Profile" className="profile-image" />
                        ) : (
                            <label className="profile-placeholder">
                                <span>Upload a photo</span>
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="photo-upload"
                                    onChange={handlePhotoUpload}
                                />
                            </label>
                        )}
                    </div>

                    <div className="profile-form">
                        <input
                            type="text"
                            className="profile-input"
                            placeholder="Enter your name"
                            value={profileName}
                            onChange={(e) => setProfileName(e.target.value)}
                        />
                        <textarea
                            className="profile-description"
                            placeholder="Write your description..."
                            value={profileDescription}
                            onChange={(e) => setProfileDescription(e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;

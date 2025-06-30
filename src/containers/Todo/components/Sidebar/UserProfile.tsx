import React from 'react';

interface UserProfileProps {
  name: string;
  email: string;
  avatar?: string;
}

function UserProfile({ name, email, avatar }: UserProfileProps) {
  // Get initials from name for avatar placeholder
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="user-profile">
      <div className="profile-avatar">
        {avatar ? (
          <img src={avatar} alt={name} className="avatar-image" />
        ) : (
          <div className="avatar-placeholder">
            {getInitials(name)}
          </div>
        )}
      </div>
      
      <div className="profile-info">
        <h3 className="profile-name">{name}</h3>
        <p className="profile-email">{email}</p>
      </div>
      
      <button className="profile-menu-btn">
        <span className="menu-dots">⋯</span>
      </button>
    </div>
  );
}

export default UserProfile; 
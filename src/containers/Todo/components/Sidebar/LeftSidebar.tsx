import React from 'react';
import SidebarItem from './SidebarItem';
import UserProfile from './UserProfile';

interface LeftSidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

function LeftSidebar({ selectedCategory, onCategoryChange }: LeftSidebarProps) {
  // Sidebar menu items - similar to Microsoft To-Do
  const menuItems = [
    {
      id: 'today',
      icon: '☀️',
      title: 'Günüm',
      count: 2,
      route: '/todos/today'
    },
    {
      id: 'important',
      icon: '⭐',
      title: 'Önemli',
      count: 0,
      route: '/todos/important'
    },
    {
      id: 'planned',
      icon: '📅',
      title: 'Planlanan',
      count: 0,
      route: '/todos/planned'
    },
    {
      id: 'assigned',
      icon: '👤',
      title: 'Bana atanmış',
      count: 0,
      route: '/todos/assigned'
    },
    {
      id: 'tasks',
      icon: '🏠',
      title: 'Görevler',
      count: 2,
      route: '/todos/tasks',
      hasSubmenu: true
    }
  ];

  const bottomMenuItems = [
    {
      id: 'daily',
      icon: '📝',
      title: 'Günlük Görevler',
      count: 1,
      route: '/todos/daily'
    },
    {
      id: 'candidates',
      icon: '📋',
      title: 'Aday liste',
      count: 1,
      route: '/todos/candidates'
    }
  ];

  return (
    <aside className="left-sidebar">
      {/* User Profile Section */}
      <UserProfile 
        name="muhammet ali mayi"
        email="muhammetmayi.54@gmail.com"
      />

      {/* Search Section */}
      <div className="search-section">
        <div className="search-input">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Ara" 
            className="search-field"
          />
        </div>
      </div>

      {/* Main Menu Items */}
      <nav className="sidebar-nav">
        <ul className="nav-list">
          {menuItems.map(item => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              count={item.count}
              isActive={selectedCategory === item.id}
              hasSubmenu={item.hasSubmenu}
              onClick={() => onCategoryChange(item.id)}
            />
          ))}
        </ul>

        {/* Separator */}
        <div className="nav-separator"></div>

        {/* Bottom Menu Items */}
        <ul className="nav-list">
          {bottomMenuItems.map(item => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              count={item.count}
              isActive={selectedCategory === item.id}
              onClick={() => onCategoryChange(item.id)}
            />
          ))}
        </ul>
      </nav>

      {/* Add New List Button */}
      <div className="add-list-section">
        <button className="add-list-btn">
          <span className="add-icon">+</span>
          <span>Yeni liste</span>
        </button>
      </div>
    </aside>
  );
}

export default LeftSidebar; 
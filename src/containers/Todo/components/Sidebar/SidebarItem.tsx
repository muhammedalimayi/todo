import React from 'react';

interface SidebarItemProps {
  icon: string;
  title: string;
  count?: number;
  isActive?: boolean;
  hasSubmenu?: boolean;
  onClick: () => void;
}

function SidebarItem({ 
  icon, 
  title, 
  count, 
  isActive = false, 
  hasSubmenu = false, 
  onClick 
}: SidebarItemProps) {
  return (
    <li className={`sidebar-item ${isActive ? 'active' : ''}`}>
      <button className="sidebar-item-btn" onClick={onClick}>
        <div className="item-content">
          <span className="item-icon">{icon}</span>
          <span className="item-title">{title}</span>
        </div>
        
        <div className="item-actions">
          {count !== undefined && count > 0 && (
            <span className="item-count">{count}</span>
          )}
          
          {hasSubmenu && (
            <span className="submenu-arrow">▼</span>
          )}
        </div>
      </button>
    </li>
  );
}

export default SidebarItem; 
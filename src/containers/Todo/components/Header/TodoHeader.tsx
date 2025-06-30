import React from 'react';

interface TodoHeaderProps {
  title: string;
  date: string;
  taskCount: number;
  backgroundImage?: string;
}

function TodoHeader({ title, date, taskCount, backgroundImage }: TodoHeaderProps) {
  return (
    <header className="todo-header">
      {/* Background Image */}
      <div 
        className="header-background"
        style={{
          backgroundImage: backgroundImage 
            ? `url(${backgroundImage})` 
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        {/* Header Content */}
        <div className="header-content">
          <div className="header-top">
            <h1 className="header-title">{title}</h1>
            <div className="header-actions">
              <button className="header-action-btn" title="Paylaş">
                <span>📤</span>
              </button>
              <button className="header-action-btn" title="Seçenekler">
                <span>⚙️</span>
              </button>
              <button className="header-action-btn" title="Daha fazla">
                <span>⋯</span>
              </button>
            </div>
          </div>
          
          <div className="header-info">
            <p className="header-date">{date}</p>
            {taskCount > 0 && (
              <p className="task-count">{taskCount} görev</p>
            )}
          </div>
        </div>
      </div>

      {/* Today's suggestion banner (like Microsoft To-Do) */}
      {title === 'Günüm' && (
        <div className="suggestion-banner">
          <span className="suggestion-icon">💡</span>
          <span className="suggestion-text">Son tarihe göre sıralandı</span>
          <button className="suggestion-close">✕</button>
        </div>
      )}
    </header>
  );
}

export default TodoHeader; 
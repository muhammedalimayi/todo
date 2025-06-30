import React, { useState } from 'react';
import './TodoApp.css';

// Components
import LeftSidebar from './components/Sidebar/LeftSidebar';
import TodoHeader from './components/Header/TodoHeader';

function TodoApp() {
  const [selectedCategory, setSelectedCategory] = useState('today');

  // Get category title based on selection
  const getCategoryTitle = (category: string) => {
    const titles: { [key: string]: string } = {
      today: 'Günüm',
      important: 'Önemli',
      planned: 'Planlanan',
      assigned: 'Bana atanmış',
      tasks: 'Görevler',
    };
    return titles[category] || 'Günüm';
  };

  // Get current date formatted
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('tr-TR', options);
  };

  return (
    <div className="todo-app">
      <LeftSidebar 
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <main className="main-content">
        <TodoHeader 
          title={getCategoryTitle(selectedCategory)}
          date={getCurrentDate()}
          taskCount={0} // Will be dynamic later
        />
        <div className="todo-content">
          {/* Todo list will be added in next phase */}
          <div className="empty-state">
            <p>Todo listesi buraya gelecek...</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TodoApp; 
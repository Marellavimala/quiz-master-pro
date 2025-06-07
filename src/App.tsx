import React, { useState } from 'react';
import CategorySelection from './components/CategorySelection';
import Quiz from './components/Quiz';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  return (
    <div className="App">
      {selectedCategory ? (
        <Quiz category={selectedCategory} onBack={handleBackToCategories} />
      ) : (
        <CategorySelection onSelectCategory={handleCategorySelect} />
      )}
    </div>
  );
}

export default App;
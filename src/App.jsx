import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import './App.css';

function App() {
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Initialize filtered recipes on app load
  React.useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
}

const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;

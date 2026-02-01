import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Chicken Curry', description: 'A spicy Indian dish with chicken.' },
    { id: 3, title: 'Vegetable Stir Fry', description: 'A healthy mix of vegetables.' }
  ],
  searchTerm: '',
  filteredRecipes: [
    { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
    { id: 2, title: 'Chicken Curry', description: 'A spicy Indian dish with chicken.' },
    { id: 3, title: 'Vegetable Stir Fry', description: 'A healthy mix of vegetables.' }
  ],
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe],
    filteredRecipes: [...state.recipes, recipe].filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    filteredRecipes: state.recipes.filter(recipe => recipe.id !== id).filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
    filteredRecipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ).filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  }))
}));

export { useRecipeStore };
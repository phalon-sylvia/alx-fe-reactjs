import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
    bio: "Frontend developer and React enthusiast."
  };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
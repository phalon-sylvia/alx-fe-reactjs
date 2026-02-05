// import React, { useContext } from 'react';
// import UserContext from '../UserContext';

// function UserProfile() {
//   const userData = useContext(UserContext);

//   return (
//     <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
//       <h2 style={{ color: 'blue' }}>{userData?.name ?? 'No Name'}</h2>
//       <p>Age: <span style={{ fontWeight: 'bold' }}>{userData?.age ?? 'N/A'}</span></p>
//       <p>Bio: {userData?.bio ?? 'No bio available.'}</p>
//     </div>
//   );
// }

// export default UserProfile;
import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{userData?.name ?? 'No Name'}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{userData?.age ?? 'N/A'}</span></p>
      <p>Bio: {userData?.bio ?? 'No bio available.'}</p>
    </div>
  );
}

export default UserProfile;
// import UserDetails from './UserDetails';

// function UserInfo() {
//   return <UserDetails />;
// }

// export default UserInfo;
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserInfo() {
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '12px', borderRadius: '6px', maxWidth: '420px' }}>
      <h2 style={{ color: '#0b3d91', margin: '0 0 8px' }}>{userData?.name ?? 'No Name'}</h2>
      <p style={{ margin: '4px 0' }}><strong>Email:</strong> {userData?.email ?? '—'}</p>
      {userData?.age && <p style={{ margin: '4px 0' }}><strong>Age:</strong> {userData.age}</p>}
      {userData?.bio && <p style={{ marginTop: '10px' }}>{userData.bio}</p>}
    </div>
  );
}

export default UserInfo;
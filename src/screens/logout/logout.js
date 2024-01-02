// import React from 'react';
// import "../../shared/globalStyles.css"

// export default function Feed() {
//   return (
//     <div className='screen-container'>Feed</div>
//   )
// }

// logout/Logout.js
import React from 'react';

export default function Logout() {
  const handleLogout = () => {
    // Additional cleanup or API calls for logout can be added here
    // ...

    // For example, you might want to redirect to the login page after logging out
    window.location.href = '/login'; // Replace with the actual login route

    // Alternatively, if you are using React Router, you can use useHistory
    // import { useHistory } from 'react-router-dom';
    // const history = useHistory();
    // history.push('/login');
  };

  return (
    <div className='logout'>
      <h1>Logout Page</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}


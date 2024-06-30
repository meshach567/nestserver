import jwtDecode from 'jwt-decode';

export async function fetchUserFromToken(token) {
  const decoded = jwtDecode(token);
  // Fetch user data from your backend if needed
  // Example:
  // const response = await fetch('http://your-backend-url.com/user', {
  //   headers: { Authorization: `Bearer ${token}` }
  // });
  // const user = await response.json();
  const user = {
    id: decoded.id,
    email: decoded.email,
    isAdmin: decoded.isAdmin, // Adjust based on your token payload
  };
  return user;
}

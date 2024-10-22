export const handleLogout = (router) => {
  // Remove token from local storage
  localStorage.removeItem('token'); // Adjust based on your implementation
  localStorage.removeItem('role'); // Adjust based on your implementation

  // Redirect to the login page
  router.push('/Login'); // Adjust the path as needed
};

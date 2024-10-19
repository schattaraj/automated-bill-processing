import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { decodeJWT } from '@/utils/utils';

const withAuth = (WrappedComponent, allowedRoles = []) => {
  const WithAuthComponent = (props) => {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/Login'); // Redirect to login if no token
          return;
        }

        try {
          // Decode the token
          const decodedToken = decodeJWT(token);
          // Check for expiration
          const currentTime = Date.now() / 1000; // Current time in seconds
          if (decodedToken.exp < currentTime) {
            // Token expired
            localStorage.removeItem('token'); // Optionally clear the token
            localStorage.removeItem('role'); // Optionally clear the role
            router.push('/Login'); // Redirect to login
            return;
          }

          // Check if the user role is allowed
          const userRole = localStorage.getItem('role'); // Adjust according to your token structure
          if (!allowedRoles.includes(userRole)) {
            router.push('/Login'); // Redirect if role is not allowed
            return;
          }
        } catch (error) {
          console.error("Token decoding failed:", error);
          localStorage.removeItem('token'); // Clear invalid token
          localStorage.removeItem('role');
          router.push('/Login'); // Redirect to login
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  WithAuthComponent.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuthComponent;
};

export default withAuth;

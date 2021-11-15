//create a component if a url does not exist it will show this component
import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// this hook gives us access to a method we can use to redirect a user

const NotFound = () => {
  // create a redirect in 3 seconds...

  const router = useRouter();
  // router.push() is saying we want to redirect to home page

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div>
      <h1>404 Not Found</h1>
      <h2>Page cannot be found.</h2>
      <p>
        Go Back to <Link href="/">Home </Link>{' '}
      </p>
    </div>
  );
};

export default NotFound;

import {useUser} from "@clerk/nextjs";

const ClientPage = () => {
    const {isLoaded, isSignedIn, user} = useUser();

    if (isLoaded && !isSignedIn) {
        return null;
    }
  return (
    <div>
        Hello, {user?.username}! Welcome to the client page.
    </div>
  );
};

export default ClientPage;
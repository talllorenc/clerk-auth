import Link from "next/link";
import {auth} from "@clerk/nextjs/server";
import {UserButton} from "@clerk/nextjs";

const Navbar = () => {
    const {userId} = auth();

    return (
        <div className="flex items-center justify-between p-4 bg-amber-900">
            <div>
                <h1>clerk-auth</h1>
            </div>
            <div className="flex items-center gap-4">
                {!userId ? (
                    <div className="flex items-center gap-2">
                        <Link href="/sign-in">Sign in</Link>
                        <Link href="/sign-up">Sign up</Link>
                    </div>
                    ) : (
                    <div className="flex items-center gap-2">
                        <Link href="/profile">Profile</Link>
                        <UserButton/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
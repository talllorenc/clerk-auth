import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Link href="/sign-in">Sign in</Link>
        <Link href="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default Navbar;

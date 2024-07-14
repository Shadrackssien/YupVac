import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="w-full fixed top-0 left-0 py-6 border-b bg-white z-10">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex justify-between items-center">
            <Link href="/">YupVac</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

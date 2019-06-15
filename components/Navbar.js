import Link from "next/link";

const Navbar = () => (
    <nav>
        <div className="nav-wrapper">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link href="/"><a>Home Page</a></Link></li>
                <li><Link href="/users" as="users-page"><a>Users Page</a></Link></li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
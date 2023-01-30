import Link from 'next/link';


const NavBar= () =>{

      
        return (
            <nav className="flex py-4 px-6 border-b border-gray-200">
              <Link href="/">
                <a>My Little Unicorn</a>
              </Link>
              <Link href="/about">
                <a>About Us</a>
              </Link>
              
            </nav>
          );
        };


  export default NavBar;

  
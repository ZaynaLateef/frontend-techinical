import Link from 'next/link';
import { GiUnicorn } from 'react-icons/gi'
 

const NavBar= () =>{

      
        return (
            <><div style={{ padding: "1%", display: "flex", flexDirection: "row", backgroundColor: "black", }}>
            
            <Link style = {{ paddingLeft: ".5%", marginTop: "auto",marginBottom: "auto"}}href="/">
                <GiUnicorn size = {28} fill = {'#ff69b4'}/>
            </Link><Link style={{paddingLeft: "0.5%", marginTop: "auto", marginBottom: "auto", color:"white", fontWeight: "800"}} href="/">
                My Little Unicorn
            </Link>
            <Link style={{ marginTop: "auto", marginBottom: "auto",color:"white", position: "sticky", marginLeft: "75%" }} href="/about">
                    About Us
                </Link>
                <Link style={{marginTop: "auto", marginBottom: "auto", color:"white", position: "sticky", paddingLeft: "1%"}} href="/gallary">
                    Gallery
                </Link>
                </div>
          </>   
        );
        };


  export default NavBar;

  
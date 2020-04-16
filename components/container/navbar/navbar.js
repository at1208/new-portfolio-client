import { Button } from 'antd';
import  Link  from 'next/link';
import './navbar.css'

const Navbar = () => {
  return <React.Fragment>
            <div className='container-fluid p-1 navbar'>
               <div className='row justify-content-center'>

                <Link href='/'>
                   <a><Button className='' size="large" type='link'>ABOUT</Button></a>
                </Link>

                <Link href='/portfolio'>
                  <a><Button className='' size="large" type='link'>PORTFOLIO</Button></a>
                </Link>

                <Link href='/blog'>
                  <a><Button className='' size="large" type='link'>BLOG</Button></a>
                </Link>

                <Link href='/contact'>
                 <a><Button className='' size="large" type='link'>CONTACT</Button></a>
                </Link>

               </div>
            </div>
         </React.Fragment>
}
export default Navbar;

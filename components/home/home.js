import Head from '../container/seo/head';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './home.css';
import About from '../about/about';
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();




const Home = () => {
  return <React.Fragment>
            <div className='home'>
               <div className='home-view-button'>
                  <Button size='large'>View my work</Button>
               </div>
            </div>
         <About />
         </React.Fragment>
}

export default Home;

import Navbar from '../container/navbar/navbar';
import { LinearProgress } from '@material-ui/core';
import SkillBar from './skillbar';
import './about.css';

const About = () => {
  return <React.Fragment>
            <div className='about'>
              <Navbar />
              <h1 className='text-center mt-3'>ABOUT</h1>
              <div className='container-fluid'>
                 <div className='row col justify-content-center'>
                    <div className='col-md-5 text-center m-1 p-3'>
                        <img src="/images/aman.jpg" alt="" width="200" height="200" className='amanImg'/>
                        <h1 className='about-me-title mt-4'>Who's this guy ?</h1>
                        <div className='about-me-description'>
                          <p>I'm a senior undergraduate engineering student .</p>
                          <p> I have serious passion for programming since last 2 years</p>
                        </div>
                    </div>
                    <div className='col-md-5 m-1'>
                    <div className='container-fluid'>
                        <SkillBar />
                    </div>
                    </div>
                 </div>
              </div>
            </div>
         </React.Fragment>
}
export default About;

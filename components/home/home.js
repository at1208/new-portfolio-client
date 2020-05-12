import Link from 'next/link'

const Home = () => {
  return <React.Fragment>
           <div>
              <div className='center-title container-fluid'>
                <h1>Hello, I'm Aman Tiwari</h1>
                <h1>I'm a full-stack web developer</h1>
                <Link href="/about"><button className='view-my-work-btn'>View my work</button></Link>
              </div>
                <style global jsx>{`
                    h1{
                      font-size: 4.5rem;
                      color: dimgrey;
                    }
                    .center-title{
                      height:100vh;
                      text-align:center;
                       
                    }
                    .view-my-work-btn{
                      background-color: teal;
                      padding-top: 13px;
                      border: 0px;
                      padding-bottom: 13px;
                      padding-left: 25px;
                      padding-right: 25px;
                      color: white;
                      font-size: 18px;
                    }
                  `}</style>
          </div>
         </React.Fragment>
}

export default Home;

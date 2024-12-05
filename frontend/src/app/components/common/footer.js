import {Pacifico} from 'next/font/google';
const pacifico = Pacifico({ subsets: ['latin'],weight:'400' })

export default function Footer(){
    return(
        <footer className="container-fluid py-3" style={{'backgroundColor': '#7f005d'} }>
            <div className="container">
                <div className="row">
                   <div className="col-3">
                      <a className={` ${pacifico.className} fs-4` }  style={{'color': '#ff66d6'} }href="#">HMS</a>
                       <h6 className='text-white'>Hotel Management System</h6>
                  </div>

                  <div className="col-3">
                      <h4 className='text-white'>About</h4>
                      <p><a href='#' className='text-white text-decoration-none'>Company</a></p>
                      <p><a href='#' className='text-white text-decoration-none'>History</a></p>
                      <p><a href='#' className='text-white text-decoration-none'>Career</a></p>     
                  </div>
                  <div className="col-3">
                      <h4 className='text-white'>Contact</h4>
                    <p>  
                      
                           <a href='#' className='text-white text-decoration-none me-2'>
                               <i className='fa fa-facebook'></i>
                          </a>
                      
                      
                           <a href='#' className='text-white text-decoration-none me-2'>
                               <i className='fa fa-whatsapp'></i>
                          </a>
                      
                      
                           <a href='#' className='text-white text-decoration-none me-2'>
                               <i className='fa fa-pinterest'></i>
                          </a>
                      

                    </p>
                    <p><a href='/contact' className='text-white text-decoration-none'>Send Message</a></p>
                      
                  </div>
                  <div className="col-3">
                      <h4 className='text-white'>Support</h4>
                      <p><a href='#' className='text-white text-decoration-none'>Privacy Policy</a></p>
                      <p><a href='#' className='text-white text-decoration-none'>Terms & Conditions</a></p>
                      <p><a href='#' className='text-white text-decoration-none'>Career</a></p>     
                  </div>

                </div>

             </div>
            
        </footer>
       
    );
}
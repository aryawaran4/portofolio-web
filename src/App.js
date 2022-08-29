import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGithubSquare, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown, faCode, faContactCard, faDownload, faEllipsis, faEnvelope, faLocationDot, faMouse, faPaperPlane, faPhone, faSwatchbook } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';
import Tabs from './components/AllTabs/Tabs';
import Slider from './components/Slider/Slider';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

function App() {

  const refForm = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      'contact_service',
      'contact_form',
      refForm.current,
      'vYwp1SehkDr5Ov41x'
    ).then(
      () => {
        alert('Message successfully sent!')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send message, please try again')
      }
    )
  }

  return (
    <div className="App flex flex-col items-center">     

      {/* <---------------------------------------------------------NAVBAR----------------------------------------------------------------> */}
      <div id='nav-bar' className='w-full h-fit bg-white fixed top-0 text-secondary text-opacity-70 flex justify-center z-50'>
        <div id='nav-bar-content' className='font-medium w-3/4 text-lg py-4 flex justify-between items-center'>
          <div>          
            <p>Rangga</p>
          </div>
          <div className='flex gap-10 items-center'>
            <a href='#home'>Home</a>
            <a href='#about'>About</a>
            <a href='#skills'>Skills</a>
            <a href="#portofolio">Portofolio</a>
            <a href="#contact">Contact me</a>
            {/* <p>darkmode</p> */}
          </div>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}


      {/* <---------------------------------------------------------HOME------------------------------------------------------------------> */}
      <div id='home' className='w-3/4 z-0'> 
        <div className='w-full bg-white flex items-center py-48 pb-16'>
          <div className=' flex flex-col gap-4 items-start text-tertiary' style={{width: '25%'}}>
            <a href='https://www.linkedin.com/in/aryawarangganasusilo/'><FontAwesomeIcon icon={faLinkedin} size="xl"/></a> 
            <a href='https://github.com/aryawaran4'><FontAwesomeIcon icon={faGithubSquare} size="xl"/></a>
            <a href='#contact'><FontAwesomeIcon icon={faEnvelope} size="xl"/></a> 
          </div>

          <div className='flex flex-col gap-4' style={{width: '40%'}}>
            <h1 className='font-semibold text-5xl'>Hi, I'am Rangga</h1>    
            <p className='text-xl font-semibold text-secondary text-opacity-70'>Frontend developer</p>
            <p className='text-secondary text-opacity-70'>              
              Fresh graduate computer science student with experience in
              web design and web development.
              I like to make your web design come true and working it
              together to make it even better.
            </p>
            <a href='#contact' className='mt-4'>
              <button className='p-4 font-semibold bg-tertiary text-white w-fit rounded-md shadow-md'>Contact me 
              <span className='ml-2 relative top-0.5'><FontAwesomeIcon icon={faContactCard}/></span> </button>
            </a>
          </div>

          <div style={{width: '35%'}}>
            <Player
              autoplay
              keepLastFrame
              // src="https://assets10.lottiefiles.com/packages/lf20_qwl4gi2d.json"
              src={require("../src/assets/hello.json")}
              style={{ height: '400px', width: '400px' }}
            >
            </Player>          
          </div>
        </div>

        <div>
          <p className='font-semibold'>
            <span className='mr-2 relative top-0.5 text-tertiary'>
              <FontAwesomeIcon icon={faMouse} size="xl"/></span> 
              Scroll down 
              <span className='ml-2 relative text-tertiary'><FontAwesomeIcon icon={faArrowDown}/></span> 
          </p>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}


      {/* <---------------------------------------------------------ABOUT-----------------------------------------------------------------> */}
      <div id='about' className='w-3/4 flex flex-col items-center z-0 pt-28'>
        <div className='w-fit font-semibold text-center'>
          <p className='text-5xl mb-2'>About Me</p>
          <p className='text-secondary text-opacity-70'>My introduction</p>
        </div>

        <div className='flex items-center py-24 justify-center'>
          <div className='w-1/2'>
            <Player
              autoplay
              loop
              src={require("../src/assets/about.json")}
              style={{ height: '350px', width: '350px' }}
            >
            </Player> 
          </div>
          
          <div className='flex flex-col gap-10 w-1/2'>
            <p className='text-secondary text-opacity-70'>
              An innovative and visioner guy who seek on achievement. 
              I can find my self in team and work well with others.
              Love to work on web development and web design.
            </p>
            <div className='flex justify-around'>
              <div className='font-semibold text-center'>
                <p className='text-4xl'>01+</p>
                <div className='text-secondary text-opacity-70'>
                  <p>Years</p>
                  <p>experiencee</p>
                </div>
              </div>

              <div className='font-semibold text-center'>
                <p className='text-4xl'>03+</p>
                <div className='text-secondary text-opacity-70'>
                  <p>Completed</p>
                  <p>projects</p>
                </div>
              </div>

              <div className='font-semibold text-center'>
                <p className='text-4xl'>01</p>
                <div className='text-secondary text-opacity-70'>
                  <p>Companies</p>
                  <p>worked</p>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <a target="_blank" href='https://drive.google.com/file/d/1RjI4miNVeu9YM7AebOHuz-vBtbIpYDx4/view?usp=sharing' className='p-4 font-semibold bg-tertiary text-white w-fit rounded-md shadow-md' rel="noreferrer">Download CV 
              <span className='ml-2 relative top-0.5'><FontAwesomeIcon icon={faDownload}/></span> </a>
            </div>
          </div>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}


      {/* <---------------------------------------------------------SKILL-----------------------------------------------------------------> */}
      <div id='skills' className='w-3/4 flex flex-col items-center z-0 pt-28'>
        <div className='w-fit font-semibold text-center'>
          <p className='text-5xl mb-2'>Skills</p>
          <p className='text-secondary text-opacity-70'>My technical level</p>
        </div>

        <div className='flex items-center py-24 justify-center w-full'>
          <div className='flex justify-around gap-10 w-full'>
            <div className='flex gap-4 w-1/3'>
              <div className='relative top-2 text-tertiary'>
                <FontAwesomeIcon icon={faCode} size="2xl"/>
              </div>
              <div className='flex flex-col gap-6 w-full'>
                <div>
                  <p className='font-semibold text-xl'>Frontend developer</p>
                  <p className='text-secondary text-opacity-70 text-sm'>More than 1 years</p>
                </div>
                
                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>HTML</p>
                    <p className='text-secondary text-opacity-70'>90%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "90%"}}></div>
                  </div>            
                </div>

                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>CSS</p>
                    <p className='text-secondary text-opacity-70'>90%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "90%"}}></div>
                  </div>            
                </div>

                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>JavaScript</p>
                    <p className='text-secondary text-opacity-70'>60%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "60%"}}></div>
                  </div>            
                </div>

                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>TypeScript</p>
                    <p className='text-secondary text-opacity-70'>60%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "60%"}}></div>
                  </div>            
                </div>

                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>Angular</p>
                    <p className='text-secondary text-opacity-70'>60%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "60%"}}></div>
                  </div>            
                </div>

                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>React</p>
                    <p className='text-secondary text-opacity-70'>45%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "45%"}}></div>
                  </div>            
                </div>
              </div>
            </div>

            <div className='flex gap-4 w-1/3'>
              <div className='relative top-2 text-tertiary'>
                <FontAwesomeIcon icon={faSwatchbook} size="2xl"/>
              </div>
              <div className='flex flex-col gap-6 w-full'>
                <div>
                  <p className='font-semibold text-xl'>Web Design</p>
                  <p className='text-secondary text-opacity-70 text-sm'>More than 1 years</p>
                </div>
                
                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>Figma</p>
                    <p className='text-secondary text-opacity-70'>50%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "50%"}}></div>
                  </div>            
                </div>

              </div>
            </div>

            <div className='flex gap-4 w-1/3'>
              <div className='relative top-2 text-tertiary'>
                <FontAwesomeIcon icon={faEllipsis} size="2xl"/>
              </div>
              <div className='flex flex-col gap-6 w-full'>
                <div>
                  <p className='font-semibold text-xl'>Others</p>
                  <p className='text-secondary text-opacity-70 text-sm'>TBD</p>
                </div>
                
                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>Firebase</p>
                    <p className='text-secondary text-opacity-70'>30%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "30%"}}></div>
                  </div>            
                </div>

                <div className='font-semibold'>
                  <div className='flex justify-between'>
                    <p className='mb-2'>Github</p>
                    <p className='text-secondary text-opacity-70'>60%</p>
                  </div>
                  <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2.5 ">
                    <div className="bg-tertiary h-2.5 rounded-full" style={{width: "60%"}}></div>
                  </div>            
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}


      {/* <---------------------------------------------------------QUALIFICATION---------------------------------------------------------> */}
      <div id='qualification' className='w-3/4 flex flex-col items-center z-0 pt-28'>
        <div className='w-fit font-semibold text-center'>
          <p className='text-5xl mb-2'>Qualification</p>
          <p className='text-secondary text-opacity-70'>My personal journey</p>
        </div> 

        <Tabs />
        
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}

      
      {/* <---------------------------------------------------------PORTOFOLIO------------------------------------------------------------> */}
      <div id='portofolio' className='w-3/4 flex flex-col items-center z-0 pt-28'>
        <div className='w-fit font-semibold text-center'>
          <p className='text-5xl mb-2'>Portofolio</p>
          <p className='text-secondary text-opacity-70'>Most recent work</p>
        </div> 

        <Slider />

      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}

      {/* <---------------------------------------------------------SERVICES--------------------------------------------------------------> */}
      <div id='services' className='w-3/4 flex flex-col items-center z-0 py-28'>
        <div className='w-3/4 font-semibold text-center bg-tertiary text-white flex items-center px-10 rounded-md'>
          <div className='flex flex-col items-start w-1/2'>
            <p className='font-semibold text-xl mb-2'>You have a new project ???</p>
            <p className='text-left '>Contact our team now and we're gonna start working on your new project.</p>
            <div className='mt-10'>
                <a target="_blank" href='https://www.instagram.com/dartdroid/' className='p-4 font-semibold bg-white text-tertiary w-fit rounded-md shadow-md' rel="noreferrer">Contact us 
                <span className='ml-2 relative top-0.5'><FontAwesomeIcon icon={faContactCard}/></span> </a>
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-end'>
            <Player
              autoplay
              loop
              src={require("../src/assets/envelope.json")}
              style={{ height: '350px', width: '400px' }}
            >
            </Player> 
          </div>
        </div> 

      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}

      {/* <---------------------------------------------------------CONTACTME-------------------------------------------------------------> */}
      <div id='contact' className='w-3/4 flex flex-col items-center z-0 pt-28'>
        <div className='w-fit font-semibold text-center'>
          <p className='text-5xl mb-2'>Contact Me</p>
          <p className='text-secondary text-opacity-70'>Get in touch</p>
        </div> 

        <div className='py-24 flex'>
          <div className='flex flex-col gap-8' style={{width:"40%"}}>
            <div className='flex items-center gap-4'>
              <div className='relative text-tertiary'>
                <FontAwesomeIcon icon={faPhone} size="2xl"/>
              </div>
              <div>
                  <p className='font-semibold text-xl'>Call Me</p>
                  <p className='text-secondary text-opacity-70 text-sm'>+628-5372727292</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='relative text-tertiary'>
                <FontAwesomeIcon icon={faEnvelope} size="2xl"/>
              </div>
              <div>
                  <p className='font-semibold text-xl'>Email</p>
                  <p className='text-secondary text-opacity-70 text-sm'>aryawaranggana.susilo@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='relative text-tertiary'>
                <FontAwesomeIcon icon={faLocationDot} size="2xl"/>
              </div>
              <div>
                  <p className='font-semibold text-xl'>Location</p>
                  <p className='text-secondary text-opacity-70 text-sm'>Medan, North Sumatera, Indonesia</p>
                </div>
            </div>
          </div>
          <form ref={refForm} onSubmit={sendEmail} className='flex flex-col items-start gap-8' style={{width:"60%"}}>
            <div className='flex gap-4 items-center'>
              <div className='w-1/2 bg-tertiary bg-opacity-20 rounded-md px-4 pt-3 pb-3'>
                <label>Name</label>
                <input className='pt-2 outline-none bg-tertiary bg-opacity-0' type="text" name="name" required />
              </div>
              <div className='w-1/2 bg-tertiary bg-opacity-20 rounded-md px-4 pt-3 pb-3'>
                <label>Email</label>
                <input className='pt-2 outline-none bg-tertiary bg-opacity-0' type="email" name="email"  required />
              </div>
            </div>
            <div className='w-full bg-tertiary bg-opacity-20 rounded-md px-4 pt-3 pb-3'>
                <label>Subject</label>
                <input className='pt-2 outline-none bg-tertiary bg-opacity-0 w-full' type="text" name="subject" required />
            </div>
            <div className='w-full bg-tertiary bg-opacity-20 rounded-md px-4 pt-3 pb-3'>
              <label>Message</label>
              <textarea
              className='outline-none bg-tertiary bg-opacity-0 w-full h-44 pt-2'
              name='message'
              required>                
              </textarea>
            </div>
            <div>
            <button className='p-4 font-semibold bg-tertiary text-white w-fit rounded-md shadow-md'>Send Message 
                <span className='ml-2 relative top-0.5'><FontAwesomeIcon icon={faPaperPlane}/></span> </button>
            </div>
          </form>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}
      
      {/* <---------------------------------------------------------FOOTER----------------------------------------------------------------> */}
      <div className='w-full flex flex-col items-center z-0 py-14 bg-tertiary'>
        <div className='w-3/4 flex justify-around items-start text-white'>
          <div className='w-1/3 flex flex-col items-center'>
            <div>
              <p className='text-2xl font-semibold text-left'>Rangga</p>
              <p>Frontend developer</p>
            </div>
          </div>
          <div className='flex gap-6 items-center justify-center w-1/3'>
            <a href='#services'>Services</a>
            <a href='#portofolio'>Portofolio</a>
            <a href='#contact'>Contact me</a>
          </div>
          <div className='flex  gap-6 items-center justify-center w-1/3'>
            <a href='https://www.facebook.com/profile.php?id=100008863803353'><FontAwesomeIcon icon={faFacebookF}/></a> 
            <a href='https://www.instagram.com/aryawaranggana.s/'><FontAwesomeIcon icon={faInstagram}/></a> 
            <a href='https://twitter.com/aryarangga2000'><FontAwesomeIcon icon={faTwitter}/></a>            
          </div>
        </div> 
        <div className='text-white mt-28'>
          <p className='text-xs text-white text-opacity-30'>&copy; aryawaran4. All right reserved</p>
        </div>
      </div>
      {/* <-------------------------------------------------------------------------------------------------------------------------------> */}      

    </div>
  );
}

export default App;

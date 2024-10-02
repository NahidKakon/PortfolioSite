import Image from 'next/image';
import styles from './globals.css';
import spacing from './globals.css';
import Link from 'next/link';



export default function HomePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to My Front-End Website</h1>
        <p>A simple one-page site with pictures, videos, and texts</p>
      </header>
      <button/>
      <div style={{ height: '100vh', display: 'flex', position: 'absolute', overflow: 'hidden', top: 0, right: 0, justifyContent: 'right', alignItems: 'right', backgroundColor: '#ffffff' }}>
      {/* Video that will autoplay, loop, and take up 100% width */}
      <video
        src="/videos/portfolio_home.mp4"  // Path to the video (relative to the public folder)
        autoPlay   // Automatically starts the video
        loop       // Continuously plays the video
        muted      // Mute the video (useful for autoplaying)
        playsInline  // Ensures the video doesn't go fullscreen on mobile
        style={{ width: '100%', height: '120%' }} // Styling to fit video within the page
      />
    </div>

      <div style={{ height: '100vh', display: 'flex', position: 'absolute', overflow: 'hidden', top: 0, left: 0,  objectFit: 'cover', justifyContent: 'left', alignItems: 'left', backgroundColor: '#000' }}>
      {/* Video that will autoplay, loop, and take up 100% width */}
      
      <video
        src="/videos/animate.mp4"  // Path to the video (relative to the public folder)
        autoPlay   // Automatically starts the video
        loop       // Continuously plays the video
        muted      // Mute the video (useful for autoplaying)
        playsInline  // Ensures the video doesn't go fullscreen on mobile
        style={{ width: '100%', height: 'auto' }} // Styling to fit video within the page
      />
    </div>
  
    <section className={styles.section}>
        <h2>Beautiful Pictures</h2>
        <div className={styles.imageGallery}>
        
          <Image
            src="/images/white.png"
            alt="A forest trail"
            width={3000}
            height={0}
            display='flex'
            className={styles.image}
          />
        </div>
      </section>


{/* <div className="container">
  <img src="white.png" alt="white" style="width:100%"/>
  <a href="page1.js" className="btn">About Me</a>
  <button className="btn">Button</button>
</div> */}
{/* 
<div style={{marginRight: spacing + '2em', position: 'relative', width: '100%', position: 'absolute', top: '50%',
  left: '50%', transform: 'translate(-50%, -50%)', backgroundcolor: '#555', color: 'white',
  fontsize: '16px', padding: '12px 24px', border: 'none', cursor: 'pointer', 
  borderradius: '5px',
  textalign: 'center',
// .container .btnhover {
  backgroundcolor: 'black',
}}/> */}

{/* const 'spacing = 2; // The number that you want to multiply for spacing in 'em'
<div style={{ marginRight: spacing + 'em' }}>
      This div has a dynamic right margin of {spacing}em */}
    {/* </div> */}

   {/* // -ms-transform: translate(-50%, -50%); */}
   <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <Link href="https://test1-ten-wheat.vercel.app/">
          <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'brown',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Visit My Website
          </button>
        </Link>
        <a href="\images\Nahid_Shakib-_cv.pdf"className="button"></a>
        <button
            style={{
              padding: '10px 20px',
              backgroundColor: 'brown',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            About Me
          </button>

      </div>
 
  </div>
      

  );
}

import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";


export default function Home() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (

    <>
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} url="/js/particles.json" />
      <Head>
        <title>Anonymous</title>
        <meta name="description" content="Anonymize your online identity with Anonymous, the best school unblocker using an Ultraviolet Backend, for work, school, and home." />
        <meta name="theme-color" content="#6853f"></meta>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"/>
        
      </Head>
      
      <body>
        <nav className="navbar">
          <div className="nav-options">
            <a href="/" className="nav-option"><i className="home-icon fa fa-house-user fa-2xl fa-fw"></i>Home</a>
            <a href="/games" className="nav-option"><i className="games-icon fa fa-gamepad fa-2xl fa-fw"></i>Games</a>
            <a href="/settings" className="nav-option"><i className="settings-icon fa fa-gear fa-2xl fa-fw"></i>Settings</a>
            <a href="/chat" className="nav-option"><i className="chat-icon fa fa-message fa-2xl fa-fw"></i>Chat</a>
            <a href="/movies" className="nav-option"><i className="movies-icon fa-solid fa-clapperboard fa-2xl fa-fw"></i>Movies</a>
            <a href="/misc" className="nav-option"><i className="movies-icon fa-solid fa-cubes fa-2xl fa-fw"></i>Misc</a>
          </div>
        </nav>
        <div className="header-container">
          <h1>
            Anonymous
          </h1>
        </div>
        <div className="searchbox">
          <form>
            <input className="search" placeholder="Search the web freely"/>
            <button type="submit" className="submit-button"><i className="fas fa-search searchicon"></i></button>
          </form>
        </div>
        
        <Script src="/uv/uv.bundle.js"></Script>
        <Script src="/uv/uv.config.js" id="config">console.log('__');</Script>
        <Script src="form.js"></Script>
        <Script src="https://kit.fontawesome.com/be27c0ad9d.js" crossOrigin="anonymous"></Script>
        <Script src="/js/title.js"></Script>
        
        
        
         {/*<Script id="cid0020000319109200791" data-cfasync="false" async src="//st.chatango.com/js/gz/emb.js" style="width: 200px;height: 300px;">{"handle":"anonprox","arch":"js","styles":{"a":"CC0000","b":100,"c":"FFFFFF","d":"FFFFFF","k":"CC0000","l":"CC0000","m":"CC0000","n":"FFFFFF","p":"10","q":"CC0000","r":100,"pos":"br","cv":1,"cvbg":"CC0000","cvw":75,"cvh":30}}
        </Script>*/}
      </body>

    </>
  )
}

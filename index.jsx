import React from 'react';

export default function BlueWaveStudio(): JSX.Element {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        *,*::before,*::after{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0;font-family:Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:#eaf6ff;}

        :root{
          --bg-1:#020617;
          --bg-2:#07102a;
          --accent-1:#60a5fa;
          --accent-2:#a78bfa;
          --accent-3:#7dd3fc;
        }

        .page{
          min-height:100vh;
          width:100%;
          display:flex;
          align-items:center;
          justify-content:center;
          background: radial-gradient(1200px 600px at 10% 10%, rgba(34,211,238,0.06), transparent 10%),
                      radial-gradient(900px 500px at 90% 90%, rgba(167,139,250,0.06), transparent 10%),
                      linear-gradient(180deg,var(--bg-1),var(--bg-2));
          position:relative;
          overflow:hidden;
        }

        .blob{position:absolute;border-radius:40%;filter:blur(140px);opacity:0.36;transform:translateZ(0);}
        .blob.left{width:720px;height:720px;left:-240px;top:-120px;background:linear-gradient(135deg,var(--accent-1),var(--accent-2));animation:blobMove 12s ease-in-out infinite;}
        .blob.right{width:620px;height:620px;right:-200px;bottom:-160px;background:linear-gradient(135deg,var(--accent-2),var(--accent-3));animation:blobMove 14s ease-in-out infinite reverse;}
        @keyframes blobMove{0%{transform:translateY(0) scale(1)}50%{transform:translateY(48px) scale(1.03)}100%{transform:translateY(0) scale(1)}}

        .gridOverlay{position:absolute;inset:0;opacity:0.04;background-image:linear-gradient(transparent 23px, rgba(255,255,255,0.02) 24px), linear-gradient(90deg, transparent 23px, rgba(255,255,255,0.02) 24px);background-size:24px 24px;pointer-events:none}

        .container{position:relative;z-index:10;width:100%;max-width:1140px;padding:48px;display:flex;flex-direction:column;align-items:center;text-align:center}

        .brand{display:flex;flex-direction:column;align-items:center;gap:16px}
        .brand img{width:90px;height:90px;object-fit:contain;border-radius:50%;filter:drop-shadow(0 0 12px rgba(96,165,250,0.4))}
        .studioName{font-family:Orbitron, sans-serif;font-size:44px;line-height:1;background:linear-gradient(90deg,var(--accent-1),var(--accent-2),var(--accent-3));-webkit-background-clip:text;background-clip:text;color:transparent}
        .tag{margin-top:6px;color:rgba(220,235,255,0.75);letter-spacing:1.6px;text-transform:uppercase;font-size:12px}

        .lead{margin-top:18px;color:rgba(230,245,255,0.92);font-size:18px;max-width:780px}

        .small{margin-top:40px;color:rgba(147,197,253,0.6);font-size:12px}

        .wave{position:absolute;left:0;right:0;bottom:-1px;z-index:9;opacity:0.8}
      `}</style>

      <main className="page" aria-labelledby="title">
        <div className="blob left" aria-hidden />
        <div className="blob right" aria-hidden />
        <div className="gridOverlay" aria-hidden />

        <div className="container">
          <div className="brand">
            <img src="https://i.imgur.com/kp6TmbV.png" alt="BlueWave Studio Logo" />
            <div id="title" className="studioName">BlueWave Studio</div>
            <div className="tag">Main Company</div>
          </div>

          <p className="lead">
            BlueWave Studio is a hub for innovation and creativity, powering multiple brands and ventures with futuristic design and technology.
          </p>

          <div className="small">© {year} BlueWave Studio — All rights reserved.</div>
        </div>

        <svg className="wave" viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0%" x2="100%">
              <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.08" />
            </linearGradient>
          </defs>
          <path d="M0 40 C 240 0, 360 80, 720 40 C 1080 0, 1200 80, 1440 40 L1440 160 L0 160 Z" fill="url(#g1)" />
        </svg>
      </main>
    </>
  );
}

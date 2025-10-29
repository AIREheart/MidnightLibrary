
import React, { useMemo } from 'react';

const Star: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="absolute rounded-full bg-white" style={style} />
);

export const StarryBackground: React.FC = () => {
  const stars = useMemo(() => {
    const starCount = 150;
    const newStars = [];
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 2 + 0.5;
      const style = {
        width: `${size}px`,
        height: `${size}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
        animationDelay: `${Math.random() * 3}s`,
        opacity: Math.random() * 0.5 + 0.2,
      };
      newStars.push(<Star key={i} style={style} />);
    }
    return newStars;
  }, []);

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
      <div className="fixed inset-0 z-0 overflow-hidden bg-gradient-to-b from-slate-900 to-indigo-900/40">
        <div className="absolute inset-0 z-10 radial-gradient-at-top"></div>
        {stars}
      </div>
       <style>{`
        .radial-gradient-at-top {
          background: radial-gradient(circle at 50% 20%, transparent, #0f172a 70%);
        }
      `}</style>
    </>
  );
};

import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const weddingDate = new Date('2025-11-01T00:00:00');
  const [timePassed, setTimePassed] = useState(calculateTimePassed());
  const [heroBg, setHeroBg] = useState('');

  function calculateTimePassed() {
    const difference = new Date().getTime() - weddingDate.getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const mobileHeroImages = [
    'pwed250713_0350.jpg',
    'pwed250713_0807.jpg',
    'pwed250713_0350.jpg',
  ];

  const desktopHeroImages = [
    'pwed250713_0227.jpg',
    'pwed250713_0321.jpg',
    'pwed250713_0547.jpg',
    'pwed250713_0227.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimePassed(calculateTimePassed());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const heroArray = isMobile ? mobileHeroImages : desktopHeroImages;
    const heroPaths = heroArray.map(file => `/images/${file}`);
    const randomHero = heroPaths[Math.floor(Math.random() * heroPaths.length)];
    setHeroBg(randomHero);
  }, []);

  return (
    <section className="hero" style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${heroBg}')`,
      backgroundPosition: heroBg.endsWith('0807.jpg') ? '56% 30%' : 'center 30%'
    }}>
      <div className="hero-content">
        <h1 className="couple-names">德姿 & 俊翔</h1>
        <p className="wedding-date">2025.11.01</p>
        <p className="subtitle">我們已經結婚了</p>

        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value">{timePassed.days}</span>
            <span className="countdown-label">天</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timePassed.hours}</span>
            <span className="countdown-label">時</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timePassed.minutes}</span>
            <span className="countdown-label">分</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timePassed.seconds}</span>
            <span className="countdown-label">秒</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

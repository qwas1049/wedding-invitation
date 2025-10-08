import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const weddingDate = new Date('2025-11-01T11:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = weddingDate.getTime() - new Date().getTime();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="couple-names">德姿 & 俊翔</h1>
        <p className="wedding-date">2025.11.01</p>
        <p className="subtitle">我們要結婚了！</p>
        
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.days}</span>
            <span className="countdown-label">天</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.hours}</span>
            <span className="countdown-label">時</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.minutes}</span>
            <span className="countdown-label">分</span>
          </div>
          <div className="countdown-item">
            <span className="countdown-value">{timeLeft.seconds}</span>
            <span className="countdown-label">秒</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

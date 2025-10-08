import './WeddingInfo.css';

const WeddingInfo = () => {
  return (
    <section className="wedding-info">
      <div className="container">
        <h2 className="section-title">婚禮資訊</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>📅 日期</h3>
            <p>2025年11月1日（星期六）</p>
          </div>
          <div className="info-card time-card">
            <h3>🕐 時間</h3>
            <p>11:00 戶外證婚</p>
            <p>12:00 午宴開始</p>
          </div>
          <div className="info-card">
            <h3>📍 地點</h3>
            <p>新竹薇絲山庭</p>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.8!2d121.1030991!3d24.8876269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683b0e4092befd%3A0xaa1e9aaae22ce1aa!2z6Jac57W25bGx5bqt5oi25aSW5ama56au6I6K5ZyS!5e0!3m2!1szh-TW!2stw!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;

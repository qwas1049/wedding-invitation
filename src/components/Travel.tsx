import './Travel.css';

const Travel = () => {
  return (
    <section className="travel">
      <div className="container">
        <h2 className="section-title">交通資訊</h2>
        
        <div className="travel-section">
          <div className="transport-info">
            <div className="transport-item">
              <h4>🚗 自行開車</h4>
              <p>近桃園楊梅區至會場15分鐘</p>
              <p>竹北市至會場約30分鐘</p>
              <p>現場提供免費停車場</p>
            </div>
            <div className="transport-item shuttle">
              <h4>🚌 搭乘接駁車</h4>
              <p className="shuttle-note">請告知上車地點</p>
              <div className="shuttle-schedule">
                <div className="shuttle-route">
                  <p className="time">🔴 8:30 發車</p>
                  <p className="location">中華電信板橋服務中心</p>
                  <p className="address">（實踐國小、板橋放送所附近）</p>
                  <p className="address">新北市板橋區民族路166號</p>
                  <a href="https://maps.app.goo.gl/oDg74uKPV9kFX9Lg7?g_st=al" target="_blank" rel="noopener noreferrer">📍 查看地圖</a>
                </div>
                <div className="shuttle-route">
                  <p className="time">🔴 9:50 發車</p>
                  <p className="location">新竹高鐵站</p>
                </div>
                <div className="shuttle-route return">
                  <p className="time">🔴 回程 15:10 發車</p>
                  <p className="location">薇絲山庭</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;

import './Schedule.css';

const Schedule = () => {
  const events = [
    { time: '10:40', title: '賓客入場', description: '歡迎賓客蒞臨' },
    { time: '11:00', title: '戶外證婚', description: '新人進場、交換誓詞' },
    { time: '11:40', title: '迎賓活動', description: '完成闖關活動，獲得婚禮小物' },
    { time: '12:00', title: '午宴開始', description: '享用美食佳餚' },
  ];

  return (
    <section className="schedule">
      <div className="container">
        <h2 className="section-title">活動流程</h2>
        <div className="schedule-list">
          {events.map((event, index) => (
            <div key={index} className="schedule-item">
              <div className="schedule-time">{event.time}</div>
              <div className="schedule-content">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;

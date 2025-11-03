import './OurStory.css';

const OurStory = () => {
  const timeline = [
    { year: '2010', title: '初次相遇', description: '大學迎新宿營，命運的齒輪開始轉動' },
    { year: '2011', title: '成為男女朋友', description: '義大跨年，璀璨煙火下相擁告白，從此心有所屬' },
    { year: '', title: '5418 天', description: '相守相伴，不離不棄', isMilestone: true },
    { year: '2025.11.01', title: '步入禮堂', description: '相戀 14 年，青春歲月有你相伴，未來人生攜手共度' },
    { year: '2025 -', title: '我們結婚了', description: '新的篇章開始，未來每一天一起走下去 ♥️', isMilestone: true }
  ];

  return (
    <section className="our-story">
      <div className="container">
        <h2 className="section-title">我們的故事</h2>
        <div className="timeline">
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-item ${item.isMilestone ? 'milestone' : ''}`}>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;

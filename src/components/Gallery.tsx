import { useState, useMemo } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 所有照片檔名（放在 public/images）
  const photoGroupsData = [
    {
      title: '真愛桃花源（一）',
      photos: [
        'pwed250713_0547.jpg',
        'pwed250713_0610.jpg',
        'pwed250713_0636.jpg',
        'pwed250713_0659.jpg',
        'pwed250713_0774.jpg',
        'pwed250713_0807.jpg',
      ]
    },
    {
      title: '真愛桃花源（二）',
      photos: [
        'pwed250713_0830.jpg',
        'pwed250713_0844.jpg',
        'pwed250713_0852.jpg',
        'pwed250713_0909.jpg',
        'pwed250713_0934.jpg',
        'pwed250713_0982.jpg',
      ]
    },
    {
      title: '竹子湖黑森林',
      photos: [
        'pwed250713_0027.jpg',
        'pwed250713_0227.jpg',
        'pwed250713_0281.jpg',
        'pwed250713_0321.jpg',
        'pwed250713_0350.jpg',
        'pwed250713_0466.jpg',
      ]
    },
    {
      title: '沙崙海灘（一）',
      photos: [
        'pwed250713_1101.jpg',
        'pwed250713_1159.jpg',
        'pwed250713_1181.jpg',
        'pwed250713_1268.jpg',
        'pwed250713_1282.jpg',
        'pwed250713_1315.jpg',
      ]
    },
    {
      title: '沙崙海灘（二）',
      photos: [
        'pwed250713_1354.jpg',
        'pwed250713_1360.jpg',
        'pwed250713_1366.jpg',
        'pwed250713_1394.jpg',
        'pwed250713_1411.jpg',
      ]
    }
  ];

  const groomPhoto = 'pwed250713_0245.jpg';
  const bridePhoto = 'pwed250713_0433.jpg';
  const heroPhoto = 'pwed250713_0447.jpg';

  // 隨機排序
  const photoGroups = useMemo(() => {
    return [...photoGroupsData].sort(() => Math.random() - 0.5);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photoGroups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photoGroups.length) % photoGroups.length);
  };

  return (
    <section className="gallery">
      <div className="container">
        <h2 className="section-title">婚紗寫真</h2>

        <div className="portrait-section">
          <div className="portrait-card groom">
            <img src={`/images/${groomPhoto}`} alt="新郎" />
            <div className="portrait-name">俊翔</div>
          </div>
          <div className="portrait-center">
            <img src={`/images/${heroPhoto}`} alt="我們" />
          </div>
          <div className="portrait-card bride">
            <img src={`/images/${bridePhoto}`} alt="新娘" />
            <div className="portrait-name">德姿</div>
          </div>
        </div>

        <div className="carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
          <div className="carousel-wrapper">
            {photoGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`carousel-slide ${groupIndex === currentSlide ? 'active' : ''}`}
              >
                <h3 className="carousel-title">{group.title}</h3>
                <div className="photo-grid">
                  {group.photos.map((photo, index) => (
                    <div
                      key={index}
                      className={`photo-item ${photo === 'pwed250713_1411.jpg' ? 'lastImg' : ''}`}
                    >
                      <img src={`/images/${photo}`} alt={`婚紗照 ${index + 1}`} loading="lazy" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={nextSlide}>›</button>
        </div>

        <div className="carousel-dots">
          {photoGroups.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

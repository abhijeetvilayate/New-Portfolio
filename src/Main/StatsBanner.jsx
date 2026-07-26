
import './StatsBanner.css';

const statsData = [
  {
    icon: 'bi-code-slash',
    title: '3+',
    subtitle: 'Projects Completed',
  },
  {
    icon: 'bi-layers-fill',
    title: '4+',
    subtitle: 'Technologies Used',
  },
  {
    icon: 'bi-trophy-fill',
    title: '100%',
    subtitle: 'Passion & Dedication',
  },
  {
    icon: 'bi-rocket-takeoff-fill',
    title: 'Continuous',
    subtitle: 'Learning Journey',
  },
];

export const StatsBanner = () => {
  return (
    <div className="stats-banner-wrapper">
      <div className="container">
        <div className="card border-0 stats-banner-card">
          <div className="row align-items-center justify-content-evenly py-1">
            {statsData.map((stat, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-auto">
                <div className="d-flex align-items-center gap-3">
                  {/* Icon Box */}
                  <div className="stats-icon-wrapper">
                    <i className={`bi ${stat.icon}`}></i>
                  </div>

                  {/* Text Details */}
                  <div>
                    <h4 className="stats-title">{stat.title}</h4>
                    <p className="stats-subtitle">{stat.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBanner;
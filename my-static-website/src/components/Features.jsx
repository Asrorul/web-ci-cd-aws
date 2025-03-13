import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Modern Design',
      description: 'Clean and contemporary user interface',
      icon: '🎨'
    },
    {
      title: 'Responsive',
      description: 'Looks great on all devices',
      icon: '📱'
    },
    {
      title: 'Fast Loading',
      description: 'Optimized for performance',
      icon: '⚡'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

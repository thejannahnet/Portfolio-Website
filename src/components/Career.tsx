import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Amazon E-commerce Expert</h4>
                <h5>500+ Projects Completed</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Specializing in Wholesale operations and quick startup ventures on Amazon. Delivering healthy and realistic income streams for clients through proven strategies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Business Adviser & Entrepreneur</h4>
                <h5>Independent Consulting</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Helping businesses develop and scale effectively. Expertise in startup consulting, investor relations, and connecting founders with market opportunities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>CEO & Founder</h4>
                <h5>THEJANNAH.NET</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Leading a dynamic team focused on Amazon e-commerce solutions and business advisory services. Connecting entrepreneurs with angel investors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;

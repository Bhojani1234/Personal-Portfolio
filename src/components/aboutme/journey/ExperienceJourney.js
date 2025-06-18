import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="2024 - Continuing"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
           appstle inc.
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Working as a front-end developer in a fast-paced product-based company, 
            contributing to the design and development of scalable, 
            high-performance web applications. Played a key role in building reusable components, 
            optimizing UI/UX performance, and working closely with cross-functional teams to continuously improve the product.
          </h6>
          <p>• Developed advanced, production-ready React.js features for a scalable SaaS/web product used by thousands of active users..</p>
          <p>• Translated Figma/AdobeXD designs into pixel-perfect, responsive UI using React.js, Tailwind CSS, and Material UI.</p>
          <p>• Architected reusable components, managed global state using Redux Toolkit and Context API, and optimized rendering with React Hooks.</p>
          <p>• Wrote unit and integration tests with Jest and React Testing Library, achieving over 80% test coverage.</p>
          <p>• Collaborated closely with backend teams using REST APIs and GraphQL (if applicable).</p>
          <p>• Focused on performance tuning, lazy loading, and accessibility (a11y) compliance.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2023 - 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Strivedge Technolabs pvt. ltd - (Software company in Ahmedabad, Gujarat)
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
           A passionate and dedicated React.js developer with one year of hands-on experience building dynamic, responsive, and user-friendly web applications. Gained solid exposure to front-end development practices, state management, component-based architecture, and integrating APIs.
          </h6>
          <p>• Developed and maintained responsive web interfaces using React.js, JavaScript, HTML5, and CSS3..</p>
          <p>• Built reusable components to support scalable frontend architecture.</p>
          <p>• Integrated RESTful APIs and handled data using Axios and Fetch API.</p>
          <p>• Implemented state management using React Hooks, Context API, and basic Redux.</p>
          <p>• Participated in Agile development processes – attending daily standups, sprint planning, and retrospectives.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;

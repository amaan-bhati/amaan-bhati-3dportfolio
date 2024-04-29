import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
  return (
    <div className="mt-5">
      <div>
      {/*
<Link className="btn btn-primary m-1" to="/educationjourney">
  Educational Journey
</Link>
<Link className="btn btn-primary m-1" to="/experiencejourney">
  Experience Journey
</Link>
*/}

        {/*
<Link className="btn btn-primary m-1" to="/technicaljourney">
  Technical Journey
</Link>
<Link className="btn btn-primary m-1" to="/projectjourney">
  Project Journey
</Link>
*/}

      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Work Experience</h1>
        </Flip>
      </div>
      <VerticalTimeline>
       

      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
      date="Dec '23 - Present"
      iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
      icon={<PersonIcon />}
    >
      <h4 className="vertical-timeline-element-title">
        EWL Project member
      </h4>
      <h4 className="vertical-timeline-element-subtitle mt-2">
        ZIROH LABS
      </h4>
      {/*<p>
          Studied Bachelor of Science degree in Computer Science and
          Engineering field from Sonargaon University and gain CGPA 3.44.
        </p>*/}
    </VerticalTimelineElement>


      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
      date="Feb '24-Present"
      iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
      icon={<PersonIcon />}
    >
      <h4 className="vertical-timeline-element-title">
        Web Dev Intern
      </h4>
      <h4 className="vertical-timeline-element-subtitle mt-2">
        KIIT DIGITAL
      </h4>
      {/*<p>
          Studied Bachelor of Science degree in Computer Science and
          Engineering field from Sonargaon University and gain CGPA 3.44.
        </p>*/}
    </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Dec '23 - Feb '24"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h4 className="vertical-timeline-element-title">Web Developer</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            KIITFEST 
          </h4>
          {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
        date="Jul '23-Present"
        iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
        icon={<PersonIcon />}
      >
        <h4 className="vertical-timeline-element-title">
          Web development Lead
        </h4>
        <h4 className="vertical-timeline-element-subtitle mt-2">
          MICROSOFT LEARN STUDENT AMBASSADOR, KIIT
        </h4>
        {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
      </VerticalTimelineElement>

      <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
      contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
      date="Aug '23 - Oct '23"
      iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
      icon={<PersonIcon />}
    >
      <h4 className="vertical-timeline-element-title">
        Fullstack Web Developer
      </h4>
      <h4 className="vertical-timeline-element-subtitle mt-2">
        SCULPTED THREADS
      </h4>
      {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
    </VerticalTimelineElement>




        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Jun '23"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            ThreeJs Web Developer
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            ZIVRI.ME
          </h4>
         {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="May '23 - Apr '23"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h4 className="vertical-timeline-element-title">Frontend Developer</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            TEDXKIITUNIVERSITY
          </h4>
          {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Oct '22-Jul '23"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h4 className="vertical-timeline-element-title">Tech Executive</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            MICROSOFT STUDENT COMMUNITY
          </h4>
          {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Oct '22-Jul '23"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h4 className="vertical-timeline-element-title">Web Project Member</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            DIVERSION 2022
          </h4>
          {/*<p>
            Studied Bachelor of Science degree in Computer Science and
            Engineering field from Sonargaon University and gain CGPA 3.44.
          </p>*/}
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="Dec '21 - Oct '22"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h4 className="vertical-timeline-element-title">Junior Web Developer</h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            MICROSOFT STUDENT COMMUNITY
          </h4>
          {/*
          <p>
           Joined the community as a frontend web developer responsible for building user friendly frontend.
          </p>
          <p>
           Worked on multiple projects including the official 2022 website for the community.
          </p>
          <p>
           Worked on multiple frontend projects and also built and crafted the development of websites for each event.
          </p>
          <p>
           Worked as an OC member and a technical doubt solver on the first offline Tech event organised after the pandemic.
          </p>*/}
        </VerticalTimelineElement>

      
        

        

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
      
    </div>
  );
}

export default EducationJourney;

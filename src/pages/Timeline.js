import React, {useEffect} from "react";
import "./styles/Timeline.css";
import TimeStamp from "../components/TimeStamp";
import data from "../data/timeline/timeline.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="timeline">
        <div className="timeline_title">
          <h1>Timeline</h1>
          <p>
            <span>&gt;</span> SCHEDULE OF THE WHOLE EVENT <span>&lt;</span>
          </p>
        </div>
        <div className="timeline_line">
          <div className="timeline_line_progress" />
        </div>
        <div className="timeline_content">
          {data.map((item) => {
            return (
              <TimeStamp
                key={item.title}
                title={item.title}
                subtitle={item.subtitle}
                date={item.date}
                month={item.month}
                align={item.align}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Timeline;
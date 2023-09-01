import React, { useState, useEffect, memo } from "react";
import "./styles/Faq.css";
import data from "../data/faq/faq.json";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";

const FaqQuestion = memo(({ content, index, expanded, handleChange, isSmallScreen }) => {
  return (
    <div className="faq-question" key={content.question} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
      <Accordion
        expanded={expanded === index}
        className="accordion-transition"
        onChange={handleChange(index)}
        sx={{
          width: "100%",
          margin: "1.5rem auto",
          backdropFilter: "blur(2px) saturate(200%)",
          backgroundColor: "rgba(var(--foreground-color-rgb), 0.75)",
          borderRadius: "1rem",
          border: "1px solid rgba(var(--border-color-rgb), 0.2)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#cfcfcf" }} />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
        >
          <Typography
            sx={{
              color: expanded === index ? "#e56806" : "#cfcfcf",
              fontWeight: "bold",
              fontSize: isSmallScreen ? '1rem' : '1.2rem', 
            }}
          >
            {content.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              color: "#cfcfcf",
              fontSize: isSmallScreen ? '1rem' : '1.1rem',
            }}
          >
            {content.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
});

const Faq = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <div className="faq-wrapper">
        <div className="faq-title">
          <h1>FAQs</h1>
        </div>
        <div className="faq-content">
          {data.map((content, index) => (
            <FaqQuestion
              key={content.question}
              content={content}
              index={index}
              expanded={expanded}
              handleChange={handleChange}
              isSmallScreen={isSmallScreen}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
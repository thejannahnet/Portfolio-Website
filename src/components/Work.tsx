import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !flexRef.current) return;

    const flex = flexRef.current;
    const boxes = flex.querySelectorAll(".work-box");
    if (boxes.length === 0) return;

    const updateScroll = () => {
      const totalWidth = flex.scrollWidth;
      const viewportWidth = window.innerWidth;
      const translateX = totalWidth - viewportWidth;

      if (translateX <= 0) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${translateX}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      tl.to(flex, {
        x: -translateX,
        ease: "none",
      });

      return tl;
    };

    let timeline = updateScroll();

    const handleResize = () => {
      if (timeline) {
        timeline.kill();
        ScrollTrigger.refresh();
      }
      timeline = updateScroll();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeline) timeline.kill();
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === sectionRef.current) st.kill();
      });
    };
  }, { scope: sectionRef });

  const projects = [
    {
      title: "THEJANNAH.NET",
      category: "Amazon Growth Partner",
      tools: "FBA, Wholesale, PPC, Market Analysis, Scaling",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Amazon FBA Wholesale",
      category: "E-commerce Scaling",
      tools: "Helium 10, Jungle Scout, Inventory Management",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "E-commerce Consulting",
      category: "Business Advisory",
      tools: "Market Analysis, Investor Relations, Growth",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Full Stack Development",
      category: "Web Solutions",
      tools: "React, Next.js, TypeScript, GSAP",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2 className="work-heading">
          My <span>Work</span>
        </h2>
        <div className="work-flex" ref={flexRef}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className="work-details">
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;

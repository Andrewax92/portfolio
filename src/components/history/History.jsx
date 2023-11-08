import { InView } from "react-intersection-observer";
import "./history.css";
import AmazonPNg from "../../assets/images/8_1sasa11.jpg";
import fipkartPNg from "../../assets/images/107.jpg";
import googlePNg from "../../assets/images/8182580.jpg";

export const History = () => {
  const historyItems = [
    {
      text: "AX Capital Real Estate",
      date: "2022 - 2023",
      description:
        "Streamlined integration, ensured API compatibility, and offered post-launch support for a seamless project rollout. Documented coding standards and best practices, providing a valuable reference for the team",
      image: AmazonPNg,
    },
    {
      text: "Andrewax LLC – Miami",
      date: "2017 - 2022",
      description:
        "Optimized company operations by managing logistics and finance workflows simultaneously, ensuring compliance with industry regulations, enhancing safety and punctuality in deliveries, and boosting revenue through route optimization and fuel efficiency",
      image: fipkartPNg,
    },
    {
      text: "Armani-Hotel Dubai",
      date: "2013 - 2016",
      description:
        "Elevated bar operations through the development of efficient standard procedures, the introduction of innovative beverage menus, streamlined daily operations, and continuous staff training and mentorship, resulting in improved customer engagement, increased revenue, and enhanced overall performance",
      image: googlePNg,
    },
    {
      text: "State University of Moldova ",
      date: "2010 - 2013",
      description:
        "Enhanced lab operations through meticulous equipment maintenance and calibration, enabling successful collaboration in photovoltaic cell fabrication with diverse materials and  techniques",
      image: fipkartPNg,
    },
  ];

  const options = {
    threshold: 0.5, // Adjust the threshold as needed
  };

  return (
    <section id="history">
      <h3 id="skills-header">Professional Experience</h3>
      <div className="timeline">
        {historyItems.map((item, index) => (
          <InView key={index} options={options}>
            {({ ref, inView }) => (
              <div
                ref={ref}
                className={`history_container ${
                  index % 2 === 0 ? "left-container" : "right-container"
                }`}
                style={{
                  transform: inView
                    ? "translateX(0)"
                    : index % 2 === 0
                    ? "translateX(-100%)" // Left container
                    : "translateX(100%)", // Right container (adjusted)
                  // transform: inView ? "translateX(0)" : "translateX(-100%)",
                  // transition: "transform 1s ease",
                }}
              >
                <img src={item.image} alt="herpaimi" />
                <div className="text-box">
                  <h2>{item.text}</h2>
                  <small>{item.date}</small>
                  <p>{item.description}</p>
                  <span
                    className={`${
                      index % 2 === 0
                        ? "left-container-arrow"
                        : "right-container-arrow"
                    }`}
                  ></span>
                </div>
              </div>
            )}
          </InView>
        ))}
      </div>
    </section>
  );
};

// import { InView } from "react-intersection-observer";
// import "./history.css";
// import AmazonPNg from "../../assets/images/8_1sasa11.jpg";
// import fipkartPNg from "../../assets/images/107.jpg";
// import googlePNg from "../../assets/images/8182580.jpg";

// export const History = () => {
//   const historyItems = [
//     {
//       text: "AX Capital Real Estate",
//       date: "2022 - 2023",
//       description:
//         "Streamlined integration, ensured API compatibility, and offered post-launch support for a seamless project rollout. Documented coding standards and best practices, providing a valuable reference for the team",
//       image: AmazonPNg,
//     },
//     {
//       text: "Andrewax LLC – Miami",
//       date: "2017 - 2022",
//       description:
//         "Optimized company operations by managing logistics and finance workflows simultaneously, ensuring compliance with industry regulations, enhancing safety and punctuality in deliveries, and boosting revenue through route optimization and fuel efficiency",
//       image: fipkartPNg,
//     },
//     {
//       text: "Armani-Hotel Dubai",
//       date: "2013 - 2016",
//       description:
//         "Elevated bar operations through the development of efficient standard procedures, the introduction of innovative beverage menus, streamlined daily operations, and continuous staff training and mentorship, resulting in improved customer engagement, increased revenue, and enhanced overall performance",
//       image: googlePNg,
//     },
//   ];

//   const options = {
//     threshold: 0.2, // Adjust the threshold as needed
//   };

//   return (
//     <section id="history">
//       <h3 id="skills-header">Professional Experience</h3>
//       <div className="timeline">
//         {historyItems.map((item, index) => (
//           <div
//             key={index}
//             className={`history_container ${
//               index % 2 === 0 ? "left-container" : "right-container"
//             }`}
//           >
//             <InView options={options}>
//               {({ ref, inView }) => (
//                 <div
//                   ref={ref}
//                   style={{
//                     transform: inView ? "translateX(0)" : "translateX(-100%)",
//                     transition: "transform 0.5s ease",
//                   }}
//                 >
//                   <img src={item.image} alt="herpaimi" />
//                   <div className="text-box">
//                     <h2>{item.text}</h2>
//                     <small>{item.date}</small>
//                     <p>{item.description}</p>
//                     <span
//                       className={`${
//                         index % 2 === 0
//                           ? "left-container-arrow"
//                           : "right-container-arrow"
//                       }`}
//                     ></span>
//                   </div>
//                 </div>
//               )}
//             </InView>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export const History = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true, // This ensures the animation happens only once
//     threshold: 0.2, // Adjust this threshold as needed
//   });
//   // Define animations using useSpring
//   const leftContainerProps = useSpring({
//     opacity: inView ? 1 : 0,
//     x: inView ? 0 : -100,
//     config: { duration: 1000 }, // Adjust animation duration
//   });

//   const rightContainerProps = useSpring({
//     opacity: 1,
//     x: 0,
//     from: { opacity: 0, x: 20 },
//     delay: 500,
//   });
//   return (
//     <section id="history">
//       <h3 id="skills-header">Professional Experience</h3>
//       {/* <h2 id="skills-header-2">
//         In my professional experience, I consistently strive for ongoing skill
//         improvement
//       </h2> */}
//       <div className="timeline">
//         <animated.div
//           ref={ref}
//           className="history_container left-container"
//           style={leftContainerProps}
//         >
//           <img src={AmazonPNg} alt="herpaimi" />
//           <div className="text-box">
//             <h2>AX Capital Real Estate</h2>
//             <small>2022 - 2023</small>
//             <p>
//               Streamlined integration, ensured API compatibility, and offered
//               post-launch support for a seamless project rollout. Documented
//               coding standards and best practices, providing a valuable
//               reference for the team
//               <span className="left-container-arrow"></span>
//             </p>
//           </div>
//         </animated.div>
//         <animated.div
//           ref={ref}
//           className="history_container left-container"
//           style={leftContainerProps}
//         >
//           <div className="history_container left-container">
//             <img src={AmazonPNg} alt="herpaimi" />
//             <div className="text-box">
//               <h2>AX Capital Real Estate </h2>
//               <small>2022 - 2023</small>
//               <p>
//                 Streamlined integration, ensured API compatibility, and offered
//                 post-launch support for a seamless project rollout. Documented
//                 coding standards and best practices, providing a valuable
//                 reference for the team
//                 <span className="left-container-arrow"></span>
//               </p>
//             </div>
//           </div>
//         </animated.div>

//         <div className="history_container right-container">
//           <img src={fipkartPNg} alt="herPaimi" />
//           <div className="text-box">
//             <h2>Andrewax LLC – Miami</h2>
//             <small>2017 - 2022</small>
//             <p>
//               Optimized company operations by managing logistics and finance
//               workflows simultaneously, ensuring compliance with industry
//               regulations, enhancing safety and punctuality in deliveries, and
//               boosting revenue through route optimization and fuel efficiency
//             </p>
//             <span className="right-container-arrow"></span>
//           </div>
//         </div>

//         <div className="history_container left-container">
//           <img src={googlePNg} alt="herpaimi" />
//           <div className="text-box">
//             <h2>Armani-Hotel Dubai </h2>
//             <small>2013 - 2016</small>
//             <p>
//               Elevated bar operations through the development of efficient
//               standard procedures, the introduction of innovative beverage
//               menus, streamlined daily operations, and continuous staff training
//               and mentorship, resulting in improved customer engagement,
//               increased revenue, and enhanced overall performance
//             </p>
//             <span className="left-container-arrow"></span>
//           </div>
//         </div>

//         <div className="history_container right-container">
//           <img src={AmazonPNg} alt="her paimi" />
//           <div className="text-box">
//             <h2>State University of Moldova</h2>
//             <small>2010 - 2013</small>
//             <p>
//               Enhanced lab operations through meticulous equipment maintenance
//               and calibration, enabling successful collaboration in photovoltaic
//               cell fabrication with diverse materials and techniques. Improved
//               research reliability with precise data recording and valuable
//               assistance in data analysis and reporting.
//             </p>
//             <span className="right-container-arrow"></span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

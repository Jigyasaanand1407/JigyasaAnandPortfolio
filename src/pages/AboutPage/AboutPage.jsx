import "./AboutPage.scss";
import WordHover from "../../components/WordHover/WordHover";
import myPic from "../../assets/Professional-Pic-JigyasaAnand.png";

const AboutPage = () => {
  return (
    <div className="container-fluid px-5 about-us-page">
      <h1 className="fs-200 fw-bold lh-ultra-tight text-uppercase">
        <WordHover fontWeight={700}> About us</WordHover>
      </h1>
      <div className="intro-sec">
        <div className="row">
          <div className="col-md-6 px-4">
            <img
              src={myPic}
              alt="Professional-Pic-JigyasaAnand"
              className="img-fluid my-pic"
            />
          </div>
          <div className="col-md-6 px-4">
            <div className="intro-heading">
              Hi, I'm Jigyasa. I'm a UI/UX Designer and Front-End Developer
              based in New Delhi, India.
            </div>
            <div className="intro-description">
              <p>
                I design and build digital experiences that bring together
                thoughtful user experiences, clean interfaces, and functional
                code. With 5.9 years of experience across product design and
                front-end development, I've worked on everything from healthcare
                platforms and insurance applications to responsive websites and
                mobile-first products.
              </p>

              <p>
                What makes my approach different is that I understand both sides
                of the process. I can take an idea from user flows, wireframes,
                and prototypes in Figma to a fully functional interface using
                HTML, CSS, JavaScript, React, and Angular. I care about making
                sure the final product feels just as intuitive and polished as
                it looks in the design.
              </p>

              <p>
                Over the years, I've collaborated with designers, developers,
                product owners, and stakeholders to solve real-world problems
                through design and technology. My work spans enterprise
                applications, healthcare workflows, bilingual insurance
                experiences, and digital products across web, tablet, and
                mobile.
              </p>

              <p>
                I'm most at home where design meets development—exploring how
                things should look, feel, and work, then bringing those ideas to
                life. I enjoy building reusable components, refining
                interactions, improving accessibility, and paying attention to
                the little details that make a digital experience feel
                effortless.
              </p>
            </div>
            <div className="toolkit mt-5">
              <div className="intro-description text-uppercase">
                Tools & Technologies
              </div>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    <li>Angular</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Figma</li>
                    <li>GSAP</li>
                    <li>Adobe Xd</li>
                    <li>Photoshop</li>
                    <li>UIZard</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

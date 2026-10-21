import "./BannerContentComponent.scss";
import mainImg from '../../../assets/main-content.svg'

const BannerContentComponent = () => {
  return (
    <div className="content">
      {/* <div className="heading">
        I am Jigyasa Anand —
        <span className="text-gradient"> A designer-engineer </span>who builds
        beautiful, usable products.
      </div> */}
      {/* <img src={mainImg} alt="mainImg" className="img-fluid" /> */}
      {/* <div className="sub-heading">
        I craft intuitive, scalable and{" "}
        <span className="text-gradient">user-centered digital experiences</span>{" "}
        by blending design thinking with engineering depth.
      </div> */}
      <div className="d-flex justify-content-between flex-column fs-320 fw-bold lh-ultra-tight">
        <div className="one">craft</div>
        <div className="one d-flex justify-content-end">beyond</div>
        <div className="one">code</div>
      </div>
      <div className="sub-heading">
        I’m Jigyasa Anand, a hybrid UI/UX Designer and Software Engineer. I don’t just design pretty interfaces—I architect <span className="text-gradient"> scalable, high-performance digital products </span> for brands that refuse to blend in.
      </div>
    </div>
  );
};

export default BannerContentComponent;

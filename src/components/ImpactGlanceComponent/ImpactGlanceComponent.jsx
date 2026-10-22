import CardComponent from "../CardComponent/CardComponent";
import "./ImpactGlanceComponent.scss";

const impactCardData = [
  {
    cdNum: "01  —",
    cdName: "5+",
    cdDes: "Years of Experience",
    cdBgClass: "bg-blue",
  },
  {
    cdNum: "02  —",
    cdName: "10+",
    cdDes: "Digital Products Designed",
    cdBgClass: "bg-green",
  },
  {
    cdNum: "03  —",
    cdName: "100+",
    cdDes: "Reusable UI Components",
    cdBgClass: "bg-red",
  },
];
const ImpactGlanceComponent = () => {
  return (
    <div className="impact-glance container-fluid px-5">
      <div className="d-block d-md-flex justify-content-between align-items-center">
        <div className="glance-heading">Impact at a Glance</div>
        <div className="glance-text">
          A snapshot of my design journey, the digital products I’ve shaped, and
          the scalable design systems I’ve built.
        </div>
      </div>
      <div className="row">
        {impactCardData.map((cdata, index) => (
          <div className="col-md-4" key={index}>
            <CardComponent cdBgClass={cdata.cdBgClass} cdNum={cdata.cdNum} cdName={cdata.cdName} cdDes={cdata.cdDes} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactGlanceComponent;

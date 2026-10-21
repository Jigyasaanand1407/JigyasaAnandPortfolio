import "./CardComponent.scss";

const CardComponent = ({ cdBgClass, cdNum, cdName, cdDes }) => {
  return (
    <>
      <div className={`card-component ${cdBgClass}`}>
        <div className="cd-num">{cdNum}</div>
        <div className="cd-name">{cdName}</div>
        <div className="cd-des">{cdDes}</div>
      </div>
    </>
  );
};

export default CardComponent;

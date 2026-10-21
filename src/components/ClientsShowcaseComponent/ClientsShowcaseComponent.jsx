import ArrowHeadingComponent from "../ArrowHeadingComponent/ArrowHeadingComponent";
import "./ClientsShowcaseComponent.scss";
import Kph from "../../assets/client-logo/kph-logo.svg";
import chezoo from "../../assets/client-logo/cheejoo-logo.svg";
import denora from "../../assets/client-logo/denora-logo.svg";
import jivoCare from "../../assets/client-logo/jivo-care-logo.svg";
import najm from "../../assets/client-logo/najm-logo.svg";
import travelPower from "../../assets/client-logo/travel-power-logo.svg";
import taqdeer from "../../assets/client-logo/taqdeer-logo.svg";

const clientData = [
  { logoName: Kph },
  { logoName: chezoo },
  { logoName: denora },
  { logoName: jivoCare },
  { logoName: najm },
  { logoName: travelPower },
  { logoName: taqdeer },
];
const ClientsShowcaseComponent = () => {
  return (
    <>
      <div className="client-marquee">
        <div className="client-marquee__track">
          {[...clientData, ...clientData].map((client, index) => (
            <div className="client-marquee__item" key={index}>
              <img
                src={client.logoName}
                alt={
                  index < clientData.length ? `Client logo ${index + 1}` : ""
                }
                aria-hidden={index >= clientData.length}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ClientsShowcaseComponent;

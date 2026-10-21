import React from "react";
import CustomCursorComponent from "../../components/CustomCursorComponent/CustomCursorComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import ProjectComponent from "../../components/ProjectComponent/ProjectComponent";
import ProjectComponentSmScreen from "../../components/ProjectComponentSmScreen/ProjectComponentSmScreen";
import ProcessComponent from "../../components/ProcessComponent/ProcessComponent";
import ClientsShowcaseComponent from "../../components/ClientsShowcaseComponent/ClientsShowcaseComponent";
import ImpactGlanceComponent from "../../components/ImpactGlanceComponent/ImpactGlanceComponent";
import ScrollTextComponent from "../../components/ScrollTextComponent/ScrollTextComponent";

const HomePage = () => {
  return (
    <>
      <BannerComponent />
      <CustomCursorComponent />
      <div className="d-none d-lg-block">
        <ProjectComponent />
      </div>
      <div className="d-block d-lg-none">
        <ProjectComponentSmScreen />
      </div>
      <ClientsShowcaseComponent />
      {/* <IntroComponent /> */}
      <ImpactGlanceComponent />
      <ScrollTextComponent />
      {/* <ProcessComponent /> */}
    </>
  );
};

export default HomePage;

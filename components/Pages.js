import React from "react";
import Page from "./Page";
import { H2, H4 } from "./Styles";

function Pages({ data }) {
  return (
    <>
      <H2>Pages</H2>
      <H4>
        Current prod:{" "}
        <a href="https://production1.coach.com" target="_blank" rel="noopener">
          https://production1.coach.com
        </a>
      </H4>

      <Page data={data.PAGES.HP} rigor={data.RIGOR} title={"HOME"} />
      <Page data={data.PAGES.PLP} rigor={data.RIGOR} title={"PLP"} />
      <Page data={data.PAGES.PDP} rigor={data.RIGOR} title={"PDP"} />
    </>
  );
}

export default Pages;

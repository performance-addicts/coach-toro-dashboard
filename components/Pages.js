import React from "react";
import Page from "./Page";
import { H2, H4 } from "./Styles";

function Pages({ data }) {
  return (
    <>
      <H2>Pages</H2>
      <H4>
        Note: as of 7pm EST on 2/21/2021 the production domain has changed to:{" "}
        <a
          href="https://wwww.stuartweitzman.com/"
          target="_blank"
          rel="noopener"
        >
          https://wwww.stuartweitzman.com/
        </a>
      </H4>
      <p>urls below will be updated to the change on the dashboard</p>
      <Page data={data.PAGES.HP} rigor={data.RIGOR} title={"HOME"} />
      <Page data={data.PAGES.PLP} rigor={data.RIGOR} title={"PLP"} />
      <Page data={data.PAGES.PDP} rigor={data.RIGOR} title={"PDP"} />
    </>
  );
}

export default Pages;

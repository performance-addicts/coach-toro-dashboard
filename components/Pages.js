import React from "react";
import Page from "./Page";
import { H2, H4 } from "./Styles";

function Pages({ data }) {
  return (
    <>
      <H2>Pages</H2>
      <H4>
        Current prod:{" "}
        <a href="https://www.coach.com" target="_blank" rel="noopener">
          https://www.coach.com
        </a>
      </H4>
      <H4>PLP data from 1:00am 5/3 - 10:15am 5/4 is invalid due to 401.</H4>
      <H4>
        {" "}
        PLP url changed to{" "}
        <a
          href="https://development1.coach.com/shop/sit-products"
          target="_blank"
          rel="noopener"
        >
          https://development1.coach.com/shop/sit-products
        </a>{" "}
        on 5/4/2021 at 10:15am EST
      </H4>

      <Page data={data.PAGES.HP} rigor={data.RIGOR} title={"HOME"} />
      <Page data={data.PAGES.PLP} rigor={data.RIGOR} title={"PLP"} />
      <Page data={data.PAGES.PDP} rigor={data.RIGOR} title={"PDP"} />
    </>
  );
}

export default Pages;

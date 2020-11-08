import React from "react";
import { css } from "@emotion/core";
import SkewLoader from "react-spinners/SkewLoader";


export default function LoadingSpinner() {

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #7e7e7e;
`;
return (
      <div className="sweet-loading">
        <SkewLoader
          css={override}
          size={30}
          color={"#123abc"}
        />
      </div>
    );

}
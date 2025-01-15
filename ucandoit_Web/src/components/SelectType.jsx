import React, { useState } from "react";
import { SelfTest } from "./";
import {
  VRImg,
  VrMotion,
  VrLogo,
  lottie,
  lottie2,
  lottieLogo,
  Second_Logo,
  stress,
  conflict,
} from "../assets";

import { Radio, Input, Table, Button, notification } from "antd";
import Lottie from "lottie-react";

const SelectType = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let [type, setType] = useState(false);

  return (
    <div>
      <div className="flex-wrap">
        <div className="font-extrabold font-Mulish text-center  mb-3">
          <p className="text-5xl">
            <div className="text-black">
              본인이 겪고 있는 어려움의 유형을 고르시오
            </div>
          </p>
        </div>
        <div className="wrap">
          <div className="lottie_box">
            <Lottie
              options={defaultOptions}
              animationData={stress}
              style={{ height: "500px", width: "300px" }}
            />
            <Button
              type="primary"
              onClick={() => {
                setType(!type);
                // console.log(type);
              }}
            >
              외상 후 스트레스 장애(PTSD)
            </Button>
          </div>
          <div className="lottie_box">
            <Lottie
              options={defaultOptions}
              animationData={conflict}
              style={{ height: "500px", width: "300px" }}
            />
            <Button type="primary">대인관계 갈등</Button>
          </div>
        </div>
      </div>

      {type === true ? <SelfTest /> : null}
    </div>
  );
};

export default SelectType;

import React, { useState } from "react";
import { Header } from "./";
import { workDayData } from "../assets/data/dummy";

import { Radio, Input, Table, Button, notification } from "antd";
import "../App1.css";

const SelfTest5 = () => {
  const [state, setState] = useState({ tuesdayRadioValue: "" });

  // const openNotification = () => {
  //   notification.open({
  //     message: "진단이 완료되었습니다.",
  //     description: "VR로 이동합니다",
  //     onClick: () => {
  //       console.log("Notification Clicked!");
  //     },
  //   });
  // };

  // const onRadioChange = ({ checked, type, weekday }) => {
  //   setState({ [`${weekday}RadioValue`]: type });
  // };
  const workDayColumns = [
    {
      title: "",
      dataIndex: "type",
      key: "type",
    },

    {
      title:
        "본인이 PTSD에 대하여 느끼는 두려움 및 증상의 정도를 1에서 10중에 하나를 선택하여 나타내 주세요. (1: 그리 심하지 않다, 10: 매우 심하다)",
      dataIndex: "tuesday",
      key: "tuesday",
      width: "75%",
      render: (text, record) => (
        <Input style={{ width: 100, marginLeft: 10 }} />
      ),
    },
  ];

  const workDayData = [
    {
      key: "1",
      type: "1 ~ 10 중 하나 입력",
      day: "Mon-Fri",
    },
  ];

  return (
    <>
      <div>
        <Table
          columns={workDayColumns}
          dataSource={workDayData}
          size="large"
          pagination={false}
        />
      </div>
    </>
  );
};

export default SelfTest5;

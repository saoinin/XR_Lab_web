import React, { useState } from "react";
import { Header, SelfTest2, SelfTest3, SelfTest4, SelfTest5 } from "./";
// import { workDayData } from "../assets/data/dummy";

import { Radio, Input, Table, Button, notification } from "antd";
import "../App1.css";

const SelfTest = () => {
  const [state, setState] = useState({ tuesdayRadioValue: "" });

  const onRadioChange = ({ checked, type, weekday }) => {
    setState({ [`${weekday}RadioValue`]: type });
  };

  const openNotification = () => {
    notification.open({
      message: "진단이 완료되었습니다.",
      description: "VR로 이동합니다",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };
  const workDayColumns = [
    {
      title: "",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "본인이 겪고 있는 PTSD 원인의 영역을 고르세요.",
      dataIndex: "tuesday",
      key: "tuesday",
      width: "75%",

      render: (text, record) => (
        <Radio
          checked={state.tuesdayRadioValue === record.type}
          onChange={(e) => {
            onRadioChange({
              checked: e.target.checked,
              type: record.type,
              weekday: "tuesday",
            });

            console.log(record.type);
          }}
        >
          {record.type === "기타" ? (
            <Input style={{ width: 400, marginLeft: 10 }} />
          ) : null}
          {/* {text} */}
        </Radio>
      ),
    },
  ];
  const workDayData = [
    {
      key: "1",
      type: "피해 및 손상",
      day: "Mon-Fri",
    },
    {
      key: "2",
      type: "집단괴롭힘",
      day: "Sat",
    },
    {
      key: "3",
      type: "사고",
      day: "Sun1",
    },
    {
      key: "4",
      type: "사별",
      day: "Sun2",
    },
    {
      key: "5",
      type: "학대",
      day: "Sun3",
    },
    {
      key: "6",
      type: "차별",
      day: "Sun4",
    },
    {
      key: "7",
      type: "명예살인",
      day: "Sun5",
    },
    {
      key: "8",
      type: "전쟁",
      day: "Sun6",
    },
    {
      key: "9",
      type: "성폭력",
      day: "Sun61",
    },
    {
      key: "10",
      type: "재난",
      day: "Sun612",
    },
    {
      key: "11",
      type: "기타",
      day: "Sun612",
    },
  ];
  return (
    <div className="grid grid-cols-1  gap-4 p-15 bg-white rounded-3xl md:m-10">
      <div className="m-2 md:m-10 mt-19 p-10 md:p-12 bg-gray-200 rounded-3xl ">
        <Header title="자가진단 문항" />
        <Table
          columns={workDayColumns}
          dataSource={workDayData}
          size="large"
          pagination={false}
        />
        <SelfTest2 />
        <SelfTest3 />
        <SelfTest4 />
        <SelfTest5 />
      </div>
      <div className="grid place-items-center">
        <br />
        <Button
          type="primary"
          onClick={openNotification}
          style={{ width: "110px" }}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default SelfTest;

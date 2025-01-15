import React, { useState } from "react";
import { Header } from "./";
import { workDayData } from "../assets/data/dummy";

import { Radio, Input, Table } from "antd";
import "../App1.css";

const SelfTest2 = () => {
  const [state, setState] = useState({ tuesdayRadioValue: "" });

  const onRadioChange = ({ checked, type, weekday }) => {
    setState({ [`${weekday}RadioValue`]: type });
  };
  const workDayColumns = [
    {
      title: "",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "위에서 선택한 원인에 대한 장소를 묘사해주세요.",
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
      type: "학교",
      day: "Mon-Fri",
    },
    {
      key: "2",
      type: "공사장 ",
      day: "Sat",
    },
    {
      key: "3",
      type: "집",
      day: "Sun1",
    },
    {
      key: "4",
      type: "바다",
      day: "Sun2",
    },
    {
      key: "5",
      type: "산",
      day: "Sun3",
    },
    {
      key: "6",
      type: "병원",
      day: "Sun4",
    },
    {
      key: "7",
      type: "군중",
      day: "Sun5",
    },
    {
      key: "8",
      type: "전쟁",
      day: "Sun6",
    },
    {
      key: "9",
      type: "높은 곳",
      day: "Sun61",
    },
    {
      key: "10",
      type: "전쟁터",
      day: "Sun612",
    },
    {
      key: "11",
      type: "기타",
      day: "Sun612",
    },
  ];

  return (
    <div>
      <Table
        columns={workDayColumns}
        dataSource={workDayData}
        size="large"
        pagination={false}
      />
    </div>
  );
};

export default SelfTest2;

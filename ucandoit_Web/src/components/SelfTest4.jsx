import React, { useState } from "react";
import { Header } from "./";
import { workDayData } from "../assets/data/dummy";

import { Radio, Input, Table } from "antd";
import "../App1.css";

const SelfTest4 = () => {
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
      title: "위의 PSTD로 인해 나타나는 본인의 증상을 선택해주세요.",
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
      type: "재경험 및 회상",
      day: "Mon-Fri",
    },
    {
      key: "2",
      type: "악몽 ",
      day: "Sat",
    },
    {
      key: "3",
      type: "생각 회피",
      day: "Sun1",
    },
    {
      key: "4",
      type: "사람∙장소∙활동 회피",
      day: "Sun2",
    },
    {
      key: "5",
      type: "신경예민 및 과경계",
      day: "Sun3",
    },
    {
      key: "6",
      type: "깜짝 놀람 반응",
      day: "Sun4",
    },
    {
      key: "7",
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

export default SelfTest4;

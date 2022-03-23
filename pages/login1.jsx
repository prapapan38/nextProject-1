import React, { useEffect, useState } from "react";
import { Button, Card, Input, Select, Layout, DatePicker, Space } from "antd";
import Image from "next/image";
import { Row, Col, Table } from "reactstrap";

const { Option } = Select;
const { TextArea } = Input;

const listProject = [
  { label: "การส้างเขื่อน", value: 1 },
  { label: "การส้างห้าง", value: 2 },
  { label: "การส้างถนน", value: 3 },
];

const clientName = [
  { label: "TAN", value: 1 },
  { label: "ZOM", value: 2 },
  { label: "MAN", value: 3 },
];

const pay = [
  { label: "CREDIT", value: 1 },
  { label: "CASH", value: 2 },
  { label: "BANKING", value: 3 },
];

const documentRefer = [
  { label: "ใบเสร็จ", value: 1 },
  { label: "สลิปการโอน", value: 2 },
  { label: "เช็ก", value: 3 },
];

const buyer = [
  { label: "A", value: 1 },
  { label: "B", value: 2 },
  { label: "C", value: 3 },
];

const layoutInput = (lable) => (
  <div className=" mt-2">
    <Input placeholder={lable} />
  </div>
);

const layoutSelect = (label, list = []) => (
  <div className=" mt-2 ">
    <Select placeholder={label} className="w-full">
      {list.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.label}
        </Option>
      ))}
    </Select>
  </div>
);

const layoutTextArea = (lable) => (
  <div className="mt-2">
    <TextArea placeholder={lable} />
  </div>
);

const layoutTable = () => (
  <div className=" mt-2">
    <Table bordered>
      <thead>
        <tr className="text-xs text-center">
          <th>ลําดับ</th>
          <th>เลขที่ใบวางบิล</th>
          <th>เลขที่ใบส่งของ</th>
          <th>เลขที่ใบสั่งซื้อ</th>
          <th>รูปถ่าย</th>
          <th>รายการสินค้า/บริการ</th>
          <th>ยอดใบ วางบิล</th>
        </tr>
      </thead>
      <tbody className="text-xs text-center">
        <tr>
          <th scope="row">1</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </Table>
  </div>
);

const Home1 = () => {
  return (
    <div className="container-md mt-32">
      <Card>
        <Row>
          <Col md={3} xs={12} className=" border-r-2 border-gray-300">
            <div className=" ml-1 mr-1">
              <div className="text-xl mb-3 font-semibold">สร้างใบวางบิล</div>

              {layoutInput("เลขทีใบวางบิล")}
              {layoutSelect("ชือโครงการ", listProject)}
              {layoutSelect("ชือลูกค้า", clientName)}
              {layoutTextArea("ทีอยู่")}
              {layoutInput("สํานักงานใหญ่/สาขา")}
              {layoutInput("เลขทีผู้เสียภาษา")}
              {layoutSelect("การชําระเงิน", pay)}
              <Row>
                <Col md={6} xs={12}>
                  <DatePicker
                    placeholder="Date Start"
                    className=" w-full mt-2"
                  />
                </Col>
                <Col md={6} xs={12}>
                  <DatePicker placeholder="Date End" className=" w-full mt-2" />
                </Col>
              </Row>

              {layoutSelect("เอกสารอ้างอิง", documentRefer)}
              {layoutTextArea("QT")}
              <div className=" mt-24 ">
                {layoutSelect("้ขอซื้อ/ผู้รับผิดชอบ", buyer)}
              </div>
            </div>
          </Col>

          <Col md={9} xs={12}>
            <div className="">
              <div className=" text-xl mb-3 font-semibold">
                รายละเอียดใบวางรับวางบิล
              </div>

              {layoutTable()}
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home1;

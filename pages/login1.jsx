import React, { useEffect, useState } from "react";
import { Button, Card, Input, Select, Layout, DatePicker, Space, Table } from "antd";
import Image from "next/image";
import { Row, Col } from "reactstrap";
import { dataTable, listProject, clientName, pay, documentRefer, buyer } from '../dataTest/loginDataTest'
import { getUser } from '../services/home.service'
import TableLogin from './login/table'
const { Option } = Select;
const { TextArea } = Input;



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


const Home1 = () => {

  const [listUser, setListUser] = useState([])

  useEffect(() => {
    // fetchGetUser()
  }, [])

  const fetchGetUser = async () => {
    const res = await getUser()
    setListUser(res.data)
  }


  return (
    <div className="container-md mt-32 ">
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
                    style={{ borderRadius: 6 }}
                  />
                </Col>
                <Col md={6} xs={12}>
                  <DatePicker
                    placeholder="Date End"
                    className=" w-full mt-2"
                    style={{ borderRadius: 6 }}
                  />
                </Col>
              </Row>

              {layoutSelect("เอกสารอ้างอิง", documentRefer)}
              {layoutTextArea("QT")}
              <div className=" mt-24 ">
                {layoutSelect("ขอซื้อ/ผู้รับผิดชอบ", buyer)}
              </div>
            </div>
          </Col>

          <Col md={9} xs={12}>
            <div className="">
              <div className=" text-xl mb-3 font-semibold">
                รายละเอียดใบวางรับวางบิล
              </div>

              <div className=" mt-2">
                <TableLogin />
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Home1;

import React, { useState } from "react";
import { PageHeader, Button, Descriptions, Modal } from "antd";
import EmulatorScreen from "./EmulatorScreen";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        style={{ maxHeight: "10vh" }}
        ghost={false}
        title="Android Editor"
        subTitle="Edit the code here and click submit"
        extra={[
          <Button key="2" onClick={showModal}>
            Show Emulator
          </Button>,
          <Button key="1" type="primary">
            Submit Code
          </Button>,
        ]}
      >
        {/* <Descriptions size="small" column={3}>
          <Descriptions.Item label="User">User name</Descriptions.Item>
          <Descriptions.Item label="Association">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">
            2017-01-10
          </Descriptions.Item>
          <Descriptions.Item label="Effective Time">
            2017-10-10
          </Descriptions.Item>
          <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions> */}
      </PageHeader>
      <Modal
        title="Android Emulator"
        visible={isModalVisible}
        centered
        style={{ top: 10 }}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://localhost:3443"
            allowFullScreen={true}
            width="75%"
            height="800px"
            frameBorder="0"
            title="Emulator"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default Header;

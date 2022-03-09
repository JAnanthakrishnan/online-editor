import React from "react";
import { PageHeader, Button, Descriptions } from "antd";

const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        style={{ maxHeight: "8vh", minHeight: "8vh" }}
        ghost={false}
        title="Android Editor"
        subTitle="Edit the code here and click submit"
        extra={[
          <Button key="2">Show Emulator</Button>,
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
    </div>
  );
};

export default Header;

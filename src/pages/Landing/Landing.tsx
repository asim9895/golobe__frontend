import { Card, Flex, Space } from "antd";
import React from "react";

const Landing = () => {
  return (
    <div>
      <Flex justify={"center"} align={"center"}>
        <Space direction="vertical" size={16}>
          <Card
            style={{
              width: 600,
              marginTop: 300,
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <h1>Golobe Landing Page</h1>
          </Card>
        </Space>
      </Flex>
    </div>
  );
};

export default Landing;

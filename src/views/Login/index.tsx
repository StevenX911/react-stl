import React from "react";
import { Card } from "antd";

const Login: React.FC = () => {
  return (
    <>
      <Card title="Default size card" extra={<a href="#">More</a>}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </>
  );
};

export default Login;

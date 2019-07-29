import React from "react";
import { Card, Icon } from "antd";

const Container = ({ title, icon, href, style, children }) => {
  return (
    <Card
      style={style}
      title={
        title ? (
          <h1>
            {icon && <Icon type={icon} />} {title}
          </h1>
        ) : (
          "Card title"
        )
      }
      extra={href && <a href={href}>More</a>}
    >
      {children}
    </Card>
  );
};

export default Container;

import React from "react";
import Button from "../../components/button";
export default function ButtonDemo() {
  const handleClick = (e) => {
    console.log("%c [ e ]", "color:#bf2c9f;", e);
  };
  return (
    <>
      <Button onClick={handleClick} btnType="danger">
        danger
      </Button>
      <Button>默认</Button>
      <Button size="lg">默认</Button>
      <Button href="ww" btnType="link">
        link
      </Button>
      <Button href="ww" btnType="link" disabled>
        link disabled
      </Button>
      <Button size="sm">Small</Button>
      <Button btnType="primary">primary</Button>
      <Button btnType="primary" size="sm">
        primary
      </Button>
      <Button shape="circle" size="sm">A</Button>
      <Button shape="circle"  >A</Button>
      <Button shape="circle" size="lg">A</Button>
      <Button shape="round" size="sm">R</Button>
    </>
  );
}

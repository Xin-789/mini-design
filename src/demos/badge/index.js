import React from "react";
import Badge from "../../components/Badge/Badge";
import "./index.scss";
function BadgeDemo() {
  return (
    <div className="badge-deom">
      <Badge />
      <Badge style={{ background: '#4caf50' }} />
      <Badge content={80} />
      <Badge content={101} maxCount={80} />
      <Badge content="NEW" />
      <Badge color="primary" >Yellow</Badge>
    </div>
  );
}
export default BadgeDemo;

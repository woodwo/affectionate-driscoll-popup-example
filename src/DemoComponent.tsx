import React, { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined, SaveOutlined } from "@ant-design/icons";

const DemoComponent: React.FC = () => {
  const [count, setCount] = useState(3);
  const [position, setPosition] = useState({
    top: "",
    right: "",
    bottom: "",
    left: "",
    focus: "",
  });

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#494f57",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <span style={{ color: "white", marginRight: "10px" }}>
        Count: {count}
      </span>
      <Button
        type="default"
        icon={<PlusOutlined />}
        onClick={handleIncrease}
        style={{
          marginRight: "10px",
          backgroundColor: "#3bbd67",
          borderColor: "#3bbd67",
          borderRadius: "50%",
          color: "white",
        }}
      />
      <Button
        type="default"
        icon={<MinusOutlined />}
        onClick={handleDecrease}
        style={{
          backgroundColor: "#e14646",
          borderColor: "#e14646",
          borderRadius: "50%",
          color: "white",
        }}
      />
    </div>
  );

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <h3>Positions</h3>
        <div style={{ display: "flex", gap: "10px" }}>
          <Input
            placeholder="Right"
            value={position.right}
            onChange={(e) =>
              setPosition({ ...position, right: e.target.value })
            }
          />
          <Input
            placeholder="Top"
            value={position.top}
            onChange={(e) => setPosition({ ...position, top: e.target.value })}
          />
          <Input
            placeholder="Bottom"
            value={position.bottom}
            onChange={(e) =>
              setPosition({ ...position, bottom: e.target.value })
            }
          />
          <Input
            placeholder="Left"
            value={position.left}
            onChange={(e) => setPosition({ ...position, left: e.target.value })}
          />
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>Focus and Blur</h3>
        <Input
          placeholder="Focus"
          value={position.focus}
          onChange={(e) => setPosition({ ...position, focus: e.target.value })}
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h3>MouseTrack</h3>
        <Tooltip placement="right" title={content} color="#494f57">
          <Button
            type="primary"
            icon={<SaveOutlined />}
            style={{ backgroundColor: "#4f47e3", borderColor: "#4f47e3" }}
          >
            Save
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default DemoComponent;

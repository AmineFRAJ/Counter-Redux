import React from "react";
import { PlusOutlined, ReloadOutlined, MinusOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../JS/Actions";
const Counter = () => {
  const Counter = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/5 h-2/5 bg-gray-500 rounded-3xl text-gray-50 flex flex-col items-center">
        <div className="text-3xl mt-6">Counter Redux App </div>
        <div className="text-7xl mb-4">{Counter}</div>
        <div>
          <Tooltip title="plus">
            <Button
              onClick={() => dispatch(increment())}
              type="primary"
              shape="circle"
              icon={<PlusOutlined />}
            />
          </Tooltip>
          <Tooltip title="minus">
            <Button
              onClick={() => dispatch(decrement())}
              type="primary"
              shape="circle"
              icon={<MinusOutlined />}
            />
          </Tooltip>
        </div>
        <div>
          <Tooltip title="reset">
            <Button
              onClick={() => dispatch(reset())}
              type="default"
              shape="circle"
              icon={<ReloadOutlined />}
            />
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Counter;

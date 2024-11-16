import { Col, Dropdown } from "antd";
import { RiArrowDownSFill } from "react-icons/ri";

export default function ({ title, textColor, bgColor }) {
  return (
    <Dropdown
      placement="bottom"
      trigger={["click"]}
      dropdownRender={() => (
        <div className="shadow-lg dark:shadow-[#2a2a2a] p-2 rounded-lg dark:bg-[#121212] dark:text-primary bg-white">
          <p className="font-primary text-sm font-medium my-1">Filter 1</p>
          <p className="font-primary text-sm font-medium my-1">Filter 2</p>
          <p className="font-primary text-sm font-medium my-1">Filter 3</p>
        </div>
      )}
    >
      <div
        className={`${bgColor} w-fit flex items-center py-1 px-4 h-fit rounded-3xl`}
      >
        <p className={`mr-2 min-[560px]:mr-8 text-sm ${textColor}`}>{title}</p>
        <p className={`${textColor}`}>
          <RiArrowDownSFill />
        </p>
      </div>
    </Dropdown>
  );
}

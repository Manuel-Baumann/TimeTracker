import { Pagination } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { useState } from "react";

interface IPaginator {
  onChange: (page: number) => void;
  listLength: number;
}

export const Paginator: React.FC<IPaginator> = ({ onChange, listLength }) => {
  const [selectedPage, setSelectedPage] = useState(1);
  const handlePageChange = (page: number) => {
    setSelectedPage(page);
    onChange(selectedPage);
  };
  return (
    <Pagination
      defaultCurrent={1}
      pageSize={4}
      total={listLength}
      showSizeChanger={false}
      onChange={handlePageChange}
    />
  );
};

/* eslint-disable react/prop-types */
import { Table, Tag } from "antd";
import { useMemo } from "react";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "First Name",
    dataIndex: "first_name",
    key: "first_name",
  },
  {
    title: "Last_name",
    dataIndex: "last_name",
    key: "last_name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (_, { email }) => <Tag color="green">{email}</Tag>,
  },
];

const Products = (props) => {
  const { usersData, searchValue } = props;

  const filterUserData = (data, searchValue) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.last_name.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  // Memoize the filtered data
  const filteredData = useMemo(
    () => filterUserData(usersData, searchValue),
    [usersData, searchValue]
  );

  return (
    <>
      <Table columns={columns} dataSource={filteredData} />
    </>
  );
};

export default Products;

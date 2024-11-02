import { DeleteOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Row,
  Table,
} from "antd";
import React, { CSSProperties } from "react";
import { useTableSearch } from "../../hooks/useTableSearch";
import { useGetUsers } from "../../tanstack/useUsers";
import { formattedAddress } from "../../utils/formattedAddress";
import { formattedDate } from "../../utils/formattedDate";
import { onTableFilter } from "../../utils/onTableFilter";
import { rolesOptions } from "../../utils/rolesOptions";


const UsersModule: React.FC = ({
  api,
  setSelectedUser,
  showDeleteUserModal,
}) => {
  const { getColumnSearchProps } = useTableSearch();
  const {
    data: getUsersData,
    isLoading: isGetUsersLoading,
    isRefetching: isRefetchingUsers,
  } = useGetUsers(api);
  const loading = isGetUsersLoading || isRefetchingUsers;

  const tableStyles: CSSProperties = {
    width: "100%",
  };
 
  const handleDeleteUser = (user) => {
    setSelectedUser(user);
    showDeleteUserModal()
  }
  
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "ФИО",
      dataIndex: "name",
      key: "name",
      width: "10%",
      ...getColumnSearchProps('name'),
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      key: "phone",
      ...getColumnSearchProps('phone'),
    },
    {
      title: "День рождения",
      dataIndex: "date_of_birth",
      key: "date_of_birth",
      render: (date_of_birth) => formattedDate(date_of_birth),
    },
    {
      title: "Роль",
      dataIndex: "role",
      key: "role",
      filters: rolesOptions,
      onFilter: (value, record) => onTableFilter(value, record, "role"),
    },
    {
      title: "Город",
      dataIndex: "city",
      key: "city",
      render: (city) => city.name,
    },
    {
      title: "Адрес",
      dataIndex: "",
      key: "address",
      render: ({
        city: { name: cityName },
        region,
        street,
        street_num,
        apartment,
      }) => formattedAddress(cityName, region, street, street_num, apartment),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (email) => email || "—",
    },
    {
      title: "Дата регистрации",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at) => formattedDate(created_at),
    },
    {
      title: '',
      dataIndex: '',
      key: 'x',
      render: (user) => (
        <Button
          danger
          icon={<DeleteOutlined />}
          onClick={() => handleDeleteUser(user)}
        />
      ),
    },
  ];

  return (
    <Card title={"Пользователи"}>
      <Row
        gutter={[ 16, 16 ]}
        style={{ marginTop: "16px" }}
      >
        <Col span={24}>
          <Table
            scroll={{ x: 1000 }}
            dataSource={getUsersData}
            columns={columns}
            style={tableStyles}
            loading={loading}
            showSorterTooltip={false}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default UsersModule;
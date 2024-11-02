import {
  Modal,
  notification,
  Typography,
} from "antd";
import React, {
  FC,
  useState,
} from "react";
import CustomDeleteMaskText from "../../components/CustomDeleteMaskText";
import { useDeleteUserById } from "../../tanstack/useUsers";
import UsersTable from "./UsersTable";

const UsersModule: FC = () => {
  const [ api, contextHolder ] = notification.useNotification();

  const [ selectedUser, setSelectedUser ] = useState({});

  const [ isDeleteUserModalOpen, setIsDeleteUserModalOpen ] = useState(false);
  const showDeleteUserModal = (id) => setIsDeleteUserModalOpen(true);
  const hideDeleteUserModal = () => setIsDeleteUserModalOpen(false);

  const {
    isPending: isDeleteUserLoading,
    mutateAsync: deleteUser,
  } = useDeleteUserById(api);

  const handleDeleteUser = async () => {
    await deleteUser(selectedUser.id);
    hideDeleteUserModal();
  }

  return (
    <>
      {contextHolder}
      <UsersTable
        api={api}
        setSelectedUser={setSelectedUser}
        showDeleteUserModal={showDeleteUserModal}
      />
      <Modal
        title="Удалить пользователя"
        open={isDeleteUserModalOpen}
        centered
        onOk={handleDeleteUser}
        confirmLoading={isDeleteUserLoading}
        onCancel={hideDeleteUserModal}
        okText="Подтвердить"
        cancelText="Отмена"
      >
        <CustomDeleteMaskText>
        {selectedUser.name}
      </CustomDeleteMaskText>
      </Modal>
    </>
  );
};

export default UsersModule;


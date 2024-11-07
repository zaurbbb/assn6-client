import {
  Button,
  Drawer,
  notification,
  Row,
  Table,
  Typography,
} from "antd";
import React, {
  FC,
  useState,
} from "react";
import { ColumnsType } from 'antd/es/table';
import { useGetOrders } from "../../tanstack/useOrders";


// types.ts
export interface OrderItem {
  product_name: string;
  quantity: number;
  price: string;
}

export interface Order {
  id: number;
  created_at: string;
  total_price: string;
  status: string;
  items: OrderItem[];
}

const {
  Title,
  Text,
} = Typography;

const statusOptions = [
  {
    value: "created",
    label: "Сформирован",
    text: "Сформирован",
  }, {
    value: "processing",
    label: "В обработке",
    text: "В обработке",
  }, {
    value: "shipped",
    label: "Отправлен",
    text: "Отправлен",
  }, {
    value: "delivered",
    label: "Доставлен",
    text: "Доставлен",
  },{
    value: "canceled",
    label: "Отменен",
    text: "Отменен",
  },
];

const OrdersModule: FC = () => {
  const [ api ] = notification.useNotification();

  const {
    data: orders,
  } = useGetOrders(api);

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // Define columns for the main table
  const columns: ColumnsType<Order> = [
    {
      title: 'Номер заказа',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Создано',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (date) => new Date(date).toLocaleString(),
    },
    {
      title: 'Сумма',
      dataIndex: 'total_price',
      key: 'total_price',
      render: (price) => `₸${Number(price).toLocaleString()}`,
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span style={{ textTransform: 'capitalize' }}>{statusOptions.find((option) => option.value === status)?.text}</span>
      ),
    },
    {
      title: 'Действия',
      key: 'action',
      render: (_, record) => (
        <Button
          type="link"
          onClick={() => showOrderDetails(record)}
        >
          Детали заказа
        </Button>
      ),
    },
  ];



  const showOrderDetails = (order: Order) => {
    setSelectedOrder(order);
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
    setSelectedOrder(null);
  };

  const rowStyles = {
    width: '100%',
  }
  return (
    <Row
      style={rowStyles}
      gutter={[ 12, 24 ]}
    >
      <Table<Order>
        style={rowStyles}
        columns={columns}
        dataSource={orders}
        rowKey="id"
      />

      <Drawer
        title={`Детали заказа #${selectedOrder?.id}`}
        width={400}
        onClose={closeDrawer}
        visible={drawerVisible}
      >
        {selectedOrder && (
          <>
            <Title level={5}>Создано</Title>
            <Text>{new Date(selectedOrder.created_at).toLocaleString()}</Text>

            <Title level={5}>Статус</Title>
            <Text>{statusOptions.find((option) => option.value === selectedOrder.status)?.text}</Text>

            <Title level={5}>Сумма</Title>
            <Text>₸{Number(selectedOrder.total_price).toLocaleString()}</Text>

            <Title level={5} style={{ marginTop: '20px' }}>Содержимое</Title>
            {selectedOrder.items.map((item: OrderItem, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <Text strong>{item.product_name}</Text>
                <br />
                <Text>Кол-во: {item.quantity}</Text>
                <br />
                <Text>Цена: ₸{Number(item.price).toLocaleString()}</Text>
              </div>
            ))}
          </>
        )}
      </Drawer>
    </Row>
  );
};

export default OrdersModule;
import {
  FilterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import {
  Button,
  Flex,
  Modal,
  notification,
} from "antd";
import React, {
  FC,
  useState,
} from "react";
import CustomMenuFilters from "../../components/CustomMenuFilters";
import CustomSelectButton from "../../components/CustomSelectButton";
import { sorterOptions } from "../../data/sorterOptions";
import useScreenSize from "../../hooks/useScreenSize";
import { useGetMeta } from "../../tanstack/useProducts";
// import { useDeleteDiscountByProductId } from "../../tanstack/useDiscounts";

const MetaModule: FC = () => {
  const [ api, contextHolder ] = notification.useNotification();

  const { isMd } = useScreenSize();

  const [ selectedProduct, setSelectedProduct ] = useState({});

  const [ isFiltersModalOpen, setIsFiltersModalOpen ] = useState(false);
  const showFiltersModal = () => setIsFiltersModalOpen(true);
  const hideFiltersModal = () => setIsFiltersModalOpen(false);


  // state for filters and sorters
  const [ selectedSorter, setSelectedSorter ] = useState("");
  const handleSorterChange = (value: string) => {
    setSelectedSorter(value);
  };
  const [ selectedFilterValue, setSelectedFilterValue ] = useState({
    category: [ {
      id: 1,
      name: "Керамическая плитка",
      count: 20,
    }, {
      id: 2,
      name: "Керамогранитная плитка",
      count: 9,
    }, {
      id: 3,
      name: "Фасадная плитка",
      count: 12,
    }, {
      id: 4,
      name: "Плитка для бассейна",
      count: 10,
    } ],
    usage: [],
    availability: [],
    plating: [],
    invoice: [],
    size: [],
    texture: [],
    shade: [],
    price: {
      min: null,
      max: null,
    },
    image: {
      count: 0,
    },
  });
  // const {
  //   isPending: isDeleteDiscountPending,
  //   mutate: deleteDiscount,
  // } = useDeleteDiscountByProductId(api);

  // const handleDeleteDiscount = async () => {
  //   await deleteDiscount(selectedProduct.id);
  //   hideDeleteDiscountModal();
  // };

  return (
    <>
      <Flex justify="space-between">
        {isMd && (
          <Button
            icon={<FilterOutlined />}
            onClick={showFiltersModal}
          />
        )}
        {!isMd && (
          <Button
            icon={<MenuOutlined />}
            iconPosition="end"
          >
            меню
          </Button>
        )}

        <CustomSelectButton
          handleSorterChange={handleSorterChange}
          sorterOptions={sorterOptions}
        />
      </Flex>
      <Modal
        title="Фильтры"
        open={isFiltersModalOpen}
        centered
        onCancel={hideFiltersModal}
        footer={null}
      >
        <CustomMenuFilters />
      </Modal>
    </>
  );
};

export default MetaModule;


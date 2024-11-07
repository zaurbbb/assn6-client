import {
  Button,
  Checkbox,
  Flex,
  notification,
  Radio,
  Slider,
  Space,
  Tag,
  Typography,
} from "antd";
import React, {
  CSSProperties,
  FC,
  useState,
} from "react";
import { useGetCategories } from "../tanstack/useCategories";
import { useGetMeta } from "../tanstack/useProducts";
import { useSearchStore } from "../zustand/useSearch";
import CustomSpin from "./CustomSpin";

const { Text } = Typography;
const CustomMenuFilters: FC = () => {
  const [ api ] = notification.useNotification();
  const {
    data: categoriesData,
  } = useGetCategories(api);
  console.log(categoriesData);
  const {
    search,
    changeSearch,
  } = useSearchStore();


  const flexStyles: CSSProperties = {
    maxHeight: "100%",
    width: "100%",
    overflowY: "auto",
  };

  const spaceStyles: CSSProperties = {
    width: "100%",
    padding: "1.5rem",

    borderRadius: "1rem",

    backgroundColor: "#F0F0F0",
  };
  console.log("category", search.category);
  const textBoldStyles: CSSProperties = {
    fontFamily: "ManropeRegular",
    fontWeight: 700,
    cursor: "pointer",

  };


  const setFilter = (
    filterName: string,
    filterValue: string,
  ) => {
    changeSearch({
      ...search,
      [filterName]: filterValue,
    });
    return;
  };

  const setPriceFilter = (value) => {
    changeSearch({
      ...search,
      min_price: value[0],
      max_price: value[1],
    });
  };

  // if (isGetMetaLoading) {
  //   return (
  //     <CustomSpin />
  //   );
  // }

  return (
    <Flex
      style={flexStyles}
      vertical
      gap="middle"
    >
      <Button
        type="primary"
        onClick={() => changeSearch({
          limit: 10,
          page: 1,
        })}
      >
        Сбросить фильтр
      </Button>
      {/*category*/}
      <Space
        direction="vertical"
        size="middle"
        style={spaceStyles}
      >
        {categoriesData.map((category) => (
          <Flex
            key={category.name}
            gap="small"
          >
            <Text
              style={{
                ...textBoldStyles,
                textDecoration: search.category === category.name ? "underline" : "none",
              }}
              strong
              onClick={() => setFilter("category", category.name)}
            >
              {category.name}
            </Text>
          </Flex>
        ))}
      </Space>

      {/*  /!* usage *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    size="middle"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    {getMeta.usage.map((usage) => (*/}
      {/*      <Flex*/}
      {/*        key={usage.name}*/}
      {/*        gap="small"*/}

      {/*      >*/}
      {/*        <Checkbox onClick={() => setFilter("usage", usage.name)} />*/}
      {/*        <Text*/}
      {/*          style={textBoldStyles}*/}
      {/*          strong*/}
      {/*        >*/}
      {/*          {usage.name}*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </Space>*/}

      {/*  /!* availability *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    size="middle"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    {getMeta.availability.map((availability) => (*/}
      {/*      <Flex*/}
      {/*        key={availability.name}*/}
      {/*        gap="small"*/}
      {/*      >*/}
      {/*        <Checkbox onClick={() => setFilter("availability", availability.name)} />*/}
      {/*        <Text*/}
      {/*          style={textBoldStyles}*/}
      {/*          strong*/}
      {/*        >*/}
      {/*          {availability.name}*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </Space>*/}

      {/*  /!* plating *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    size="middle"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    {getMeta.plating.map((plating) => (*/}
      {/*      <Flex*/}
      {/*        key={plating.name}*/}
      {/*        gap="small"*/}
      {/*      >*/}
      {/*        <Checkbox onClick={() => setFilter("plating", plating.name)} />*/}
      {/*        <Text*/}
      {/*          style={textBoldStyles}*/}
      {/*          strong*/}
      {/*        >*/}
      {/*          {plating.name}*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </Space>*/}

      {/*  /!* invoice *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    size="middle"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    {getMeta.invoice.map((invoice) => (*/}
      {/*      <Flex*/}
      {/*        key={invoice.name}*/}
      {/*        gap="small"*/}
      {/*      >*/}
      {/*        <Checkbox onClick={() => setFilter("invoice", invoice.name)} />*/}
      {/*        <Text*/}
      {/*          style={textBoldStyles}*/}
      {/*          strong*/}
      {/*        >*/}
      {/*          {invoice.name}*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </Space>*/}

      {/*  /!* size *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    <Flex wrap>*/}
      {/*      {getMeta.size.map((size) => (*/}
      {/*        <Flex*/}
      {/*          key={size.name}*/}
      {/*          gap="small"*/}
      {/*        >*/}
      {/*          <Tag.CheckableTag*/}
      {/*            style={tagStyle(selectedTags.includes(size.name))}*/}
      {/*            checked={selectedTags.includes(size.name)}*/}
      {/*            onChange={(checked) => {*/}
      {/*              handleChange(size.name, checked);*/}
      {/*              setFilter("size", size.name);*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            {size.name}*/}
      {/*          </Tag.CheckableTag>*/}
      {/*        </Flex>*/}
      {/*      ))}*/}
      {/*    </Flex>*/}
      {/*  </Space>*/}

      {/*  /!* texture *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    size="middle"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    {getMeta.texture.map((texture) => (*/}
      {/*      <Flex*/}
      {/*        key={texture.name}*/}
      {/*        gap="small"*/}
      {/*      >*/}
      {/*        <Checkbox onClick={() => setFilter("texture", texture.name)} />*/}
      {/*        <Text*/}
      {/*          style={textBoldStyles}*/}
      {/*          strong*/}
      {/*        >*/}
      {/*          {texture.name}*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </Space>*/}

      {/*  /!* shade *!/*/}
      {/*  <Space*/}
      {/*    direction="vertical"*/}
      {/*    size="middle"*/}
      {/*    style={spaceStyles}*/}
      {/*  >*/}
      {/*    {getMeta.shade.map((shade) => (*/}
      {/*      <Flex*/}
      {/*        key={shade.name}*/}
      {/*        gap="small"*/}
      {/*      >*/}
      {/*        <Checkbox onClick={() => setFilter("shade", shade.name)} />*/}
      {/*        <Text*/}
      {/*          style={textBoldStyles}*/}
      {/*          strong*/}
      {/*        >*/}
      {/*          {shade.name}*/}
      {/*        </Text>*/}
      {/*      </Flex>*/}
      {/*    ))}*/}
      {/*  </Space>*/}

      {/* price */}
      <Space
        direction="vertical"
        size="middle"
        style={spaceStyles}
      >
        <Flex
          justify="space-between"
          vertical
        >
          <Flex justify="space-between">
            <Text>
              0 ₸
              {/*{getMeta.price.min} руб.*/}
            </Text>
            <Text>
              50 000 ₸
              {/*{getMeta.price.max} руб.*/}
            </Text>
          </Flex>
          <Slider
            style={{ width: "95%" }}
            range
            onChange={(value) => setPriceFilter(value)}
            defaultValue={[ 0, 50000 ]}
            min={0}
            max={50000}
          />
        </Flex>
      </Space>

      {/*/!* image *!/*/}
      {/*<Space*/}
      {/*  direction="vertical"*/}
      {/*  size="middle"*/}
      {/*  style={spaceStyles}*/}
      {/*>*/}
      {/*  <Flex gap="small">*/}
      {/*    <Checkbox onClick={(event) => setHasImageFilter(event.target.checked)} />*/}
      {/*    <Text*/}
      {/*      style={textBoldStyles}*/}
      {/*      strong*/}
      {/*    >*/}
      {/*      показывать с рисунком*/}
      {/*    </Text>*/}
      {/*  </Flex>*/}
      {/*</Space>*/}


    </Flex>
  );
};

export default CustomMenuFilters;


import {
  Checkbox,
  Flex,
  notification,
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
import { useGetMeta } from "../tanstack/useProducts";
import { useSearchStore } from "../zustand/useSearch";
import CustomSpin from "./CustomSpin";

const { Text } = Typography;
const CustomMenuFilters: FC = () => {
  const [ api ] = notification.useNotification();
  const {
    data: getMeta,
    isLoading: isGetMetaLoading,
  } = useGetMeta(api);

  const [ selectedTags, setSelectedTags ] = useState<string[]>([]);
  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [ ...selectedTags, tag ]
      : selectedTags.filter((t) => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  const {
    search,
    changeSearch,
  } = useSearchStore();

  const flexStyles: CSSProperties = {
    maxHeight: "100%",
    overflowY: "auto",
  };

  const spaceStyles: CSSProperties = {
    // width: "100%",
    padding: "1.5rem",

    borderRadius: "1rem",

    backgroundColor: "#F0F0F0",
  };

  const textBoldStyles: CSSProperties = {
    fontFamily: "ManropeRegular",
    fontWeight: 700,
  };

  const tagStyle = (isSelected) => ({
    border: 'none',
    borderRadius: '1rem',
    padding: '1rem 0.1rem',
    marginBottom: '1rem',
    width: '8rem',
    fontSize: '14px',
    cursor: 'pointer',
    textAlign: 'center',
    backgroundColor: isSelected ? '#050505' : 'white',
    color: isSelected ? 'white' : 'rgba(0, 0, 0, 0.65)',
    transition: 'all 0.3s',
    '&:hover': {
      borderColor: '#40a9ff',
      color: isSelected ? 'white' : '#40a9ff',
    },
  });

  const setFilter = (
    filterName: string,
    filterValue: string,
  ) => {
    if (!search[filterName]) {
      changeSearch({
        ...search,
        [filterName]: filterValue,
      });
      return;
    }

    if (search[filterName].split(",").filter((value) => value === filterValue).length > 0) {
      const modifiedFilterValue = search[filterName].split(",").filter((value) => value !== filterValue).join(",");
      changeSearch({
        ...search,
        [filterName]: modifiedFilterValue,
      });
    } else {
      changeSearch({
        ...search,
        [filterName]: search[filterName] + "," + filterValue,
      });
    }
  };

  const setHasImageFilter = (hasImage: boolean) => {
    changeSearch({
      ...search,
      has_image: hasImage,
    });
  }
  const setPriceFilter = (value) => {
    changeSearch({
      ...search,
      "price_from": value[0],
      "price_to": value[1],
    });
  }

  if (isGetMetaLoading) {
    return (
      <CustomSpin />
    );
  }

  return (
    <></>
    // <Flex
    //   style={flexStyles}
    //   vertical
    //   gap="middle"
    // >
    //   {/* category */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.category.map((category) => (
    //       <Flex
    //         key={category.name}
    //         gap="small"
    //       >
    //         <Checkbox onClick={() => setFilter("category", category.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {category.name} ({category.count})
    //         </Text>
    //       </Flex>
    //     ))}
    //     {/*{getMeta.category.map((category) => (*/}
    //     {/*  <Flex*/}
    //     {/*    key={category.name}*/}
    //     {/*    justify="space-between"*/}
    //     {/*    style={{ cursor: "pointer" }}*/}
    //     {/*    onClick={() => }*/}
    //     {/*  >*/}
    //     {/*    <Text*/}
    //     {/*      style={textBoldStyles}*/}
    //     {/*      strong*/}
    //     {/*      underline*/}
    //     {/*    >*/}
    //     {/*      {category.name}*/}
    //     {/*    </Text>*/}
    //     {/*    <Text*/}
    //     {/*      strong*/}
    //     {/*      type="secondary"*/}
    //     {/*      underline*/}
    //     {/*    >*/}
    //     {/*      {category.count}*/}
    //     {/*    </Text>*/}
    //     {/*  </Flex>*/}
    //     {/*))}*/}
    //   </Space>
    //
    //   {/* usage */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.usage.map((usage) => (
    //       <Flex
    //         key={usage.name}
    //         gap="small"
    //
    //       >
    //         <Checkbox onClick={() => setFilter("usage", usage.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {usage.name}
    //         </Text>
    //       </Flex>
    //     ))}
    //   </Space>
    //
    //   {/* availability */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.availability.map((availability) => (
    //       <Flex
    //         key={availability.name}
    //         gap="small"
    //       >
    //         <Checkbox onClick={() => setFilter("availability", availability.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {availability.name}
    //         </Text>
    //       </Flex>
    //     ))}
    //   </Space>
    //
    //   {/* plating */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.plating.map((plating) => (
    //       <Flex
    //         key={plating.name}
    //         gap="small"
    //       >
    //         <Checkbox onClick={() => setFilter("plating", plating.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {plating.name}
    //         </Text>
    //       </Flex>
    //     ))}
    //   </Space>
    //
    //   {/* invoice */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.invoice.map((invoice) => (
    //       <Flex
    //         key={invoice.name}
    //         gap="small"
    //       >
    //         <Checkbox onClick={() => setFilter("invoice", invoice.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {invoice.name}
    //         </Text>
    //       </Flex>
    //     ))}
    //   </Space>
    //
    //   {/* size */}
    //   <Space
    //     direction="vertical"
    //     style={spaceStyles}
    //   >
    //     <Flex wrap>
    //       {getMeta.size.map((size) => (
    //         <Flex
    //           key={size.name}
    //           gap="small"
    //         >
    //           <Tag.CheckableTag
    //             style={tagStyle(selectedTags.includes(size.name))}
    //             checked={selectedTags.includes(size.name)}
    //             onChange={(checked) => {
    //               handleChange(size.name, checked);
    //               setFilter("size", size.name);
    //             }}
    //           >
    //             {size.name}
    //           </Tag.CheckableTag>
    //         </Flex>
    //       ))}
    //     </Flex>
    //   </Space>
    //
    //   {/* texture */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.texture.map((texture) => (
    //       <Flex
    //         key={texture.name}
    //         gap="small"
    //       >
    //         <Checkbox onClick={() => setFilter("texture", texture.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {texture.name}
    //         </Text>
    //       </Flex>
    //     ))}
    //   </Space>
    //
    //   {/* shade */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     {getMeta.shade.map((shade) => (
    //       <Flex
    //         key={shade.name}
    //         gap="small"
    //       >
    //         <Checkbox onClick={() => setFilter("shade", shade.name)} />
    //         <Text
    //           style={textBoldStyles}
    //           strong
    //         >
    //           {shade.name}
    //         </Text>
    //       </Flex>
    //     ))}
    //   </Space>
    //
    //   {/* price */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     <Flex
    //       justify="space-between"
    //       vertical
    //     >
    //       <Flex justify="space-between">
    //         <Text>
    //           {getMeta.price.min} руб.
    //         </Text>
    //         <Text>
    //           {getMeta.price.max} руб.
    //         </Text>
    //       </Flex>
    //       <Slider
    //         style={{ width: "95%" }}
    //         range
    //         onChange={(value) => setPriceFilter(value)}
    //         defaultValue={[ getMeta.price.min, getMeta.price.max ]}
    //         min={getMeta.price.min}
    //         max={getMeta.price.max}
    //       />
    //     </Flex>
    //   </Space>
    //
    //   {/* image */}
    //   <Space
    //     direction="vertical"
    //     size="middle"
    //     style={spaceStyles}
    //   >
    //     <Flex gap="small">
    //       <Checkbox onClick={(event) => setHasImageFilter(event.target.checked)} />
    //       <Text
    //         style={textBoldStyles}
    //         strong
    //       >
    //         показывать с рисунком
    //       </Text>
    //     </Flex>
    //   </Space>
    //
    //
    // </Flex>
  );
};

export default CustomMenuFilters;


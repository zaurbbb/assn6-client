import { HeartFilled } from "@ant-design/icons";
import { notification } from "antd";
import React, {
  CSSProperties,
  FC,
  useEffect,
  useMemo,
} from "react";
import {
  postLikeProductFn,
  postUnlikeProductFn,
} from "../../api/fn/liked";
import {
  useLikeProduct,
  useUnlikeProduct,
} from "../../tanstack/useLiked";
import {
  usePostAddFavoriteProduct,
  usePostRemoveFavoriteProduct,
} from "../../tanstack/useProducts";
import { useGetFavorites } from "../../tanstack/useProfile";
import { useFavoritesStore } from "../../zustand/useFavorites";
import { useIsAuthStore } from "../../zustand/useIsAuth";

const CustomProductLike = ({
  liked,
  productId,
}: {
  liked: boolean;
  productId: number;
}) => {
  const [ api ] = notification.useNotification();
  // const { favorites, changeFavorites } = useFavoritesStore();
  // const { isAuth } = useIsAuthStore();
  // const isFavorite = useMemo(() => favorites.some((favorite) => {
  //   return favorite.id === productId;
  // }), [ favorites ]);
  //
  // const {
  //   data: getFavorites = [],
  //   isLoading: isGetFavoritesLoading,
  //   isRefetching: isFavoritesRefetching,
  // } = useGetFavorites(api);
  // useEffect(() => {
  //   changeFavorites(getFavorites);
  // }, [ isFavoritesRefetching ]);
  //
  const {
    mutateAsync: postLikeProduct,
  } = useLikeProduct(api);

  const toggleLike = async () => {
    await postLikeProduct(productId);
  };

  const likeButtonStyles: CSSProperties = {
    cursor: 'pointer',

    position: 'absolute',
    top: '4px',
    right: '8px',

    padding: '1.2rem',

    background: liked ? "rgba(255,53,53,0.25)" : "rgba(136,136,136,0.5)",

    borderRadius: '20%',

    fontSize: '24px',

    color: liked ? "#FF3535" : "#ffffff",

    opacity: 0.8,
  };

  return (
    <HeartFilled
      style={likeButtonStyles}
      onClick={toggleLike}
    />
  );
};

export default CustomProductLike;


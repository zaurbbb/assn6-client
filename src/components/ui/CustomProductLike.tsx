import { HeartFilled } from "@ant-design/icons";
import { notification } from "antd";
import React, {
  CSSProperties,
  FC,
  useEffect,
  useMemo,
} from "react";
import {
  usePostAddFavoriteProduct,
  usePostRemoveFavoriteProduct,
} from "../../tanstack/useProducts";
import { useGetFavorites } from "../../tanstack/useProfile";
import { useFavoritesStore } from "../../zustand/useFavorites";
import { useIsAuthStore } from "../../zustand/useIsAuth";

const CustomProductLike = ({
  productId,
}: {
  productId: number;
}) => {
  const [ api ] = notification.useNotification();
  const { favorites, changeFavorites } = useFavoritesStore();
  const { isAuth } = useIsAuthStore();
  const isFavorite = useMemo(() => favorites.some((favorite) => {
    return favorite.id === productId;
  }), [ favorites ]);

  const {
    data: getFavorites = [],
    isLoading: isGetFavoritesLoading,
    isRefetching: isFavoritesRefetching,
  } = useGetFavorites(api);
  useEffect(() => {
    changeFavorites(getFavorites);
  }, [ isFavoritesRefetching ]);

  const {
    mutateAsync: postAddFavoriteProduct,
  } = usePostAddFavoriteProduct(api);
  const {
    mutateAsync: postRemoveFavoriteProduct,
  } = usePostRemoveFavoriteProduct(api);

  const toggleLike = async () => {
    if (isAuth) {
      if (!isFavorite) {
        await postAddFavoriteProduct(productId);
        return;
      }

      await postRemoveFavoriteProduct(productId);
    } else {
      changeFavorites([]);
    }
  };

  const likeButtonStyles: CSSProperties = {
    cursor: 'pointer',

    position: 'absolute',
    top: '4px',
    right: '8px',

    padding: '1.2rem',

    background: isFavorite ? "rgba(255,53,53,0.25)" : "rgba(255,255,255,0.25)",

    borderRadius: '20%',

    fontSize: '24px',

    color: isFavorite ? "#FF3535" : "#ffffff",

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


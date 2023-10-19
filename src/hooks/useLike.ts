import { useMutation } from "react-query";
import { likeSomebody } from "../apis.ts";

export const useConfig = () => {
  // 可能有一大堆複雜的處理邏輯及從各個來源拿資料
  return {
    isEnabled: true,
    isHappy: false,
    region: ["JP", "TW"],
  };
};

export const useLike = () => {
  const { mutate: like } = useMutation(likeSomebody);
  return like;
};

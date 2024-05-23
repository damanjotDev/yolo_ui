'use client'
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useAppDispatch, useTypedSelector } from "@/app/store/store";
import { Home } from "@/components/home/home";
import { getAbouts } from "@/app/services";

function Page() {
  const dispatch = useAppDispatch();
  const { aboutsLoading} = useTypedSelector((state) => state.About);

  useEffect(()=>{
    dispatch(getAbouts())
  },[]);

  return (
    <div
      className="
      w-full
      h-auto
      flex
      flex-col
      text-[70px]
      text-primary"
    >
      <Home/>
    </div>
  );
}

export default Page;
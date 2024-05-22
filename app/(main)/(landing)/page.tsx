'use client'
import React from "react";
import dynamic from "next/dynamic";
import { useAppDispatch, useTypedSelector } from "@/app/store/store";

function HomePage() {
  const dispatch = useAppDispatch();
  const { adminDetailsLoading, adminDetails, error } = useTypedSelector((state) => state.Admin);


  return (
    <div
      className="
      h-full 
      flex
      flex-row
      text-[70px]
      text-primary"
    >
      Escape to Prasonisi
    </div>
  );
}

export default HomePage;
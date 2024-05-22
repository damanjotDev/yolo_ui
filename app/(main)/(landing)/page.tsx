'use client'
import React from "react";
import dynamic from "next/dynamic";
import { useAppDispatch, useTypedSelector } from "@/app/store/store";

function HomePage() {
  const dispatch = useAppDispatch();
    const { adminDetailsLoading, adminDetails, error} = useTypedSelector((state) => state.Admin);
    console.log('8', adminDetails)
  return (
    <div
      className="
      h-full 
      flex
      flex-row
    "
    >
        Home Page
      </div>
  );
}

export default HomePage;
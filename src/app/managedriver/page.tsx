"use client";

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { drivers } from "../lib/constants";

export default function ManageDriverPage() {
  const [selected, setSelected] = useState<number>(0); // Default to Leslie Alexander
  const [query, setQuery] = useState("")

  const driverDetails = drivers[selected];

  return (
    <div className="flex h-screen bg-[#F8FAFD]  box-border mt-1 px-2 mb-1">
      {/* Left Side - Driver List */}
      <div className="w-full md:w-[330px] border-r border-[#EDF3F9] bg-white flex flex-col rounded-lg shadow-sm">
        <div className="p-7">
         <Input
            className="rounded-md bg-[#F8FBFF] border border-gray-200"
            placeholder="Search Driver"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <h2 className="px-4 py-2 text-lg font-semibold text-gray-700">All Drivers</h2>
        <div className="flex-1 overflow-y-auto">
          {drivers.map((driver, idx) => (
            <div
              key={driver.id}
              className={`flex items-center gap-3 px-4 py-3 cursor-pointer ${
                selected === idx
                  ? "bg-[#E6F2FF]  border-[#0090FF] rounded-none ..."
                  : "hover:bg-[#F7FAFF]"
              }`}
              onClick={() => setSelected(idx)}
            >
              <div className="rounded-full w-10 h-10 bg-[#F8FBFF] flex items-center justify-center border border-gray-200 text-gray-400 text-base font-bold uppercase">
                {driver.name
                  .split(" ")
                  .map((str) => str[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <div className="flex flex-col text-sm">
                <span className={selected === idx ? "text-[#007DFA] font-semibold" : "text-gray-800"}>
                  {driver.name}
                </span>
                <span className="text-gray-400 text-xs">{driver.vehicle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Small gap between panels */}
      <div className="w-7" />
      {/* Right Side - Details */}
      <div className="flex-1 flex flex-col min-w-0 bg-white rounded-lg shadow-sm">
        {/* Top Driver Detail Header */}
        <div className="flex justify-between items-center px-8 pt-8 pb-2">
          <div className="text-2xl font-semibold">
            Driver Details{" "}
            <span className="font-normal text-base text-[#FF5E57]">· inactive</span>
          </div>
          <div className="flex gap-2">
            <Button className="bg-[#007DFA] hover:bg-[#006ADA] text-white font-semibold px-6 cursor-pointer rounded-lg">
              Assign Vehicle
            </Button>
            <Button variant="outline" className="border border-[#007DFA] text-[#007DFA] font-semibold cursor-pointer rounded-lg">
              Active
            </Button>
          </div>
        </div>
        {/* Details + Tabs */}
        <div className="flex px-8 mt-2 gap-6">
          <div className="flex gap-6 border-b w-full">
            <button className="pb-2 px-0 border-b-2 border-[#007DFA] text-[#007DFA] font-medium bg-transparent">
              Information
            </button>
            <button className="pb-2 px-0 text-gray-400 font-medium bg-transparent cursor-not-allowed">
              No Vehicle assign
            </button>
          </div>
        </div>
        {/* Table-style Driver Details */}
        <div className="px-8 py-5 flex flex-col gap-8">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm font-medium text-gray-700">
              <tbody>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Name</td>
                  <td className="py-2 pr-8">{driverDetails.name}</td>
                  <td className="py-2 pr-8 text-gray-400">License No</td>
                  <td className="py-2">{driverDetails.licenseNo}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Email</td>
                  <td className="py-2 pr-8">{driverDetails.email}</td>
                  <td className="py-2 pr-8 text-gray-400">Experience</td>
                  <td className="py-2">{driverDetails.experience}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Mobile No.</td>
                  <td className="py-2 pr-8">{driverDetails.mobile}</td>
                  <td className="py-2 pr-8 text-gray-400">Age</td>
                  <td className="py-2">{driverDetails.age}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-8 text-gray-400">Address</td>
                  <td className="py-2 pr-8">{driverDetails.address}</td>
                  <td className="py-2 pr-8 text-gray-400">Driver Shift</td>
                  <td className="py-2">{driverDetails.shift}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* License Card Placeholder */}
          <div>
            <h3 className="text-base font-semibold text-gray-700 mb-2">Driving License</h3>
            <div className="rounded-lg shadow w-[330px] h-[200px] bg-[#F5F7FA] border border-gray-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          </div>
        </div>
        {/* Footer Buttons */}
        <div className="mt-auto flex justify-center gap-7 py-6 border-t bg-[#F9FBFE] rounded-b-lg">
          <Button className="bg-[#007DFA] hover:bg-[#006ADA] text-white font-semibold px-8 py-2 cursor-pointer rounded-lg">
            Add Driver
          </Button>
          <Button className="bg-[#007DFA] hover:bg-[#006ADA] text-white font-semibold px-8 py-2 cursor-pointer rounded-lg">
            Edit Driver
          </Button>
          <Button className="bg-[#f46058] hover:bg-[#f50223e4] text-white font-semibold px-8 py-2 cursor-pointer rounded-lg">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

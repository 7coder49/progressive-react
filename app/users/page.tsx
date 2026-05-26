'use client';

import { useState } from "react";
import UserCreation from "./creation";
import UserView from "./view";

export default function UsersPage() {
    const [activeTab, setActiveTab] = useState("create");

  return (
    <div className="flex justify-start h-full">
      <div className="w-40 h-full flex justify-start flex-col gap-4 py-4 bg-gray-800">
        <button className="w-full h-10 cursor-pointer hover:underline bg-gray-400 flex items-center justify-center"
        onClick={() => setActiveTab("create")}
        >
          Create User
        </button>
        <button className="w-full h-10 cursor-pointer hover:underline bg-gray-400 flex items-center justify-center"
        onClick={() => setActiveTab("view")}
        >
          View User
        </button>
      </div>

      {activeTab === "create" && <UserCreation />}
      {activeTab === "view" && <UserView />}
    </div>
  );
}
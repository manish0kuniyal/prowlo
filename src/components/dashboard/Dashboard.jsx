import { useState } from "react";
import Tabs from "./component/Tabs";
import CreateScript from "./pages/CreateScript";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div
      className="min-h-screen text-black py-6"
      style={{ backgroundColor: "var(--dashboard-bg)" }}
    >
      {/* Shared Layout Container */}
      <div className="w-full px-8 lg:px-18 xl:px-24">
        
        {/* Tabs */}
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Content */}
        <div className="mt-10">
          {activeTab === "create" && <CreateScript />}

          {activeTab === "analytics" && (
            <div>
              <h2 className="text-2xl font-semibold">
                Analytics
              </h2>
            </div>
          )}

          {activeTab === "account" && (
            <div>
              <h2 className="text-2xl font-semibold">
                Account
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
import { useState } from "react";
import Tabs from "./component/Tabs";
import CreateScript from "./pages/CreateScript";
import Analytics from "./pages/Analytics";
import Account from "./pages/Account";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("create");

  return (
    <div
      className="min-h-screen text-black py-6"
      style={{ backgroundColor: "var(--dashboard-bg)" }}
    >
      <div className="w-full px-8 lg:px-18 xl:px-24">
        <Tabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <div className="mt-10">
          {activeTab === "create" && <CreateScript />}
          {activeTab === "analytics" && <Analytics />}
          {activeTab === "account" && <Account />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
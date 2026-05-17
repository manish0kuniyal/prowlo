import {
  Code2,
  BarChart3,
  User,
} from "lucide-react";

const tabs = [
  {
    id: "create",
    label: "Create Script",
    icon: Code2,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    id: "account",
    label: "Account",
    icon: User,
  },
];

function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex mt-14">
      <div
        className="flex gap-2 p-2 rounded-2xl "
        style={{ backgroundColor: "var(--dashboard-bg)" }}
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 font-bold rounded-xl text-md  transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-black shadow-sm"
                  : "text-gray-500 hover:text-black"
              }`}
              style={
                activeTab === tab.id
                  ? {
                      backgroundColor: "#f1eee8",
                    }
                  : {}
              }
            >
              <Icon
                size={18}
                className={`${
                  activeTab === tab.id
                    ? "text-[var(--color-primary)]"
                    : "text-gray-400"
                }`}
                style={
                  activeTab === tab.id
                    ? {
                        filter:
                          "drop-shadow(0 0 6px var(--color-glow-orange))",
                      }
                    : {}
                }
              />

              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;
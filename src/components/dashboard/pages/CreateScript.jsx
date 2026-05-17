import { useState } from "react";
import {
  Copy,
  Sparkles,
  LoaderCircle,
} from "lucide-react";

function CreateScript() {
  const [projectName, setProjectName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");

  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    projectName: false,
    websiteUrl: false,
  });

  const scriptTag = `<script src="http://localhost:5173/tracker.js" data-id="abc123"></script>`;

  const handleGenerate = () => {
    const newErrors = {
      projectName: !projectName.trim(),
      websiteUrl: !websiteUrl.trim(),
    };

    setErrors(newErrors);

    if (newErrors.projectName || newErrors.websiteUrl) {
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 2000);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(scriptTag);
  };

  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold">
          Create Script
        </h1>

        <p
          className="mt-2"
          style={{
            color: "var(--color-primary)",
          }}
        >
          Generate a tracking script for your website.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Project Name
            </label>

            <input
              type="text"
              placeholder="My SaaS Website"
              value={projectName}
              onChange={(e) => {
                setProjectName(e.target.value);

                if (e.target.value.trim()) {
                  setErrors((prev) => ({
                    ...prev,
                    projectName: false,
                  }));
                }
              }}
              className={`w-full px-4 py-3 rounded-xl border outline-none bg-transparent transition-all ${
                errors.projectName
                  ? "border-red-400"
                  : "border-gray-200 focus:border-orange-400"
              }`}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Website URL
            </label>

            <input
              type="text"
              placeholder="https://example.com"
              value={websiteUrl}
              onChange={(e) => {
                setWebsiteUrl(e.target.value);

                if (e.target.value.trim()) {
                  setErrors((prev) => ({
                    ...prev,
                    websiteUrl: false,
                  }));
                }
              }}
              className={`w-full px-4 py-3 rounded-xl border outline-none bg-transparent transition-all ${
                errors.websiteUrl
                  ? "border-red-400"
                  : "border-gray-200 focus:border-orange-400"
              }`}
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center gap-2 px-5 py-3 rounded-xl text-white transition-all"
            style={{
              backgroundColor: "var(--color-primary)",
            }}
          >
            {loading ? (
              <>
                <LoaderCircle
                  size={18}
                  className="animate-spin"
                />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate Script
              </>
            )}
          </button>
        </div>

        {generated && !loading && (
          <div className="mt-8 p-5 rounded-2xl bg-[#f1eee8] border border-gray-200">
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm text-gray-700 break-all">
                {scriptTag}
              </code>

              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-white transition-all"
              >
                <Copy size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateScript;
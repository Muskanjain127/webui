import React, { useState, useEffect } from 'react';
import axios from "axios";

const Page6 = () => {
  const [data, setData] = useState({ name: "", whyChooseUs: "", aboutUs: "" });
  const [formData, setFormData] = useState({ name: "", whyChooseUs: "", aboutUs: "" });
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/info');
      const result = response.data;
      setData({
        name: result.name,
        whyChooseUs: result.whychooseus,
        aboutUs: result.about
      });
      setFormData({
        name: result.name,
        whyChooseUs: result.whychooseus,
        aboutUs: result.about
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put('http://localhost:8000/api/info', {
        name: formData.name,
        whychooseus: formData.whyChooseUs,
        about: formData.aboutUs
      });
      setData(formData);
      setIsFormOpen(false);
      alert("Updated successfully!");
    } catch (error) {
      console.error("Error updating:", error);
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-[#000000] border-t-white border overflow-hidden flex flex-col items-center justify-center text-white px-4 sm:px-6 md:px-10 py-8 sm:py-10">

      <div
        className="absolute inset-0 z-0 bg-[#3e2310]"
        style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 60%, 0% 100%)" }}
      />

      {isFormOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <form
            onSubmit={handleUpdate}
            className="bg-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-2xl w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-white/20 my-auto"
          >
            <h2 className="text-xl sm:text-2xl mb-4">Edit Information</h2>

            <input
              className="w-full mb-3 sm:mb-4 p-2.5 sm:p-3 bg-black border border-gray-600 text-white text-sm sm:text-base rounded"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Company Name"
            />
            <textarea
              rows="3"
              className="w-full mb-3 sm:mb-4 p-2.5 sm:p-3 bg-black border border-gray-600 text-white text-sm sm:text-base rounded resize-none"
              value={formData.whyChooseUs}
              onChange={(e) => setFormData({ ...formData, whyChooseUs: e.target.value })}
              placeholder="Why Choose Us"
            />
            <textarea
              rows="3"
              className="w-full mb-3 sm:mb-4 p-2.5 sm:p-3 bg-black border border-gray-600 text-white text-sm sm:text-base rounded resize-none"
              value={formData.aboutUs}
              onChange={(e) => setFormData({ ...formData, aboutUs: e.target.value })}
              placeholder="About Us"
            />

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 py-2 sm:py-2.5 rounded text-sm sm:text-base"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="flex-1 bg-red-600 hover:bg-red-700 py-2 sm:py-2.5 rounded text-sm sm:text-base"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl text-center">
        {loading ? (
          <p className="text-lg sm:text-xl">Loading...</p>
        ) : (
          <div className="space-y-5 sm:space-y-6 md:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                Company Name
              </h2>
              <p className="text-sm sm:text-base md:text-lg break-words">{data.name}</p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                Why Choose Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg break-words px-2 sm:px-4">
                {data.whyChooseUs}
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2">
                About Us
              </h2>
              <p className="text-sm sm:text-base md:text-lg break-words px-2 sm:px-4">
                {data.aboutUs}
              </p>
            </div>

            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-gray-200 transition"
            >
              Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page6;
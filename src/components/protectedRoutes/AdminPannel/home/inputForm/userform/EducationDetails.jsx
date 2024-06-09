import React from "react";

function EducationDetails({ formData, handleChange }) {
  return (
    <div className="shadow-md  overflow-hidden bg-white mx-2 rounded-lg ">
      <h3 className="text-xl pl-6 p-2 bg-fuchsia-700 font-semibold   text-white">
        Education
      </h3>
      <div className="mb-8  p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              University *
            </label>
            <input
              type="text"
              name="university"
              value={formData.university}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Degree *
            </label>
            <input
              type="text"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              City *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Start Date *
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              End Date *
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Unique Teacher Id *
            </label>
            <input
              type="number"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationDetails;

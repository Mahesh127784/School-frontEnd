import React from "react";

function EnrollmentDetails({ formData, handleChange }) {
  const alphabet = [];

  for (let i = 65; i <= 90; i++) {
    alphabet.push(String.fromCharCode(i));
  }
  return (
    <div className="shadow-md  overflow-hidden bg-white rounded-lg ">
      <h3 className="text-xl pl-6 p-2 bg-fuchsia-700 font-semibold   text-white">
        Enrollment Details
      </h3>
      <div className="mb-8  p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Enrollment Date *
            </label>
            <input
              type="date"
              name="enrollmentDate"
              value={formData.enrollmentDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Grade *
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              name="Class"
              value={formData.Class}
              onChange={handleChange}
            >
              <option value="">-- Select Class --</option>
              {[...Array(12).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Section *
            </label>
            <select
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              name="section"
              value={formData.section}
              onChange={handleChange}
            >
              <option value="">-- Select Section --</option>
              {alphabet.map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label className="block text-gray-700 font-medium mb-2">
              Roll Number *
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

export default EnrollmentDetails;

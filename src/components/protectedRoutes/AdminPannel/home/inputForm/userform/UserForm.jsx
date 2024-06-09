import React from "react";
import EducationDetails from "./EducationDetails";
import EnrollmentDetails from "./EnrollmentDetails";

function UserForm({ setFormData, formData, user, handleSubmit, loading }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-200 py-6">
      <h2 className="text-[26px] text-blue-900  font-bold mb-6 text-center">
        {user === "Teacher" ? "Teacher's Form" : " Student's Form"}
      </h2>
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="shadow-md mb-5 overflow-hidden bg-white mx-2 rounded-lg">
          <h3 className="text-xl pl-6 p-2 bg-fuchsia-700 font-semibold text-white">
            Personal Details
          </h3>
          <div className="mb-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              {user === "Teacher" && (
                <div className="form-group">
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label className="block text-gray-700 font-medium mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              {user === "Teacher" && (
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Main Subject *
                  </label>
                  <select
                    className="border rounded w-full py-1 md:py-2 px-3"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Select Subject --</option>
                    <option value="Kannada">Kannada</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Physical Training">Physical Training</option>
                    <option value="Arts Education">Arts Education</option>
                  </select>
                </div>
              )}

              <div className="form-group md:col-span-2">
                <label className="block text-gray-700 font-medium mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                  rows={3}
                  required
                ></textarea>
              </div>
              {user === "Student" && (
                <>
                  <div className="form-group">
                    <label className="block text-gray-700 font-medium mb-2">
                      Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="guardianName"
                      value={formData.guardianName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="block text-gray-700 font-medium mb-2">
                      Guardian Phone *
                    </label>
                    <input
                      type="tel"
                      name="guardianPhone"
                      value={formData.guardianPhone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {user === "Teacher" ? (
          <EducationDetails formData={formData} handleChange={handleChange} />
        ) : (
          <EnrollmentDetails formData={formData} handleChange={handleChange} />
        )}
        <div className="text-end my-5 mx-2">
          <button
            disabled={loading}
            type="submit"
            className="px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;

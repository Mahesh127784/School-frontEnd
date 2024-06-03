import React from "react";

function NewAdminInput(props) {
  const { setFormData, formData, handleSubmit, loading } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-200 h-screen py-6">
      <h2 className="text-[26px] text-blue-900  font-bold mb-6 text-center">
        Admin's Form
      </h2>
      <div className="max-w-4xl mx-auto ">
        <form
          className=" mb-5 overflow-hidden shadow-md bg-white rounded-lg"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl pl-6 p-2 bg-fuchsia-700 font-semibold text-white">
            Add Details
          </h3>
          <div className="mb-8 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Admin Name *
              </label>
              <input
                type="text"
                name="adminName"
                value={formData.adminName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Secret Admin Code *
              </label>
              <input
                type="number"
                name="adminCode"
                value={formData.adminCode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

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

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Admins Role in school *
              </label>
              <select
                value={formData.work}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="work"
              >
                <option value="">-- Admins Role --</option>
                <option value="Principal">Principal</option>
                <option value="Voice Principal">Voice Principal</option>
                <option value="Teacher">Teacher</option>
                <option value="Student Leader">Student Leader</option>
                <option value="Clerk">Clerk</option>
                <option value="School President">School President</option>
                <option value="School Assembly Member">
                  School Assembly Member
                </option>
              </select>
            </div>

            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Password *
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>
          </div>
        </form>
        <div className="text-center my-5">
          <button
            disabled={loading}
            type="submit"
            className="px-10 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewAdminInput;

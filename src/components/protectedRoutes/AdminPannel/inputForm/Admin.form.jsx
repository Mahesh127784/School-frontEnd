import React from "react";

function NewAdminInput(props) {
  const { setFormData, formData, handleSubmit, user } = props;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-400">
      <form
        className="bg-pink-200 p-5 md:p-8 rounded shadow-md w-76 md:w-96 "
        onSubmit={(e) => handleSubmit(e)}
      >
        {user}{" "}
        <h2 className="text-2xl underline font-semibold mb-4">Add NEW ADMIN</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="adminName"
          >
            ADMIN NAME *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="text"
            id="adminName"
            name="adminName"
            value={formData.adminName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="adminCode"
          >
            ADMIN CODE *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="number"
            id="adminCode"
            name="adminCode"
            value={formData.adminCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="work"
          >
            Admins Role In School *
          </label>
          <select
            value={formData.work}
            onChange={handleChange}
            id="work"
            className="border rounded w-full py-1 md:py-2 px-3"
            name="work"
          >
            {" "}
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
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="email"
          >
            EMAIL *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="password"
          >
            PASSWORD *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="password2"
          >
            CONFIRM PASSWORD *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="password"
            id="password2"
            name="password2"
            value={formData.password2}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="bg-blue-500 text-white py-1 md:py-2 md:px-4 px-2 rounded hover:bg-blue-600"
          type="submit"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default NewAdminInput;

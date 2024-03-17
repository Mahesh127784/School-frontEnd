import React from "react";

function NewUserInput({ setFormData, formData, user, handleSubmit }) {
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
        <h2 className="text-2xl font-semibold underline mb-4">
          ADD NEW {user}
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="userName"
          >
            {user} NAME *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="userId"
          >
            {user} ID *
          </label>
          <input
            className="border rounded w-full py-1 md:py-2 px-3"
            type="text"
            id="userId"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            required
          />
        </div>

        {user === "STUDENT" && (
          <>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
                htmlFor="Class"
              >
                CLASS *
              </label>
              <select
                required
                className="border rounded w-full py-1 md:py-2 px-3"
                id="Class"
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

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
                htmlFor="DOB"
              >
                DOB *
              </label>
              <input
                id="DOB"
                type="date"
                name="DOB"
                value={formData.DOB}
                onChange={handleChange}
                className="border rounded w-full py-1 md:py-2 px-3"
                required
              />
            </div>
          </>
        )}

        {user === "TEACHER" && (
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
              htmlFor="subject"
            >
              SUBJECT *
            </label>
            <select
              className="border rounded w-full py-1 md:py-2 px-3"
              name="subject"
              id="subject"
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

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-medium md:font-bold mb-2"
            htmlFor="contact"
          >
            CONTACT *
          </label>
          <input
            placeholder={`${user === "STUDENT" ? "Parent's number" : ""}`}
            className="border rounded w-full py-1 md:py-2 px-3"
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
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

export default NewUserInput;

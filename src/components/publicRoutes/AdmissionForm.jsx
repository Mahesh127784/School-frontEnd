import React, { useState } from "react";
import FormSubmit from "../../apis/admissionFormSubm/AdmissionFormSubmit";
import { useDispatch } from "react-redux";
import { setApplication } from "../../redux/features/admins/adminsSlice";

function AdmissionForm() {
  const dispatch = useDispatch();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    DOB: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
    guardianName: "",
    guardianContact: "",
    previousSchool: "",
    desiredclassName: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const response = await FormSubmit(formData);
    if (response) {
      dispatch(setApplication(response));
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-gray-200 py-6">
      <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
        <div className="shadow-2xl mb-5 overflow-hidden bg-white rounded-lg">
          <h3 className="text-xl pl-6 p-2 bg-fuchsia-700 font-semibold text-white">
            New Admission Form
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleChange}
                value={formData.lastName}
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                name="DOB"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleChange}
                value={formData.DOB}
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Gender *
              </label>
              <select
                required
                name="gender"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.gender}
              >
                <option value="">--- Select ---</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group md:col-span-2">
              <label className="block text-gray-700 font-medium mb-2">
                Address *
              </label>
              <textarea
                name="address"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                rows="3"
                required
                onChange={handleChange}
                value={formData.address}
              ></textarea>
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="number"
                name="contactNumber"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.contactNumber}
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Email (Student's/Guardian's) *
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Guardian Name *
              </label>
              <input
                type="text"
                name="guardianName"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.guardianName}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Guardian Phone *
              </label>
              <input
                type="number"
                name="guardianContact"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.guardianContact}
                required
              />
            </div>
            <div className="form-group">
              <label className="block text-gray-700 font-medium mb-2">
                Desired Grade *
              </label>
              <select
                onChange={handleChange}
                value={formData.desiredclassName}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                name="desiredclassName"
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
                Previous School Name
              </label>
              <input
                type="text"
                name="previousSchool"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                onChange={handleChange}
                value={formData.previousSchool}
              />
            </div>
            <div className="form-group ">
              <label className="block text-gray-700 font-medium mb-2">
                Previous Class MarksCard *
              </label>
              <input
                required
                type="file"
                name="file"
                className="w-full px-1 md:px-4 py-2 border rounded-md "
              />
            </div>
          </div>
        </div>
        <div className="text-end my-5">
          <button
            type="submit"
            className="px-12 py-2.5 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            {submitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdmissionForm;

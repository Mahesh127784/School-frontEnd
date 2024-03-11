import React, { useState } from "react";
import FormSubmit from "../../apis/admissionFormSubm/AdmissionFormSubmit";
import { useDispatch } from "react-redux";
import { setApplication } from "../../redux/features/admins/adminsSlice";

function AdmissionForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    studentName: "",
    DOB: "",
    gender: "",
    address: "",
    contactNumber: "",
    email: "",
    guardianName: "",
    guardianContact: "",
    previousSchool: "",
    desiredClass: "",
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
    const response = await FormSubmit(formData);
    if (response) {
      dispatch(setApplication(response));
    }
  };

  return (
    <div className="mx-3 md:mx-10 my-5 md:px-6 py-3 md:py-6 bg-pink-300 rounded-md shadow-2xl hover:shadow-slate-900 ">
      <div className="text-center relative top-5  my-5 md:m-10 lg:my-0">
        <h2 className="text-2xl   md:text-4xl font-bold underline ">
          New Admission Form
        </h2>
      </div>
      <form className="pl-5  lg:p-20" onSubmit={handleSubmit}>
        {/* Student Name */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5 ">
          <label
            htmlFor="studentName"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Student Name *
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>

        {/* Date of Birth */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="DOB"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Date of Birth *
          </label>
          <input
            type="date"
            id="DOB"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>

        {/* Gender */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="gender"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Gender *
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          >
            <option value="">--- Select ---</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Address */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="address"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Address *
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="4"
            className="w-[250px] lg:w-[400px] px-2 md:px-4 md:py-2 py-1 border rounded-md focus:outline-none focus:border-blue-950"
          ></textarea>
        </div>

        {/* Contact Number */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="contactNumber"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Contact Number *
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>

        {/* Email */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>

        {/* Guardian Name */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="guardianName"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Guardian Name *
          </label>
          <input
            type="text"
            id="guardianName"
            name="guardianName"
            value={formData.guardianName}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>

        {/* Guardian Contact */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5 ">
          <label
            htmlFor="guardianContact"
            className="block text-gray-700 font-medium mt-2 "
          >
            Guardian Contact *
          </label>
          <input
            type="tel"
            id="guardianContact"
            name="guardianContact"
            value={formData.guardianContact}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>
        {/* Desired Class */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="desiredClass"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Desired Class *
          </label>
          <select
            id="desiredClass"
            name="desiredClass"
            value={formData.desiredClass}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          >
            <option value="">--- Select ---</option>
            {/* Option values from 1 to 12 */}
            {[...Array(12).keys()].map((value) => (
              <option key={value} value={value + 1}>
                {value + 1}
              </option>
            ))}
          </select>
        </div>
        {/* Previous School */}
        <div className="md:mb-4  inline-block lg:mx-24 my-3 mx-5">
          <label
            htmlFor="previousSchool"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Previous School Name
          </label>
          <input
            type="text"
            id="previousSchool"
            name="previousSchool"
            value={formData.previousSchool}
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-[2px] border rounded-md focus:outline-none focus:border-blue-950 text-sm md:text-base"
          />
        </div>

        {/* Previous Class */}
        <div className="md:mb-4 lg:mx-24 mx-5  my-3">
          <label
            htmlFor="file"
            className="block text-gray-700 text-sm md:text-base font-bold mt-2"
          >
            Previous Class MarksCard *
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
            className="w-[250px] lg:w-[400px] px-1 md:px-4 md:py-2 py-1 border rounded-md bg-pink-200 "
          />
        </div>

        {/* Submit Button */}
        <div className="text-center md:mt-20">
          <button
            type="submit"
            className="w-[250px] lg:w-[400px] bg-blue-500 text-white py-1 md:py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdmissionForm;

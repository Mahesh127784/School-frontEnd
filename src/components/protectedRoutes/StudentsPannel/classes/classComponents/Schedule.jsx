import { Modal } from "flowbite-react";
import React, { useState } from "react";

const Schedule = () => {
  const [table, setTable] = useState(false);

  return (
    <div>
      <h3
        onClick={() => setTable(true)}
        className="md:text-xl  font-bold mb-4 px-4 py-1 w-fit bg-white shadow border-2 border-gray-200 rounded hover:text-white hover:bg-gray-400 cursor-pointer"
      >
        Weekly Classes Scheduled
        <span className="ml-10  md:text-xl">{"  -->"}</span>
      </h3>
      <Modal show={table} onClose={() => setTable(false)} popup>
        <Modal.Header />
        <Modal.Body>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-center">
                <th className="px-5">Time</th>
                <th className="px-5">Monday</th>
                <th className="px-5">Tuesday</th>
                <th className="px-5">Wednesday</th>
                <th className="px-5">Thursday</th>
                <th className="px-5">Friday</th>
                <th className="px-5">Saturday</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td>09-10</td>
                <td>Kannada</td>
                <td>Kannada</td>
                <td>Kannada</td>
                <td>Kannada</td>
                <td>Engish</td>
                <td>English</td>
              </tr>
              <tr className="text-center">
                <td>10-11</td>
                <td>English</td>
                <td>Hindi</td>
                <td>Maths</td>
                <td>Science</td>
                <td>PoliticalScience</td>
                <td>P.E.</td>
              </tr>
              <tr className="text-center">
                <td>11-12</td>
                <td>Crafts</td>
                <td>M.D.</td>
                <td>English</td>
                <td>Hindi</td>
                <td>Maths</td>
                <td>Science</td>
              </tr>
              <tr className="text-center">
                <td>12-13</td>
                <td>PoliticalScience</td>
                <td>P.E.</td>
                <td>Crafts</td>
                <td>M.D.</td>
                <td>English</td>
                <td>Hindi</td>
              </tr>
              <tr className="text-center">
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100">Lunch</td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
              </tr>
              <tr className="text-center">
                <td>14-15</td>
                <td>Maths</td>
                <td>Science</td>
                <td>PoliticalScience</td>
                <td>P.E.</td>
                <td>Crafts</td>
                <td>M.D.</td>
              </tr>
              <tr className="text-center">
                <td>15-16</td>
                <td>English</td>
                <td>Hindi</td>
                <td>Maths</td>
                <td>Science</td>
                <td>PoliticalScience</td>
                <td>P.E.</td>
              </tr>
              <tr className="text-center">
                <td>16-17</td>
                <td>Crafts</td>
                <td>M.D.</td>
                <td>English</td>
                <td>Hindi</td>
                <td>Maths</td>
                <td>Science</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Schedule;

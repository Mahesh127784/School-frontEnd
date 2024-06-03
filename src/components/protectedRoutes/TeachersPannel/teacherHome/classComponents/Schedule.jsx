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
              <tr>
                <th className="px-5">Time</th>
                <th className="px-5">Monday</th>
                <th className="px-5">Tuesday</th>
                <th className="px-5">Wednesday</th>
                <th className="px-5">Thursday</th>
                <th className="px-5">Friday</th>
                <th className="px-5">Saturday</th>
                <th className="px-5">Sunday</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>09-10</td>
                <td className="bg-red-200 text-center">10th B</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10-11</td>
                <td></td>
                <td></td>
                <td className="bg-blue-200">8th B</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11-12</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12-13</td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-yellow-200">5th A</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100">Lunch</td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
                <td className="py-1 bg-gray-100"></td>
              </tr>
              <tr>
                <td>14-15</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="bg-orange-200">50th B</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>15-16</td>
                <td></td>
                <td></td>
                <td className="bg-blue-100">10th A</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>16-17</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Schedule;

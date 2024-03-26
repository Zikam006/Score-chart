import { useState } from "react";
import Data from "../utils/data";

const Home = () => {
  const [track, setTrack] = useState(null);

  const handleTrackSelect = (track) => {
    setTrack(track);
  };

  return (
    <>
      <div className="bg-grey-900">
        <div className="flex flex-col items-center justify-center min-h-screen py-10 lg:w-[80%] w-[90%] mx-auto">
          <div className="text-white w-full flex sm:flex-row flex-col sm:items-center sm:justify-between mt-6 gap-4">
            <h1 className="text-lg text-gray-400 font-medium">Class Scores</h1>
            <div className="flex md:flex-row flex-col lg:items-center gap-4">
              <div className="flex md:gap-4 gap-2">
                <button
                  className={`${
                    track === "Frontend" ? "ring-2 ring-inset" : ""
                  } p-2 bg-black bg-opacity-20 rounded-lg text-[.8rem] text-red-400 w-[8rem] hover:bg-red-800 transition duration-150 ease-out hover:ease-in font-semibold`}
                  onClick={() => handleTrackSelect("Frontend")}
                >
                  Frontend
                </button>
                <button
                  className={`${
                    track === "Backend" ? "ring-2 ring-inset" : ""
                  } p-2 bg-black bg-opacity-20 rounded-lg text-[.8rem] text-red-400 w-[8rem] hover:bg-red-800 transition duration-150 ease-out hover:ease-in font-semibold`}
                  onClick={() => handleTrackSelect("Backend")}
                >
                  Backend
                </button>
              </div>
              <div className="flex md:gap-4 gap-2">
                <button
                  className={`${
                    track === "Product Design" ? "ring-2 ring-inset" : ""
                  } p-2 bg-black bg-opacity-20 rounded-lg text-[.8rem] text-red-400 w-[8rem] hover:bg-red-800 transition duration-150 ease-out hover:ease-in font-semibold`}
                  onClick={() => handleTrackSelect("Product Design")}
                >
                  Product Design
                </button>
                <button
                  className={`${
                    track === "Web3" ? "ring-2 ring-inset" : ""
                  } p-2 bg-black bg-opacity-20 rounded-lg text-[.8rem] text-red-400 w-[8rem] hover:bg-red-800 transition duration-150 ease-out hover:ease-in font-semibold`}
                  onClick={() => handleTrackSelect("Web3")}
                >
                  Web3
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-3 w-full">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full text-sm text-red-200">
                    <thead className="bg-red-800 text-xs uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left tracking-wider"
                        >
                          Track
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center tracking-wider"
                        >
                          Task 1
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center tracking-wider"
                        >
                          Task 2
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center tracking-wider"
                        >
                          Task 3
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center tracking-wider"
                        >
                          Bonus
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-center tracking-wider"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>

                    <tbody className="bg-red-900">
                      {Data.filter((item) =>
                        track ? item.track === track : true
                      )
                        .map((items, index) => {
                          const { id, name, track, scores, bonus } = items;
                          // console.log(scores.task1);
                          const total =
                            scores.task1 + scores.task2 + scores.task3 + bonus;

                          return (
                            <tr
                              key={index}
                              className={`${
                                index % 2 === 0 ? "bg-black bg-opacity-20" : ""
                              }`}
                            >
                              <td className="pl-4">{index + 1}</td>
                              <td className="flex px-6 py-4 whitespace-nowrap">
                                <p className="font-medium">{name}</p>
                              </td>
                              <td className="px-6 py-4 text-left whitespace-nowrap">
                                {track}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                {scores.task1}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                {scores.task2}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                {scores.task3}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                {bonus}
                              </td>
                              <td className="px-6 py-4 text-center whitespace-nowrap">
                                {total}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

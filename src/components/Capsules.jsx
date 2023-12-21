import React, { useState, useEffect } from "react";
import LoadingState from "./LoadingState";
import Header from "./Header";
import { CapsulePopup } from "./CapsulePopup";

export default function Capsules() {
  const [capsules, setCapsules] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCapsule, setSelectedCapsule] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [launchesInput, setLaunchesInput] = useState("");
  const [filteredCapsules, setFilteredCapsules] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchCapsules = async () => {
      const res = await fetch("https://api.spacexdata.com/v4/capsules");
      const data = await res.json();
      setCapsules(data);
      setFilteredCapsules(data);
    };

    fetchCapsules();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCapsules = filteredCapsules
    ? filteredCapsules.slice(indexOfFirstItem, indexOfLastItem)
    : null;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleCapsuleClick = (capsule) => {
    setSelectedCapsule(capsule);
    console.log(capsule);
  };

  const handleSearchClick = () => {
    const filteredResults = capsules.filter(
      (capsule) =>
        (capsule.status.toLowerCase().includes(searchInput.toLowerCase()) &&
          !launchesInput) ||
        capsule.launches.length === Number(launchesInput)
    );
    setFilteredCapsules(filteredResults);
    setCurrentPage(1);
  };

  const handleResetClick = () => {
    setSearchInput("");
    setLaunchesInput("");
    setFilteredCapsules(capsules);
    setCurrentPage(1);
  };

  return (
    <>
      <Header />
      {!capsules ? (
        <LoadingState />
      ) : (
        <section className="pages-showcase px-5">
          <div className="overlay py-8 lg:pt-12">
            <h1 className="heading">Capsules</h1>

            <div className="flex items-center justify-center mb-4 mt-5 flex-wrap gap-3 ">
              <input
                type="text"
                placeholder="Search by status"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="p-2 border border-gray-400 rounded "
              />

              <input
                type="number"
                placeholder="Search by launches"
                value={launchesInput}
                onChange={(e) => setLaunchesInput(e.target.value)}
                className="p-2 border border-gray-400 rounded "
              />

              <div>
                <button
                  onClick={handleSearchClick}
                  className="py-2 px-3 bg-[#181717] text-white rounded-lg border border-gray-400 mr-2"
                >
                  Search
                </button>

                <button
                  onClick={handleResetClick}
                  className="py-2 px-3 bg-white text-[#181717] rounded-lg border border-gray-400 "
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10  ">
              {currentCapsules && currentCapsules.length > 0 ? (
                currentCapsules.map(
                  ({
                    reuse_count,
                    water_landings,
                    land_landings,
                    last_update,
                    launches,
                    serial,
                    status,
                    type,
                    id,
                  }) => (
                    <article
                      key={id}
                      className="articles p-5 bg-[#181717] shadow-md rounded-lg bg-clip-border cursor-pointer"
                      onClick={() =>
                        handleCapsuleClick({
                          reuse_count,
                          water_landings,
                          land_landings,
                          last_update,
                          launches,
                          serial,
                          status,
                          type,
                          id,
                        })
                      }
                    >
                      <h2 className="text-white font-bold text-xl">
                        {type},{" "}
                        <span className="opacity-75 text-lg font-normal">
                          {serial}
                        </span>
                      </h2>
                      <ul className="text-sm opacity-75 text-white mt-3">
                        {/* <li>Reused {reuse_count} times</li> */}
                        <li>{launches.length} launches</li>
                        {/* <li>{water_landings} water landings</li>
                        <li>{land_landings} land landings</li> */}
                        <li
                          className={`capitalize ${
                            status === "active"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          Status: {status}
                        </li>
                      </ul>
                      {/* <p className="text-white text-sm opacity-75 mt-3">
                        {last_update}
                      </p> */}
                    </article>
                  )
                )
              ) : (
                <p>No results found.</p>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 text-xl  mt-5">
              {Array.from(
                {
                  length: Math.ceil(
                    (filteredCapsules?.length || 0) / itemsPerPage
                  ),
                },
                (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={` p-1  ${
                      currentPage === i + 1
                        ? "underline underline-offset-4 text-red-300 "
                        : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {selectedCapsule && (
        <CapsulePopup
          capsule={selectedCapsule}
          onClose={() => setSelectedCapsule(null)}
        />
      )}
    </>
  );
}

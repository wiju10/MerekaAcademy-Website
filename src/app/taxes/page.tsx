import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-base-100">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold ">Automate Taxes and Filings </h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              Minimize human errors in calculations and ensure compliance with
              latest requirements from government bodies.
            </p>
            <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <Link
                href="/signup"
                className="block px-6 py-2 text-center bg-purple-300 rounded-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-purple-100 pt-1">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div>
            <img
              src="/hr.jpg"
              style={{ width: "420px", height: "235px" }}
              className="mx-auto mr-16 mt-6 sm:w-10/12 lg:w-full"
            />
          </div>
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold ">Automate HR tasks </h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              Be confident with employees’ tax e-filings preparations.
              GrowMyTeam keeps you prepared with new joiners and leavers tax
              information, with easy to download TP1 and TP3 forms directly from
              the app.
            </p>
            <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                href="javascript:void(0)"
                className="block px-6 py-2 text-center text-gray-500 bg-white rounded-md"
              >
                See More
              </a>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-base-100">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold ">Avoid expensive penalties</h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              We offer over 80+ preset payroll items covering remunerations,
              benefits in kind, pre-requisites and more. Presets are ready to be
              added to your payroll, in full compliance with statutory rules.
            </p>
            <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                href="javascript:void(0)"
                className="block px-6 py-2 text-center text-gray-500 bg-white rounded-md"
              >
                See More
              </a>
            </div>
          </div>
          <div>
            <img
              src="/fine.png"
              style={{ width: "420px", height: "235px" }}
              className="mx-auto mt-20 sm:w-10/12 lg:w-full"
            />
          </div>
        </section>
      </div>
      <div className="bg-purple-100 pt-3">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div>
            <img
              src="/robotsworking.png"
              style={{ width: "420px", height: "235px" }}
              className="mx-auto sm:w-10/12 lg:w-full"
            />
          </div>
          <div className="ml-16 flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold ">
              Supported onboard and offboard processes
            </h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              Multiple employments within a tax year requires some time and
              effort on both employees and employers sides to maintain accurate
              information passed to the government bodies.
            </p>
            <div className="items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                href="javascript:void(0)"
                className="block px-6 py-2 text-center text-gray-500 bg-white rounded-md"
              >
                See More
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

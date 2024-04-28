import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-base-100">
        <section className="container items-center px-4 pb-12 mx-auto mt-20 lg:flex md:px-40">
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold ">LHDN-Approved Payroll </h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              Run payroll in minutes without worrying about compliance. From tax
              reliefs and exemptions - GrowMyTeam has got you covered.
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
              src="/lhdn.png"
              style={{ width: "420px", height: "235px" }}
              className="mx-auto mr-16 mt-6 sm:w-10/12 lg:w-full"
            />
          </div>
          <div className="flex-1 space-y-4 sm:text-center lg:text-left">
            <h1 className="text-4xl font-bold ">Make filing simple</h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              All you need to do is input the necessary data once, and we’ll do
              the rest. From handling varying deduction rules on PCB, EPF
              (KWSP), SOCSO, EIS and HRDF every month, to ensuring accurate tax
              data is ready for e-filing annually.
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
              Sync pay data with attendance
            </h1>
            <p className="max-w-xl leading-relaxed text-purple sm:mx-auto lg:ml-0">
              We support integrations with HR apps like Zibble, Soho People and
              altHR. Sync employees’ work hours, overtime, leave and claims in a
              few clicks and with just minutes of one-time configurations.
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

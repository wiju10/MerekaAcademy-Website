import Link from "next/link";
export default function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/peopleworking.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-orange-300 font-bold">
              The simplest way to manage your payroll
            </h1>
            <p className="mb-5 text-2xl text-orange-200">
              Let us handle the boring part, allowing you to focus your efforts
              on your business - ensuring success
            </p>
            <Link
              href="/signup"
              className="btn bg-purple-300 hover:bg-orange-400"
            >
              Request a demo
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between text-center">
        <div className="w-full md:w-1/2">
          <h1 className="mb-5 text-5xl text-purple-300 font-bold">
            Easy to use UI
          </h1>
          <Link
            href="/signup"
            className="btn bg-purple-300 hover:bg-orange-400"
          >
            Request a demo
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/hero-desktop.png"
            style={{ width: "800px", height: "500px" }}
            className="mx-auto mr-16 mt-6 sm:w-10/12 lg:w-full"
          />
        </div>
      </div>
    </>
  );
}

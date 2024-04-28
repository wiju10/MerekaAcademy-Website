"use client";
export default function Page() {
  const loginUser = (e) => {
    e.preventDefault();
    // Implement login logic here
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-[780px] bg-gray-100">
        <div className="w-full max-w-md">
          <h1 className="text-center text-xl">Sign Up</h1>
          <form onSubmit={loginUser} className="mt-8">
            <div className="form-control">
              <label htmlFor="username" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="username"
                placeholder="business@gmail.com"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-4">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder=""
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-purple-300 btn-md w-full">
                Sign Up Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

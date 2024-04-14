"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();
  const [disable, setDisable] = useState(true);
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  // console.log(user);

  useEffect(() => {
    // console.log(user)
    if (
      user.username.length > 0 &&
      user.email.length > 0 &&
      user.password.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  const submitHandler = async () =>{
    try {
        const res = await axios.post("/api/users/signup", user);
        router.push("/login");
        console.log(res);
        toast.success(res.data.message);
        // ankit 
        // ankit@gmail.com 
        // ankit123 
    } catch (error:any) {
        console.log(error);
        toast.error(error.response.data.message);  
    }
}
  
  return (
    <div className="flex mt-12 justify-center items-center">
      <div className="lg:p-20 lg:w-[45vw] p-10">
        <h1 className="text-center font-bold lg:text-2xl text-xl">
          Sign in to your account
        </h1>
        <div className="flex flex-col my-4 space-y-2">
          <label htmlFor="#" className="text-sm font-normal">
            Username
          </label>
          <input
            onChange={(e) => {
              setUser({ ...user, username: e.target.value });
            }}
            value={user.username}
            type="text"
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-2"
          />
        </div>
        <div className="flex flex-col my-4 space-y-2">
          <label htmlFor="#" className="text-sm font-normal">
            Email
          </label>
          <input
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
            value={user.email}
            type="email"
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-2"
          />
        </div>
        <div className="flex flex-col my-4 space-y-2">
          <label htmlFor="#" className="text-sm font-normal">
            Password
          </label>
          <input
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
            value={user.password}
            type="password"
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-2"
          />
        </div>
        <button
        onClick={submitHandler}
          className={`${
            disable ? "bg-gray-300 cursor-not-allowed" : "bg-blue-700"
          } w-full p-2 mt-3 rounded-md text-white font-bold`}
        >
          Signup
        </button>
        <div className="flex justify-center items-center my-4 gap-2">
          <p className="text-blue-500">Already have an account?</p>
          <Link
            href={"/login"}
            className="cursor-pointer font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

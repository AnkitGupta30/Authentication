"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
    const [disable, setDisbale] = useState(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
//   console.log(user);

useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0){
        setDisbale(false);
    }
    else{
        setDisbale(true);
    }
}, [user]);

const submitHandler = async () => {
  try{
    const res = await axios.post("/api/users/login", user);
    router.push("/")
    console.log(res)
    toast.success(res.data.message)
  }
  catch(error:any){
    console.log(error);
    toast.error(error.response.data.message);
  }
}

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="lg:p-20 lg:w-[45vw] p-10">
        <h1 className="text-center font-bold lg:text-2xl text-xl">
          Login to your account
        </h1>
        <div className="flex flex-col my-4 space-y-2">
          <label htmlFor="#" className="text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => {setUser({...user, email: e.target.value})}}
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-2"
          />
        </div>
        <div className="flex flex-col my-4 space-y-2">
          <label htmlFor="#" className="text-sm font-normal">
            Password
          </label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => {setUser({...user, password: e.target.value})}}
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-2"
          />
          <Link href={"#"}><p className="text-right text-blue-500  text-sm font-medium"><span className="hover:underline">Forgote password ?</span></p></Link>
        </div>
        <button
        onClick={submitHandler}
          className={`${
            disable ? "bg-gray-300 cursor-not-allowed" : "bg-blue-700"
          }  w-full p-2 mt-3 rounded-md text-white font-bold`}
        >
          Login
        </button>
        <div className="flex justify-center items-center my-4 gap-2">
          <p className="text-blue-500">Don&apos;t have an account?</p>
          <Link
            href={"/signup"}
            className=" cursor-pointer font-semibold hover:underline"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

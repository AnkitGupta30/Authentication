"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function Home() {
  const router = useRouter();

  const logoutHandler = async () =>{
    try{
      const res = await axios.get("/api/users/logout");
      router.push("/login");
      toast.success(res.data.message);

    }
    catch(error: any){
      toast.error("Failed Logout")
    }
  }
  return (
    // <div className="flex justify-center items-center h-screen flex-col gap-2">
    // 
    // </div>
    <div>
    <nav className="flex justify-between items-center lg:px-10 py-5 px-4 ">
      <p className="text-2xl font-bold">Ankit</p>
      <ul className="flex justify-center items-center gap-4">
        <li className="text-sm cursor-pointer hidden lg:block md:block">Home</li>
        <li className="text-sm cursor-pointer hidden lg:block md:block">About</li>
      </ul>
    </nav>
    <div className="flex justify-center items-center h-[70vh] flex-col gap-3">
    <h1 className="text-2xl font-bold">Welcome to our website</h1>
    <button onClick={logoutHandler} className="bg-blue-600 text-white px-2 py-1 border rounded-sm">Logout</button>
    </div>
    </div>
  );
}

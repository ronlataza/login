import Link from "next/link";

export default function LoginForm(){
    return <div className="grid place-items-center mt-20 ">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-blue-600">
            <h1 className="text-2xl font-bold my-4">Login</h1>
            <form className="flex flex-col gap-3">
            <input type ="text" placeholder="Email"></input>
            <input type ="password" placeholder="password"></input>
            <button className="bg-blue-500  text-white font-bold cursor-pointer px-6 py-2">
                Login</button>
        <div className="bg-red-500 text-white w-fit text-sm py-1 px-3
         rounded-md mt-2"> 
            Login Error
        </div>
        <Link className="text-sm mt-1 mb-1 text-right" href={'/register'}>
         Don't Have an Account? <span className="underline">Register</span>
        </Link>
        </form>
        </div>
       
    </div>;
}
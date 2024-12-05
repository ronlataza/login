export default function LoginForm(){
    return <div className="grid place-items-center">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
            <h1 className="text-xl font-bold my-4">Enter The Details</h1>
            <form className="flex flex-col gap-3">
            <input type ="text" placeholder="Email"></input>
            <input type ="password" placeholder="password"></input>
            <button className="bg-blue-500 text-white font-bold cursor-pointer px-6 py-2">
                Login</button>
                
        </form>
        </div>
       
    </div>;
}
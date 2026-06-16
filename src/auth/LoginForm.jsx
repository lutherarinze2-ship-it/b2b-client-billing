import { useState } from "react";
import { Lock } from "lucide-react";


export default function LoginForm({onLogin, onBack}){
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmitforForm = (e)=>{
        e.preventDefault()

        const isSuccess = onLogin(username, password);
        if (!isSuccess){
            setError("Invalid Username or Password")
        }
    }

    return(
        <>
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                <div className="bg-blue-600 p-8 text-center">
                    <div className="bg-white/30">
                        <Lock className="w-8 h-8 text-white "/>
                    </div>
                    <h2>Welcome Mortal</h2>
                    <p className="text-blue-200 text-sm animate-bounce">Sign in with your credentials</p>
                </div>

                <form action="" onSubmit={handleSubmitforForm} className="p-8 space-y-6">
                    {error && (
                        <div className="text-yellow-500 text-center">
                            {error}
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input type="text" required placeholder="example@gmail.com" value={username} onChange={(e) => setUserName(e.target.value)} className="w-full px-4 py-3 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 outline"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
                        <input type="password" required placeholder="Type in your Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 outline"/>
                    </div>
                    <button type="submit" className="w-full bg-green-600 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition active:scale-65">
                        Login
                    </button>
                  </form>

                <div className="border-t border-slate-300 p-4 text-center bg-slate-50"> <button onClick={onBack} className="text-sm text-blue-600 hover:text-teal-800 font-medium  transition-colors bg-pink-600 hover:bg-pink-400 text-white font-semibold py-3 px-4 rounded-lg transition active:scale-65 ">Back to Home</button></div>
            </div>
        </div>
        </>
    )
}


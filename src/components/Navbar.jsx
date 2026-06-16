import React from "react";
import { DollarSign, Users, FileText, LogOut } from "lucide-react";

function Navbar({activeTab, setActiveTab, user, onLogout }) {
    return(
         <nav className="bg-white shadow-md p-4 flex items-center justify-between shadow-sm sticky top-0 z-10">
            <div className="flex items-center gap-2">
                <div className="bg-black text-white p-2 rounded-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                </div>
                <h1 className="font-bold text-xl text-slate-900 hidden sm:block">Billing portal</h1>
            </div>

        <div className="flex items-center gap-2">
                <button onClick={() => setActiveTab("clients")} className={`flex items-center gap-2 px-3 py-2 sm:py-4 sm:py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === "clients" ? "bg-blue-600 text-white" : "text-slate-700 hover:bg-slate-200"}`}>
                    <Users className="w-4 h-4" />
                    <span className="hidden sm:block">Clients</span>
                </button>
                <button onClick={() => setActiveTab("invoices")} className={`flex items-center gap-2 px-3 py-2 sm:py-4 sm:py-2 rounded-lg font-medium text-sm transition-colors ${activeTab === "invoices" ? "bg-blue-600 text-white border border-blue-200" : "text-slate-700 hover:bg-slate-200"}`}>
                    <FileText className="w-4 h-4" />
                    <span className="hidden sm:inline">Invoices</span>
                </button>
            </div>

            <div className="flex items-center gap-4"> 
            <div className="hidden md:block text-sm text-right">
                <p className="text-slate-900 font-semibold leading-none">Hello, {user.username}</p>
                <p className="text-slate-500 text-xs">You are logged in.</p>
            </div>
           <button onClick={onLogout} className="text-slate-700 hover:text-red-600 hover:bg-red-100transition-colors" title="Log Out">
                <LogOut className="w-5 h-5" />
            </button>
            </div>
        </nav>
    );
    
}

export default Navbar;
                
import { useState } from "react"
import Navbar from "../../components/Navbar"
import SummaryCards from "./SummaryCards"
import ClientForm from "../clients/ClientForm"
import ClientList from "../Clients/ClientList"
import InvoiceForm from "../Invoices/invoice form"
import InvoiceList from "../invoices/invoice list"
import { initialClients, initialInvoices } from "../../data/mockdb"


export default function DashBoardLayout( {user, onlogout}){
    const [activeTab, setActiveTab] =useState("clients")
    const [clients, setClients] =useState(initialClients)
    const [invoices, setInvoices] =useState(initialInvoices)
    return(
        <>
        <div className="min-h-screen bg-slate-200 font-sans pb-12">
            <Navbar activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    user={user}
                    onLogout={onlogout}
                />
            <main className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 animate-in fade-in duration-500">
                <SummaryCards invoices={invoices}/>
                {activeTab === "clients" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="lg:col-span-1">
                            <ClientForm setClients={setClients}/>
                        </div>
                        <div className="lg:col-span-2">
                            <ClientList
                                clients={clients}
                                setClients={setClients}
                                setInvoices={setInvoices}/>
                        </div>
                    </div>
                )}
                {activeTab === 'invoices' && (
                    <div className="grid gid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                        <div className="lg:col-span-1">
                            <InvoiceForm
                                clients={clients}
                                invoices={invoices}
                                setInvoices={setInvoices}/>
                                
                        </div>
                        <div className="lg:col-span-2">
                            <ClientList
                                clients={clients}
                                setClients={setClients}
                                setInvoices={setInvoices}/>
                        </div>
                    </div>
                )}
            </main>
        </div>
        </>
    )
}
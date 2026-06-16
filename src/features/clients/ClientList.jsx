import { Trash2 } from "lucide-react";

export default function ClientList({ clients, setClients, setInvoices }) {
    const handleDelete = (clientId) => {
        setClients((prev) => prev.filter(client => client.id !== clientId));
        setInvoices((prev) => prev.filter(inv => inv.clientId !== clientId)) ;
    };

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Client Directory ({clients.length})</h2>
            {clients.length === 0 ? (
                <div className="text-center py-8 text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300"> No client added yet. Add one to the left!</div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {clients.map(client => (
                        <div key={client.id} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors relative group">
                            <h3 className="font-semibold text-slate-900">{client.company}</h3>
                            <p className="text-sm text-slate-600">{client.name}</p>
                            <p className="text-sm text-slate-500 mb-2">{client.email}</p>

                            <button
                                onClick={() => handleDelete(client.id)}
                                className="absolute top-4 right-4 text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                title="Delete Client"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


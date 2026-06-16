import { useState } from "react";
import { Plus, User, Building2, Mail } from "lucide-react";

const ClientForm = ({ setClients }) => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: ""
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.company || !formData.email) return;
        const newClient = { id: crypto.randomUUID(), ...formData };
        setClients(prev => [...prev, newClient]);
        setFormData({ name: '', company: '', email: '' });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold mb-4 text-amber-600 flex items-center gap-2">
                <Plus className="w-5 h-5 text-blue-500 mr-2" />
                Add New Client
            </h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Contact Name
                    </label>
                   <div className="relative">
                        <User className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline"
                            placeholder="John Doe"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className=" pl-10 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Company
                    </label>
                    <div className="relative">
                        <Building2 className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline"
                            placeholder="Acme Corporation"
                            id="company"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="pl-10 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="email"
                            required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 outline"
                            placeholder="john@acme.com"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="pl-10 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>
                <button type="submit" className="w-full bg-green-600 hover:bg-black text-white font-semibold py-3 px-4 rounded-lg transition active:scale-95">
                    Add Client
                </button>
            </div>

        </form>
    );
}

export default ClientForm;
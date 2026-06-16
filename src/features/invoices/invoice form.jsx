import { useState } from "react";
import { Plus, DollarSign } from "lucide-react";

export default function InvoiceForm({ clients, setInvoices }) {
	const [formData, setFormData] = useState({
		clientId: "",
		description: "",
		amount: "",
	});
	const [errorMsg, setErrorMsg] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (clients.length === 0) {
			setErrorMsg("You must add a client first!");
			return;
		}
		if (!formData.clientId) {
			setErrorMsg("Please select a client.");
			return;
		}
		setErrorMsg("");

		const newInvoice = {
			id: crypto.randomUUID(),
			clientId: formData.clientId,
			description: formData.description,
			amount: Number(formData.amount),
			isPaid: false,
		};
		setInvoices((prev) => [newInvoice, ...prev]);
		setFormData({ clientId: "", description: "", amount: "" });
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
			<h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
				<Plus className="w-5 h-5 text-blue-600" /> Create Invoice
			</h2>
			{errorMsg && (
				<div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-200">
					{errorMsg}
				</div>
			)}

			<div className="space-y-4">
				<div>
					<label className="block text-sm font-medium text-slate-700 mb-1">
						Select Client
					</label>
					<select
						className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
						value={formData.clientId}
						onChange={(e) =>
							setFormData({ ...formData, clientId: e.target.value })
						}>
						<option value="">-- Choose a Client --</option>
						{clients.map((c) => (
							<option
								key={c.id}
								value={c.id}>
								{c.company} ({c.name})
							</option>
						))}
					</select>
				</div>
				<div>
					<label className="block text-sm font-medium text-slate-700 mb-1">
						Service Description
					</label>
					<input
						type="text"
						required
						className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="e.g. Logo Design"
						value={formData.description}
						onChange={(e) =>
							setFormData({ ...formData, description: e.target.value })
						}
					/>
				</div>
				<div>
					<label className="block text-sm font-medium text-slate-700 mb-1">
						Amount ($)
					</label>
					<div className="relative">
						<DollarSign className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
						<input
							type="number"
							min="1"
							step="0.01"
							required
							className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="0.00"
							value={formData.amount}
							onChange={(e) =>
								setFormData({ ...formData, amount: e.target.value })
							}
						/>
					</div>
				</div>
				<button
					type="submit"
					disabled={clients.length === 0}
					className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded-lg transition-colors">
					Generate Invoice
				</button>
			</div>
		</form>
	);
}

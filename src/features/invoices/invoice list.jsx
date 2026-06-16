import { formatMoney } from "../../data/mockdb";
import { Trash2 } from "lucide-react";


export default function InvoiceList({ invoices, setInvoices, clients }) {
	const togglePaidStatus = (id) =>
		setInvoices((prev) =>
			prev.map((inv) =>
				inv.id === id ? { ...inv, isPaid: !inv.isPaid } : inv,
			),
		);
	const deleteInvoice = (id) =>
		setInvoices((prev) => prev.filter((inv) => inv.id !== id));
	const getClientDetails = (clientId) =>
		clients.find((c) => c.id === clientId) || {
			company: "Unknown Client",
			name: "Deleted",
		};

	return (
		<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
			<h2 className="text-lg font-bold text-slate-900 mb-4">Invoice Ledger</h2>
			{invoices.length === 0 ? (
				<div className="text-center py-8 text-slate-500 bg-slate-50 rounded-lg border border-dashed border-slate-300">
					No invoices generated yet.
				</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full text-left border-collapse">
						<thead>
							<tr className="border-b border-slate-200 text-sm text-slate-500">
								<th className="pb-3 font-medium">Client</th>
								<th className="pb-3 font-medium">Description</th>
								<th className="pb-3 font-medium">Amount</th>
								<th className="pb-3 font-medium">Status</th>
								<th className="pb-3 font-medium text-right">Actions</th>
							</tr>
						</thead>
						<tbody>
							{invoices.map((inv) => {
								const client = getClientDetails(inv.clientId);
								return (
									<tr
										key={inv.id}
										className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
										<td className="py-3">
											<p className="font-medium text-slate-900">
												{client.company}
											</p>
											<p className="text-xs text-slate-500">{client.name}</p>
										</td>
										<td className="py-3 text-slate-700">{inv.description}</td>
										<td className="py-3 font-medium text-slate-900">
											{formatMoney(inv.amount)}
										</td>
										<td className="py-3">
											<span
												className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
													inv.isPaid
														? "bg-green-100 text-green-800"
														: "bg-amber-100 text-amber-800"
												}`}>
												{inv.isPaid ? "Paid" : "Pending"}
											</span>
										</td>
										<td className="py-3 text-right">
											<div className="flex justify-end gap-2">
												<button
													onClick={() => togglePaidStatus(inv.id)}
													className={`text-xs px-3 py-1 rounded-md border font-medium transition-colors ${inv.isPaid ? "border-slate-200 text-slate-600 hover:bg-slate-100" : "border-green-200 bg-green-50 text-green-700 hover:bg-green-100"}`}>
													{inv.isPaid ? "Mark Unpaid" : "Mark Paid"}
												</button>
												<button
													onClick={() => deleteInvoice(inv.id)}
													className="p-1 text-slate-400 hover:text-red-600 transition-colors rounded-md hover:bg-red-50"
													title="Delete Invoice">
													<Trash2 className="w-4 h-4" />
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}

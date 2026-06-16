import { DollarSign, CheckCircle, Clock } from "lucide-react";
import { useMemo } from "react";    
import { formatMoney } from "../../data/mockdb";

export default function SummaryCards({ invoices }) {

    const metrics = useMemo(() => {
        return invoices.reduce((acc, inv) => {
            acc.total += Number(inv.amount);
            if (inv.isPaid) {
                acc.paid += Number(inv.amount);
            } else {
                acc.unpaid += Number(inv.amount);
            }
            return acc;
        }, { total: 0, paid: 0, unpaid: 0 });
    }, [invoices]);
    
   
    return(
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 ">
                <div className="p-3 text-slate-600 rounded-full">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                        <DollarSign className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Total Billed</p>
                    <p className="text-2xl font-bold text-slate-900">{formatMoney(metrics.total)}</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 ">
                <div className="p-3 text-slate-600 rounded-full">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                    <div> 
                     <p className="text-sm font-medium text-slate-500">Total Collected</p>
                    <p className="text-2xl font-bold text-slate-900">{formatMoney(metrics.paid)}</p>
                    </div>
                  
                </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 ">
                <div className="p-3 text-amber-600 rounded-full">
                    <div className="bg-red-100 text-red-600 p-2 rounded-full">
                        <Clock className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-medium text-slate-500">Outstanding (Unpaid)</p>
                    <p className="text-2xl font-bold text-slate-900">{formatMoney(metrics.unpaid)}</p>
                </div>
            </div>
        </div>
    )
}
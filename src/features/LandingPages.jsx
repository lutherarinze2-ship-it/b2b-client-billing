import { ArrowRight, DollarSign, FileText, ShieldCheck, Users } from "lucide-react"
export default function LandingPages({onNavigateLogin}) {

    return (
        <>
            <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center  p-6 text-center">
                <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="mx-auto bg-blue-100 text-blue-600 w-20 h-20 flex items-center justify-center rounded-2xl mb-8 shadow-sm border-blue-200">
                        <DollarSign />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-slate-300 tracking-tight mb-6">
                        Simplify your <span className="text-blue-600">2k Billing</span>
                    </h1>
                    <p className=" text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio et consequatur itaque quas, esse, explicabo dolor maiores quis voluptatem repudiandae laboriosam minus eveniet nostrum facilis sed. Asperiores dolorem quam ducimus.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button onClick={onNavigateLogin} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-8 py-4 font-semibold rounded-xl text-lg">
                            Get Started Billing <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left ">
                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <Users className="w-8 h-8 mb-4 text-blue-600"/>
                        <h3 className="font-bold text-slate-900 mb-2">Client Directory</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <FileText  className="w-8 h-8 mb-4 text-blue-600" />
                            <h3 className="font-bold text-slate-900 mb-2">Instant Invoicing</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                            <ShieldCheck  className="w-8 h-8 mb-4 text-blue-600" />
                            <h3 className="font-bold text-slate-900 mb-2">Secure Tracking</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


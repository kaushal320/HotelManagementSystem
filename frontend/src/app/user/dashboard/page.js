import BarChart from "@/app/components/user/Barchart";
import Link from "next/link";
import DashboardSidebar from "../DashbarSidebar";


export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <DashboardSidebar/>
                <div className="col-md-8 col-12">

                    <div className="row">
                        <div className="col-6 text-center p-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Total Booking</h3>
                                </div>
                                <div className="card-body">
                                    <h5><a href="#">123</a></h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-6 text-center p-4">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Total Payment</h3>
                                </div>
                                <div className="card-body">
                                    <h5><a href="#">25000</a></h5>
                                </div>
                             </div>
                        </div>
                        {/*Chart Start*/}
                        <div className="row my-4">
                            <div className="col-12"id="paymentChart">
                                <BarChart/>

                            </div>
                        </div>

                         {/*Chart End*/}



                    </div>
                </div>
            </div>

        </section>

    );
}
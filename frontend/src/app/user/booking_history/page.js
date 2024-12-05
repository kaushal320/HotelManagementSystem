import BarChart from "@/app/components/user/Barchart";
import Link from "next/link";
import DashboardSidebar from "../DashbarSidebar";


export default function page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className=" col-md-4 col-12">
                    <DashboardSidebar/>
                </div>
                <div className="col-md-8 cal-12">
                    <h2 className="mb-3">Booking History</h2>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                            <tr>
                                <th>Booking Date</th>
                                <th>Details</th>
                                <th>Invoice</th>
                                <th>Action</th>

                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>20/04/2024</td>
                                <td>
                                    <p className="m-0 fw-bold hms-color">2 Rooms</p>
                                    <p className="m-0 fw-bold hms-color">20/04/2024 - 25/04/2024</p>
                                    <p className="m-0 fw-bold hms-color">2 Guests</p>
                                </td>
                                <td>
                                    <p className="m-0 fw-bold hms-color">
                                        <Link href="#"> HMS-123</Link>    
                                    </p>
                                    <p className="m-0 fw-bold"> 15,000  </p>
                                    <p className="m-0 fw-bold text-danger"> Due</p>
                                </td>
                                <td>
                                    <Link  className="btn btn-sm btn-outline-success" href="#">Approve</Link>
                                    <Link  className="btn btn-sm btn-outline-danger" href="#">Cancel</Link>
                                    <Link  className="btn btn-sm btn-outline-dark ms-1" href="#">Guest Detail</Link>

                                </td>

                                </tr>
                                


                                
                            </tbody>
                        </table>
                    </div>
                </div>

                


                    
                
            </div>

        </section>

    );
}
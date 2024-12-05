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
                                <th> Date</th>
                                <th>Details</th>
                                <th>Invoice</th>
                             
                                <th>Actions</th>

                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>25/05/2024</td>
                                <td>
                                    <p className="m-0 fw-bold hms-color">Birthday Party</p>
                                    <p className="m-0 fw-bold hms-color">50 guest</p>
                                    
                                </td>
                                <td>
                                    <p className="m-0 fw-bold hms-color">
                                        <Link href="#"> HMSEVT-123</Link>    
                                    </p>
                                    <p className="m-0 fw-bold"> 15,000  </p>
                                    <p className="m-0 fw-bold text-danger"> Due</p>
                                </td>
                                <td>
                                    
                                    <Link  className="btn btn-sm btn-outline-danger" href="#">Cancel</Link>
                                    <Link  className="btn btn-sm btn-outline-dark ms-1 hms-bg-dark" href="#">Pay Now</Link>

                                </td>

                                </tr>
                                

                                <tr>
                                <td>25/05/2024</td>
                                <td>
                                    <p className="m-0 fw-bold hms-color">Birthday Party</p>
                                    <p className="m-0 fw-bold hms-color">50 guest</p>
                                    
                                </td>
                                <td>
                                    <p className="m-0 fw-bold hms-color">
                                        <Link href="#"> HMSEVT-123</Link>    
                                    </p>
                                    <p className="m-0 fw-bold"> 15,000  </p>
                                    <p className="m-0 fw-bold text-success"> Paid</p>
                                </td>
                                <td>
                     
                                    <Link  className="btn btn-sm btn-success" href="#">Support</Link>

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
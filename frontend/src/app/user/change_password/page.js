import Link from "next/link";
import DashboardSidebar from "../DashbarSidebar";


export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                    <div className=" col-md-6 col-12">
                    <DashboardSidebar/>
                </div>
                       
                        <div className="col-md-6 col-12">
                            <h3 className="mb-3">Change password</h3>
                            <div className="row">
                                
                                <div className="col-md-5 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">New Password</label>
                                    <input type="password" className="form-control" placeholder=""/>
                                </div>
                                <div className="col-md-5 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Confirm password</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                               
                                <div className="col-md-6 col-12 mb-3">
                                <button className="btn hms-bg-dark ">Submit</button>
                                <button className="btn btn-secondary ms-2">Reset</button>
                                </div>

                               
                               

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
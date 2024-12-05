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
                            <h3 className="mb-3">Update Profile</h3>
                            <div className="row">
                                <div className="col-md-2 col-12 mb-3">
                                <img className="img-fluid" src="/banners/1.jpg" width={300}  />

                                </div>
                                <div className="col-md-5 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col-md-5 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                
                                
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="Email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <button className="btn hms-bg-dark ">Submit</button>
                                <button className="btn btn-secondary ms-2">Reset</button>
                                </div>

                               
                                <p>
                                    If you want to  change your password, <Link href="/user/change_password"> Click here </Link>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
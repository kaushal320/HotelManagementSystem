import Link from "next/link";




export default function Page() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img className="img-fluid" src="/banners/1.jpg" />
                        </div>
                        <div className="col-md-6 col-12">
                            <h3 className="mb-3">Login</h3>
                            <div className="row">
                               
                            <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Password</label>
                                    <input type="text" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <button className="btn hms-bg-dark ">Submit</button>
                                <button className="btn btn-secondary ms-2">Reset</button>
                                </div>
                                <p>
                                <Link  className="text-danger" href="/user/forgetpassword"> forget Password?</Link>
                                </p>


                                
                                
                                <p>
                                    If you are not registered user,<Link href="/user/signup"> SignUp here</Link>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
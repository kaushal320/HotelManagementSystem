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
                            <h3 className="mb-3">SignUp</h3>
                            <div className="row">
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">First Name</label>
                                    <input type="text" className="form-control" placeholder="First name"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last name"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Username"/>
                                </div>
                                
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Password</label>
                                    <input type="text" className="form-control" placeholder="Password"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Mobile</label>
                                    <input type="text" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="Email" className="form-control" placeholder="Email"/>
                                </div>

                               
                                <p>
                                    If you are already registered user, <Link href="/user/login"> Login here </Link>
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
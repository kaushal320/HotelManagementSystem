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
                            <h3 className="mb-3">Contact Us</h3>
                            <div className="row">
                                <div className=" col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label"> Your Name</label>
                                    <input type="text" className="form-control" placeholder="Your name"/>
                                </div>

                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Your Email</label>
                                    <input type="Email" className="form-control" placeholder="Email"/>
                                </div>
                                <div className="col-md-6 col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Your Mobile</label>
                                    <input type="number" className="form-control" placeholder="Mobile"/>
                                </div>
                                <div className=" col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Captcha Code -8568</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className=" col-12 mb-3">
                                <label htmlFor="inputEmail4" className="form-label">Your Message</label>
                                    <textarea type="text" className="form-control" />
                                </div>
                               

                               
                                

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
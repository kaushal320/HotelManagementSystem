import Link from "next/link";
export default function HomeServices() {
    return (
        <section className="container my-5">
            <h2 className="my-5 text-center">Services</h2>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card m-x-4">
                        <Link href="/room-types">
                        <img src="banners/1.jpg" className="card-img-top" />
                        </Link>
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title bg-dark"> <Link href="/room-types" className="text-white">Room Types</Link></h5>
                                
                            </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title bg-dark">Events</h5>
                                
                            </div>
                    </div>
                    
                </div>
                <div className="col-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                            <div className="card-body bg-dark text-white">
                                <h5 className="card-title bg-dark">Online Booking</h5>
                                
                            </div>
                    </div>
                    
                </div>
                
            </div>

        </section>
    );
}
import RoomTypeImages from "@/app/components/RoomTypeImages";
import Link from "next/link";



export default function Pages() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-6">
                    <RoomTypeImages />
                    <h4 className="my-5">Amenties</h4>
                    <div className="room">
                        <div className="col-3">
                            <p>Wifi: <i className="fa fa-check-circle text-success"></i></p>
                            <p>Swimming Pool: <i className="fa fa-check-circle text-success"></i></p>
                            <p>Camera:<i className="fa fa-times-circle text-danger"></i></p>
                        </div>
                    </div>
                    <h4 className="my-5">Location</h4>
                    <p>Google Map</p>


                </div>
                <div className="col-6">
                    <div className="card">
                        <div className="card-header">
                            <h5>Booking Form</h5>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Room Type:</b>Double Bedroom</label>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Charges:</b>Rs:-1500/Night</label>
                                        
                                    </div>
                                    <hr/>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Total-Guest</b></label>
                                        <input type="number" className="form-control" />
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Check-In</b></label>
                                        <input type="date" className="form-control" />
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Check-Out</b></label>
                                        <input type="date" className="form-control" />
                                        
                                    </div>
                                    <Link href="/checkout" className="btn hms-bg-dark mt-3">Confirm</Link>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



        </section>

    );
}
import RoomTypeImages from "@/app/components/RoomTypeImages";
import Link from "next/link";



export default function Pages() {
    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-6">
                    <RoomTypeImages />
                    


                </div>
                <div className="col-6">
                    <div className="card">
                        
                            <h5 className="card-header hms-bg-normal text-white">Book Event</h5>
                            <div className="card-body">
                                <form>
                                
                                    <hr/>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Event Type</b></label>
                                        <select className="form-control">
                                            <option>Birthday party</option>
                                            <option>Seminar</option>
                                            <option>Kitty party</option>

                                        </select>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Event Details</b></label>
                                        <textarea className=" form-control"></textarea>
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Total-Guest</b></label>
                                        <input type="number" className="form-control" />
                                        
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Event Date</b></label>
                                        <input type="date" className="form-control" />
                                        
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label"><b>Total Cost</b></label>
                                       <h4 className="hms-color">Rs.57000</h4>
                                        
                                    </div>
                                    <Link href="/checkout" className="btn hms-bg-dark mt-3">Confirm</Link>
                                </form>
                            </div>
                        
                    </div>

                </div>
            </div>



        </section>

    );
}
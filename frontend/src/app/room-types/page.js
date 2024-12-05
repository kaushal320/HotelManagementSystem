import Link from "next/link";


export default function Pages() {
    return (
        <section className="container my-5">
            <h3 className="my-4">Room Types </h3>

            <div className="row text-center">
                <div className="col-4 mb-4">
                    <div className="card m-x-4">
                        <Link href="/room-types/single-bedroom">
                            <img src="banners/1.jpg" className="card-img-top" />
                        </Link>
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title bg-dark"> <Link href="/room-types/single-bedroom" className="text-white">Single Bedroom</Link></h5>

                        </div>
                    </div>

                </div>
                <div className="col-4 mb-4">
                    <div className="card m-x-4">
                    <Link href="/room-types/single-bedroom">
                            <img src="banners/1.jpg" className="card-img-top" />
                        </Link>
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title bg-dark"> <Link href="/room-types/double-bed-rooms" className="text-white">Double Bedroom</Link></h5>

                        </div>
                    </div>

                </div>
                <div className="col-4 mb-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title bg-dark"> <Link href="/room-types" className="text-white">Room Type 3</Link></h5>

                        </div>
                    </div>

                </div>
                <div className="col-4 mb-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title bg-dark"> <Link href="/room-types" className="text-white">Room Type 3</Link></h5>

                        </div>
                    </div>

                </div>
                <div className="col-4 mb-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title bg-dark"> <Link href="/room-types" className="text-white">Room Type 3</Link></h5>

                        </div>
                    </div>

                </div>
                <div className="col-4 mb-4">
                    <div className="card m-x-4">
                        <img src="banners/1.jpg" className="card-img-top" />
                        <div className="card-body bg-dark text-white">
                            <h5 className="card-title bg-dark"> <Link href="/room-types" className="text-white">Room Type 3</Link></h5>

                        </div>
                    </div>

                </div>

            </div>

        </section>

    );
}
import Link from "next/link";


export default function PaymentFailure() {
  

  return (
   <section className="container my-5 text-center">
    <h3 className="text-danger my-4"> <i className="fa fa-check-circle"></i> Opps! Something wrong happened</h3>
    <h5 className="text-danger">Error Code: Error Description </h5>
    <p>
      <Link href="#" className="btn btn-dark">Home</Link>
      <Link href="#" className="btn hms-bg-dark ms-2 ">My Dashboard</Link>
      
    </p>
   </section>
    
  );
}
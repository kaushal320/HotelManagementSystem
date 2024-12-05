import Link from "next/link";


export default function PaymentSuccess() {
  

  return (
   <section className="container my-5 text-center">
    <h3 className="text-success my-4"> <i className="fa fa-check-circle"></i> Thank You</h3>
    <h5>Invoice:<Link href="#"> HMS-001</Link></h5>
    <p>
      <Link href="#" className="btn btn-dark">Home</Link>
      <Link href="#" className="btn hms-bg-dark ms-2 ">My Dashboard</Link>
      
    </p>
   </section>
    
  );
}

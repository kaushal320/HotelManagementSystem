import PaymentFailure from "@/app/components/payment/paymentfailure";
import PaymentSuccess from "@/app/components/payment/Paymentsuccess";
import Link from "next/link";




export default function Page({params}) {
  const slug=params.slug;

  return (
   <section className="container my-5 text-center">
    {
      slug=='success'&&<PaymentSuccess/>

    }
    {
      slug=='failure'&&<PaymentFailure/>
    }

   </section>
    
  );
}

import Link from "next/link";
export default function Page() {
  return (
    <section className="container my-5">
      <h3 className="my-4">Checkout Page </h3>
      <div className="row">
        <div className="col-6 offset-3">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>Total Guests </th>
                <td>4</td>
              </tr>

              <tr>
                <th>Total Rooms </th>
                <td>4</td>
              </tr>

              <tr>
                <th>Check-In Date </th>
                <td>20/94/2024</td>
              </tr>

              <tr>
                <th>Check-out Date </th>
                <td>4</td>
              </tr>
              <tr>

                <th>Charges </th>
                <td>1500*10=15000</td>
              </tr>
              <tr>

                <th>Tax </th>
                <td>10%</td>
              </tr>

              <tr>

                <th>Total Amount </th>
                <td>rs.16500</td>
              </tr>

              <tr>
                <td colSpan={2} className="text-danger" > *One Govt.ID required when checkin </td>
              </tr>
              

              <tr>
                <td colSpan={2}><Link href="#"> Term & Conditions</Link> </td>
              </tr>
              <tr>
                <td colSpan={2} >
                  <button  className="btn btn-secondary">Cancel</button> 
                  <Link href="/payment/success" className="btn hms-bg-dark ms-2">Pay Now(Success)</Link>
                  <Link  href="/payment/failure" className="btn btn-danger ms-2">Pay Now(Failure)</Link>
                   </td>
                
              </tr>

            



            </tbody>
          </table>

        </div>
      </div>



    </section>

  );
}

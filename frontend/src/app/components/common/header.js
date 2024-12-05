import {Pacifico} from 'next/font/google';
import Link from 'next/link';

const pacifico = Pacifico({ subsets: ['latin'],weight:'400' })

export default function Header(){
    return(
        <nav className="navbar navbar-expand-lg hms-bg-normal" data-bs-theme="dark"  >
  <div className="container">
    <Link className={` navbar-brand ${pacifico.className} fs-4 hms-color-light ` }  href="/">HMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item me-3">
          <a className="nav-link active fw-bold" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item me-3">
          <a className="nav-link fw-bold" href="#">Gallery</a>
        </li>
        <li className="nav-item me-3">
          <a className="nav-link fw-bold" href="#">Services</a>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link fw-bold" href="/about">About Us</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="nav-link fw-bold" href="/contact">Contact Us</Link>
        </li>
        <li className="nav-item me-3">
          <Link className="btn mt-1 text-white fw-bold hms-bg-dark " href="/book_event" >Book Event</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    );
}
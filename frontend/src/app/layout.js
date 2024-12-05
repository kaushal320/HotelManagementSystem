import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Bottom from './components/common/bottom';
import 'font-awesome/css/font-awesome.min.css';
import '../../styles/global.css'

export const metadata = {
  title: "Hotel Management System",
  description: "Home Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body>
      <Header/>
      
      {children}
      <Footer/>
      <Bottom/>

      </body>
    </html>
  );
}

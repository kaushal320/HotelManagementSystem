import 'bootstrap/dist/css/bootstrap.min.css';
import HomeBanner from './components/homeBanners';
import HomeServices from './components/services';
import HomeGallery from './components/HomeGallery';
import HomeReviews from './components/homereview';
export default function Home() {
  return (
    <main>
     <HomeBanner/>
     <HomeServices/>
     <HomeGallery/>
     <HomeReviews/>
    </main>
    
  );
}

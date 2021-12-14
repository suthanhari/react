import logo from './logo.svg';
import './App.css';
import ProductCard from './card';

function App() {
  return (
    <>
      <section className="pricing">
        <div className="container">
          <div className="row">
            <ProductCard name="Free" dollar="$0" user="Single User" storage="5GB Storage" publicproject="Unlimited Public Projects"

              acess="Community Access" privateproject="Unlimited Private Project" muted1="text-muted" muted2="text-muted" muted3="text-muted" muted4="text-muted"

              phsupport="Dedicated Phone Support" domain="Free Subdomain" status="Monthly Status Reports"></ProductCard>

            <ProductCard name="Plus" dollar="$9" user="5 Users" storage="50GB Storage" publicproject="Unlimited Public Projects"

              acess="Community Access" privateproject="Unlimited Private Project" muted1="text-unmuted" muted2="text-unmuted" muted3="text-unmuted" muted4="text-muted"

              phsupport="Dedicated Phone Support" domain="Free Subdomain" status="Monthly Status Reports"></ProductCard>

            <ProductCard name="Pro" dollar="$49" user="Unlimited Users" storage="150GB Storage" publicproject="Unlimited Public Projects"

              acess="Community Access" privateproject="Unlimited Private Project" muted1="text-unmuted" muted2="text-unmuted" muted3="text-unmuted" muted4="text-unmuted"

              phsupport="Dedicated Phone Support" domain="Unlimited Free Subdomain" status="Monthly Status Reports"></ProductCard>


          </div>

        </div>

      </section>

    </>
  );


}

export default App;

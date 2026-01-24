import React from 'react';
import Title from './Title';
import AboutBox from './About/AboutBox.jsx';

export default function About() {
  return (
    <section className="container my-5">
      <Title text="About Us" />
      <p className="text-center text-white mt-2 mb-4">
  Built on family values, honesty, and real experience in the automotive industry.
</p>

      <div className="row g-4 mt-4">
        {/* QUIÉNES SOMOS */}
        <div className="col-lg-4 col-md-6">
          <AboutBox
            title={<><i className="fa-solid fa-house me-2" aria-hidden="true"></i>Who We Are</>}
            bgColor="#0f0f0f"
            textColor={'#fff'}
            content={`Motor Vibes LLC is a family-owned business founded and operated by a mother and father, proud parents of two beautiful children.

Although the dealership is only one year old, its founders bring many years of experience in the car and box truck industry, allowing them to open Motor Vibes with a clear vision: to do things right from day one.

As an immigrant family, we understand firsthand the challenges many American and immigrant families face when purchasing a vehicle or investing in one for their business.`}
          />
        </div>

        {/* ESTAMOS AQUÍ PARA TI */}
        <div className="col-lg-4 col-md-6">
          <AboutBox
            title={<><i className="fa-solid fa-handshake me-2" aria-hidden="true"></i>Here For You</>}
            bgColor="#dbbb52"
            textColor={'#111'}
            content={`At Motor Vibes, we are here to help you—no matter your situation.

We work with all types of customers, but we specialize in those looking for business opportunities through box trucks and cargo vans.

We take the time to listen, advise, and explain every step of the process. We don’t make false promises, we don’t sell low-quality vehicles, and we don’t work with excessive mileage. That’s non-negotiable for us.`}
          />
        </div>

        {/* MISIÓN */}
        <div className="col-lg-4 col-md-12">
          <AboutBox
            title={<><i className="fa-solid fa-bullseye me-2" aria-hidden="true"></i>Our Mission</>}
            bgColor="#0f0f0f"
            textColor={'#fff'}
            content={`Our mission is to sell the right way—not just sell fast.

We want every customer to leave with:
• one less problem,
• a new opportunity,
• and peace of mind knowing they made the right decision.

Our goal is to grow while creating a strong community where every customer feels part of the Motor Vibes family and the values that represent us.`}
          />
        </div>
      </div>
    </section>
  );
}

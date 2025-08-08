import Title from 'antd/es/typography/Title';
import photo from '../assets/about-us/photo.png';
import Layout from '../customComponents/Layout';

const people = [
  {
    picture: photo,
    name: 'Ethan Bennet',
    position: 'Head of Design',
  },
  {
    picture: photo,
    name: 'Sophia Carter',
    position: 'CEO',
  },
  {
    picture: photo,
    name: 'Olivia Hayes',
    position: 'Customer Experience Manager',
  },
];

const About = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <Title level={2} className="text-center mb-8">
          About Cozy Home
        </Title>

        <main className="space-y-10">
          <section>
            <Title level={4} className="text-[#ec7422] mb-2">
              Our Mission
            </Title>
            <p className="text-lg leading-relaxed">
              At Cozy Home, our mission is to provide high-quality, stylish furniture that
              transforms houses into homes. We believe that everyone deserves a comfortable
              and beautiful living space, and we are committed to making that vision a
              reality through our carefully curated collections and exceptional customer
              service.
            </p>
          </section>

          <section>
            <Title level={4} className="text-[#ec7422] mb-2">
              Our Values
            </Title>
            <p className="text-lg leading-relaxed">
              We are guided by a set of core values that shape every aspect of our
              business. These include a commitment to quality craftsmanship, sustainable
              practices, and customer satisfaction. We strive to create furniture that not
              only looks great but also stands the test of time, while minimizing our
              environmental impact. Our customers are at the heart of everything we do, and
              we are dedicated to providing a seamless and enjoyable shopping experience.
            </p>
          </section>
        </main>

        <section className="mt-8 py-10 px-4 rounded-xl">
          <Title level={2} className="text-center text-[#ec7422] mb-8">
            Meet the Team
          </Title>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mt-8">
            {people.map((e, index) => (
              <div key={index} className="text-center">
                <img
                  src={e.picture}
                  alt={e.name}
                  className="mx-auto w-[250px] h-auto object-cover"
                />
                <div className="mt-4">
                  <h5 className="text-xl font-semibold">{e.name}</h5>
                  <p>{e.position}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-4 text-lg leading-relaxed mx-auto">
            <p>
              Our team is composed of passionate individuals with a shared love for design
              and a commitment to excellence. From our visionary CEO, Sophia Carter, to our
              talented Head of Design, Ethan Bennett, and our dedicated Customer Experience
              Manager, Olivia Hayes, each member brings unique skills and expertise to
              ensure that Cozy Home delivers exceptional products and service.
            </p>
            <p>
              We are more than just a furniture store; we are a team of dedicated
              professionals who believe in the power of a well-designed home. We invite you
              to explore our collections and discover how Cozy Home can help you create the
              living space of your dreams.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;

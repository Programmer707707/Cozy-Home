import Title from 'antd/es/typography/Title';
import Map from './Map';
import { useThemeStore } from '../stores/themeStore';

const ContactForm = () => {
  const isDark = useThemeStore(state => state.isDark);

  return (
    <div className={`border-2 border-orange-200 w-full max-w-3xl mx-auto p-6 rounded-xl mt-10 transition-all duration-700 ease-in-out ${isDark ? 'bg-black text-white' : 'bg-[#FCFAF7] text-black'}`}>
      <Title level={2} className="text-center mb-6">
        Contact Us
      </Title>

      <p className='text-lg sm:text-xl mb-8 text-center'>
        We're here to help! If you have any questions, concerns, or feedback, please don't hesitate to reach out. Use the form below to get in touch.
      </p>

      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-semibold">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            className="w-full px-4 py-2 border-2 border-orange-300 rounded-md bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#E87A30]"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border-2 border-orange-300 rounded-md bg-[#FAF9F6]  focus:outline-none focus:ring-2 focus:ring-[#E87A30]"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-semibold">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-md border-2 border-orange-300 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#E87A30]"
          />
        </div>

        <div className="text-center pt-4">
          <button
          className={`w-full h-10 sm:w-auto bg-[#ec7422] text-white rounded-xl font-extrabold px-6 py-2  hover:bg-[#e05f0f] transition-colors`}
          >
          <a className='text-white w-2xl'>Submit</a>
        </button>
        </div>
      </form>

      <div className='mt-20 text-left'>
        <div>
          <Title level={4} className="mb-6 text-black dark:text-white">
            Our Contact Information
          </Title>

          <p>Phone: +998(90)-123-45-67</p>
          <p>Address: 123 Main Street, Anytown, USA</p>
        </div>

        <Map/>
      </div>
    </div>
  );
};

export default ContactForm;

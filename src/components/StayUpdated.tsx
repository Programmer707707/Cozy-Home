import Title from 'antd/es/typography/Title';
import { useState } from 'react';
import { useThemeStore } from '../stores/themeStore';

const StayUpdated = () => {
  const [email, setEmail] = useState('');
  const isDark = useThemeStore((state) => state.isDark);

  const handleSubscribe = () => {
    console.log('Subscribed with: ', email);
    setEmail('');
  };

  return (
    <div className={`mt-16 px-4 text-center ${isDark ? 'bg-black text-white' : 'bg-[#FCFAF7] text-black'}`}>
      <Title level={1}>Stay Updated</Title>
      <Title level={4}>
        Sign up for our newsletter to receive exclusive offers and the latest news.
      </Title>

      <div className="flex flex-col sm:flex-row items-center justify-center rounded-xl px-4 py-3 max-w-xl w-full mx-auto gap-3 mt-6">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className={`bg-transparent outline-none w-full ${isDark ? 'text-white placeholder-[#FCFAF7] border-2 rounded-xl' : 'text-black border-2'}  rounded-2xl text-lg py-2 px-2 ${
                isDark ? 'text-white' : 'text-black'
            }`}
        />
        <button
          onClick={handleSubscribe}
          className={`w-full h-10 sm:w-auto bg-[#ec7422] text-white rounded-xl font-extrabold px-6 py-2  hover:bg-[#e05f0f] transition-colors`}
        >
          <a className='text-white w-2xl'>Subscribe</a>
        </button>
      </div>
    </div>
  );
};

export default StayUpdated;

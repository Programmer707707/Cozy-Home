import { useForm } from 'react-hook-form';
import { useThemeStore } from '../stores/themeStore';


const ProfileInfo = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data:any) => { console.log(data); reset(); };
  const isDark = useThemeStore((state) => state.isDark);

  return (
    <div className={`mx-auto ${isDark ? 'text-black' : 'bg-[#FCFAF7] text-black'}`}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 text-left">
        <div>
          <label className="block mb-1 text-sm font-medium">Full Name</label>
          <input
            {...register('name', { required: true })}
            placeholder="Your full name"
            className="w-full px-4 py-2 rounded-md border border-orange-300 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#E87A30]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder="you@example.com"
            className="w-full px-4 py-2 rounded-md border border-orange-300 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#E87A30]"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            rows={5}
            {...register('message', { required: true })}
            placeholder="Your message..."
            className="w-full px-4 py-2 rounded-md border border-orange-300 bg-[#FAF9F6] focus:outline-none focus:ring-2 focus:ring-[#E87A30]"
          />
        </div>

        <button
          type="submit"
          className="bg-[#ec7422] rounded-xl font-semibold px-6 py-2 hover:bg-[#e05f0f] transition-colors"
        >
          <span className='text-white'>Submit</span>
        </button>
      </form>
    </div>
  );
};

export default ProfileInfo;

import Title from 'antd/es/typography/Title'
import { useState } from 'react'

const StayUpdated = () => {
    const [email, setEmail] = useState("");

    const handleSubscribe = () =>{
        console.log("Subscribed with: ", email);
        setEmail("")
    }

    return (
      <div className='mt-[4rem] text-center'>
         <Title level={1}>Stay Updated</Title> 
         <Title level={4}>Sign up for our newsletter to receive exclusive offers and the latest news.</Title>
            <div className="flex justify-center text-black m-auto items-center bg-[#f6f1ed] rounded-xl px-4 py-3 max-w-xl w-full">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter  your email"
                    className="bg-transparent outline-none flex-grow text-[#7c4b2b] placeholder-[#7c4b2b] text-lg pr-4"
                />
                <button
                    onClick={handleSubscribe}
                    className="bg-[#ec7422] text-white font-extrabold px-6 py-2 rounded-xl hover:bg-[#e05f0f] transition-colors"
                >
                    Subscribe
                </button>
            </div>
      </div>
    )
}

export default StayUpdated
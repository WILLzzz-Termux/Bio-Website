import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaTiktok, FaTelegram, FaWhatsapp } from "react-icons/fa";

const links = [
  { title: "YouTube", desc: "Watch content", icon: <FaYoutube className="text-red-500"/> },
  { title: "Instagram", desc: "Daily updates", icon: <FaInstagram className="text-pink-500"/> },
  { title: "TikTok", desc: "Short videos", icon: <FaTiktok/> },
  { title: "Telegram", desc: "Join channel", icon: <FaTelegram className="text-blue-400"/> },
  { title: "WhatsApp", desc: "Contact me", icon: <FaWhatsapp className="text-green-500"/> },
];

export default function App(){
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 p-1">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-3xl">
              👤
            </div>
          </div>
          <h1 className="mt-4 text-2xl font-bold">verlangid</h1>
          <p className="text-zinc-400 text-sm">Creative Developer</p>
        </div>

        <div className="space-y-3">
          {links.map((item,i)=>(
            <motion.div key={i} whileHover={{scale:1.05}}
              className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition shadow-lg cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-zinc-500 mt-8">© 2026 Bio Pro</p>
      </div>
    </div>
  )
}

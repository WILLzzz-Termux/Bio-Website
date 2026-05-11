import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaTiktok, FaTelegram, FaWhatsapp } from "react-icons/fa";

const profile = {
  name: "verlangid",
  bio: "Creative Developer",
  avatar: "https://files.catbox.moe/hvgset.jpg" // 🔥 GANTI dengan foto kamu
};

const links = [
  {
    title: "YouTube",
    desc: "Watch content",
    icon: <FaYoutube className="text-red-500" />,
    url: "https://youtube.com/@thisiswilz"
  },
  {
    title: "Instagram",
    desc: "Daily updates",
    icon: <FaInstagram className="text-pink-500" />,
    url: "https://instagram.com/@willzz_flyy"
  },
  {
    title: "TikTok",
    desc: "Short videos",
    icon: <FaTiktok />,
    url: "https://tiktok.com/@willzzz_flyy"
  },
  {
    title: "Telegram",
    desc: "Join channel",
    icon: <FaTelegram className="text-blue-400" />,
    url: "https://t.me/teamwilz"
  },
  {
    title: "WhatsApp",
    desc: "Contact me",
    icon: <FaWhatsapp className="text-green-500" />,
    url: "https://wa.me/6285177993933"
  },
];

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-black">
      <div className="w-full max-w-md">
        
        {/* PROFILE */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-r from-purple-500 to-indigo-500">
            <img
              src={profile.avatar}
              alt="profile"
              className="w-full h-full object-cover rounded-full border-2 border-black"
            />
          </div>

          <h1 className="mt-4 text-2xl font-bold">{profile.name}</h1>
          <p className="text-zinc-400 text-sm">{profile.bio}</p>
        </div>

        {/* LINKS */}
        <div className="space-y-3">
          {links.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="block p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition shadow-lg hover:shadow-purple-500/20"
            >
              <div className="flex items-center gap-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* FOOTER */}
        <p className="text-center text-xs text-zinc-500 mt-8">
          © 2026 Bio Pro
        </p>
      </div>
    </div>
  );
}

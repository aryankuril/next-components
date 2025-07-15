// app/components/EmojiCarousel.js
"use client";


const emojis = [
  ["🐳", "spouting whale", "By : ARYAN"],
  ["🐋", "whale", "By : ARYAN"],
  ["🐬", "dolphin", "By : ARYAN"],
  ["🐟", "fish", "By : ARYAN"],
  ["🐠", "tropical fish", "By : ARYAN"],
  ["🐡", "blowfish", "By : ARYAN"],
  ["🦈", "shark", "By : ARYAN"],
  ["🐙", "octopus", "By : ARYAN"],
  ["🐚", "spiral shell", "By : ARYAN"]
];

const VerticalCarousel = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-tr from-[#420285] to-[#08BDBD]">
      <div className="relative w-full max-w-[500px] flex flex-col items-center">
        {emojis.map(([emoji, name, unicode], index) => (
          <div
            key={index}
            className="carousel-item absolute w-full flex items-center px-3 opacity-0 animate-carousel"
            style={{ animationDelay: `${(27 / 9) * (index - 2)}s` }}
          >
            <div className="rounded-full bg-[#d7f7fc] w-[90px] h-[90px] p-[14px] mr-[-45px] flex items-center justify-center text-[50px] z-10">
              {emoji}
            </div>
            <div className="w-full bg-white rounded-lg py-4 pr-5 pl-[70px]">
              <p className="uppercase text-[20px] mt-2 font-semibold text-black">{name}</p>
              <p className="text-black text-sm">{unicode}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default VerticalCarousel
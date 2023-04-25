import { useState, useEffect } from 'react';


const TextTypingEffect = ({ texts }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= texts[currentTextIndex].length) {
        setDisplayText(texts[currentTextIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 5000);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [currentTextIndex, texts]);

  return (
    
      <p>{displayText} Engineer</p>
   
  );
};

const HeaderText = () => {

    const texts = [
        "Software",
        'Web',
        "Backend",
        "Mobile App",
        "Game Logic"
      ];

  return (
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
    <h1 className="text-black-800 mb-1 text-5xl font-bold sm:text-5xl md:mb-2 md:text-5xl">
      Chester Johnson
    </h1>
    <p className="text-black-800 mb-4 text-xl font-bold sm:text-xl md:mb-8 md:text-2xl">
    <TextTypingEffect  texts={texts} /> 
    </p>

   

    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
      This is a section of some simple filler text, also known as
      placeholder text. It shares characteristics of real text.
    </p>
  </div>
  )
}

export default HeaderText
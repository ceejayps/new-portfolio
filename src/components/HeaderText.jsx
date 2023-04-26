import { useState, useEffect } from 'react';


const TextTypingEffect = (props) => {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= props.texts[currentTextIndex].length) {
        setDisplayText(props.texts[currentTextIndex].slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentTextIndex((currentTextIndex + 1) % props.texts.length);
          props.onChildData((currentTextIndex + 1) % props.texts.length)
        }, 2000);
      }
    }, 100);
    
    return () => clearInterval(intervalId);
  }, [currentTextIndex, props.texts]);

  return (
    
      <p>{displayText } Engineer</p>
   
  );
};

const HeaderText = ({onChildData}) => {

    const texts = [
        "Software",
        'Web',
        "Backend",
        "Mobile App",
        "Game Logic"
      ];

  return (
    <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
    <h1 className="text-black-800 mb-1 text-2xl font-bold sm:text-5xl md:mb-2 md:text-5xl">
      Chester Johnson
    </h1>
    <p className="text-black-800 mb-4 text-xl font-bold sm:text-xl md:mb-8 md:text-2xl">
    <TextTypingEffect  texts={texts} onChildData={onChildData} /> 
    </p>

   

    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
      This is a section of some simple filler text, also known as
      placeholder text. It shares characteristics of real text.
    </p>
  </div>
  )
}

export default HeaderText
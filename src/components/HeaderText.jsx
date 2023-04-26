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
    
      <p className="text-black-800 mb-4 text-xl font-bold sm:text-2xl md:mb-8 md:text-2xl">{displayText } Engineer</p>
   
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
    <h1 className="text-black-800 mb-1  font-bold text-5xl md:mb-2 md:text-5xl">
      Chester Johnson
    </h1>
    
    <TextTypingEffect  texts={texts} onChildData={onChildData} /> 
    

   

    <p className="max-w-md mx-auto leading-relaxed text-center  text-gray-500 xl:text-lg">
   from Jamaica with a track record of impactful solutions using React, Flutter, Node.Js, JavaScript, and Unity3D.
    </p>
  </div>
  )
}

export default HeaderText
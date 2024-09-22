// import { cn } from "@/lib/utils";
// import { BackgroundGradientAnimation } from "./GradientBg";
// import { GlobeDemo } from "./GridGlobe";
// import { div } from "three/webgpu";

// export const BentoGrid = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children?: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   img,
//   imgClassName,
//   titleClassName,
//   spareImg,
//   id,

// }: {
//   className?: string;
//   title?: string | React.ReactNode;
//   description?: string | React.ReactNode;
//   id?:number;
//   img?:string; 
//   imgClassName?:string;
//   titleClassName?:string;
//   spareImg?:string;

  
  
// }) => {
//   return (
//     <div
//       className={cn(
//         "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
//         className
//       )}
//       style={{
//         background: 'rgb(2,0,36)',
//         backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,35,59,1) 25%, rgba(0,212,255,1) 90%)',
//       }}
//     >
//       <div className={`${id==6} && 'flex justify-center h-full'`}>
//       <div className="w-full h-full absolute">
//   {img && (
//     <>
//       <img
//         src={img}
//         alt={img}
//         className={cn(imgClassName, 'object-cover object-center')}
//       />
//       {spareImg && (
//         <img
//           src={spareImg}
//           alt={spareImg}
//           className='object-cover object-center w-full h-full'
//         />
//       )}
//     </>
//   )}
// </div>

//         <div className={`absolute right-0 -bottom-5 ${id ==5 && 'w-full opacity-80'}`}>
//           {spareImg &&(
//             <img
//             src={spareImg}
//             alt={spareImg}
//             className={'object-cover object-center w-full h-full'}
//             />
//           )}

//         </div>
//         {id == 6 && (
//           <BackgroundGradientAnimation>
//                <div className="absolute z-50 flex items-center justify-center text-white font-bold"/>
//           </BackgroundGradientAnimation>
//         )}
//         <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10')}>
//         <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-x5 lg:text-base z-10">
//           {description}
//         </div>
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200  text-lg lg:text-3xl max-w-96 z-10">
//           {title}
//         </div>
      
//       {id === 2 && <GlobeDemo/> }
//       {id === 3 && (
//         <>
//   <div className="flex flex-col gap-3 lg:gap-8">
//     <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]">
//       Frontend Technologies:
//     </span>
//     {[
//       'Javascript', 
//       'Next.js', 
//       'Tailwind CSS'
//     ].map((item) => (
//       <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
//         {item}
//       </span>
//     ))}
//   </div>

//   <div className="flex flex-col gap-3 lg:gap-8">
//     <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]">
//       Backend Technologies:
//     </span>
//     {[
//       'Python', 
//       'Django', 
//       'Prompt Engineering', 
//       'DjangoRestFramework', 
//       'Json Web Token Libraries (Simple JWT)', 
//       'Flask', 
//       'FastAPI'
//     ].map((item) => (
//       <span key={item} className="py-2 lg:py-4 lg:px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
//         {item}
//       </span>
//     ))}
//   </div>
// </>

// )}

//   </div>
//     </div>
    
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
        
       
//       </div>
//     </div>
//   );
// };


'use client'

import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from '../../data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied,setCopied]=useState(false);
  const handleCopy=()=>{
    navigator.clipboard.writeText('epheynyaga@gmail.com');
    setCopied(true)
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,35,59,1) 25%, rgba(0,212,255,1) 90%)',
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <>
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, 'object-cover object-center')}
              />
              {spareImg && (
                <img
                  src={spareImg}
                  alt={spareImg}
                  className="object-cover object-center w-full h-full"
                />
              )}
            </>
          )}
        </div>

        <div className={`absolute right-0 -bottom-5 ${id === 5 ? 'w-full opacity-80' : ''}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        
        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold">
              {/* Add content here if needed */}
            {/* </div> */} 
          </BackgroundGradientAnimation>
        )}
        
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-x5 lg:text-base z-10">
            {description}
          </div>
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
           <>
           <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-8 lg:w-full mx-auto">
             <div className="flex flex-col gap-2 lg:gap-4 lg:w-1/2">
               <span className="py-2 lg:py-3 px-2 lg:px-4 rounded-lg text-center bg-[#10132E] text-white text-xs lg:text-sm">
                 Frontend Technologies:
               </span>
               {[
                 'Javascript',
                 'Next.js',
                 'Tailwind CSS',
               ].map((item) => (
                 <span
                   key={item}
                   className="py-1 lg:py-2 px-2 lg:px-4 text-xs lg:text-sm opacity-70 lg:opacity-90 rounded-lg text-center bg-[#10132E] text-white"
                 >
                   {item}
                 </span>
               ))}
             </div>
         
             <div className="flex flex-col gap-2 lg:gap-4 lg:w-1/2">
               <span className="py-2 lg:py-3 px-2 lg:px-4 rounded-lg text-center bg-[#10132E] text-white text-xs lg:text-sm">
                 Backend Technologies:
               </span>
               {[
                 'Python',
                 'Django',
                 'Prompt Engineering',
                 'DjangoRestFramework',
                 'Json Web Token Libraries (Simple JWT)',
                 'Flask',
                 'FastAPI',
               ].map((item) => (
                 <span
                   key={item}
                   className="py-1 lg:py-2 px-2 lg:px-4 text-xs lg:text-sm opacity-70 lg:opacity-90 rounded-lg text-center bg-[#10132E] text-white"
                 >
                   {item}
                 </span>
               ))}
             </div>
           </div>
         </>
         
         
          
          )}
          {id === 6 && (
  <div className="mt-5 relative">
   
    <div className={`absolute -bottom-5 right-0`}>
       <Lottie options={{
        loop:copied,
        autoplay:copied,
        animationData:animationData,
        rendererSettings:{
          preserveAspectRatio:'xMidYmid slice'
        }
       }}/>
    </div>
    <MagicButton
    title={copied ? 'Email copied': 'copy my email'}
    icon={<IoCopyOutline/>}
    position="left"
    otherClasses="!bg-[#161a31]"
    handleClick={handleCopy}/>
  </div>
)}
        </div>
      </div>
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {/* Add content here if needed */}
      </div>
    </div>
  );
};

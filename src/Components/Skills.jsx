import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6"
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiGooglechrome } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { IoIosBicycle } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";

const Skills = () => {
    return (
        <div className="min-h-[70vh]">
            <div>
                <h1 className="text-4xl text-center">As a web developer:</h1>
           <h1 className="text-center mt-2">Font-End:</h1>
           <div className="flex justify-center items-center gap-2">
              <FaHtml5 className="text-orange-400 text-3xl"/>
              <FaCss3Alt className="text-blue-400 text-3xl"/>
              <SiJavascript className="text-yellow-400 text-3xl"/>
              <FaReact className="text-3xl text-blue-400"/>
              <SiTailwindcss className="text-3xl text-blue-400" />
              <SiFirebase className="text-yellow-400 text-3xl"/>
              <FaNodeJs className="text-green-400 text-3xl"/>
           </div>
           <div className="divider"></div> 
           <h1 className="text-center mt-2">Back-End:</h1>
           <div className="flex justify-center items-center gap-2">
         <SiMongodb className="text-green-400 text-3xl"/>
         <SiExpress className="text-green-400 text-3xl"/>
           </div>
           <div className="divider"></div> 
           <h1 className="text-center mt-2">Tools:</h1>
           <div className="flex justify-center items-center gap-2">
              <SiGooglechrome className="text-3xl text-yellow-400"/>
              <TbBrandVscode className="text-3xl text-blue-500"/>
              <SiPostman className="text-3xl text-orange-500"/>
           </div>
           <div className="divider"></div> 
            </div>

            <h1 className="text-center mt-2 ">Others Skills:</h1>
            <div  className="flex justify-center items-center gap-2">
               <IoIosBicycle className="text-3xl text-blue-400"/>
               <FaBookReader className="text-3xl text-yellow-400"/>
            </div>
        </div>
    );
};

export default Skills;
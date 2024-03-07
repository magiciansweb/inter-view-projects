
import { GrCheckboxSelected } from "react-icons/gr";
import { FiArchive } from "react-icons/fi";

import { AiTwotoneDelete } from "react-icons/ai";
const Footer = () => {
    return (
        <div className="  shadow bg-base-200  rounded-lg  flex-col md:flex-row  flex md:gap-3">
           
       <div className="flex justify-evenly">
       <button className="btn">
  <GrCheckboxSelected></GrCheckboxSelected>Selected
</button>
<button className="btn">
 
 <FiArchive></FiArchive> Archive
</button><button className="btn">
<AiTwotoneDelete></AiTwotoneDelete>
  Delete
</button>
       </div>
<div className="flex items-center justify-evenly">
<div> <select className="select shadow bg-base-200  rounded-lg max-w-xs ">
           <option disabled selected>
           
          More +
            </option>
</select></div>
<button className="btn btn-square ">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
</div>
</div>

        
    );
};

export default Footer;
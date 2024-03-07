import { FaCamera,  FaFolder,  FaShopify, FaVideo } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { MdDraw } from "react-icons/md";
import { MdDeveloperMode } from "react-icons/md";
import { Link } from "react-router-dom";

const SideBar = () => {
    const navlinks=<>
   <div className="flex  flex-col">
     
   <li><Link>
    <div className="flex justify-between shadow bg-base-100 rounded-lg  w-64 px-1 items-center">
  <div className="flex items-center gap-3">
  <div className="text-sm  bg-blue-500 rounded-lg"> <MdDraw></MdDraw></div>
    <div className="text-justify">
      
        <h1 className="text-sm ">Design learn</h1>
    </div>
  </div>
   
    <button className="btn-xs shadow bg-base-200 rounded-lg">K+1</button>     
   </div></Link></li>
        <li>
        <Link>
    <div className="flex justify-between shadow bg-base-100 rounded-lg  w-64 px-2 items-center">
  <div className="flex items-center gap-3">
  <div className="text-sm  bg-blue-500 rounded-lg"><FaShopify></FaShopify></div>
    <div className="text-justify">
      
        <h1 className="text-xl ">Marketing Team</h1>
    </div>
  </div>
   
    <button className="btn-xs shadow bg-base-200 rounded-lg">K+2</button>       
   </div></Link>
        </li>
        <li>
        <Link>
    <div className="flex justify-between shadow bg-base-100 rounded-lg  w-64 px-2 items-center">
  <div className="flex items-center gap-3">
  <div className="text-sm  bg-blue-500 rounded-lg"><MdDeveloperMode></MdDeveloperMode> </div>
    <div className="text-justify">
      
        <h1 className="text-sm ">Development Team</h1>
    </div>
  </div>
   
    <button className=" btn-xs shadow bg-base-200 rounded-lg">K+3</button>     
   </div></Link>
        </li>
        <li>
        <Link>
  
  <div className="flex gap-2 shadow bg-base-100 rounded-lg  w-64 px-2 items-center">
  <div className="text-sm  rounded-lg"><FaCamera></FaCamera> </div>
    <div className="text-justify">
      
        <h1 className="text-sm">Create a Team</h1>
    </div>
     
   </div></Link>
        </li>
        <li>
 <Link>
 <div className="flex justify-between shadow  rounded-lg  w-64 px-2 items-center">
 
 <div className="text-justify">
   
     <h1 className="text-sm ">FOLDERS</h1>
 </div>
 <div className="text-sm  rounded-lg">+</div>     
</div>
 </Link>
        </li>
        
        <li>

           <div className="flex flex-col">
     
        <div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-sm  flex items-center gap-2">
   <FaFolder></FaFolder> <h2> Products</h2>
  </div>
  <div className="collapse-content"> 
   <ul>
    <li><Link>Roadmap</Link></li>
    <li><Link>Feedback</Link></li>
    <li><Link>Performance</Link></li>
    <li><Link>Team</Link></li>
    <li><Link>Analytics</Link></li>
    <li><Link>  <span className="inline-flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Add new tabs
      </span></Link></li>
    
   </ul>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-sm  flex items-center gap-2">
   <FaFolder></FaFolder> <h2>Solves</h2>
   </div>
  <div className="collapse-content"> 
  <ul>
    <li><Link>Roadmap</Link></li>
    <li><Link>Feedback</Link></li>
    <li><Link>Performance</Link></li>
    <li><Link>Team</Link></li>
    <li><Link>Analytics</Link></li>
    <li><Link><span className="inline-flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Add new tabs
      </span></Link></li>
    
   </ul>
  </div>
</div>
<div className="collapse collapse-plus ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-sm  flex items-center gap-2">
  <FaFolder></FaFolder> <h2>Design</h2>
  </div>
  <div className="collapse-content"> 
  <ul>
    <li><Link>Roadmap</Link></li>
    <li><Link>Feedback</Link></li>
    <li><Link>Performance</Link></li>
    <li><Link>Team</Link></li>
    <li><Link>Analytics</Link></li>
   <li><Link>  <span className="inline-flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        Add new tabs
      </span></Link></li>
    
   </ul>
  </div>
</div>

<div className="collapse ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-sm  flex items-center gap-2">
  <FaFolder></FaFolder> <h2>Office</h2>
  </div>
 
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-sm  flex items-center gap-2">
  <FaFolder></FaFolder> <h2>Legal</h2>
  </div>
 
</div>


</div> 
        </li>     
   </div>
   
    </>
    return (
        <div className='max-h-screen  mx-auto'>
           <div className="shadow bg-base-100 rounded-lg ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navlinks
       }
      </ul>
    </div>
   <Link>
   <div className="flex justify-between shadow bg-base-100 rounded-lg  max-w-64  px-1 items-center">
  <div className="flex items-center gap-3">
  <div className="text-xl  bg-blue-500"> <FaVideo></FaVideo></div>
    <div className="text-justify">
        <h2>ING</h2>
        <h1 className="text-sm font-bold">InnovatoHub</h1>
    </div>
  </div>
   
    <img className="w-8 h-8 rounded-full justify-end flex"  src="https://i.postimg.cc/XYj6bX2s/image.png" alt="" />
  
         
        
   </div></Link>
  </div>
  <div className=" hidden lg:flex-row lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navlinks
      }
    </ul>
  </div>
  <div className="">
  <Link>
  
  <div className="flex gap-2 shadow bg-base-100 rounded-lg  w-full px-2 items-center">
  <div className="text-2xl  rounded-lg"><BsPeople></BsPeople> </div>
    <div className="text-justify">

        <h1 className="text-sm ">Invite members</h1>
    </div>
   
   </div></Link>
  
  <div className="my-3">
   Help and first step
<div className="dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs text-info">
    <svg tabIndex={0} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  </div>
  <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-64">
    <div tabIndex={0} className="card-body">
      <h2 className="card-title">You needed more info?</h2> 
      <p>Here is a description!</p>
    </div>
  </div>
</div>
   </div>
  <div className="flex">
  <button className="btn mr-3 flex-1">7 days left on trial </button>
  <button className="btn btn-neutral">Add testing</button>
  </div>
  </div>
</div>
        </div>
    );
};

export default SideBar;

import { IoSettingsOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
const Navbar = ({handleSearchItem}) => {

    return (
        <div className="">
          <div className="navbar shadow bg-base-100 rounded-lg flex flex-col md:flex-row ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Products</a>
  </div>
  <div className="flex-none">
  <div className="flex grow">
  <label className="input  py-0 input-bordered flex items-center gap-1">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
  <input type="text"  onChange={handleSearchItem} className="flex  grow" placeholder="Search" />
  
</label>
  </div>
    <div className="flex items-center">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
         <TiMessages className="text-2xl"></TiMessages>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content max-w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Messages</span>

          <div className="card-actions">
            <button className="btn btn-primary btn-block">View All</button>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        
          <IoSettingsOutline className="text-2xl"></IoSettingsOutline>
        
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box max-w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Navbar;
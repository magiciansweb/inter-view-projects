
import DataTableNav from "./DataTableNav";
import { TiMessages } from "react-icons/ti";


const DataTable = ({brands}) => {
 
    return (
        <div className="">
            <DataTableNav></DataTableNav>
           <div>
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className="">
         <th></th>
        <th>Brand</th>
        <th>Description</th>
        <th>Members</th>
        <th>Categories</th>
        <th>tags</th>
        <th>Next meetings</th>
        <th>+</th>
      </tr>
    </thead>
    <tbody className="">
      {/* row 1 */}
      {
        brands.map(brand=>
          <tr key={brand.id}>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center justify-between">
            <div className="gap-1 flex items-center">
              <div className="mask mask-squircle max-w-6 max-h-6 ">
                <img src={brand.image} alt="Avatar" />
              </div>
              <div className="font-bold">{brand.name}</div>
            </div>
            <div className="flex items-center justify-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
        <TiMessages className="text-2xl"></TiMessages>
          <span className="badge badge-sm indicator-item">{brand.count}</span>
        </div>
      </div>
    </div>
          </div>
        </td>
        <td>
          <h2 className="font-bold">{brand.description.slice(0,20)}...</h2>
        </td>
        <td>
        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
  <div className="avatar">
    <div className="max-w-12">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar">
    <div className="max-w-11">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
 
  <div className="avatar">
    <div className="max-w-11">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div className="avatar placeholder">
    <div className="max-w-10 bg-neutral text-neutral-content">
      <span>+{brand.members}</span>
    </div>
  </div>
</div>
        </td>
        <td className="flex gap-1 ">
          {brand.categories.map((category,index)=><button className="btn btn-secondary btn-xs" key={index}><span className="" >{category}</span></button>)}
        </td> 
       
       
        <td className=""> 
        <div className="flex gap-1">
        {
        brand.tags.map((tag,index)=><button className="btn btn-xs" key={index}>{tag}</button>)
       }
        </div>
       </td>
       <td>
       <button className="btn btn-sm w-full text-pink-500 hover:bg-pink-500 hover:text-white"> {brand.need_meeting}</button>
       </td>
      </tr>
     )
      }
    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th className="text-end font-bold  ">+10count</th>
        <th className="text-end font-bold  ">+ Add Calculation</th>
        <th className="text-end font-bold  ">+ Add Calculation</th>
        <th className="text-end font-bold  ">+ Add Calculation</th>
        <th className="text-end font-bold  ">+ Add Calculation</th>
       
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
           </div>
        </div>
    );
};

export default DataTable;
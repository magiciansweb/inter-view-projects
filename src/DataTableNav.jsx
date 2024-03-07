import { BiSort } from "react-icons/bi";
import { TbSortAscending } from "react-icons/tb";
import { SiGooglemeet } from "react-icons/si";
import { LiaFileImportSolid } from "react-icons/lia";
const DataTableNav = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between px-0 md:px-4 my-4">
            <div className="flex flex-col  lg:flex-row gap-1">
            <div className="flex md:justify-normal justify-evenly grow gap-1">
           <div> <select className="select shadow bg-base-200  rounded-lg max-w-xs ">
           <option disabled selected>
           
          All brands
            </option>
  <option>Spotify</option>
  <option>Google</option>
  <option>Pay pal</option>
</select></div>
           <div> <select className="select shadow bg-base-200  rounded-lg max-w-xs">
  <option disabled selected>Desk</option>
  <option>Spotify</option>
  <option>Google</option>
  <option>Pay pal</option>
</select></div>
           <div> <select className="select shadow bg-base-200  rounded-lg max-w-xs">
  <option disabled selected>Tags</option>
  <option>Spotify</option>
  <option>Google</option>
  <option>Pay pal</option>
</select></div>

        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
<button className="btn max-w-xs"><BiSort></BiSort>sort</button>
<button className="btn max-w-xs"><TbSortAscending></TbSortAscending>Filter</button>
</div>
            </div>

        <div className="gap-1 flex justify-around md:justify-normal">
            <button className="btn max-w-xs"><SiGooglemeet></SiGooglemeet>Meetings</button>
            <button className="btn max-w-xs"><LiaFileImportSolid></LiaFileImportSolid>Import/export</button>

        </div>
        </div>
    );
};

export default DataTableNav;
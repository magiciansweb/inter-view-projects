import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Footer from "./Footer";
import Navbar from "./Navbar";


const Home = () => {
    const [brands,setData]=useState([]);
    const [searchItem,setSearchItem]=useState('');
    useEffect(()=>{
      fetch('data.js')
      .then(res=>res.json())
      .then(data=>{
        
        setData(data)
        
    
    })
    },[])
    const handleSearchItem=e=>{
        setSearchItem(e.target.value);
        const filteredBrands = brands.filter(
            brand => brand.name.toLowerCase().includes(searchItem.toLowerCase())
          );
          setData(filteredBrands)
    }
    
    return (
        <div className="shadow bg-base-100 rounded-lg max-w-4xl   mx-auto ">
           <Navbar brands={brands} handleSearchItem={handleSearchItem} setData={setData}>
            </Navbar> 
            <DataTable brands={brands}></DataTable>
            <div className="max-w-[500px] mx-auto"><Footer></Footer></div>
        </div>
    );
};

export default Home;
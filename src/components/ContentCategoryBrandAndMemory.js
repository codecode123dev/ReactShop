import React,{useEffect,useState} from "react";


export function ContentCategoryBrandAndMemory(item , itemProduct){

    const [filteredList, setFilteredList] = useState(itemProduct);
    const [selectedBrand, setSelectedBrand] = useState("");

    const filterByBrand = (filteredData) =>{
            if(!selectedBrand){
                return filteredData
            }
            const filteredProduct = filteredData.filter((product) => product.category("").indexOf(selectedBrand) !== -1 );
            return filteredProduct;
    }

    useEffect(() => {
        var filteredData = filterByBrand(itemProduct);
        setFilteredList(filteredData);
    },[selectedBrand]);
    
    
    const handleBrandChange = (event) => {
        setSelectedBrand(event.target.value);
      };
    
    return(
        <>
        <div className="form-check col-xl-6">
            <input className="form-check-input" type="checkbox"  id={item.id} value={selectedBrand}  onChange={handleBrandChange} />
            <label className={`form-check-label ${item.className}`} for={item.id} >
                {item.name}
            </label>
        </div>
        </>
    )
}
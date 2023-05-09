import React from "react";

export function ContentCategoryFandT(item){
    return(
        <div className="form-check check-box-technique">
            <input className="form-check-input" type="checkbox" value="" id={item.id} />
            <label className="form-check-label text-check-label" for={item.id}>
                {item.name}
            </label>
            <label className="content-item-technique content-iPad font-size-12">{item.number}</label>
        </div>
    )
}
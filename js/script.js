let dealContent = document.getElementById("deal-items");

// console.log(dealContent);

let generateRelatedItems =()=>{
  return(dealContent.innerHTML = dealItems.map((x)=>{
    let {id,name,price,off,img,deal} = x;
    return `
    <div id = product-id-${id} class="product-card hover1">
      <figure>
      <img src=${img} alt=""/>
      </figure>
      <div class="deals-details">
        <div class="deals">${deal}</div><div style="color:#CC0C39"><b>Great Indian Festival</b></div>
      </div>
      <p>${name} | Starting from ₹${price}</p>
    </div>`
  }).join(""))
};

generateRelatedItems();

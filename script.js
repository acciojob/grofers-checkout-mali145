const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 let itemsPrice=document.querySelectorAll(".price")
        let totalAmount=0
         itemsPrice.forEach((item)=>{
            //console.log(item.textContent)
            totalAmount+=Number(item.textContent)
         })
    const table=document.querySelector("table")
    const newRow=document.createElement("tr")
	

	
const cell=document.createElement("td")
		cell.textContent= totalAmount;
	newRow.appendChild(cell)
	//newRow.appendChild(cell2)
	
	

    table.appendChild(newRow)


         //console.log(totalAmount)

  
};
getSum();

//getSumBtn.addEventListener("click", getSum);


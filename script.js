const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 let itemsPrice=document.querySelectorAll(".prices")
        let totalAmount=0
         itemsPrice.forEach((item)=>{
            //console.log(item.textContent)
            totalAmount+=Number(item.textContent)
         })
    const table=document.querySelector("table")
    const newRow=document.createElement("tr")
	
const cell1=document.createElement("td")
	cell1.textContent="Total"
	
	
const cell2=document.createElement("td")
		cell2.textContent= totalAmount;
	newRow.appendChild(cell1)
	newRow.appendChild(cell2)
	
	

    table.appendChild(newRow)


         //console.log(totalAmount)

  
};

getSumBtn.addEventListener("click", getSum);


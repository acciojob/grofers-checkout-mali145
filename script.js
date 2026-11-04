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
    const table=document.querySelector(table)
    const newRow=document.createElememt("tr")
	
const cell1=document.createElememt("td")
	cell1.textcontent="Total"
	
	
const cell2=document.createElememt("td")
	cell2.textcontent= totalAmount;
	newRow.appendChild(cell1)
	newRow.appebdChild(cell2)
	
	

    table.appendChild(newRow)


         //console.log(totalAmount)

  
};

getSumBtn.addEventListener("click", getSum);


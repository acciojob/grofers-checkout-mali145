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



         //console.log(totalAmount)

  
};

getSumBtn.addEventListener("click", getSum);


import React, {useState} from 'react'
import  Header  from './HeaderComponent'

const Dashboard = () => {
  const [userInput, setUserInput] = useState({
    category: "",
    type: "",
    date: "",
    Ename: "",
    amount: "",
  });

  const [items, setItems] = useState([]);

  const handleInput = (e)=>{
      e.preventDefault();
      const name = e.target.id;
      var value = e.target.value;
      setUserInput({...userInput, [name] : value});
      console.log(name, value);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();

    const {category, type, date, Ename, amount} = userInput;
    if(userInput){
      setItems([...items, userInput]);
      setUserInput({});
    }
    const res = await fetch("/dashboard", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        category: category,
        type: type,
        date: date,
        Ename: Ename,
        amount: amount,
      })
    });

    if(res.status === 403)
    {
      window.alert("Unable to add data" );
    }
  }

  const handleRemove = (e)=>{
    const UpdatedItems = items.filter( (element, index) => {
      return index != e;
    });
    setItems(UpdatedItems);
  }

  return (
    <div className='Dashboard-bg'>
      <div className='display'>
      <Header />
        <form className='data-input' method='POST'>
          <span className='select-wrapper'>
          <select id="category" name="category" onChange={handleInput}>
            <option value="Recieved">Recieved</option>
            <option value="Payed"> Payed</option>
          </select>
          </span>
          <input type="text" placeholder='Expense Name' id="Ename" name="Ename" onChange={handleInput}/>
          <input type="text" placeholder='Amount' id="amount" name="amount" onChange={handleInput}/>
          <span className='select-wrapper'>
          <select id="type" name="type" onChange={handleInput}>
            <option value="Kiraya">Kiraya</option>
            <option value="Property"> Property</option>
          </select>
          </span>
          <input type="Date" placeholder="Date" id="date" name="date" onChange={handleInput}/>
          <button className='add-trsactn' id="add-transaction" 
            onClick={handleSubmit}
          >Add Transaction</button>
        </form>
        <div>
         <h3 className='history-heading'>Your Previous {items.length} Expenses </h3>
        </div>
        {
            items.map( (userInput, index) => {
              return  (
                <div className='box-wrapper' key={index}>
                  <div className='fields'>
                    <p className='category'>{userInput.category}</p>
                    <p className='type'>{userInput.type}</p>
                    <span className='date'>
                        <p id='day'> {userInput.date}</p>
                    </span>
                  </div>
                  <div className='expense-name'>
                    <p className='name'>{userInput.Ename}</p>
                    <p className='arrow'>➡️</p>
                    <p className='amount'>{userInput.amount}</p>
                    <button className='remove-btn' onClick={()=> handleRemove(index)}>❌</button>
                  </div>
                </div>
              )
            })  
        }
      </div>
    </div>
  )
}

export default Dashboard

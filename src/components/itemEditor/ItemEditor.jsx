import React from 'react'

function ItemEditor(props) {

 
    
        // this.state = {
        //   message: "",
        //   items: []
        // }

  return (
    
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{/* Add your dynamic table rows here */}</tbody>
          </table>

          <hr/>
      <input type="text" />
      <button>
        Add Item
      </button>
        </div> 
      
  )


  // updateMessage(event) {
  //   this.setState({
  //     message: event.target.value
  //   });
  }


export default ItemEditor
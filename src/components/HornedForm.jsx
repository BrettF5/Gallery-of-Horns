import Form from 'react-bootstrap/Form';

// Define the HornFormed component
 function HornFormed(props) {
    // Define the handleChange function
    const handleChange = (event) => {
      // Call the onSelect prop and pass the selected value
      props.onSelect(event.target.value);
    };
  
    // Return JSX for the component
    return (
      <div>
        <h2>Select how many horns you want your beast to have</h2>
        <Form.Select onChange={handleChange}>
          <option value='All'>All</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='100'>100</option>
        </Form.Select>
      </div>
    );
  }
  
  export default HornFormed;


//   function SelectBasicExample() {
//     return (
//       <Form.Select aria-label="Default select example">
//         <option>Open this select menu</option>
//         <option value="1">One</option>
//         <option value="2">Two</option>
//         <option value="3">Three</option>
//       </Form.Select>
//     );
//   }
  
//   export default SelectBasicExample;
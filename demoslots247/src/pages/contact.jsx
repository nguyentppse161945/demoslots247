import React from 'react'
import { Icon, Container, TextInput, Select, Textarea, Button  } from 'react-materialize'


const Contact = () => {

    const handleSubmit =(e)=> {
        e.preventDefault()
      }
    
  return (
    <Container>
        <h3>Contact us</h3>
        <form onSubmit={handleSubmit}>
            < TextInput id="TextInput-38" label="Your Name" />
            < TextInput id="TextInput-39" label="Your Phone"/>
            < TextInput email id ="TextInput-41" label="Email" validate />
            <Select id="Select-46" multiple={false} onChange={function noRefCheck(){}} value="">
            <option disabled value="">
                Choose your favourite nation
            </option>
            <option>
                England
            </option>
            <option value="2">
                 France
            </option>
            <option value="3">
                Spain
            </option>
            </ Select>
            <Textarea icon={<Icon></Icon>} id="Textarea-28" label="Your content"/>
            <Button>Submit</Button>
        </form>
        </Container>
  )
}

export default Contact
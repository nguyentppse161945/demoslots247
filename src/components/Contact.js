import { useFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Container,
} from '@material-ui/core';
import { Typography } from '@material-ui/core';
const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: 0,
      message: '',
      agree: false,
    },
    onSubmit: (values)=>{
      alert(JSON.stringify(formik.values))
    },
//Convert to JSON string and show in alert box.

    validationSchema: Yup.object({
      name: Yup.string().required('Required.').min(2, 'Must be 2 characters or more'),
      email: Yup.string().required('Required.').email('Invalid email'),
      phone: Yup.number().integer().typeError('Please enter a valid number'),
      program: Yup.number().integer().typeError('Please select a program.'),
      message: Yup.string().required('Required.').min(10, 'Must be 10 characters or more'),
      agree: Yup.boolean().oneOf([true], 'The terms and conditions must be accepted.'),
    }),
  });

  return (
    <Container>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <TextField
            label="Name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
          {formik.errors.name && (<Typography variant="caption" color="red">{formik.errors.name}</Typography>)}
        </div>

        <div className="">
          <TextField
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
          {formik.errors.email && (<Typography variant="caption" color="red">{formik.errors.email}</Typography>)}
        </div>

        <div className="">
          <TextField
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.touched.phone && formik.errors.phone && <div>{formik.errors.phone}</div>}
          {formik.errors.phone && (<Typography variant="caption" color="red">{formik.errors.phone}</Typography>)}
        </div>

        <div className="">
          <FormControl className="w-100">
            <InputLabel id="program-label">Program of Study</InputLabel>
            <Select
              labelId="program-label"
              id="program"
              name="program"
              value={formik.values.program}
              onChange={formik.handleChange}
              className="form-control"
            >
              <MenuItem value={0}>
                <em>Please select</em>
              </MenuItem>
              <MenuItem value={1}>Software Engineering</MenuItem>
              <MenuItem value={2}>Information System</MenuItem>
              <MenuItem value={3}>Information Assurance</MenuItem>
              <MenuItem value={4}>Internet of Things</MenuItem>
              <MenuItem value={5}>Artificial Intelligence</MenuItem>
              <MenuItem value={6}>Digital Art & Design</MenuItem>
            </Select>
          </FormControl>
          {formik.touched.program && formik.errors.program && <div>{formik.errors.program}</div>}
          {formik.errors.program && (<Typography variant="caption" color="red">{formik.errors.program}</Typography>)}
        </div>

        <div className="">
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="form-control"
          />
          {formik.touched.message && formik.errors.message && <div>{formik.errors.message}</div>}
          {formik.errors.message && (<Typography variant="caption" color="red">{formik.errors.message}</Typography>)}
        </div>

        <div className="">
          <FormControlLabel
            control={<Switch />}
            label="Agree to terms and conditions."
            name="agree"
            value={formik.values.agree}
            onClick={formik.handleChange}
          />
          {formik.touched.agree && formik.errors.agree && <div>{formik.errors.agree}</div>}
          {formik.errors.agree && (<Typography variant="caption" color="red">{formik.errors.agree}</Typography>)}
        </div>

        <Button type="submit" variant="contained" color="primary" className="btn btn-primary">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;

import React, { Component } from "react";
import { Formik } from "formik";
import withStyles from "@material-ui/core/styles/withStyles";
import { Form } from "./form";
import Paper from "@material-ui/core/Paper";
import * as Yup from "yup";
import { Query, Mutation } from '@apollo/react-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

export const getUsersQuery = gql`
  {
    getUsers {
      name
      email
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($userInput: CreateUserInput) {
    addUser(userInput: $userInput) {
      id
    }
  }
`;

const styles = theme => ({
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
      .spacing.unit * 5}px`
  },
  container: {
    maxWidth: "200px"
  }
});

const phoneRegExp = /^(\([0-9]{3}\))[0-9]{3}-[0-9]{4}/;

const validationSchema = Yup.object({
  name: Yup.string("Enter a name").required("Name is required"),
  email: Yup.string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phonenumber: Yup.string("Enter your phone number")
    .matches(phoneRegExp, "Enter a valid phone number")
    .length(13, "Phone number is not valid")
    .required("Phone number is required"),
  address: Yup.string("Enter your address")
    .required("Address is required"),
  zipcode: Yup.number("Enter your zip code")
    .required("Zip Code is required"),
});

const Todos = () => (
  <Query query={getUsersQuery}>
  {({ loading, error, data }) => {            
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return data.getUsers.map(({ name, email }) => {            
      return (<li>{name} - {email}</li>)
    }); }}
  </Query>
);

const InputForm = (props) => {

  const [addUser] = useMutation(ADD_USER);
    const classes = props;
    const values = { name: "", email: "", phonenumber: "", address: "", zipcode: "" };

    return (
      <React.Fragment>
        <div className={classes.container} style={{"width": "400px", "margin-left": "auto", "margin-right": "auto"}}>
          <Paper elevation={1} className={classes.paper}>
            <h1>Sign up</h1>
            <Formik
              render={props => <Form {...props} />}
              initialValues={values}
              validationSchema={validationSchema}
              onSubmit={e => {
                console.log(e);
                addUser({ variables: {userInput: e} });
              }}
            />
          </Paper>
        </div>
        {/* <ul>
          <Todos />
        </ul> */}
       </React.Fragment>
    );
}

export default withStyles(styles)(InputForm);

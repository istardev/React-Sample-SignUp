import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import FileUploadComponent from './fileupload';

export const Form = props => {
	const {
		values: { name, email, phonenumber, address, zipcode},
		errors,
		touched,
		handleSubmit,
		handleChange,
		isValid,
		setFieldTouched
	} = props;
	console.table(props);

	const change = (name, e) => {
		e.persist();
		handleChange(e);
		setFieldTouched(name, true, false);
	};
	return (
		<form onSubmit={handleSubmit}>
			<TextField
				name="name"
				helperText={touched.name ? errors.name : ""}
				error={Boolean(errors.name)}
				label="Name"
				value={name}
				onChange={handleChange}
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<NameIcon />
						</InputAdornment>
					)
				}}
			/>
			{/* <div>{Boolean(errors.name) ? errors.name : ""}</div> */}
			<TextField
				name="email"
				helperText={touched.email ? errors.email : ""}
				error={Boolean(errors.email)}
				label="Email"
				fullWidth
				value={email}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<EmailIcon />
						</InputAdornment>
					)
				}}
			/>
			{/* <div>{Boolean(errors.email) ? errors.email : ""}</div> */}
			<TextField
				name="phonenumber"
				helperText={touched.phonenumber ? errors.phonenumber : ""}
				error={Boolean(errors.phonenumber)}
				label="Phone Number"
				fullWidth
				value={phonenumber}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<PhoneIcon />
						</InputAdornment>
					)
				}}
			/>
			{/* <div>{errors.phoneNumber}</div> */}
			<TextField
				name="address"
				helperText={touched.address ? errors.address : ""}
				error={Boolean(errors.address)}
				label="Address"
				fullWidth
				value={address}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<HomeIcon />
						</InputAdornment>
					)
				}}
			/>
			{/* <div>{errors.address}</div> */}
            <TextField
				name="zipcode"
				helperText={touched.zipcode ? errors.zipcode : ""}
				error={Boolean(errors.zipcode)}
				label="ZipCode"
				fullWidth
				value={zipcode}
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start" />
					)
				}}
			/>
			{/* <div>{errors.zipCode}</div> */}
            <FileUploadComponent />
            <hr />
			<Button
				type="submit"
				variant="contained"
				color="primary"
				disabled={!isValid}
			>
				Submit
			</Button>
            <hr />
		</form>
	);
};

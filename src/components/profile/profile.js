import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MuiPhoneNumber from "material-ui-phone-number";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { countries } from "../../utils";

import { connect } from "react-redux";
import { updateUserProfile } from "../../store/actions/userProfileActions";

import PaperWrapper from "../paper-wrapper/paper-wrapper";

function Profile(props) {
  const { profile, auth, updateUserProfile } = props;

  const [displayName, setDisplayName] = useState(profile.displayName);
  const [firstName, setFirstName] = useState(profile.firtName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [specialty, setSpecialty] = useState(profile.specialty);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);
  const [country, setCountry] = useState(profile.country || "");
  const [phoneNumber, setPhoneNumber] = useState(profile.phoneNumber || "");

  async function handleUpdatUserProfile(e) {
    e.preventDefault();
    updateUserProfile({ displayName, email, password, country, phoneNumber });
  }

  function handlePhoneChange(value) {
    if (value) {
      setPhoneNumber(value);
    }
  }

  console.log(phoneNumber);

  return (
    <PaperWrapper>
      <Typography align={"left"} variant="h6" gutterBottom>
        Personal Information{" "}
      </Typography>

      <form onSubmit={handleUpdatUserProfile}>
        <TextField
          variant="outlined"
          margin="normal"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          fullWidth
          id="displayName"
          label="Display Name"
          name="text"
        />
        <TextField
          variant="outlined"
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          id="firstName"
          label="First Name"
          name="text"
        />
        <TextField
          variant="outlined"
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          id="lastName"
          label="Last Name"
          name="text"
        />
        <TextField
          variant="outlined"
          margin="normal"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          fullWidth
          id="specialty"
          label="Specialty "
          name="text"
        />
        <TextField
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          id="email"
          label="Email"
          name="text"
          autoComplete="text"
        />
        <TextField
          type="password"
          variant="outlined"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          id="password"
          label="password"
          name="text"
        />

        <Autocomplete
          id="country-select-demo"
          fullWidth
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => <>{option.label}</>}
          inputValue={country}
          onInputChange={(event, newInputValue) => {
            setCountry(newInputValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
              }}
            />
          )}
        />

        <br></br>

        <MuiPhoneNumber
          name="phone"
          variant="outlined"
          label="Phone Number"
          data-cy="user-phone"
          defaultCountry={"us"}
          value={phoneNumber}
          onChange={(value) => handlePhoneChange(value)}
        />

        <br></br>
        <br></br>

        <Button type="submit" fullWidth variant="contained" color="primary">
          Save
        </Button>
      </form>
    </PaperWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateUserProfile: (userProfileData) =>
      dispatch(updateUserProfile(userProfileData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

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
import SimpleTabs from "../tabs/simple-tabs";
import TabPanel from "../tabs/tab-panel";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "0 auto",
    marginTop: "2em",
    display: "block",
  },
}));

function Profile(props) {
  const { profile, auth, updateUserProfile } = props;

  const { personalInfo, clinicInfo } = profile;

  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const [displayName, setDisplayName] = useState(
    personalInfo.displayName || ""
  );
  const [firstName, setFirstName] = useState(personalInfo.firstName || "");
  const [lastName, setLastName] = useState(personalInfo.lastName || "");
  const [specialty, setSpecialty] = useState(personalInfo.specialty || "");
  const [specializedIn, setSpecializedIn] = useState(
    personalInfo.specializedIn || ""
  );
  const [degree, setDegree] = useState(personalInfo.degree || "");
  const [email, setEmail] = useState(personalInfo.email);
  const [password, setPassword] = useState(personalInfo.password);
  const [country, setCountry] = useState(personalInfo.country || "");
  const [phoneNumber, setPhoneNumber] = useState(
    personalInfo.phoneNumber || ""
  );

  // clinic info states
  const [address, setAddress] = useState(clinicInfo.address || "");
  const [contactNumber, setContactNumber] = useState(
    clinicInfo.contactNumber || ""
  );
  const [fees, setFees] = useState(clinicInfo.fees || "");

  async function handleUpdatUserProfile(e) {
    e.preventDefault();
    updateUserProfile(
      {
        displayName,
        firstName,
        lastName,
        email,
        password,
        specialty,
        specializedIn,
        country,
        degree,
        phoneNumber,
      },
      {
        address,
        contactNumber,
        fees,
      }
    );
  }

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <PaperWrapper>
      <form onSubmit={handleUpdatUserProfile}>
        <SimpleTabs handleTabChange={handleTabChange} tab={tab}>
          {/* personal info starts here */}
          <TabPanel value={tab} index={0}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
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
                  label="Password"
                  name="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
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
                  value={specializedIn}
                  onChange={(e) => setSpecializedIn(e.target.value)}
                  fullWidth
                  id="specializedIn"
                  label="Specialized In "
                  name="text"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  fullWidth
                  id="degree"
                  label="Degree"
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
                      margin="normal"
                      {...params}
                      label="Choose a country"
                      variant="outlined"
                      inputProps={{
                        ...params.inputProps,
                      }}
                    />
                  )}
                />


                <MuiPhoneNumber
                  name="phone"
                  margin="normal"
                  variant="outlined"
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"eg"}
                  fullWidth
                  value={phoneNumber}
                  onChange={(value) => {
                    if (value) {
                      setPhoneNumber(value);
                    }
                  }}
                />
              </Grid>
            </Grid>
          </TabPanel>

          {/* clinic info starts here */}
          <TabPanel value={tab} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  id="address"
                  label="Address"
                  name="text"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  value={fees}
                  onChange={(e) => setFees(e.target.value)}
                  fullWidth
                  id="address"
                  label="Fees"
                  name="text"
                />
                <MuiPhoneNumber
                  name="phone"
                  margin="normal"
                  variant="outlined"
                  label="Contact Number"
                  data-cy="user-phone"
                  defaultCountry={"eg"}
                  fullWidth
                  value={contactNumber}
                  onChange={(value) => {
                    if (value) {
                      setContactNumber(value);
                    }
                  }}
                />
              </Grid>
            </Grid>
          </TabPanel>
        </SimpleTabs>

        <Button
          className={classes.btn}
          type="submit"
          variant="contained"
          color="primary"
        >
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
    updateUserProfile: (personaInfo, clinicInfo) =>
      dispatch(updateUserProfile(personaInfo, clinicInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

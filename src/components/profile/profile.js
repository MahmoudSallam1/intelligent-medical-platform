import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import MuiPhoneNumber from "material-ui-phone-number";
import CustomButton from "../custom-button/custom-button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

import Autocomplete from "@material-ui/lab/Autocomplete";

import { countries, specialties } from "../../utils";

import { connect } from "react-redux";
import { updateUserProfile } from "../../store/actions/userProfileActions";

import PaperWrapper from "../paper-wrapper/paper-wrapper";
import SimpleTabs from "../tabs/simple-tabs";
import TabPanel from "../tabs/tab-panel";

import { storage } from "../../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  btn: {
    margin: "0 auto",
    marginTop: "2em",
    display: "block",
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
}));

function Profile(props) {
  
  const { profile, auth, updateUserProfile } = props;

  const { personalInfo, clinicInfo } = profile;
  const classes = useStyles();

  const [tab, setTab] = useState(0);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(personalInfo.url || "");

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

  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  // console.log(props);

  const handleUpdatUserProfile = async (e) => {
    e.preventDefault();
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            setUrl(url);
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
                url,
              },
              {
                address,
                contactNumber,
                fees,
              }
            );
          });
      }
    );
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <PaperWrapper>
      <form onSubmit={handleUpdatUserProfile}>
        <SimpleTabs handleTabChange={handleTabChange} tab={tab}>
          {/* personal info starts here */}
          <TabPanel value={tab} index={0}>
            <Grid
              direction="column"
              justify="center"
              alignItems="center"
              spacing={1}
              container
            >
              <Grid item>
                <Avatar className={classes.large} alt="Remy Sharp" src={url} />
              </Grid>
              <Grid item>
                <Button variant="contained" component="label">
                  Upload Image
                  <input onChange={handleImage} type="file" hidden />
                </Button>
              </Grid>
            </Grid>

            <br></br>

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
                <FormControl margin="normal" fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-speciality-native-simple">
                    Specialty
                  </InputLabel>
                  <Select
                    native
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    label="Choose a country"
                    inputProps={{
                      name: "specilaity",
                      id: "outlined-speciality-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {specialties.map((item, i) => (
                      <option key={item + i} value={item}>
                        {item}
                      </option>
                    ))}
                  </Select>
                </FormControl>

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

                <FormControl margin="normal" fullWidth variant="outlined">
                  <InputLabel htmlFor="outlined-country-native-simple">
                    Choose a country
                  </InputLabel>
                  <Select
                    native
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    label="Choose a country"
                    inputProps={{
                      name: "country",
                      id: "outlined-country-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    {countries.map((country, i) => (
                      <option key={country + i} value={country.label}>
                        {country.label}
                      </option>
                    ))}
                  </Select>
                </FormControl>

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

        <CustomButton
          margin="normal"
          type="submit"
          variant="contained"
          color="primary"
          style={{ margin: "0 auto", marginTop: "2em", display: "block" }}
        >
          Save
        </CustomButton>
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

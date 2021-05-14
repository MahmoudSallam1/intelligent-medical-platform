import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import { updateUserProfile } from "../../store/actions/userProfileActions";

import PaperWrapper from "../paper-wrapper/paper-wrapper";

function Profile(props) {
  const { profile, auth, updateUserProfile } = props;

  const [displayName, setDisplayName] = useState(profile.displayName);
  const [email, setEmail] = useState(profile.email);
  const [password, setPassword] = useState(profile.password);

  async function handleUpdatUserProfile(e) {
    e.preventDefault();
    updateUserProfile({ displayName, email, password });
  }

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

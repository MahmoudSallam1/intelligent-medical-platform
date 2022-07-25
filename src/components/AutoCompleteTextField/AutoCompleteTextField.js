import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

export default function AutoCompleteTextField({
  tagsArray,
  placeholder,
  tags,
  setTags,
}) {

  return (
    <div>
      <Autocomplete
        multiple
        fullWidth
        id="tags-standard"
        options={tagsArray}
        getOptionLabel={(option) => option.name}
        defaultValue={tags}
        onChange={(event, value) => {
          setTags(value);
        }}
        renderInput={(params) => (
          <TextField {...params} variant="filled" placeholder={placeholder} />
        )}
      />
    </div>
  );
}

// import React from "react";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogActions from "@material-ui/core/DialogActions";
// import Button from "@material-ui/core/Button";

// import Autocomplete, {
//   createFilterOptions,
// } from "@material-ui/lab/Autocomplete";

// // import diagnoses from './DiseasesOutput.json'


// const filter = createFilterOptions();

// export default function FreeSoloCreateOptionDialog() {
//   const [value, setValue] = React.useState(null);
//   const [open, toggleOpen] = React.useState(false);

//   const handleClose = () => {
//     setDialogValue({
//       title: "",
//       year: "",
//     });
//     toggleOpen(false);
//   };

//   const [dialogValue, setDialogValue] = React.useState({
//     title: "",
//     year: "",
//   });

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setValue({
//       title: dialogValue.title,
//       year: parseInt(dialogValue.year, 10),
//     });

//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <Autocomplete
//         value={value}
//         onChange={(event, newValue) => {
//           if (typeof newValue === "string") {
//             // timeout to avoid instant validation of the dialog's form.
//             setTimeout(() => {
//               toggleOpen(true);
//               setDialogValue({
//                 title: newValue,
//                 year: "",
//               });
//             });
//           } else if (newValue && newValue.inputValue) {
//             toggleOpen(true);
//             setDialogValue({
//               title: newValue.inputValue,
//               year: "",
//             });
//           } else {
//             setValue(newValue);
//           }
//         }}
//         filterOptions={(options, params) => {
//           const filtered = filter(options, params);

//           if (params.inputValue !== "") {
//             filtered.push({
//               inputValue: params.inputValue,
//               title: `Add "${params.inputValue}"`,
//             });
//           }

//           return filtered;
//         }}
//         id="free-solo-dialog-demo"
//         options={diagnoses}
//         getOptionLabel={(option) => {
//           // e.g value selected with enter, right from the input
//           if (typeof option === "string") {
//             return option;
//           }
//           if (option.inputValue) {
//             return option.inputValue;
//           }
//           return option.name;
//         }}
//         selectOnFocus
//         clearOnBlur
//         handleHomeEndKeys
//         renderOption={(option) => option.name}
//         // style={{ width: 300 }}
//         freeSolo
//         renderInput={(params) => (
//           <TextField {...params} label="Free solo dialog" variant="outlined" />
//         )}
//       />
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <form onSubmit={handleSubmit}>
//           <DialogTitle id="form-dialog-title">Add a new film</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               Did you miss any film in our list? Please, add it!
//             </DialogContentText>
//             <TextField
//               autoFocus
//               margin="dense"
//               id="name"
//               value={dialogValue.title}
//               onChange={(event) =>
//                 setDialogValue({ ...dialogValue, title: event.target.value })
//               }
//               label="title"
//               type="text"
//             />
//             <TextField
//               margin="dense"
//               id="name"
//               value={dialogValue.year}
//               onChange={(event) =>
//                 setDialogValue({ ...dialogValue, year: event.target.value })
//               }
//               label="year"
//               type="number"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button type="submit" color="primary">
//               Add
//             </Button>
//           </DialogActions>
//         </form>
//       </Dialog>
//     </React.Fragment>
//   );
// }

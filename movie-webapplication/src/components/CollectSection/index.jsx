import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./collectsection.css";
import MovieCards from "../MovieCards/index";
import contents from "../content";

const index = () => {
  return (
    <div className="CollectionSection">
      <div className="Collection-Header">
        <div className="Left-Section">
          <b>
            <h1>Collect your favourites</h1>
          </b>
        </div>
        <div className="Right-Section">
          <Box
            sx={{
              width: 600,
              maxWidth: '100%',
              backgroundColor: 'gray',
            }}
          >
            <TextField
              fullWidth
              label="Search title and add to grid"
              id="fullWidth"
              sx={{
                backgroundColor: 'gray', // Gray inside
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // White border
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // White border on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // White border when focused
                  },
                  input: {
                    backgroundColor: 'gray', // Gray background inside the input
                    color: 'white', // White text color
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'white', // White label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'white', // White label color when focused
                },
              }}
            />
          </Box>
        </div>
      </div>
      <hr className="Collection-Breaker" />
      <div className="Collection-Body">
        {contents.map((contents) => (
          <MovieCards
            key={contents.id}
            image={contents.image}
            name={contents.Moviename}
            details={contents.Details}
          />
        ))}
      </div>
    </div>
  );
};

export default index;

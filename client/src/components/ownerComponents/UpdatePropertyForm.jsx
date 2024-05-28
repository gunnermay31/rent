import React, { useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import InfoIcon from "@mui/icons-material/Info";
import BungalowIcon from "@mui/icons-material/Bungalow";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const UpdatePropertyForm = ({
  title,
  description,
  price,
  category,
  area,
  floors,
  facing,
  address,
  isProcessing,
  onSubmit,
}) => {
  const initialFormValues = {
    price,
    description,
    location: address?.location,
    streetName: address?.streetName,
    city: address?.city, // Include city in the initial values
    category,
    area,
    floors,
    facing,
  };
  const [values, setFormValues] = useState(initialFormValues);

  const handleChange = useCallback(
    (e) => {
      setFormValues({ ...values, [e.target.name]: e.target.value });
    },
    [values]
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap flex-col gap-2 ml-5">
        <div className="flex flex-col gap-4 my-2">
          <h5 className="mb-1">
            <InfoIcon /> Initial Details
          </h5>
          <TextField label="Title" color="tertiary" disabled value={title} />
          <TextField
            label="Description"
            multiline
            rows={4}
            color="tertiary"
            placeholder="Description of your property"
            name="description"
            value={values.description}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-4 my-2">
          <h5 className="mb-1">
            <BungalowIcon /> Property Info
          </h5>
          <TextField
            label="Price"
            name="price"
            type="number"
            placeholder="Price"
            value={values.price}
            color="tertiary"
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs.</InputAdornment>
              ),
            }}
          />
          {/* Add other text fields here as needed */}
        </div>
        <div className="flex flex-col gap-4 my-2">
          <h5 className="mb-1">
            <LocationOnIcon /> Address
          </h5>
          <TextField
            label="Location"
            name="location"
            type="text"
            value={values.location}
            onChange={handleChange}
          />
          <TextField
            label="Street Name / Landmark"
            name="streetName"
            type="text"
            value={values.streetName}
            onChange={handleChange}
          />
          <TextField
            label="City"
            name="city"
            type="text"
            value={values.city}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="text-center mt-2">
        <Button
          disabled={isProcessing}
          type="submit"
          variant="contained"
          size="large"
          color="primary"
          sx={{
            color: "white",
            "&:hover": {
              backgroundColor: "primary.dark",
              opacity: [0.9, 0.8, 0.7],
            },
            width: "25%",
          }}
        >
          {isProcessing ? (
            <CircularProgress
              size={26}
              sx={{
                color: "#fff",
              }}
            />
          ) : (
            "Update"
          )}
        </Button>
      </div>
    </form>
  );
};

export default UpdatePropertyForm;

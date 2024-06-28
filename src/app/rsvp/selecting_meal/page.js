"use client"; // Ensure this is at the top of the file

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  FormControlLabel,
  RadioGroup, Radio,
  Select,
  MenuItem,
  InputLabel, OutlinedInput, TextField,
  FormHelperText,
  Checkbox,
  Button
} from '@mui/material';

import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const ResultsPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [meal, setMeal] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [submitError, setSubmitError] = useState(""); // New state for error message

  useEffect(() => {
    // Check if the results query parameter exists
    const resultsParam = searchParams.get('selecting_meal');
    if (resultsParam) {
      const parsedResults = JSON.parse(decodeURIComponent(resultsParam));
      setMeal(parsedResults);
      setErrors(new Array(parsedResults.length).fill({ attending: false, appetizer: false, entree: false }));
    }
  }, [searchParams]);

  const handleChange = (index, data, event) => {
    const newMeal = [...meal];
    newMeal[index][data] = event.target.value === 'true' ? true : event.target.value === 'false' ? false : event.target.value;

    const newErrors = [...errors];
    if (data === 'attending' && event.target.value !== '') {
      newErrors[index].attending = false;
    }
    if (data === 'appetizer' && event.target.value !== '') {
      newErrors[index].appetizer = false;
    }
    if (data === 'entree' && event.target.value !== '') {
      newErrors[index].entree = false;
    }
    setErrors(newErrors);

    if (!newMeal[index].attending) {
      newMeal[index].entree = "";
      newMeal[index].appetizer = "";
      newMeal[index].allergies = "";
    }
    setMeal(newMeal);
  };

  const validateForm = () => {
    const newErrors = meal.map((m) => {
      return {
        attending: m.attending === null,
        appetizer: m.attending && !m.appetizer,
        entree: m.attending && !m.entree,
      };
    });
    setErrors(newErrors);
    return newErrors.every((error) => !error.attending && !error.appetizer && !error.entree);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      console.error('Form validation failed');
      return;
    }
    try {
      const response = await fetch('/api/updateMeal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meal }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log(result.message);
        setSubmitError(""); 
        router.push(`/rsvp/confirmation?meal=${encodeURIComponent(JSON.stringify(meal))}`);
      } else {
        console.error(result.message);
        setSubmitError(result.message); 
      }
    } catch (error) {
      console.error('Failed to submit form', error);
      setSubmitError('Failed to submit form: ' + error.message); 
    }
  };

  const appetizerChoices = [
    { key: "salad", label: "Salad" },
    { key: "boo", label: "Boo" },
    { key: "water", label: "Water" },
  ];

  const entreeChoices = [
    { key: "meat", label: "Meat" },
    { key: "fish", label: "Fish" },
    { key: "veggie", label: "Veggie" },
  ];

  const radioBtnStyle = {
    color: 'white',
    '&.Mui-checked': { color: 'white' },
    '& .MuiSvgIcon-root': { fontSize: 28 },
  };

  const boxStyle = {
    '& .MuiInputBase-root': {
      color: 'white',
      padding: '10px 14px',
    },
    '& .MuiSelect-select': {
      color: 'white',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white !important',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white',
    },
  };

  const labelStyles = {
    color: 'white',
    '&.Mui-focused': {
      color: 'white',
    },
    '&.MuiInputLabel-shrink': {
      color: 'white',
    },
    '&:not(.MuiInputLabel-shrink)': {
      transform: 'translate(0px, -4px)',
    },
  };

  const errorColor = { color: '#ff5331' }
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-black w-full grid justify-items-center z-10">
        <div className="md:max-w-screen-sm w-full z-10 grid mt-28 p-6">
          <div className="flex-row my-auto text-white overflow-hidden max-w-screen-md">
            <h1 className="display exception mb-4">
              RSVP Meal
            </h1>
            <form onSubmit={handleSubmit}>
              {meal.length > 0 ? (
                <div>
                  {meal.map((result, index) => (
                    <div className="my-8 " key={index}>
                      <div className="title">
                        {result.name.split(' ')[0].charAt(0).toUpperCase() + result.name.split(' ')[0].slice(1)}'s choice:
                      </div>

                      {errors[index].attending && <FormHelperText error>Please select attendence.</FormHelperText>}
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        row
                        defaultValue="false"
                        name="radio-buttons-group"
                        className="my-4"
                        value={meal[index].attending}
                        onChange={(event) => handleChange(index, "attending", event)}
                      >
                        <FormControlLabel value={true} control={<Radio sx={radioBtnStyle} />} label="Attending" />
                        <FormControlLabel value={false} control={<Radio sx={radioBtnStyle} />} label="Not Attending" />
                      </RadioGroup>

                      {meal[index].attending && (
                        <div>
                          <InputLabel id="appetizer-label" sx={labelStyles} error={errors[index].appetizer}>Appetizer</InputLabel>
                          <Select
                            labelId="appetizer-label"
                            id={"appetizer" + index}
                            value={meal[index].appetizer}
                            label="Appetizer"
                            sx={boxStyle}
                            className="w-full"
                            input={<OutlinedInput />}
                            onChange={(event) => handleChange(index, 'appetizer', event)}
                            displayEmpty
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return <em style={{ color: 'white' }}>Select an appetizer</em>;
                              }
                              return meal[index].appetizer;
                            }}
                            error={errors[index].appetizer}
                          >
                            {appetizerChoices.map((food) => (
                              <MenuItem key={food.key} value={food.key}> {food.label}</MenuItem>
                            ))}
                          </Select>
                          {errors[index].appetizer && <FormHelperText error>Select an appetizer</FormHelperText>}

                          <InputLabel className="mt-8" id="entree-label" sx={labelStyles} error={errors[index].entree}>Entree</InputLabel>
                          <Select
                            labelId="entree-label"
                            id={"entree" + index}
                            value={meal[index].entree}
                            label="entree"
                            sx={boxStyle}
                            className="w-full"
                            input={<OutlinedInput />}
                            onChange={(event) => handleChange(index, "entree", event)}
                            displayEmpty
                            renderValue={(selected) => {
                              if (selected.length === 0) {
                                return <em style={{ color: 'white' }}>Select an entree</em>;
                              }
                              return meal[index].entree;
                            }}
                            error={errors[index].entree}
                          >
                            {entreeChoices.map((food) => (
                              <MenuItem key={food.key} value={food.key}> {food.label}</MenuItem>
                            ))}
                          </Select>
                          {errors[index].entree && <FormHelperText error>Select an entree</FormHelperText>}

                          <div className="py-8">
                            <InputLabel htmlFor="allergies" sx={labelStyles}>
                              Allergies
                            </InputLabel>
                            <TextField
                              variant="outlined"
                              labelid="allergies"
                              label=""
                              defaultValue=""
                              sx={boxStyle}
                              fullWidth
                              multiline
                              rows={3}
                              onChange={(event) => handleChange(index, 'allergies', event)}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p>No matching guests found.</p>
              )}
              <div className="mt-24 mb-4">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isChecked}
                      onChange={(event) => setIsChecked(event.target.checked)}
                      sx={{
                        color: 'white',
                        '&.Mui-checked': {
                          color: 'white',
                        },
                      }}
                    />
                  }
                  label="I acknowledge that the form CANNOT be changed after submission."
                  sx={{ color: 'white' }}
                />
              </div>

              <Button type="submit" className="text-center button mb-8" sx={{
                backgroundColor: isChecked ? 'white' : 'grey',
                color: isChecked ? 'black' : 'darkgrey',
                '&.Mui-disabled': {
                  opacity: '50%',
                },
              }} disabled={!isChecked}>Submit</Button>

              {submitError && (
                <div style={{ color: 'red', marginTop: '20px' }}>
                  {submitError}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ResultsPage;
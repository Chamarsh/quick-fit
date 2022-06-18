import React from 'react'
import { Link } from 'react-router-dom';
import { Stack, Button, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy loading" />
        <Stack direction="row">
            <Button
                sx={{ ml: "21px", 
                    color: "#fff", 
                    background: '#ffa9a9', 
                    fontSize: '14px', 
                    borderRadius: '20px', 
                    textTransform: 'capitalize'}}>
                {exercise.bodyPart}
            </Button>
            <Button
                sx={{ ml: "21px", 
                    color: "#fff", 
                    background: '#ffc757', 
                    fontSize: '14px', 
                    borderRadius: '20px', 
                    textTransform: 'capitalize'}}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography 
            color="#000"
            textTransform="capitalize"
            ml="21px"
            fontWeight="bold"
            fontSize="22px"
            mt="11px"
            mb="10px">
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard
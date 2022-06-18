import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import { Box, Stack, Typography } from '@mui/material';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mt={10}    mb={5}>
        Similar <span style={{color: '#ff2625'}}>Muscle</span> Exercises
      </Typography>
      <Stack direcion="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} />
         : <Loader />}
      </Stack>
      <Typography variant="h3" mt={10} mb={5}>
        Similar <span style={{color: '#ff2625'}}>Equipment</span> Exercises
      </Typography>
      <Stack direcion="row" sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} />
         : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
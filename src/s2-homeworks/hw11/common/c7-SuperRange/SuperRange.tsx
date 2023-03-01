import React from 'react'
import {Slider, SliderProps, useTheme} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  const theme = useTheme()
    return (
        <Slider
            sx={{
              width: 147,
              color: theme.palette.secondary.main,
              '& .MuiSlider-thumb' : {
                width: 20,
                height: 20,
                backgroundColor: theme.palette.secondary.main,
                border: '6px solid white',
                borderRadius: '50%',
                outline: `1px solid ${theme.palette.secondary.main}`
              },
              '& .MuiSlider-rail': {
                backgroundColor: theme.palette.secondary.light
              }// стили для слайдера // пишет студент
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange

import { Box, TableCell, Typography } from '@mui/material'
import React from 'react'

const CustomCell = ({ info, llave }) => {
    return (
        <TableCell sx={{
            padding: "30px",
            lineHeight: "30px"
        }}>
            {llave === "estado" ? (
                <Box sx={{
                    backgroundColor: statesArray.find(item => item.state === info).backgroundColor,
                    borderRadius: "8px",
                    maxWidth: "100px",
                    minWidth: " 50px"


                }}>
                    <Typography sx={{
                        color: statesArray.find(item => item.state === info).color,
                        textAlign: 'center',
                        /* fontFamily: "bebas-neue " */
                    }}>
                        {info}
                    </Typography>
                </Box>
            ) : (
                <Typography sx={{
                    color: "white",
                    /* fontFamily: "bebas-neue " */
                }}>
                    {info}
                </Typography>
            )}
        </TableCell>

    )
}

export default CustomCell

const statesArray = [
    {
        state: "Activo",
        backgroundColor: "#BAFFD6",
        color: "#106633"
    },
    {
        state: "En Curso",
        backgroundColor: "#C7DAFF",
        color: "#4B576D"
    },
    {
        state: "Terminado",
        backgroundColor: "#FFD5D8",
        color: "#CC0000"
    },
];
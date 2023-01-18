import { TableCell, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const CustomTableHeader = ({ headers }) => {
    return (
        <TableHead >
            <TableRow sx={{
                backgroundColor: "rgba(0,0,0,0.8)",
            }}>
                {headers.map(header => (
                    <TableCell>
                        <Typography
                            color="white"
                            variant="h5"
                        >
                            {header}
                        </Typography>
                    </TableCell>

                ))}
            </TableRow>
        </TableHead>
    )
}

export default CustomTableHeader
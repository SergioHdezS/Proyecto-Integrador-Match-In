import { TableRow } from '@mui/material'
import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomCell from './CustomCell'

const CustomTableRow = ({ infoUser }) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/post", {}, [navigate]));
    return (
        <TableRow
            onClick={handleOnClick}
            hover
            sx={{
                backgroundColor: "rgba(0,0,0,0.5)",
                cursor: "pointer"
            }}>
            {Object.keys(infoUser).map((llave) => <CustomCell info={infoUser[llave]} llave={llave} />)}
        </TableRow>
    )
}

export default CustomTableRow


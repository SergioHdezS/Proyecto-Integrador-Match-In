import { Card, Table, TableBody, TableContainer } from '@mui/material'
import React from 'react'
import CustomTableHeader from './components/CustomTableHeader'
import CustomTableRow from './components/CustomTableRow'

const CustomTable = ({ users }) => {
    return (
        <Card id="Carta" sx={{
            backgroundColor: "transparent",
            margin: 4,
        }}>
            <TableContainer>
                <Table >
                    <CustomTableHeader headers={["Usuario", "Fecha", "Lugar", "Disciplina", "Estado"]} />
                    <TableBody>
                        {users.map(user => (
                            <CustomTableRow infoUser={user}></CustomTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default CustomTable
import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Link,
    CircularProgress
} from '@mui/material';
import Typography from '@mui/material/Typography';
import SearchBar from './SearchBar';

const columns = [
  { id: 'name', label: 'Name', minWidth: 150 },
  { id: 'doi', label: 'DOI', minWidth: 100 },
];

const PsetTable = ({data, loading}) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(data);
    }, [data])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const searchFilter = (e) => {
        const searchTerm = e.target.value;
        let filterSearch = data.filter((object) => {
            return searchTerm.toLowerCase() === ''
                ? object
                : object.name.toLowerCase().includes(searchTerm);
        });
        setFilteredData(filterSearch);
        setPage(0);
    }

    return (
        <div>
            {(loading) ? (
                <CircularProgress />
            ) : (
                <Paper sx={{ width: '90%', overflow: 'hidden', margin: "auto" }}>
                    <SearchBar onChange={searchFilter} />
                    <TableContainer sx={{ height: "65vh", width: '90%', margin: "auto" }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                    <Typography variant='h5' textAlign="left">{column.label}</Typography>
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {filteredData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((object) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={object.name}>
                                        {columns.map((column) => {
                                            const value = column.id === "name" ? 
                                                object[column.id] : "https://doi.org/" + object[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {(column.id === "name") ? (
                                                        <Typography textAlign="left">{value}</Typography>
                                                    ) : (
                                                        <Link href={value} underline="hover" target="_blank">
                                                            <Typography textAlign="left">{value}</Typography>
                                                        </Link>
                                                    )}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={filteredData.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        sx={{ width: '90%', margin: "auto" }}
                    />
                </Paper>
            )}
        </div>  
    )
}

export default PsetTable;
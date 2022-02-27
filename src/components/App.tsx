import React, {useState} from 'react';
import {TableCreator} from "./TableCreator";
import {Table} from "./Table";
import {Box, Button, Modal} from "@mui/material";


function App() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <TableCreator/>
                </div>
            </Modal>
            <Button onClick={handleOpen}>Добавить компанию</Button>
            <Table/>
        </div>
    );
}

export default App;

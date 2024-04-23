import { Box, Button, Container, TextField } from "@mui/material"
import { FormEvent, useState } from "react";

export const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return <Container>
        <form onSubmit={handleSubmit}>
            <Box>
                <TextField
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => {
                        setFormData((v) => ({ ...v, username: e.target.value }));
                    }}
                />
            </Box>
            <Box>
                <TextField
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => {
                        setFormData((v) => ({ ...v, email: e.target.value }));
                    }}
                />
            </Box>
            <Box>
                <TextField
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => {
                        setFormData((v) => ({ ...v, password: e.target.value }));
                    }}
                />
            </Box>
            <Button type="submit" variant="contained">Register</Button>
        </form>
    </Container>
}
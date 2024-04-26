import { Button, Container, FormGroup as MuiFormGroup, TextField, styled } from "@mui/material"
import { FormEvent, useState } from "react";
import { RegisterRequest } from "../types/auth";
import { registerUser } from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate ();
    const [formData, setFormData] = useState<RegisterRequest>({
        username: '',
        password: '',
        email: '',
    })

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        registerUser(formData).then(r => {
            login(r);
            navigate('/');
        })
    };

    return <Container>
        <StyledForm onSubmit={handleSubmit}>
            <FormGroup>
                <TextField
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => {
                        setFormData((v) => ({ ...v, username: e.target.value }));
                    }}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    type="text"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => {
                        setFormData((v) => ({ ...v, email: e.target.value }));
                    }}
                />
            </FormGroup>
            <FormGroup>
                <TextField
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => {
                        setFormData((v) => ({ ...v, password: e.target.value }));
                    }}
                />
            </FormGroup>
            <Button type="submit" variant="contained">Register</Button>
        </StyledForm>
    </Container>
}


const StyledForm = styled('form')`
    width: 420px;
    margin: 0 auto;
`

const FormGroup = styled(MuiFormGroup)`
    margin-bottom: 16px;
`
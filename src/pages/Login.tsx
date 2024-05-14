import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { AuthRequest } from "../types/auth";
import { useForm } from "react-hook-form";
import { authUser } from "../services/auth";
import { Box, Button, Container, FormGroup as MuiFormGroup, TextField, Typography, styled } from "@mui/material";

export const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<AuthRequest>({
        mode: 'onChange',
        defaultValues: {
            identifier: '',
            password: '',
        },
    });

    const onSubmit = (data: AuthRequest) => {
        authUser(data).then((r) => {
            login(r);
            navigate('/');
        });
    };

    return (
        <Container>
            <Box display={'flex'} justifyContent={'center'} mb={'24px'}>
                <Typography variant="h3">Добро пожаловать</Typography>
            </Box>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                    <TextField
                        type="text"
                        placeholder="Email"
                        {...register('identifier', {
                            required: 'Введите ваш email',
                        })}
                        error={Boolean(errors.identifier)}
                        helperText={errors.identifier?.message}
                    />
                </FormGroup>
                <FormGroup>
                    <TextField
                        type="password"
                        placeholder="Password"
                        {...register('password', {
                            required: 'Введите ваш пароль',
                        })}
                        error={Boolean(errors.password)}
                        helperText={errors.password?.message}
                    />
                </FormGroup>
                <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                    <Button type="submit" variant="contained">
                        Войти
                    </Button>
                    <Typography display={'flex'} gap={'10px'}>Нет аккаунта?
                        <StyledReg>
                            <Link to={'/auth/register'} >Зарегистрируйтесь</Link>
                        </StyledReg>
                    </Typography>
                </Box>
            </StyledForm>
        </Container>
    );
};

const StyledForm = styled('form')`
    width: 420px;
    margin: 0 auto;
  `;

const FormGroup = styled(MuiFormGroup)`
    margin-bottom: 16px;
  `;

const StyledReg = styled('nav')`
a {
    text-decoration: none;
    color: #00F;
    &: hover {
        text-decoration: underline;
    }
}
`
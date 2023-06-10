import { Button, InputContainer, InputField, InputLabel } from '../../../utils/styles';
import { useForm } from 'react-hook-form';
import { postLoginUser } from '../../../utils/api';
import { useNavigate, Link } from 'react-router-dom';
import { UserCredentialsParams } from '../../../utils/types';

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<UserCredentialsParams>();
    const navigate = useNavigate();

    const onSubmit = async (data: UserCredentialsParams) => {
        try {
            await postLoginUser(data);
            navigate('/conversations');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <form className={`w-1/2`} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email">Email</InputLabel>
                <InputField type="email" id="email" {...register('email', {
                    required: 'Email is required'
                })} />
            </InputContainer>
            <InputContainer>
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" {...register('password', {
                    required: 'Password is required'
                })} />
            </InputContainer>
            <Button>Login</Button>
            <div className={`flex items-center justify-center text-white`}>
                <span>Don't have an account?&nbsp;</span>
                <Link className={`underline`} to={`/register`}>Register</Link>
            </div>
        </form>
    );
};

export default LoginForm;
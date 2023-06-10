import { Button, InputContainer, InputField, InputLabel } from '../../../utils/styles';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { CreateUserParams } from '../../../utils/types';
import { postRegisterUser } from '../../../utils/api';

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<CreateUserParams>();
    console.log(errors);
    const navigate = useNavigate();

    const onSubmit = async (data: CreateUserParams) => {
        console.log(data);
        try {
            await postRegisterUser(data);
            navigate('/conversations');
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <form className={`w-1/2`} onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
                <InputLabel htmlFor="email" >Email</InputLabel>
                <InputField type="email" id="email" {...register('email', {
                    required: 'Email is required'
                })} />
            </InputContainer>
            <section className={`grid grid-cols-2 gap-3 my-3`}>
                <InputContainer>
                    <InputLabel htmlFor="firstName" >First Name</InputLabel>
                    <InputField type="text" id="firstName" {...register('firstName', {
                        required: 'First name is required'
                    })} />
                </InputContainer>
                <InputContainer>
                    <InputLabel htmlFor="lastName">Last Name</InputLabel>
                    <InputField type="text" id="lastName" {...register('lastName', {
                        required: 'Last name is required'
                    })} />
                </InputContainer>
            </section>
            <InputContainer >
                <InputLabel htmlFor="password">Password</InputLabel>
                <InputField type="password" id="password" {...register('password', {
                    required: 'Password is required'
                })} />
            </InputContainer>
            <Button >Create My Account</Button>
            <div className={`flex items-center justify-center text-white`}>
                <span>Already have an account?&nbsp;</span>
                <Link className={`underline`} to={`/login`}>Login</Link>
            </div>
        </form>
    );
};

export default RegisterForm;
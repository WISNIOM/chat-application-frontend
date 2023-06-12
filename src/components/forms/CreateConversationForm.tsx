import { useForm } from 'react-hook-form';
import { InputField, InputContainer, InputLabel, TextField, Button } from '../../utils/styles';

const CreateConversationForm = () => {
    const { handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <section>
                <InputContainer backgroundColor="#161616">
                    <InputLabel htmlFor="recipient">Recipient</InputLabel>
                    <InputField type="text" id="recipient" />
                </InputContainer>
            </section>
            <section>
                <InputContainer backgroundColor="#161616">
                    <InputLabel htmlFor="message">Message (optional)</InputLabel>
                    <TextField id="message" />
                </InputContainer>
            </section>
            <Button onClick={(e) => console.log(e)}>Create Conversation</Button>
        </form>
    );
};

export default CreateConversationForm;
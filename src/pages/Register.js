import { useForm } from '@mantine/form'
import {
  Button,
  Card,
  Divider,
  Stack,
  TextInput,
  Title,
  Anchor,
} from '@mantine/core'
function Register() {
  const registerForm = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(registerForm.values)
  }
  return (
    <div className='flex h-screen justify-center items-center'>
      <Card
        sx={{
          width: 400,
        }}
        shadow='lg'
        withBorder
      >
        <form action='' onSubmit={onSubmit}>
          <Title order={2} mb={5}>
            REGISTER
          </Title>
          <Divider variant='dotted' color='gray' />
          <Stack mt={5}>
            <TextInput
              label='Name'
              placeholder='Enter your name'
              name='name'
              {...registerForm.getInputProps('name')}
            />
            <TextInput
              label='Email'
              placeholder='Enter your email'
              name='name'
              {...registerForm.getInputProps('email')}
            />
            <TextInput
              label='Password'
              placeholder='Enter your password'
              name='name'
              {...registerForm.getInputProps('password')}
            />
            <Button type='submit' color='violet'>
              Register
            </Button>
            <Anchor href='/login'>Allready have an account? Login</Anchor>
          </Stack>
        </form>
      </Card>
    </div>
  )
}
export default Register

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
function Login() {
  const loginForm = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (event) => {
    event.preventDefault()
    console.log(loginForm.values)
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
            LOGIN
          </Title>
          <Divider variant='dotted' color='gray' />
          <Stack mt={5}>
            <TextInput
              label='Email'
              placeholder='Enter your email'
              name='name'
              {...loginForm.getInputProps('email')}
            />
            <TextInput
              label='Password'
              placeholder='Enter your password'
              name='name'
              {...loginForm.getInputProps('password')}
            />
            <Button type='submit' color='violet'>
              Login
            </Button>
            <Anchor href='/register'>Don't have an account? Register</Anchor>
          </Stack>
        </form>
      </Card>
    </div>
  )
}
export default Login

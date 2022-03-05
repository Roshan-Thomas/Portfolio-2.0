/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container, Box, Label, Input, Textarea, Button } from 'theme-ui';
import SectionHeader from '../components/section-header';

export default function ContactMe() {
    return (
        <section id="contactme">
            <Container sx={styles.containerBox}>
                <SectionHeader
                    slogan="Get in Touch"
                    title="Have a project, idea or just want to chat? Drop me an email!"
                />
                <Box as="form" onSubmit={(e) => e.preventDefault()}>
                    <Label htmlFor="email">Email</Label>
                    <Input name="email" id="email" mb={3} sx={styles.input} />
                    <Label htmlFor="comment">Comment</Label>
                    <Textarea name="comment" id="comment" rows={6} mb={3} sx={styles.textarea} />
                    <Button>Contact Me</Button>
                </Box>
            </Container>
        </section>
    )   
}

const styles = {
    containerBox: {
    //   display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: ['wrap', null, null, 'nowrap'],
      marginTop: '100px',
      pb: [0, 7, 0, null, 7],
    },
    input: {
        borderColor: 'gray',
        '&:focus': {
          borderColor: 'primary',
          boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
          outline: 'none',
        },
    },
    textarea: {
        borderColor: 'gray',
        '&:focus': {
          borderColor: 'primary',
          boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
          outline: 'none',
        },
    },
}
import { Container, Stack } from "react-bootstrap"

export function HeaderAuth( props: any ){
    return(
        <Container fluid>
            <Stack 
                direction = "vertical"
                className = 'text-center pb-4'
            >
                <h1 className = "fw-bold text-dark"> { props.title } </h1>
                <p className = "text-muted"> { props.description } </p>
            </Stack>
        </Container>
    )
}
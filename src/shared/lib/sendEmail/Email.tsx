import { Html } from '@react-email/html';

interface EmailProps {
    content: Array<string>,
}

export function Email(props: EmailProps) {
    const { content } = props;

    return (
        <Html lang="en">
            {content.map((string, index) => <p key={`email-string${index}`}>{string}</p>)}
        </Html>
    );
}

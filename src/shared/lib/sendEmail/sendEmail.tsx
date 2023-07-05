import { render } from '@react-email/render';
import { SES } from '@aws-sdk/client-ses';
import { Email } from './Email';

interface SendEmailProps {
    header: string,
    content: Array<string>,
}

export const sendEmail = async (props: SendEmailProps) => {
    const {
        header, content
    } = props;

    const ses = new SES({
        region: 'eu-north-1',
        credentials: {
            accessKeyId: 'AKIA2223BYU4PVFMV72O',
            secretAccessKey: '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',
        }
    });


    const emailHtml = render(<Email content={content} />);

    const params = {
        Source: 'connection.babak@gmail.com',
        Destination: {
            ToAddresses: ['connection.babak@gmail.com'],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: emailHtml,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: header,
            },
        },
    };

    await ses.sendEmail(params);
};
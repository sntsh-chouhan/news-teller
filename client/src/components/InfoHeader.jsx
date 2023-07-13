import {Box , Typography, styled} from '@mui/material';

const Container = styled(Box)`
    background :#03a9f4;
    color: #fff;
    display: flex;
    align-items: center;
`;

const Text = styled(Typography)`
    font-size: 20px;
    font-weight : 300;
    margin : auto;
    height: 30px;
`

const InfoHeader =()=>{
    return (
        <Container>
            <Text>
                we are catching up on this page please be humble
            </Text>
        </Container>
    )
}

export default InfoHeader;
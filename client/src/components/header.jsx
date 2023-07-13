import {AppBar, Toolbar, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';
import logo from '../images/logo.png';

const StyledHeader = styled(AppBar)`
    background : #039adc;
    height : 70px;
    
`;

const MenuIcon = styled(Menu)`
    height : 200%;
    // color : black;
`;

const Image= styled('img')({
    height: '55px',
    margin : 'auto',
    paddingRight: 50
    
})

const Header = ()=>{


    return(
        <StyledHeader position='static'>
            <Toolbar>
                <MenuIcon/>
                <Image src={logo} alt='logo'/>
            </Toolbar>
        </StyledHeader>
    )
}

export default Header;
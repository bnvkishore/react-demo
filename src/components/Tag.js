import { styled } from '@mui/system';

const StyledTag = styled('span')(({ theme }) => ({
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(2, 1),
    background: theme.palette.secondary.main,
    margin: theme.spacing(2, 2, 2, 0),
    display: 'inline-flex',
    alignItems: 'center',
    color: theme.palette.secondary.dark
}));

const Tag = ({text, icon:Icon}) => (
    <StyledTag>{text} <Icon /></StyledTag>
)
export default Tag;
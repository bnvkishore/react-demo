import React, {useState} from 'react';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from '@mui/system';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: 'none',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
    },
    width: '40%',
    marginBottom: theme.spacing(5),
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowDropUpIcon sx={{ color: '#FFFFFF' }} />}
    {...props}
  />
))(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#FFFFFF',
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const ExpansionPanel = (props) => {
    const { children, title } = props;
    const [expanded, setExpanded] = useState(title)
    const changeHandler = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded? panel : false)
    }
    return (
        <Accordion expanded={expanded === title} onChange={changeHandler(title)}>
            <AccordionSummary>
                <div>{title}</div>
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </Accordion>
    )
}

export default ExpansionPanel;
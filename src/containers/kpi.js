import { useContext } from 'react';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';

import Tag from "../components/Tag";
import ExpansionPanel from "../components/ExpansionPanel";
import KPIContext from '../context';

const StyledDiv = styled('div')(({ theme }) => ({
    '.title': {
        marginTop: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: theme.spacing(3),
        lineHeight: theme.spacing(3.75),
    },
    '.selection-section': {
        marginTop: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    }
}));

function KPI() {
    // const [expanded, setExpanded] = useState('sales')
    // const changeHandler = (panel) => (event, newExpanded) => {
    //     setExpanded(newExpanded? panel : false)
    // }
    const data = useContext(KPIContext);
    return (
        <StyledDiv>
            <div className='title'>
                Please select KPIs that you want this person to fulfill:
            </div>
            <div className='selection-section'>
                {data && data.map((item, index) => (
                    <ExpansionPanel key={`panel-${index}`} title={item.title}>
                        {item.tags && item.tags.map((tagItem, index) => (
                            <Tag key={`tagItem-${index}` } text={tagItem} icon={ AddIcon} />
                        ))}
                    </ExpansionPanel>
                ))}
                {/* <ExpansionPanel title='Sales'>
                    <Tag text="Sales Target" icon={ AddIcon} />
                    <Tag text="Sales Growth" icon={ AddIcon}/>
                    <Tag text="Revenue" icon={AddIcon}/>
                </ExpansionPanel>
                <ExpansionPanel title='Marketing'>
                    <Tag text="Sales Target" icon={ AddIcon} />
                    <Tag text="Sales Growth" icon={ AddIcon}/>
                    <Tag text="Revenue" icon={AddIcon}/>
                </ExpansionPanel>
                <ExpansionPanel title='Finance'>
                    <Tag text="Sales Target" icon={ AddIcon} />
                    <Tag text="Sales Growth" icon={ AddIcon}/>
                    <Tag text="Revenue" icon={AddIcon}/>
                </ExpansionPanel>
                <ExpansionPanel title='Development'>
                    <Tag text="Sales Target" icon={ AddIcon} />
                    <Tag text="Sales Growth" icon={ AddIcon}/>
                    <Tag text="Revenue" icon={AddIcon}/>
                </ExpansionPanel>
                <ExpansionPanel title='Data'>
                    <Tag text="Sales Target" icon={ AddIcon} />
                    <Tag text="Sales Growth" icon={ AddIcon}/>
                    <Tag text="Revenue" icon={AddIcon}/>
                </ExpansionPanel> */}
                {/* <Accordion expanded={expanded === 'sales'} onChange={changeHandler('sales')}>
                    <AccordionSummary>
                        <div>Sales</div>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Tag text="Sales Target" icon={ AddIcon} />
                        <Tag text="Sales Growth" icon={ AddIcon}/>
                        <Tag text="Revenue" icon={AddIcon}/>
                    </AccordionDetails>
                </Accordion> */}
            </div>
        </StyledDiv>
    )
}
export default KPI;
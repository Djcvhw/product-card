import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import type { Attribute } from '../../store/models/products';

type Props = {
  description: string,
  attributes: Attribute[]
}

const CardAccordion: FC<Props> = ({ description, attributes }) => {
  return <div>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        ><FormatListBulletedIcon sx={{
          marginRight: 1
        }} /> Details</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {attributes.map((attr) => 
          <ListItem key={attr.trait_type}>
            <ListItemText primary={attr.value} secondary={attr.trait_type}/>
          </ListItem>
          )}
        </List>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography
          sx={{
            display: 'flex',
            alignItems: 'center'
          }}
        ><AssignmentIcon sx={{
          marginRight: 1
        }} /> Description</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  </div>
}

export default CardAccordion;
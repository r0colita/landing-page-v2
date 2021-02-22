import React from 'react'
import {styled, Typography, Grid} from '@material-ui/core'
import { theme } from "../../../theme";
import {borderStyle} from "../../../theme/styles";


const StyledGrid = styled(Grid)({
  width: '42.5vw',
  height: '30vw',
  padding: '1.5vw 3vw',
  background: 'transparent',
  boxSizing: 'border-box',
  border: borderStyle
});

const StyledText= styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.25vw',
  fontWeight: 500,
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 2,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
  whiteSpace: 'pre-wrap',
});

const GreenStrong = styled('strong')({
  color: theme.palette.secondary.main
});

const dOrgStory = (
  <div>
    dOrg spawned at the start of 2019 as an <GreenStrong>experiment in distributed organization</GreenStrong>.
    <br/><br/>
    Its genetic code was simple:
    <ol style={{margin: 0}}>
      <li>Build tools that advance Web3</li>
      <li>Use Web3 to operate</li>
      <li>Mutate and propagate</li>
    </ol>
    <br/>
    Since then we&apos;ve pioneered governance, legal, and incentive structures that combine
    the <GreenStrong>freedoms of freelancing</GreenStrong> with the <GreenStrong>power of peer support</GreenStrong>.
  </div>
)

interface Props {
  classes?: string;
}

export const StoryBox: React.FC<Props> = (props: Props) => {

  return (
    <StyledGrid className={props.classes} container direction={'row'} spacing={0} justify={'center'} alignItems={'center'}>
      <Grid item>
        <StyledText>{dOrgStory}</StyledText>
      </Grid>
    </StyledGrid>
  );
}
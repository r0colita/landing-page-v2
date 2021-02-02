import React, {useEffect, useState} from 'react'
import {styled, Typography, Grid, makeStyles} from '@material-ui/core'
import { theme } from "../../../../theme";
import {Client} from "../../../../constants/clients";
import {ChipLarge} from "../../../careers/desktop/profile_popup/ChipLarge";
import {BulletsBox} from "./BulletsBox";


const StyledGrid = styled(Grid)({
  height: `${window.innerHeight - (0.1 * window.innerWidth)}px`,
  width: '42.5vw',
  padding: '3.5vw 2.5vw 0 4.375vw',
  boxSizing: 'border-box',
  position: 'relative'
});

const StyledTitle = styled(Typography)({
  fontFamily: theme.typography.fontFamily,
  fontSize: '3.875vw',
  fontWeight: 'bold',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
  zIndex: 1,
});

const StyledDescription = styled(Typography)({
  margin: '0.9vw 0 2vw 0',
  maxWidth: '35.625vw',
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.938vw',
  fontWeight: 'normal',
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.87,
  letterSpacing: 'normal',
  textAlign: "left",
  color: theme.palette.text.primary,
  zIndex: 1,
});

const ChipContainer = styled(Grid)({
  background: 'transparent',
  boxSizing: 'border-box',
  zIndex: 1,
});

const BulletsContainer = styled(Grid)({
  margin: '0.5vw 0 1.275vw 0',
  background: 'transparent',
  boxSizing: 'border-box',
  zIndex: 1,
});

const useChipStyle = makeStyles({
  chip: {
    marginRight: '0.625vw',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
});

const IllustrationView = styled('div')({
  position: 'relative',
  zIndex: 0
})

interface Props {
  client: Client;
  classes?: string;
}

export const HoverContentBox: React.FC<Props> = (props: Props) => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { name, iconHighlightFilter, textColor, textColorFilter, project } = props.client;

  const styles = makeStyles({
    icon: {
      filter: textColorFilter ? textColorFilter : ''
    },
    text: {
      color: textColor ? textColor : theme.palette.text.primary
    }
  })();
  const chipStyle = useChipStyle();

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const y = document.body.getBoundingClientRect().top;
    const cutoff = window.innerWidth * 0.05;
    setOffset(Math.min(y + cutoff, 0));
  }, [offset, props.client.name])

  return (
    <StyledGrid container spacing={0} direction='column' justify='flex-start' alignItems='flex-start'
      className={props.classes} style={{bottom: offset}}>
      <Grid item>
        <StyledTitle className={styles.text}>{name}</StyledTitle>
      </Grid>
      <Grid item>
        <StyledDescription className={styles.text}>{project.description}</StyledDescription>
      </Grid>
      {project.bullets.length > 0 &&
      <BulletsContainer item>
        <BulletsBox bullets={project.bullets} textColor={textColor} iconColorFilter={iconHighlightFilter ? iconHighlightFilter : textColorFilter} />
      </BulletsContainer>}
      <ChipContainer item container spacing={0} direction='row' justify='flex-start' alignItems='flex-start'>
        {project.technologies.map((technology: string, i: number) => (
          <Grid item key={`technology-${i}`}>
            <ChipLarge classes={chipStyle.chip} text={technology} textColor={textColor}/>
          </Grid>
        ))}
      </ChipContainer>
      <IllustrationView style={project.illustration?.position}>
        {project.illustration?.view}
      </IllustrationView>
    </StyledGrid>
  );
}
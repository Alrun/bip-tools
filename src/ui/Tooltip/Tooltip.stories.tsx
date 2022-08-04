import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import Tooltip from './Tooltip';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import BitcoinIcon from '../../assets/icons/coins/bitcoin.svg';

export default {
    title: 'UI/Tooltip',
    component: Tooltip,
    argTypes: {
        children: { control: { type: null } },
        components: { control: { type: null } },
        componentsProps: { control: { type: null } },
        PopperComponent: { control: { type: null } },
        PopperProps: { control: { type: null } },
        TransitionComponent: { control: { type: null } },
        TransitionProps: { control: { type: null } }
    },
    parameters: {
        controls: {
            exclude: ['items', 'onOpen', 'onClose']
        }
    }
} as ComponentMeta<typeof Tooltip>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            gap: '2rem'
        }}
    >
        {Story()}
    </div>
);

const positionsWrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '1fr',
            gridAutoRows: '1fr',
            gridTemplateColumns: 'repeat(4,minmax(140px,140px))',
            gridTemplateRows: 'repeat(3,minmax(70px,70px))',
            justifyItems: 'center',
            alignItems: 'center'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<any> = ({ children, ...args }) => <Tooltip {...args}>{children}</Tooltip>;

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) =>
    items.map(({ children, ...other }: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx}>
            <Tooltip {...args} {...other}>
                {children}
            </Tooltip>
        </div>
    ));

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    title: 'Tooltip',
    children: <span>Tooltip</span>
};

/**
 * Variants
 */
export const Variants = GroupTemplate.bind({});

Variants.decorators = [wrapperDecorator];

Variants.args = {
    ...Base.args,
    items: [
        {
            children: <span>Default</span>,
            arrow: false
        },
        {
            children: <span>With Arrow</span>,
            arrow: true
        },
        {
            children: <span>Follow Cursor</span>,
            followCursor: true
        },
        {
            children: <span>Interactive</span>,
            arrow: true,
            disableInteractive: false,
            title: (
                <>
                    <Typography variant="h5" sx={{ mb: 2 }}>
                        Tooltip with HTML
                    </Typography>
                    <Typography>Tooltip text with action</Typography>
                    <Box sx={{ textAlign: 'right', mt: 2 }}>
                        <Box sx={{ display: 'inline-flex' }}>
                            <Button variant="text" size="small">
                                Cancel
                            </Button>
                            <Button variant="text" size="small">
                                Ok
                            </Button>
                        </Box>
                    </Box>
                </>
            )
        },
        {
            children: <span>Custom Styles</span>,
            arrow: true,
            open: true,
            title: <img src={BitcoinIcon} alt="Bitcoin" style={{ display: 'block', width: 80, height: 80 }} />,
            componentsProps: {
                tooltip: {
                    sx: { padding: 1.5, borderRadius: '50%' }
                }
            }
        }
    ]
};

Variants.parameters = {
    docs: {
        source: {
            code: `
<Tooltip title="Tooltip">
  <span>Default</span>
</Tooltip>

<Tooltip title="Tooltip" arrow>
  <span>With Arrow</span>
</Tooltip>

<Tooltip title="Tooltip" followCursor>
  <span>Follow Cursor</span>
</Tooltip>

<Tooltip
    title={
        <>
            <Typography sx={{mb: 2}} variant="h5">Tooltip with HTML</Typography>
            <Typography>Tooltip text with action</Typography>
            <Box sx={{mt: 2, textAlign: 'right'}}>
                <Box sx={{display: 'inline-flex'}}>
                    <Button size="small" variant="text">Cancel</Button>
                    <Button size="small" variant="text">Ok</Button>
                </Box>
            </Box>
        </>
    }
    arrow
>
  <span>Interactive</span>
</Tooltip>

<Tooltip
    title={
        <img
            src="static/media/bitcoin.6ddf3a733104c9e9fe2e1d89e452cca5.svg"
            alt="Bitcoin"
            style={{display: 'block', height: 80, width: 80}}
        />
    }
    componentsProps={{
        tooltip: {
          sx: {
            borderRadius: '50%',
            padding: 1.5
          }
        }
      }}

>
    <span>Custom Styles</span>
</Tooltip>`
        }
    }
};

/**
 * Position
 */
export const Position = GroupTemplate.bind({});

Position.decorators = [positionsWrapperDecorator];

Position.args = {
    ...Base.args,
    items: [
        {
            children: <span>Right</span>,
            placement: 'right'
        },
        {
            children: <span>Right Start</span>,
            placement: 'right-start'
        },
        {
            children: <span>Right End</span>,
            placement: 'right-end'
        },
        {
            children: <span>Top</span>,
            placement: 'top'
        },
        {
            children: <span>Top Start</span>,
            placement: 'top-start'
        },
        {
            children: <span>Top End</span>,
            placement: 'top-end'
        },
        {
            children: <span>Bottom</span>,
            placement: 'bottom'
        },
        {
            children: <span>Bottom Start</span>,
            placement: 'bottom-start'
        },
        {
            children: <span>Bottom End</span>,
            placement: 'bottom-end'
        },
        {
            children: <span>Left</span>,
            placement: 'left'
        },
        {
            children: <span>Left Start</span>,
            placement: 'left-start'
        },
        {
            children: <span>Left End</span>,
            placement: 'left-end'
        }
    ]
};

Position.parameters = {
    docs: {
        source: {
            code: `
<Tooltip title="Tooltip" placement="right">
    <span>Right</span>
</Tooltip>

<Tooltip title="Tooltip" placement="right-start">
    <span>Right Start</span>
</Tooltip>

<Tooltip title="Tooltip" placement="right-end">
    <span>Right End</span>
</Tooltip>

<Tooltip title="Tooltip" placement="top">
    <span>Top</span>
</Tooltip>

<Tooltip title="Tooltip" placement="top-start">
    <span>Top Start</span>
</Tooltip>

<Tooltip title="Tooltip" placement="top-end">
    <span>Top End</span>
</Tooltip>

<Tooltip title="Tooltip" placement="end">
    <span>End</span>
</Tooltip>

<Tooltip title="Tooltip" placement="end-start">
    <span>End Start</span>
</Tooltip>

<Tooltip title="Tooltip" placement="end-end">
    <span>End End</span>
</Tooltip>

<Tooltip title="Tooltip" placement="left">
    <span>Left</span>
</Tooltip>

<Tooltip title="Tooltip" placement="left-start">
    <span>Left Start</span>
</Tooltip>

<Tooltip title="Tooltip" placement="left-end">
    <span>Left End</span>
</Tooltip>`
        }
    }
};

/**
 * Transitions
 */
export const Transitions = GroupTemplate.bind({});

Transitions.decorators = [wrapperDecorator];

Transitions.args = {
    ...Base.args,
    items: [
        {
            children: <span>Grow</span>
        },
        {
            children: <span>Fade</span>,
            TransitionComponent: Fade,
            TransitionProps: { timeout: 400 }
        },
        {
            children: <span>Zoom</span>,
            TransitionComponent: Zoom,
            TransitionProps: { timeout: 200 }
        }
    ]
};

Transitions.parameters = {
    docs: {
        source: {
            code: `
<Tooltip title="Tooltip">
    <span>Grow</span>
</Tooltip>

<Tooltip
    title="Tooltip"
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 400 }}
>
    <span>Fade</span>
</Tooltip>

<Tooltip
    title="Tooltip"
    TransitionComponent={Zoom}
    TransitionProps={{ timeout: 200 }}
>
    <span>Zoom</span>
</Tooltip>`
        }
    }
};

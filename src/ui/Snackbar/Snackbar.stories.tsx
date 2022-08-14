import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Box from '@mui/material/Box';
import Snackbar from './Snackbar';
import Button from '../Button/Button';
import { SlideDown, SlideLeft, SlideRight, SlideUp, Grow, Fade } from '../Transitions/Transitions';

export default {
    title: 'UI/Snackbar',
    component: Snackbar,
    argTypes: {
        action: { control: { type: null } },
        AlertProps: { control: { type: null } },
        anchorOrigin: { control: { type: null } },
        autoHideDuration: { control: { type: 'number' } },
        children: { control: { type: null } },
        ClickAwayListenerProps: { control: { type: null } },
        ContentProps: { control: { type: null } },
        key: { control: { type: null } },
        message: { control: { type: 'text' } },
        TransitionComponent: { control: { type: null } },
        transitionDuration: { control: { type: null } },
        TransitionProps: { control: { type: null } }
    },
    parameters: {
        controls: {
            exclude: ['items', 'onClose']
        }
    }
} as ComponentMeta<typeof Snackbar>;

const wrapperDecorator = (Story: any) => (
    <Box
        sx={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: '1fr',
            gridAutoRows: '1fr',
            gridTemplateColumns: 'repeat(3,minmax(140px,140px))',
            gridTemplateRows: 'repeat(2,minmax(50px,50px))',
            alignItems: 'end',
            gap: '0 1rem',
            '& button': {
                width: '100%'
            }
        }}
    >
        {Story()}
    </Box>
);

const BaseTemplate: ComponentStory<any> = ({ buttonText, ...args }) => {
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => setOpen(!open);

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;

        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleToggle}>{buttonText}</Button>

            <Snackbar
                open={open}
                onClose={handleClose}
                AlertProps={{
                    onClose: handleClose
                }}
                {...args}
            />
        </div>
    );
};

const GroupTemplate: ComponentStory<any> = ({ items, ...args }) => {
    const [show, setShow] = React.useState<string[]>([]);

    const handleShow = (message: string) => {
        setShow((prevState) => {
            if (!prevState.includes(message)) return [...prevState, message];

            return prevState;
        });
    };

    const handleClose = (message: string) => {
        setShow((prevState) => prevState.filter((item) => item !== message));
    };

    return items.map(({ message, buttonText, ...other }: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx}>
            <Button onClick={() => handleShow(message)} sx={{ whiteSpace: 'nowrap' }}>
                {buttonText}
            </Button>
            <Snackbar
                message={message}
                open={show.includes(message)}
                onClose={() => handleClose(message)}
                AlertProps={{
                    onClose: () => handleClose(message)
                }}
                {...args}
                {...other}
            />
        </div>
    ));
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    message: 'Default',
    buttonText: 'Toggle Snackbar'
};

Base.parameters = {
    docs: {
        source: {
            code: `
const DefaultSnackbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => setOpen(!open);
    /**
    * @param {React.SyntheticEvent | Event} event
    * @param {string} reason
    */
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;

        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleToggle}>Toggle Snackbar</Button>

            <Snackbar
                message="Default"
                open={open}
                onClose={handleClose}
                AlertProps={{
                    onClose: handleClose
                }}
                {...args}
            />
        </div>
    );
}`
        }
    }
};

/**
 * Placement
 */
export const Placement = GroupTemplate.bind({});

Placement.decorators = [wrapperDecorator];

Placement.args = {
    items: [
        {
            message: 'Snackbar Bottom Left',
            buttonText: 'Bottom Left',
            anchorOrigin: { vertical: 'bottom', horizontal: 'left' }
        },
        {
            message: 'Snackbar Top Left',
            buttonText: 'Top Left',
            anchorOrigin: { vertical: 'top', horizontal: 'left' }
        },
        {
            message: 'Snackbar Bottom Center',
            buttonText: 'Bottom Center',
            anchorOrigin: { vertical: 'bottom', horizontal: 'center' }
        },
        {
            message: 'Snackbar Top Center',
            buttonText: 'Top Center',
            anchorOrigin: { vertical: 'top', horizontal: 'center' }
        },
        {
            message: 'Snackbar Bottom Right',
            buttonText: 'Bottom Right',
            anchorOrigin: { vertical: 'bottom', horizontal: 'right' }
        },
        {
            message: 'Snackbar Top Right',
            buttonText: 'Top Right',
            anchorOrigin: { vertical: 'top', horizontal: 'right' }
        }
    ]
};

Placement.parameters = {
    docs: {
        source: {
            code: `
const PlacementSnackbar = () => {
    const [show, setShow] = React.useState<string[]>([]);

    const handleShow = (message: string) => {
        setShow((prevState) => {
            if (!prevState.includes(message)) return [...prevState, message];

            return prevState;
        });
    };

    const handleClose = (message: string) => {
        setShow((prevState) => prevState.filter((item) => item !== message));
    };

    return (
        <>
            <Button onClick={() => handleShow('Snackbar Bottom Left')}>Bottom Left</Button>
            <Button onClick={() => handleShow('Snackbar Top Left')}>Top Left</Button>
            <Button onClick={() => handleShow('Snackbar Bottom Center')}>Bottom Center</Button>
            <Button onClick={() => handleShow('Snackbar Top Center')}>Top Center</Button>
            <Button onClick={() => handleShow('Snackbar Bottom Right')}>Bottom Right</Button>
            <Button onClick={() => handleShow('Snackbar Top Right')}>Top Right</Button>

            <Snackbar
                message="Snackbar Bottom Left"
                open={show.includes('Snackbar Bottom Left')}
                onClose={() => handleClose('Snackbar Bottom Left')}
                AlertProps={{
                    onClose: () => handleClose('Snackbar Bottom Left')
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            />

            <Snackbar
                message="Snackbar Top Left"
                open={show.includes('Snackbar Top Left')}
                onClose={() => handleClose('Snackbar Top Left')}
                AlertProps={{
                    onClose: () => handleClose('Snackbar Top Left')
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            />

            <Snackbar
                message="Snackbar Bottom Center"
                open={show.includes('Snackbar Bottom Center')}
                onClose={() => handleClose('Snackbar Bottom Center')}
                AlertProps={{
                    onClose: () => handleClose('Snackbar Bottom Center')
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />

            <Snackbar
                message="Snackbar Top Center"
                open={show.includes('Snackbar Top Center')}
                onClose={() => handleClose('Snackbar Top Center')}
                AlertProps={{
                    onClose: () => handleClose('Snackbar Top Center')
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            />

            <Snackbar
                message="Snackbar Bottom Right"
                open={show.includes('Snackbar Bottom Right')}
                onClose={() => handleClose('Snackbar Bottom Right')}
                AlertProps={{
                    onClose: () => handleClose('Snackbar Bottom Right')
                }}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />

            <Snackbar
                message="Snackbar Top Right"
                open={show.includes('Snackbar Top Right')}
                onClose={() => handleClose('Snackbar Top Right')}
                AlertProps={{
                    onClose: () => handleClose('Snackbar Top Right')
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            />
        </>
    )
}`
        }
    }
};

/**
 * Transitions
 */
export const Transitions = GroupTemplate.bind({});

Transitions.decorators = [wrapperDecorator];

Transitions.args = {
    items: [
        {
            message: 'Grow Snackbar',
            buttonText: 'Grow',
            TransitionComponent: Grow
        },
        {
            message: 'Fade Snackbar',
            buttonText: 'Fade',
            TransitionComponent: Fade
        },
        {
            message: 'Slide Up Snackbar',
            buttonText: 'Slide Up',
            TransitionComponent: SlideUp
        },
        {
            message: 'Slide Down Snackbar',
            buttonText: 'Slide Down',
            TransitionComponent: SlideDown
        },
        {
            message: 'Slide Left Snackbar',
            buttonText: 'Slide Left',
            TransitionComponent: SlideLeft
        },
        {
            message: 'Slide Right Snackbar',
            buttonText: 'Slide Right',
            TransitionComponent: SlideRight
        }
    ]
};

Transitions.parameters = {
    docs: {
        source: {
            code: `
const TransitionsSnackbar = () => {
    const [show, setShow] = React.useState<string[]>([]);

    const handleShow = (message: string) => {
        setShow((prevState) => {
            if (!prevState.includes(message)) return [...prevState, message];

            return prevState;
        });
    };

    const handleClose = (message: string) => {
        setShow((prevState) => prevState.filter((item) => item !== message));
    };

    return (
        <>
            <Button onClick={() => handleShow('Grow Snackbar')}>Grow</Button>
            <Button onClick={() => handleShow('Fade Snackbar')}>Fade</Button>
            <Button onClick={() => handleShow('Slide Up Snackbar')}>Slide Up</Button>
            <Button onClick={() => handleShow('Slide Down Snackbar')}>Slide Down</Button>
            <Button onClick={() => handleShow('Slide Left')}>Slide Left</Button>
            <Button onClick={() => handleShow('Slide Right')}>Slide Right</Button>

            <Snackbar
                message="Grow Snackbar"
                open={show.includes('Grow Snackbar')}
                onClose={() => handleClose('Grow Snackbar')}
                AlertProps={{
                    onClose: () => handleClose('Grow Snackbar')
                }}
                TransitionComponent={Grow}
            />

            <Snackbar
                message="Fade Snackbar"
                open={show.includes('Fade Snackbar')}
                onClose={() => handleClose('Fade Snackbar')}
                AlertProps={{
                    onClose: () => handleClose('Fade Snackbar')
                }}
                TransitionComponent={Fade}
            />

            <Snackbar
                message="Slide Up Snackbar"
                open={show.includes('Slide Up Snackbar')}
                onClose={() => handleClose('Slide Up Snackbar')}
                AlertProps={{
                    onClose: () => handleClose('Slide Up Snackbar')
                }}
                TransitionComponent={SlideUp}
            />

            <Snackbar
                message="Slide Down Snackbar"
                open={show.includes('Slide Down Snackbar')}
                onClose={() => handleClose('Slide Down Snackbar')}
                AlertProps={{
                    onClose: () => handleClose('Slide Down Snackbar')
                }}
                TransitionComponent={SlideDown}
            />

            <Snackbar
                message="Slide Left"
                open={show.includes('Slide Left')}
                onClose={() => handleClose('Slide Left')}
                AlertProps={{
                    onClose: () => handleClose('Slide Left')
                }}
                TransitionComponent={SlideLeft}
            />

            <Snackbar
                message="Slide Right"
                open={show.includes('Slide Right')}
                onClose={() => handleClose('Slide Right')}
                AlertProps={{
                    onClose: () => handleClose('Slide Right')
                }}
                TransitionComponent={SlideRight}
            />
        </>
    )
}`
        }
    }
};

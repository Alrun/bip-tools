import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Modal from './Modal';
import Button from '../Button/Button';

export default {
    title: 'UI/Modal',
    component: Modal,
    argTypes: {
        headerProps: { control: { type: null } },
        footer: { control: { type: null } },
        maxWidth: {
            options: ['XS', 'SM', 'MD', 'LG', 'XL', 'False'],
            mapping: {
                XS: 'xs',
                SM: 'sm',
                MD: 'md',
                LG: 'lg',
                XL: 'xl',
                False: false
            }
        },
        PaperComponent: { control: { type: null } },
        PaperProps: { control: { type: null } },
        TransitionComponent: { control: { type: null } },
        transitionDuration: { control: { type: null } },
        TransitionProps: { control: { type: null } },
        onClose: { control: { type: null }, table: { category: 'Events' } },
        onBackdropClick: { control: { type: null }, table: { category: 'Events' } }
    },
    parameters: {
        controls: {
            exclude: ['items', 'buttonText']
        }
    }
} as ComponentMeta<typeof Modal>;

const wrapperDecorator = (Story: any) => (
    <div
        style={{
            display: 'flex',
            gap: '1rem'
        }}
    >
        {Story()}
    </div>
);

const BaseTemplate: ComponentStory<any> = ({ children, open, onClose, buttonText, ...args }) => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <Button onClick={handleShowModal}>{buttonText}</Button>
            <Modal open={showModal} onClose={handleCloseModal} {...args}>
                {children}
            </Modal>
        </div>
    );
};

const GroupTemplate: ComponentStory<any> = ({ items, onClose, ...args }) => {
    const [modal, setModal] = React.useState<string[]>([]);

    const handleShowModal = (idPrefix: string) => {
        setModal((prevState) => {
            if (!prevState.includes(idPrefix)) return [...prevState, idPrefix];

            return prevState;
        });
    };

    const handleCloseModal = (idPrefix: string) => {
        setModal((prevState) => prevState.filter((item) => item !== idPrefix));
    };

    return items.map(({ idPrefix, text, children, buttonText, ...other }: any, idx: number) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={idx}>
            <Button onClick={() => handleShowModal(idPrefix)} sx={{ whiteSpace: 'nowrap' }}>
                {buttonText}
            </Button>
            <Modal
                idPrefix={idPrefix}
                open={modal.includes(idPrefix)}
                onClose={() => handleCloseModal(idPrefix)}
                {...args}
                {...other}
            >
                {children}
            </Modal>
        </div>
    ));
};

/**
 * Base
 */
export const Base = BaseTemplate.bind({});

Base.args = {
    idPrefix: 'base',
    title: 'Modal Title',
    children: 'Modal content',
    buttonText: 'Show Modal'
};

Base.parameters = {
    docs: {
        source: {
            code: `
const BaseModal = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <Button onClick={handleShowModal}>Show Modal</Button>

            <Modal
                idPrefix="base"
                title="Modal Title"
                open={showModal}
                onClose={handleCloseModal}
            >
                Modal content
            </Modal>
        </div>
    )
}`
        }
    }
};

/**
 * With Footer
 */
export const WithFooter = BaseTemplate.bind({});

WithFooter.args = {
    idPrefix: 'with-footer',
    title: 'Modal Title',
    children: 'Modal content',
    footer: (
        <>
            <Button variant="text" color="secondary">
                Cancel
            </Button>
            <Button variant="text" color="secondary" autoFocus>
                OK
            </Button>
        </>
    ),
    buttonText: 'Show Modal With Footer'
};

WithFooter.parameters = {
    docs: {
        source: {
            code: `
const WithFooter = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <Button onClick={handleShowModal}>Show Modal With Footer</Button>

            <Modal
                idPrefix="with-footer"
                title="Modal Title"
                open={showModal}
                onClose={handleCloseModal}
                footer={
                    <>
                        <Button variant="text" color="secondary">Cancel</Button>
                        <Button variant="text" color="secondary">OK</Button>
                    </>
                }
            >
                Modal content
            </Modal>
        </div>
    )
}`
        }
    }
};

/**
 * Fullscreen
 */
export const Fullscreen = BaseTemplate.bind({});

Fullscreen.args = {
    idPrefix: 'fullscreen',
    title: 'Fullscreen Modal Title',
    children: 'Modal content',
    buttonText: 'Show Fullscreen Modal',
    fullScreen: true,
    slide: 'up'
};

Base.parameters = {
    docs: {
        source: {
            code: `
const FullscreenModal = () => {
    const [showModal, setShowModal] = React.useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div>
            <Button onClick={handleShowModal}>Show Fullscreen Modal</Button>

            <Modal
                idPrefix="fullscreen"
                title="Fullscreen Modal Title"
                open={showModal}
                onClose={handleCloseModal}
                fullScreen
                slide="up"
            >
                Modal content
            </Modal>
        </div>
    )
}`
        }
    }
};

/**
 * Scrolling
 */
export const Scrolling = GroupTemplate.bind({});

Scrolling.decorators = [wrapperDecorator];

Scrolling.args = {
    items: [
        {
            idPrefix: 'scroll-paper',
            title: 'Modal Title',
            children: Array(100)
                .fill('')
                // eslint-disable-next-line react/no-array-index-key
                .map((item, idx) => <div key={idx}>Content {idx + 1}</div>),
            buttonText: 'Scroll Paper',
            scroll: 'paper'
        },
        {
            idPrefix: 'scroll-body',
            title: 'Modal Title',
            children: Array(100)
                .fill('')
                // eslint-disable-next-line react/no-array-index-key
                .map((item, idx) => <div key={idx}>Content {idx + 1}</div>),
            buttonText: 'Scroll Body',
            scroll: 'body'
        }
    ]
};

Scrolling.parameters = {
    docs: {
        source: {
            code: `
const ScrollingModals = () => {
    const [modal, setModal] = React.useState<string[]>([]);

    const handleShowModal = (idPrefix: string) => {
        setModal((prevState) => {
            if (!prevState.includes(idPrefix)) return [...prevState, idPrefix];

            return prevState;
        });
    };

    const handleCloseModal = (idPrefix: string) => {
        setModal((prevState) => prevState.filter((item) => item !== idPrefix));
    };

    return (
        <>
            <Button onClick={() => handleShowModal('scroll-paper')}>Scroll Paper</Button>
            <Button onClick={() => handleShowModal('scroll-body')}>Scroll Body</Button>

            <Modal
                idPrefix="scroll-paper"
                title="Modal Title"
                open={modal.includes('scroll-paper')}
                onClose={() => handleCloseModal('scroll-paper')}
            >
                {Array(100).fill('').map((item, idx) => <div key={idx}>Content {idx + 1}</div>)}
            </Modal>

            <Modal
                idPrefix="scroll-body"
                title="Modal Title"
                open={modal.includes('scroll-body')}
                onClose={() => handleCloseModal('scroll-body')}
                scroll="body"
            >
                {Array(100).fill('').map((item, idx) => <div key={idx}>Content {idx + 1}</div>)}
            </Modal>
        </>
    )
}`
        }
    }
};

/**
 * Transition
 */
export const Transition = GroupTemplate.bind({});

Transition.decorators = [wrapperDecorator];

Transition.args = {
    items: [
        {
            idPrefix: 'transition-fade',
            title: 'Fade Modal Title',
            children: 'Modal content',
            buttonText: 'Fade',
            slide: false
        },
        {
            idPrefix: 'transition-slide-up',
            title: 'Slide Up Modal Title',
            children: 'Modal content',
            buttonText: 'Slide Up',
            slide: 'up'
        },
        {
            idPrefix: 'transition-slide-down',
            title: 'Slide Down Modal Title',
            children: 'Modal content',
            buttonText: 'Slide Down',
            slide: 'down'
        },
        {
            idPrefix: 'transition-slide-left',
            title: 'Slide Left Modal Title',
            children: 'Modal content',
            buttonText: 'Slide Left',
            slide: 'left'
        },
        {
            idPrefix: 'transition-slide-right',
            title: 'Slide Right Modal Title',
            children: 'Modal content',
            buttonText: 'Slide Right',
            slide: 'right'
        }
    ]
};

Transition.parameters = {
    docs: {
        source: {
            code: `
const TransitionModals = () => {
    const [modal, setModal] = React.useState<string[]>([]);

    const handleShowModal = (idPrefix: string) => {
        setModal((prevState) => {
            if (!prevState.includes(idPrefix)) return [...prevState, idPrefix];

            return prevState;
        });
    };

    const handleCloseModal = (idPrefix: string) => {
        setModal((prevState) => prevState.filter((item) => item !== idPrefix));
    };

    return (
        <>
            <Button onClick={() => handleShowModal('transition-fade')}>Fade</Button>
            <Button onClick={() => handleShowModal('transition-slide-up')}>Slide Up</Button>
            <Button onClick={() => handleShowModal('transition-slide-down')}>Slide Down</Button>
            <Button onClick={() => handleShowModal('transition-slide-left')}>Slide Left</Button>
            <Button onClick={() => handleShowModal('transition-slide-right')}>Slide Right</Button>

            <Modal
                idPrefix="transition-fade"
                title="Fade Modal Title"
                open={modal.includes('transition-fade')}
                onClose={() => handleCloseModal('transition-fade')}
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="transition-slide-up"
                title="Slide Up Modal Title"
                open={modal.includes('transition-slide-up')}
                onClose={() => handleCloseModal('transition-slide-up')}
                slide="up"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="transition-slide-down"
                title="Slide Down Modal Title"
                open={modal.includes('transition-slide-down')}
                onClose={() => handleCloseModal('transition-slide-down')}
                slide="down"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="transition-slide-left"
                title="Slide Left Modal Title"
                open={modal.includes('transition-slide-left')}
                onClose={() => handleCloseModal('transition-slide-left')}
                slide="left"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="transition-slide-right"
                title="Slide Right Modal Title"
                open={modal.includes('transition-slide-right')}
                onClose={() => handleCloseModal('transition-slide-right')}
                slide="right"
            >
                Modal content
            </Modal>
        </>
    )
}`
        }
    }
};

/**
 * Width
 */
export const Width = GroupTemplate.bind({});

Width.decorators = [wrapperDecorator];

Width.args = {
    items: [
        {
            idPrefix: 'width-xs',
            title: 'Modal Title',
            children: 'Modal content',
            buttonText: 'Max width XS',
            fullWidth: true,
            maxWidth: 'xs'
        },
        {
            idPrefix: 'width-sm',
            title: 'Modal Title',
            children: 'Modal content',
            buttonText: 'Max width SM',
            fullWidth: true,
            maxWidth: 'sm'
        },
        {
            idPrefix: 'width-md',
            title: 'Modal Title',
            children: 'Modal content',
            buttonText: 'Max width MD',
            fullWidth: true,
            maxWidth: 'md'
        },
        {
            idPrefix: 'width-lg',
            title: 'Modal Title',
            children: 'Modal content',
            buttonText: 'Max width XG',
            fullWidth: true,
            maxWidth: 'lg'
        },
        {
            idPrefix: 'width-xl',
            title: 'Modal Title',
            children: 'Modal content',
            buttonText: 'Max width XL',
            fullWidth: true,
            maxWidth: 'xl'
        },
        {
            idPrefix: 'full-width',
            title: 'Modal Title',
            children: 'Modal content',
            buttonText: 'Fullscreen',
            fullWidth: true,
            maxWidth: false
        }
    ]
};

Width.parameters = {
    docs: {
        source: {
            code: `
const WidthModals = () => {
    const [modal, setModal] = React.useState<string[]>([]);

    const handleShowModal = (idPrefix: string) => {
        setModal((prevState) => {
            if (!prevState.includes(idPrefix)) return [...prevState, idPrefix];

            return prevState;
        });
    };

    const handleCloseModal = (idPrefix: string) => {
        setModal((prevState) => prevState.filter((item) => item !== idPrefix));
    };

    return (
        <>
            <Button onClick={() => handleShowModal('width-xs')}>Max width XS</Button>
            <Button onClick={() => handleShowModal('width-sm')}>Max width SM</Button>
            <Button onClick={() => handleShowModal('width-md')}>Max width MD</Button>
            <Button onClick={() => handleShowModal('width-lg')}>Max width LG</Button>
            <Button onClick={() => handleShowModal('width-xl')}>Max width XL</Button>
            <Button onClick={() => handleShowModal('full-width')}>Fullscreen</Button>

            <Modal
                idPrefix="width-xs"
                title="Modal Title"
                open={modal.includes('width-xs')}
                onClose={() => handleCloseModal('width-xs')}
                fullWidth
                maxWidth="xs"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="width-sm"
                title="Modal Title"
                open={modal.includes('width-sm')}
                onClose={() => handleCloseModal('width-sm')}
                fullWidth
                maxWidth="sm"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="width-md"
                title="Modal Title"
                open={modal.includes('width-md')}
                onClose={() => handleCloseModal('width-md')}
                fullWidth
                maxWidth="md"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="width-lg"
                title="Modal Title"
                open={modal.includes('width-lg')}
                onClose={() => handleCloseModal('width-lg')}
                fullWidth
                maxWidth="lg"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="width-xl"
                title="Modal Title"
                open={modal.includes('width-xl')}
                onClose={() => handleCloseModal('width-xl')}
                fullWidth
                maxWidth="xl"
            >
                Modal content
            </Modal>

            <Modal
                idPrefix="width-xs"
                title="Modal Title"
                open={modal.includes('width-xs')}
                onClose={() => handleCloseModal('width-xs')}
                fullWidth
                maxWidth={false}
            >
                Modal content
            </Modal>
        </>
    )
}`
        }
    }
};

import * as React from 'react';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grow from '@mui/material/Grow';
import { createFilterOptions } from '@mui/material/Autocomplete';
import ListSubheader from '@mui/material/ListSubheader';
import { StyledAutocomplete, StyledPopper } from './AutocompleteStyles';
import Input from '../Input/Input';
import Typography from '../Typography/Typography';
import { AutocompleteProps, ListboxComponentProps, PopperComponentProps } from './Autocomplete.d';
import { ArrowDownIcon, CrossIcon } from '../Icons/Icons';

const useResetCache = (data: number, scroll: number) => {
    const ref = React.useRef<VariableSizeList>(null);

    React.useEffect(() => {
        if (ref.current !== null) {
            ref.current.scrollToItem(scroll, 'start');
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);

    return ref;
};

const LISTBOX_PADDING = 8; // px

const PopperComponent = (props: PopperComponentProps) => {
    const { children, ...other } = props;

    return (
        <StyledPopper role={undefined} placement="bottom-start" transition disablePortal={false} {...other}>
            {({ TransitionProps, placement }) => (
                <Grow
                    timeout={{
                        appear: 0,
                        enter: 100,
                        exit: 100
                    }}
                    style={{
                        transformOrigin: placement === 'bottom-start' ? 'top' : 'bottom'
                    }}
                    {...TransitionProps}
                >
                    {children}
                </Grow>
            )}
        </StyledPopper>
    );
};

const renderRow = (props: ListChildComponentProps) => {
    const { data, index, style } = props;
    const dataSet = data[index];
    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING,
        listStyle: 'none'
    };

    if (Object.prototype.hasOwnProperty.call(dataSet, 'group')) {
        return (
            <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
                {dataSet.group}
            </ListSubheader>
        );
    }

    return (
        <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
            {dataSet[1]}
        </Typography>
    );
};

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);

    return <div ref={ref} {...props} {...outerProps} />;
});

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement, any>(
    ({ children, maxItems, ...props }: ListboxComponentProps, ref) => {
        const theme = useTheme();
        const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
        const itemData: React.ReactChild[] = [];

        (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
            itemData.push(item);
            itemData.push(...(item.children || []));
        });

        const itemCount = itemData.length;
        const itemSize = smUp ? 36 : 48;

        const getChildSize = (child: React.ReactChild) => {
            if (Object.prototype.hasOwnProperty.call(child, 'group')) return 48;

            return itemSize;
        };

        const getHeight = () => {
            if (itemCount > maxItems) return maxItems * itemSize;

            return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
        };

        // Index and padding to scroll to selected item
        const scrollTo = itemData.reduce(
            (acc, cur) => {
                const isGroup = Object.prototype.hasOwnProperty.call(cur, 'group');

                if (isGroup) acc.group += 1;

                if (!isGroup && (cur as Record<string, any>)[0]['aria-selected']) {
                    acc.index = (cur as Record<string, any>)[0]['data-option-index'];
                    acc.padding = acc.group;
                }

                return acc;
            },
            { index: 0, padding: 0, group: 0 }
        );

        const gridRef = useResetCache(itemCount, scrollTo.index + scrollTo.padding);

        return (
            <div ref={ref}>
                <OuterElementContext.Provider value={props}>
                    <VariableSizeList
                        itemData={itemData}
                        height={getHeight() + 2 * LISTBOX_PADDING}
                        width="100%"
                        ref={gridRef}
                        outerElementType={OuterElementType}
                        innerElementType="ul"
                        itemSize={(idx) => getChildSize(itemData[idx])}
                        overscanCount={4}
                        itemCount={itemCount}
                    >
                        {renderRow}
                    </VariableSizeList>
                </OuterElementContext.Provider>
            </div>
        );
    }
);

const Autocomplete = ({
    options,
    value,
    label,
    onChange,
    variant,
    groupBy,
    maxItems = 8,
    disabled,
    virtualize,
    ...props
}: AutocompleteProps) => {
    const handleChange = (e: any, newValue: unknown) => {
        if (typeof newValue === 'string') onChange(newValue);
    };

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        trim: true
    });

    return (
        <StyledAutocomplete
            open
            value={value}
            options={options}
            disabled={disabled}
            disableListWrap
            onChange={handleChange}
            clearIcon={<CrossIcon fontSize="small" />}
            popupIcon={<ArrowDownIcon fontSize="medium" />}
            filterOptions={filterOptions}
            PopperComponent={PopperComponent}
            ListboxComponent={virtualize ? ListboxComponent : undefined}
            ListboxProps={virtualize ? ({ maxItems } as ListboxComponentProps) : undefined}
            groupBy={groupBy}
            renderInput={(params) => (
                <Input
                    {...params}
                    autoComplete="new-password" // Disable autocomplete and autofill
                    label={label}
                    variant={variant}
                    InputLabelProps={{
                        shrink: value ? true : undefined // Shrink label if input is filled
                    }}
                />
            )}
            renderOption={virtualize ? (listProps, option) => [listProps, option] : undefined}
            renderGroup={virtualize ? (params) => params : undefined}
            {...props}
        />
    );
};

export default Autocomplete;

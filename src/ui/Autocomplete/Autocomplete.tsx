import React from 'react';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grow from '@mui/material/Grow';
import { createFilterOptions, AutocompleteRenderOptionState } from '@mui/material/Autocomplete';
import ListSubheader from '@mui/material/ListSubheader';
import { StyledAutocomplete, StyledPopper } from './AutocompleteStyles';
import Input from '../Input/Input';
import Typography from '../Typography/Typography';
import {
    AutocompleteProps,
    AutocompleteOptionInterface,
    ListboxComponentProps,
    PopperComponentProps
} from './Autocomplete.d';
import { ArrowDownIcon, CrossIcon } from '../Icons/Icons';
import { PreloaderCircle } from '../Preloader/Preloader';

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

const PopperComponent = ({ children, ...props }: PopperComponentProps) => (
    <StyledPopper role={undefined} placement="bottom-start" transition disablePortal={false} {...props}>
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

const renderRow = ({ data, index, style }: ListChildComponentProps) => {
    const dataSet = data[index];
    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING,
        listStyle: 'none'
    };
    const currentOption: string = dataSet[1]?.label ? dataSet[1]?.label : dataSet[1];
    // Adds a group header
    if (Object.prototype.hasOwnProperty.call(dataSet, 'group')) {
        return (
            <ListSubheader key={dataSet.key} component="div" style={inlineStyle}>
                {dataSet.group}
            </ListSubheader>
        );
    }
    // Highlighting text in autocomplete components
    if (dataSet[3]) {
        const matches = match(currentOption, dataSet[2].inputValue);
        const parts = parse(currentOption, matches);

        return (
            <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
                <div>
                    {parts.map((part, idx) => (
                        <span
                            // eslint-disable-next-line react/no-array-index-key
                            key={idx}
                            style={{
                                fontWeight: part.highlight ? 'bolder' : 'normal'
                            }}
                        >
                            {part.text}
                        </span>
                    ))}
                </div>
            </Typography>
        );
    }

    return (
        <Typography component="li" {...dataSet[0]} noWrap style={inlineStyle}>
            {currentOption}
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
        const smUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
        const itemData: React.ReactChild[] = [];

        (children as React.ReactChild[]).forEach((item: React.ReactChild & { children?: React.ReactChild[] }) => {
            itemData.push(item);
            itemData.push(...(item.children || [])); // Adds group item
        });

        const itemCount = itemData.length;
        const itemSize = smUp ? 36 : 48;

        const getChildSize = (child: React.ReactChild) => {
            if (Object.prototype.hasOwnProperty.call(child, 'group')) return 48;

            return itemSize;
        };

        const getHeight = React.useMemo(() => {
            if (itemCount > maxItems) return maxItems * itemSize;

            return itemData.map(getChildSize).reduce((a, b) => a + b, 0);
        }, [itemCount, maxItems]);
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
                        height={getHeight + 2 * LISTBOX_PADDING}
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

const HighlightOption = (
    props: React.HTMLAttributes<HTMLLIElement>,
    option: unknown,
    { inputValue }: AutocompleteRenderOptionState
) => {
    const { label } = option as AutocompleteOptionInterface;
    const currentOption = Object.prototype.hasOwnProperty.call(option, 'label') ? label : (option as string);
    const matches = match(currentOption, inputValue);
    const parts = parse(currentOption, matches);

    return (
        <li {...props}>
            <div>
                {parts.map((part, idx) => (
                    <span
                        // eslint-disable-next-line react/no-array-index-key
                        key={idx}
                        style={{
                            fontWeight: part.highlight ? 'bolder' : 'normal'
                        }}
                    >
                        {part.text}
                    </span>
                ))}
            </div>
        </li>
    );
};

const Autocomplete = ({
    autoHighlight,
    disabled,
    filterOptions,
    forcePopupIcon = true,
    groupBy,
    highlight,
    inputProps,
    onChange,
    open,
    options = [],
    label,
    loading,
    maxItems = 8,
    renderOption,
    size = 'medium',
    value,
    virtualize,
    ...props
}: AutocompleteProps) => {
    const handleChange = (e: React.SyntheticEvent, newValue: unknown) => {
        if (onChange && typeof newValue === 'string') onChange(newValue);
    };

    const defineFilterOptions = createFilterOptions({
        matchFrom: 'start',
        trim: true
    });

    const defineRenderOption = React.useMemo(() => {
        if (renderOption) return renderOption;

        if (virtualize) {
            return (
                listProps: React.HTMLAttributes<HTMLLIElement>,
                option: unknown,
                state: AutocompleteRenderOptionState
            ) => [listProps, option, state, highlight];
        }

        if (highlight) return HighlightOption;

        return undefined;
    }, []);

    return (
        <StyledAutocomplete
            open={open}
            autoComplete
            autoHighlight={autoHighlight}
            disabled={disabled}
            forcePopupIcon={forcePopupIcon}
            groupBy={groupBy}
            options={options}
            loading={loading}
            size={size}
            value={value}
            onChange={handleChange}
            clearIcon={<CrossIcon fontSize="small" />}
            popupIcon={<ArrowDownIcon fontSize="medium" />}
            componentsProps={{ paper: { elevation: 6 } }}
            filterOptions={filterOptions || defineFilterOptions}
            PopperComponent={PopperComponent}
            ListboxComponent={virtualize ? ListboxComponent : undefined}
            ListboxProps={virtualize ? ({ maxItems } as ListboxComponentProps) : undefined}
            renderInput={(params) => (
                <Input
                    {...params}
                    {...inputProps}
                    autoComplete="new-password" // Disable autocomplete and autofill
                    label={label}
                    InputLabelProps={{
                        shrink: value ? true : undefined // Shrink label if input is filled
                    }}
                    InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                            <>
                                {loading && <PreloaderCircle color="inherit" size={size === 'medium' ? 20 : 16} />}
                                {params.InputProps.endAdornment}
                            </>
                        )
                    }}
                />
            )}
            renderOption={defineRenderOption}
            renderGroup={virtualize ? (params) => params : undefined}
            {...props}
        />
    );
};

export default Autocomplete;

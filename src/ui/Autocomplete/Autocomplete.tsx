import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { autocompleteClasses, createFilterOptions } from '@mui/material/Autocomplete';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListSubheader from '@mui/material/ListSubheader';
import Popper from '@mui/material/Popper';
import { useTheme, styled } from '@mui/material/styles';
import { VariableSizeList, ListChildComponentProps } from 'react-window';
import Typography from '@mui/material/Typography';

const LISTBOX_PADDING = 8; // px

const StyledPopper = styled(Popper)({
    [`& .${autocompleteClasses.listbox}`]: {
        boxSizing: 'border-box',
        '& ul': {
            padding: 0,
            margin: 0
        }
    }
});

function renderRow(props: ListChildComponentProps) {
    const { data, index, style } = props;
    const dataSet = data[index];
    const inlineStyle = {
        ...style,
        top: (style.top as number) + LISTBOX_PADDING
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
}

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
    const outerProps = React.useContext(OuterElementContext);

    return <div ref={ref} {...props} {...outerProps} />;
});

function useResetCache(data: number, scroll: number) {
    const ref = React.useRef<VariableSizeList>(null);

    React.useEffect(() => {
        if (ref.current !== null) {
            ref.current.scrollToItem(scroll, 'start');
            ref.current.resetAfterIndex(0, true);
        }
    }, [data]);

    return ref;
}

interface ListboxComponentProps extends React.HTMLAttributes<HTMLElement> {
    listHeight: number;
}

// Adapter for react-window
const ListboxComponent = React.forwardRef<HTMLDivElement, any>(
    ({ children, listHeight = 8, ...other }: ListboxComponentProps, ref) => {
        const theme = useTheme();
        const smUp = useMediaQuery(theme.breakpoints.up('sm'), { noSsr: true });
        // const { children, listHeight, ...other }: ListboxComponentProps = props;
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

        // console.log(props);

        const getHeight = () => {
            if (itemCount > listHeight) return listHeight * itemSize;

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
                <OuterElementContext.Provider value={other}>
                    <VariableSizeList
                        itemData={itemData}
                        height={getHeight() + 2 * LISTBOX_PADDING}
                        width="100%"
                        ref={gridRef}
                        outerElementType={OuterElementType}
                        innerElementType="ul"
                        itemSize={(index) => getChildSize(itemData[index])}
                        overscanCount={5}
                        itemCount={itemCount}
                    >
                        {renderRow}
                    </VariableSizeList>
                </OuterElementContext.Provider>
            </div>
        );
    }
);

interface AutocompleteProps {
    options: string[];
    onChange: (newValue: string) => void;
    id?: string;
    listHeight?: number;
    value?: string;
    /**
     * Group options
     * @param option
     * (option) => (option as string)[0].toUpperCase()
     */
    groupBy?: (option: unknown) => string;
    /**
     * getOptionLabel: {(option: any) => option.title}
     */
    getOptionLabel?: (option: any) => string;
    color?: string;
    disabled?: boolean;
}

export default function Virtualize({
    options,
    value,
    onChange,
    id = 'virtualize-autocomplete',
    groupBy,
    getOptionLabel,
    listHeight,
    disabled
}: AutocompleteProps) {
    // const handleChange = (e: any, newValue: string | null) => {
    const handleChange = (e: any, newValue: unknown) => {
        if (typeof newValue === 'string') onChange(newValue);
    };

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        trim: true
    });

    return (
        <Autocomplete
            id={id}
            size="small"
            value={value}
            options={options}
            disabled={disabled}
            disableListWrap
            onChange={handleChange}
            filterOptions={filterOptions}
            PopperComponent={StyledPopper}
            ListboxComponent={ListboxComponent}
            ListboxProps={{ listHeight } as ListboxComponentProps}
            groupBy={groupBy}
            getOptionLabel={getOptionLabel}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Word"
                    autoComplete="new-password" // disable autocomplete and autofill
                    InputLabelProps={{
                        shrink: true // fixed label
                    }}
                />
            )}
            renderOption={(props, option) => [props, option]}
            renderGroup={(params) => params}
        />
    );
}

import React from 'react';

import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StraightIcon from '@mui/icons-material/Straight';
import ExtensionIcon from '@mui/icons-material/Extension';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddIcon from '@mui/icons-material/Add';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Star from '@mui/icons-material/Star';
import StarBorder from '@mui/icons-material/StarBorder';

export const DragIcon = (props: SvgIconProps) => <DragIndicatorIcon fontSize="small" {...props} />;
export const ModeLightIcon = (props: SvgIconProps) => <LightModeIcon fontSize="small" {...props} />;
export const ModeDarkIcon = (props: SvgIconProps) => <ModeNightIcon fontSize="small" {...props} />;
export const DotsVerticalIcon = (props: SvgIconProps) => <MoreVertIcon fontSize="small" {...props} />;
export const ArrowThinUpIcon = (props: SvgIconProps) => <SvgIcon component={StraightIcon} {...props} />;
export const ArrowThinDownIcon = (props: SvgIconProps) => <StraightIcon fontSize="small" {...props} />;
export const ComponentIcon = (props: SvgIconProps) => <ExtensionIcon fontSize="small" {...props} />;
export const PCIcon = (props: SvgIconProps) => <LaptopMacIcon fontSize="small" {...props} />;
export const ArrowUpIcon = (props: SvgIconProps) => <ArrowDropUpIcon fontSize="small" {...props} />;
export const ArrowDownIcon = (props: SvgIconProps) => <ArrowDropDownIcon fontSize="small" {...props} />;
export const PlusIcon = (props: SvgIconProps) => <AddIcon {...props} />;
export const FavoriteIcon = (props: SvgIconProps) => <Favorite {...props} />;
export const FavoriteBorderIcon = (props: SvgIconProps) => <FavoriteBorder {...props} />;
export const StarIcon = (props: SvgIconProps) => <Star {...props} />;
export const StarBorderIcon = (props: SvgIconProps) => <StarBorder {...props} />;



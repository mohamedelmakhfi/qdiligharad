import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DownloadIcon from '@mui/icons-material/Download';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SearchIcon from "@mui/icons-material/Search";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import BrushIcon from '@mui/icons-material/Brush';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ZoomInMapIcon from '@mui/icons-material/ZoomInMap';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import LoopIcon from '@mui/icons-material/Loop';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import KeyIcon from '@mui/icons-material/Key';
import LabelIcon from '@mui/icons-material/Label';
import FolderIcon from '@mui/icons-material/Folder';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

export const icons = {
  EditIcon: (props) => <EditIcon className="blue" {...props} />,
  DeleteIcon: (props) => <DeleteIcon className="red" {...props} />,
  PriorityHighIcon: (props) => <PriorityHighIcon className="blue" {...props} />,
  DownloadIcon: (props) => <DownloadIcon sx={{ color: "black" }} {...props} />,
  MoreVertIcon: (props) => <MoreVertIcon sx={{ color: "black" }} {...props} />,
  QuestionMarkIcon: (props) => <QuestionMarkIcon sx={{ color: "gray" }} {...props} />,
  SearchIcon: (props) => <SearchIcon sx={{ color: "#242B59" }} {...props} />,
  Visibility: (props) => <Visibility sx={{ color: "#242B59" }} {...props} />,
  VisibilityOff: (props) => <VisibilityOff sx={{ color: "#242B59" }} {...props} />,
  BrushIcon: (props) => <BrushIcon sx={{ color: "#242B59" }} {...props} />,
  AddIcon: (props) => <AddIcon sx={{ color: "#242B59" }} {...props} />,
  RemoveIcon: (props) => <RemoveIcon sx={{ color: "#242B59" }} {...props} />,
  ZoomInMapIcon: (props) => <ZoomInMapIcon sx={{ color: "#242B59" }} {...props} />,
  ZoomOutMapIcon: (props) => <ZoomOutMapIcon sx={{ color: "#242B59" }} {...props} />,
  LoopIcon: (props) => <LoopIcon sx={{ color: "#242B59" }} {...props} />,
  RotateLeftIcon: (props) => <RotateLeftIcon sx={{ color: "#242B59" }} {...props} />,
  RotateRightIcon: (props) => <RotateRightIcon sx={{ color: "#242B59" }} {...props} />,
  FormatSizeIcon: (props) => <FormatSizeIcon sx={{ color: "#242B59" }} {...props} />,
  KeyIcon: (props) => <KeyIcon sx={{ color: "#242B59" }} {...props} />,
  LabelIcon: (props) => <LabelIcon sx={{ color: "#242B59" }} {...props} />,
  FolderIcon: (props) => <FolderIcon sx={{ color: "#242B59" }} {...props} />,
  FlipCameraAndroidIcon: (props) => <FlipCameraAndroidIcon sx={{ color: "#242B59" }} {...props} />,
  KeyboardDoubleArrowRightIcon: (props) => <KeyboardDoubleArrowRightIcon sx={{ color: "#242B59" }} {...props} />,
  KeyboardDoubleArrowLeftIcon: (props) => <KeyboardDoubleArrowLeftIcon sx={{ color: "#242B59" }} {...props} />,
};

export const DFIcon = (props) => {
  const { icon, ...otherProps } = props;

  // Ensure the icon exists in the icons object
  if (icons.hasOwnProperty(icon)) {
    const IconComponent = icons[icon];
    return <IconComponent {...otherProps} />;
  } else {
    console.warn(`Icon '${icon}' not found in icons.`);
    return null; // Or provide a fallback if needed
  }
};

export default DFIcon;

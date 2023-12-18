import LeftContentBlock from "./LeftContentBlock";
import RightContentBlock from "./RightContentBlock";
import SlideshowComponent from "./slideshow_right";
import Slideshow2 from "./slideshow_left";



import { ContentBlockProps } from "./types";

const ContentBlock = (props: ContentBlockProps) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  if (props.type === "slideshow") return <SlideshowComponent{...props} />;
  if (props.type === "slideshow2") return <Slideshow2 {...props} />;

  return null;
};

export default ContentBlock;

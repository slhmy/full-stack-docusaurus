import React, { useEffect } from "react";
import { Transformer } from "markmap-lib";
const { Markmap } = require("markmap-view");

const transformer = new Transformer();

const MarkmapRender: React.FC<{
  value?: string;
  style?: React.CSSProperties;
}> = (props) => {
  const svg = React.useRef<SVGSVGElement>();

  useEffect(() => {
    const mm = Markmap.create(svg.current);
    const { root } = transformer.transform(props.value || "");
    mm.setData(root);
    mm.fit();
  }, [props.value]);

  return (
    <React.Fragment>
      <svg className="flex-1" ref={svg} style={props.style} />
    </React.Fragment>
  );
};

export default MarkmapRender;

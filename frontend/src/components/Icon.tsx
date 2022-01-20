import {FC, useEffect, useRef} from "react";
import jdenticon from "jdenticon/standalone";

type Props = {
    value: string
    size: string | number
}

export const Jdenticon: FC<Props> = ({ value, size}) => {
    const icon = useRef(null);
    useEffect(() => {
        jdenticon.update(icon.current!, value);
    }, [value]);

    return (
        <div>
            <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
        </div>
    );
}

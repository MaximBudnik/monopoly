import {FC, useEffect, useRef, useState} from "react";
import {createAvatar} from '@dicebear/avatars';
import * as style from '@dicebear/miniavs';

type Props = {
    value: string
    size: number
}

export const AvatarIcon: FC<Props> = ({value, size}) => {
    const icon = useRef(null);
    const [svg, setSvg] = useState('')
    useEffect(() => {
        const svg = createAvatar(style, {
            seed: value,
            size
        });
        setSvg(svg)
    }, [value]);

    return (
        <div dangerouslySetInnerHTML={{__html: svg}}/>
    );
}

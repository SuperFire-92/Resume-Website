import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-java';
import 'prismjs/themes/prism-okaidia.css';

interface CodeDisplayProps {
    code: string;
    language: 'language-csharp' | 'language-javascript' | 'language-java'
    color: string;
    position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky' | undefined;
    left?: string | undefined;
    right?: string | undefined;
    top?: string | undefined;
    bottom?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
}

function CodeDisplay({code, language, color, position, left, right, top, bottom, width, height} : CodeDisplayProps) {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
    if (codeRef.current) {
        Prism.highlightElement(codeRef.current);
    }}, [code]);

    const formattedCode = code.trimStart();


    return (
        <pre style={{color: color, position: position, left: left, right: right, top: top, bottom: bottom, width: width, height: height, padding: '.8vw', overflow: 'scroll', whiteSpace: 'pre', fontFamily: 'monospace', scrollbarWidth: 'thin', scrollbarColor: '#1F1F1F'}}>
            <code ref={codeRef} className={language} style={{overflow: 'scroll', whiteSpace: 'pre', fontFamily: 'monospace', fontSize: '.8vw', lineHeight: '18px', tabSize: ''}}>
                {formattedCode}
            </code>
        </pre>
    );
}

export default CodeDisplay;
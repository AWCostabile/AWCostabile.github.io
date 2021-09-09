/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import SignaturePad, {
  ReactSignatureCanvasProps,
} from "react-signature-canvas";

type SignatureProps = Omit<ReactSignatureCanvasProps, "ref">;
type SignaturePadRef =
  | {
      api: SignaturePad;
      ready: true;
    }
  | {
      api: null;
      ready: false;
    };

export const useSignature = (onReady?: () => void) => {
  const signature = useRef<SignaturePadRef>({
    api: null,
    ready: false,
  });

  // Reset Signature Data
  const reset = useCallback(
    () => signature.current.ready && signature.current.api.clear(),
    []
  );

  // Save Signature Data
  const save = useCallback(
    () =>
      signature.current.ready
        ? signature.current.api.getTrimmedCanvas().toDataURL("image/png")
        : null,
    []
  );

  // Capture Signature Component Ref
  const setRef = useCallback((internalRef: SignaturePad | null) => {
    signature.current = {
      api: internalRef as SignaturePad,
      ready: !!(internalRef as SignaturePad),
    };

    if (signature.current.ready && onReady) {
      onReady();
    }
  }, []);

  useEffect(() => () => setRef(null), []);

  // Exposed Signature APIs
  return {
    Component: useMemo(
      (): React.FC<SignatureProps> => (props) => {
        return <SignaturePad {...props} ref={setRef} />;
      },
      []
    ),
    reset,
    save,
  };
};

// // import React, { Component } from 'react'
// // import ReactDOM from 'react-dom'
// // import SignaturePad from 'react-signature-canvas'

// // import styles from './styles.module.css'

// class App extends React.Component {
//   state = { trimmedDataURL: null };
//   sigPad = {};
//   clear = () => {
//     this.sigPad.clear();
//   };
//   trim = () => {
//     this.setState({
//       trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
//     });
//   };
//   render() {
//     let { trimmedDataURL } = this.state;
//     return (
//       <div className={styles.container}>
//         <div className={styles.sigContainer}>
//           <SignaturePad
//             canvasProps={{ className: styles.sigPad }}
//             ref={(ref) => {
//               this.sigPad = ref;
//             }}
//           />
//         </div>
//         <div>
//           <button className={styles.buttons} onClick={this.clear}>
//             Clear
//           </button>
//           <button className={styles.buttons} onClick={this.trim}>
//             Trim
//           </button>
//         </div>
//         {trimmedDataURL ? (
//           <img className={styles.sigImage} alt="" src={trimmedDataURL} />
//         ) : null}
//       </div>
//     );
//   }
// }
